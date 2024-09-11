// productHandler.js
export function initializeProductPage(l1Category, l2Category) {
    document.addEventListener('DOMContentLoaded', function() {
        const productsContainer = document.getElementById('products');
        const searchInput = document.getElementById('search-input');
        const enButton = document.getElementById('en-button');
        const arButton = document.getElementById('ar-button');
        let currentLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Retrieve language from localStorage

        function getLabel(key) {
            const labels = {
                en: {
                    description: 'Description',
                    price: 'Price'
                },
                ar: {
                    description: 'الوصف',
                    price: 'السعر'
                }
            };
            return labels[currentLanguage][key];
        }

        function renderProducts(products) {
            productsContainer.innerHTML = '';
            products.forEach(product => {
                const productName = currentLanguage === 'en' ? product.product_package_name_en : product.product_package_name_ar;
                const productDesc = currentLanguage === 'en' ? product.product_package_descr_en : product.product_package_descr_ar;
                const descriptionLabel = getLabel('description');
                const priceLabel = getLabel('price');

                const productCard = `
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="product-card">
                            <h3>${product.l2}</h3>
                            <p>${productName}</p>
                            <ul class="package-list">
                                <li><span>${descriptionLabel}:</span> ${productDesc}</li>
                                <li><span class="price-label">${priceLabel}:</span> <span class="price">${product.price}</span></li>
                            </ul>
                        </div>
                    </div>
                `;
                productsContainer.innerHTML += productCard;
            });
        }

        function fetchAndDisplayProducts() {
            fetch('VAS-SHEET.json')
                .then(response => response.json())
                .then(data => {
                    let products = data.filter(product => product.l1 === l1Category && product.l2 === l2Category);
                    const hasPlace1AdProduct = products.some(product => product.product_package_name_en.includes('Place 1 Ad for'));

                    // If no such product exists, add "Place 1 Ad for free"
                    if (!hasPlace1AdProduct) {
                        products.push({
                            l1: l1Category,
                            l2: l2Category,
                            product_package_name_en: 'Place 1 Ad for 30 days',
                            product_package_name_ar: 'انشر إعلان واحد لمدة 30 يوم',
                            product_package_descr_en: 'I only have one Item to sell',
                            product_package_descr_ar: 'لدي غرض واحد للبيع',
                            price: 'Free'
                        });
                    }

                    const generalProducts = data.filter(product => product.l1 === l1Category && product.l2 === 'GENERAL');
                    const existingProductNames = new Set(products.map(product => `${product.l2}_${product.product_package_name_en}`));
                    generalProducts.forEach(generalProduct => {
                        const productKey = `${l2Category}_${generalProduct.product_package_name_en}`;
                        if (!existingProductNames.has(productKey)) {
                            products.push({
                                ...generalProduct,
                                l2: l2Category
                            });
                            existingProductNames.add(productKey);
                        }
                    });

                    const uniqueProducts = [];
                    const uniqueKeys = new Set();

                    products.forEach(product => {
                        const productKey = `${product.l2}_${product.product_package_name_en}`;
                        if (!uniqueKeys.has(productKey)) {
                            uniqueProducts.push(product);
                            uniqueKeys.add(productKey);
                        }
                    });

                    // Define an ordering map for product types
                    const productTypeOrder = {
                        'ad_limit_bump': 1,
                        'featured_ad': 2,
                        'auto_refresh_ad': 3,
                        'elite_ad': 4,
                        'free_ad': 5 // Give free ads the lowest priority
                    };

                    // Sort products based on product_type order
                    uniqueProducts.sort((a, b) => {
                        const typeA = productTypeOrder[a.product_type] || 999; // Default to a high number if not found
                        const typeB = productTypeOrder[b.product_type] || 999;
                        return typeA - typeB;
                    });

                    // Render products
                    renderProducts(uniqueProducts);

                    searchInput.addEventListener('input', function() {
                        const searchQuery = this.value.toLowerCase();
                        const filteredProducts = uniqueProducts.filter(product => {
                            const name = (currentLanguage === 'en') ? product.product_package_name_en : product.product_package_name_ar;
                            return name.toLowerCase().includes(searchQuery);
                        });
                        renderProducts(filteredProducts);
                    });
                });
        }

        function updateLanguageButtons() {
            if (currentLanguage === 'ar') {
                enButton.style.display = 'inline-block';
                arButton.style.display = 'none';
            } else {
                enButton.style.display = 'none';
                arButton.style.display = 'inline-block';
            }
        }

        function switchLanguage(language) {
            currentLanguage = language;
            localStorage.setItem('selectedLanguage', language); // Store selected language in localStorage
            updateLanguageButtons();
            fetchAndDisplayProducts();
        }

        enButton.addEventListener('click', () => switchLanguage('en'));
        arButton.addEventListener('click', () => switchLanguage('ar'));

        // Initial setup
        updateLanguageButtons();
        fetchAndDisplayProducts();
    });
}
