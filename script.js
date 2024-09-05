document.addEventListener('DOMContentLoaded', function() {
    const enButton = document.getElementById('en-button');
    const arButton = document.getElementById('ar-button');
    
    let currentLanguage = 'en';

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

    // Function to load categories
    async function loadCategories() {
        try {
            const response = await fetch('VAS-SHEET.json');
            const data = await response.json();
            const filteredData = data.filter(item => item.l1 === 'Electronics & Home Appliances');
            
            // Sort by priority_for_l2 (assuming higher priority has a lower value)
            filteredData.sort((a, b) => a.priority_for_l2 - b.priority_for_l2);
            
            categoryContainer.innerHTML = '';
            const addedTitles = new Set();

            const categoryLinks = {
                "TV & Video": "TV_and_Video.html",
                "Home Audio & Speakers": "Home_Audio_and_Speakers.html",
                "Kitchen Equipment & Appliances": "Kitchen_Equipment_and_Appliances.html",
                "AC, Cooling & Heating": "AC,_Cooling_and_Heating.html",
                "Cleaning Appliances": "Cleaning_Appliances.html",
                "Washing Machines & Dryers": "Washing_Machines_and_Dryers.html",
                "Laptops, Tablets, Computers": "Laptops,_Tablets,_Computers.html",
                "Computer Parts & IT Accessories": "Computer_Parts_and_IT_Accessories.html",
                "Cameras": "Cameras.html",
                "Gaming Consoles & Accessories": "Gaming_Consoles_and_Accessories.html",
                "Video Games": "Video_Games.html",
                "Other Home Appliances": "Other_Home_Appliances.html"
            };

            filteredData.forEach(item => {
                const categoryName = currentLanguage === 'en' ? item.cat_english_name : item.cat_arabic_name;

                // Add condition here
                if (item.cat_english_name !== item.l1 && !addedTitles.has(categoryName)) {
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
