    document.addEventListener('DOMContentLoaded', function() {
        let currentLanguage = 'en';
        const enButton = document.getElementById('en-button');
        const arButton = document.getElementById('ar-button');
        const categoryContainer = document.getElementById('category-container');
        const searchInput = document.getElementById('search-input');
        
        // Get the category from the URL or another source
        const category = new URLSearchParams(window.location.search).get('category') || 'Vehicles';

        // Function to switch language and update button visibility
        function switchLanguage(language) {
            currentLanguage = language;
            enButton.style.display = language === 'en' ? 'none' : 'inline';
            arButton.style.display = language === 'ar' ? 'none' : 'inline';
            enButton.classList.toggle('active', language === 'en');
            arButton.classList.toggle('active', language === 'ar');
            loadCategories();
        }

        // Event listeners for language buttons
        enButton.addEventListener('click', () => switchLanguage('en'));
        arButton.addEventListener('click', () => switchLanguage('ar'));

        // Function to load category links
        async function loadCategoryLinks() {
            try {
                const response = await fetch('categoryLinks.json');
                return await response.json();
            } catch (error) {
                console.error('Error loading category links:', error);
                return {};
            }
        }

        // Function to load categories
        async function loadCategories() {
            try {
                const [categoryLinksData, response] = await Promise.all([
                    loadCategoryLinks(),
                    fetch(`${category}.json`) // Fetch the data file based on the category
                ]);
                const data = await response.json();
                const filteredData = data.filter(item => item.l1 === category);

                // Sort by priority_for_l2 (assuming higher priority has a lower value)
                filteredData.sort((a, b) => a.priority_for_l2 - b.priority_for_l2);
                
                categoryContainer.innerHTML = '';
                const addedTitles = new Set();

                const categoryLinks = categoryLinksData[category] || {};

                filteredData.forEach(item => {
                    const categoryName = currentLanguage === 'en' ? item.cat_english_name : item.cat_arabic_name;

                    if (!addedTitles.has(categoryName)) {
                        addedTitles.add(categoryName);

                        const categoryLink = categoryLinks[item.cat_english_name] || '#';

                        const categoryDiv = `
                            <div class="col-md-4 col-lg-3">
                                <a href="${categoryLink}?lang=${currentLanguage}" class="item">${categoryName}</a>
                            </div>`;
                        
                        categoryContainer.innerHTML += categoryDiv;
                    }
                });
            } catch (error) {
                console.error('Error loading categories:', error);
            }
        }

        // Initialize the language and button visibility on page load
        switchLanguage('en'); // Set default language to English
    });
