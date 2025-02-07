// langscript.js
const categoryTranslations = {
    "Musical Instruments": "آلات موسيقية",
    "Books": "كتب",
    "Movies & Music": "أفلام وموسيقى",
    "Games & Hobbies": "ألعاب وهوايات",
    "Tickets & Vouchers": "تذاكر وقسائم",
    "Stationery & Study Tools": "قرطاسية وأدوات الدراسة",
    "Other Items": "أغراض أخرى",
    "Home Improvements & Repair": "الصيانة والتحسين المنزلي",
    "Personal Services": "خدمات شخصية",
    "Corporate Services": "خدمات الشركات",
    "Vehicle Repair Services": "خدمات المركبات",
    "Transportation & logistics Services": "النقل والخدمات اللوجستية",
    "IT, Design & Printing Services": "خدمات تكنولوجيا المعلومات والتصميم والطباعة",
    "Other Services": "خدمات أخرى",
    "Cars for Rent": "سيارات للإيجار",
    "Living Room": "غرفة الجلوس",
    "Bedroom": "غرفة نوم",
    "Dining Room": "غرفة سفرة",
    "Kitchen & Kitchenware": "مطبخ",
    "Bathroom": "الحمام",
    "Home Decoration & Accessories": "الديكورات المنزلية والاكسسوارات",
    "Garden & Outdoor": "حديقة و أماكن خارجية",
    "Other Home Furniture & Decor": "أثاث منزل وديكورات أخرى",
    "Animal & Pet accessories": "مستلزمات الحيوانات",
    "Dogs": "كلاب",
    "Cats": "قطط",
    "Birds": "طيور",
    "Livestock": "مواشي",
    "Horses": "خيول",
    "Fish": "أسماك",
    "Other Animals & Pets": "حيوانات أليفة أخرى",
    "Commercial Restaurants Equipment": "معدات المطاعم التجارية",
    "Industrial & Construction Equipment": "المعدات الصناعية ومعدات البناء",
    "Medical & Wellbeing Equipment": "المعدات الطبية والعناية بالصحة",
    "Retail & Shop Equipement": "معدات المحلات والمتاجر",
    "Businesses & Shops Liquidation": "تصفية الشركات والمتاجر",
    "Other Business & Industrial": "معدات تجارية وصناعية أخرى",
    "Grocery & food products": "البقالة والمنتجات الغذائية",
    "TV & Video": "تلفزيونات و فيديو",
    "Home Audio & Speakers": "أجهزة صوتية، سماعات ومكبرات صوت",
    "Kitchen Equipment & Appliances": "أدوات وأجهزة المطبخ",
    "AC, Cooling & Heating": "أجهزة تكييف وتدفئة",
    "Cleaning Appliances": "أجهزة تنضيف",
    "Washing Machines & Dryers": "غسالات و نشافات",
    "Laptops, Tablets, Computers": "لابتوب، تابلت و كمبيوتر",
    "Computer Parts & IT Accessories": "قطع الكمبيوتر وأجهزة إتصالات",
    "Cameras": "كاميرات وتصوير",
    "Gaming Consoles & Accessories": "أجهزة ألعاب الفيديو والإكسسوارات",
    "Video Games": "ألعاب الفيديو",
    "Other Home Appliances": "أجهزة منزلية أخرى",
    "Job Seekers": "الباحثين عن عمل",
    "Jobs Available": "وظائف شاغرة",
    "Cars for Sale": "سيارات للبيع",
    "All Vehicles Accessories": "أكسسوارات للمركبات",
    "All Vehicles Spare Parts": "قطع غيار للمركبات",
    "Number Plates": "أرقام لوحات",
    "Motorcycles & ATVs": "دراجات نارية ورباعية",
    "Trucks & Buses": "باصات ومركبات ثقيلة",
    "Boats": "قوارب",
    // "Others Vehicles": "مركبات أخرى",
    "Apartments & Villas For Sale": "شقق وفلل للبيع",
    "Apartments & Villas For Rent": "شقق وفلل للإيجار",
    "Commercials For Sale": "عقارات تجارية للبيع",
    "Commercials For Rent": "عقارات تجارية للإيجار",
    "Lands for Sale": "اراضي للبيع",
    "Lands for Rent": "أراضي للإيجار",
    "Chalets & Cabins For Sale": "شاليهات وكبائن للبيع",
    "Chalets & Cabins For Rent": "شاليهات وكبائن للإيجار",
    "Buildings & Multiple Units": "ابنية ووحدات متعددة",
    "Rooms for Rent": "غرف للإيجار",
    "Mobile Phones": "موبايلات",
    "Mobile Accessories": "اكسسورات موبايلات",
    "Mobile Numbers": "أرقام الهواتف المحمولة",
    "Solar panels & Renewable energy": "الألواح الشمسية والطاقة المتجدّدة",
    "Generators": "المولّدات",
    "Supplements & Nutrition": "المكملّات والتغذية",
    "Smart Watches": "الساعات الذكية",
    "Clothing for Men": "ملابس للرجال",
    "Accessories for Men": "اكسسوارات للرجال",
    "Clothing for Women": "ملابس للنساء",
    "Accessories for Women": "اكسسوارات للنساء",
    "Make-up & Cosmetics": "المكياج ومستحضرات التجميل",
    "Jewelry & Faux-Bijoux": "مجوهرات و فوبجو",
    "Watches": "ساعات",
    "Luggage": "حقائب السفر",
    "Toys for kids": "ألعاب الأطفال",
    "Strollers & Seats": "المقاعد وعربيات الأطفال",
    "Kids & Babies Clothing": "ملابس الأطفال",
    "Cribs & Bedroom Furniture": "أسرة وأثاث لغرف الأطفال",
    "Bathing Accessories": "لوازم الحمام",
    "Feeding & Nursing": "تغذية الأطفال",
    "Safety & Monitors": "لوازم الأمان",
    "Other for Kids & Babies": "لوازم أطفال أخرى",
    "Bicycles & Accessories": "دراجات هوائية و لوازمها",
    "Outdoors & Camping": "معدات التخييم و الطبيعة",
    "Gym, Fitness & Fighting sports": "لوازم النادي,لياقة بدنية و والرياضات القتال",
    "Ball Sports": "رياضات الكرة",
    "Billiard & Similar Games": "بلياردو وألعاب مماثلة",
    "Ski & Winter Sports": "تزلج ورياضات الشتاء",
    "Water Sports & Diving": "الرياضات المائية والغطس",
    "Tennis & Racket Sports": "تنس، كرة الطاولة والريشة",
    "Other Sports": "الرياضات الاخرى",
    "Antiques & Collectibles": "تحف ومقتنيات"
};

export function initializeProductPage(l1Category, l2Category) {
    document.addEventListener('DOMContentLoaded', function() {
        const productsContainer = document.getElementById('products');
        const searchInput = document.getElementById('search-input');
        const enButton = document.getElementById('en-button');
        const arButton = document.getElementById('ar-button');
        const backButton = document.querySelector('.back-button'); // Select the back button
        let currentLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Retrieve language from localStorage

        function getLabel(key) {
            const labels = {
                en: {
                    description: 'Description',
                    price: 'Price',
                    back: '← Back' // English text for the back button
                },
                ar: {
                    description: 'الوصف',
                    price: 'السعر',
                    back: '← العودة' // Arabic text for the back button
                }
            };
            return labels[currentLanguage][key];
        }

        function getCategoryHeading(l2Category) {
            if (currentLanguage === 'en') {
                return l2Category;
            } else {
                return categoryTranslations[l2Category] || l2Category;
            }
        }

        function renderProducts(products) {
            productsContainer.innerHTML = '';
            products.forEach(product => {
                const productName = currentLanguage === 'en' ? product.product_package_name_en : product.product_package_name_ar;
                const productDesc = currentLanguage === 'en' ? product.product_package_descr_en : product.product_package_descr_ar;
                const descriptionLabel = getLabel('description');
                const priceLabel = getLabel('price');
        
                // Check if final_price is available, otherwise use price
                const productPrice = product.final_price && product.final_price > 0 ? product.final_price : product.price;
        
                const productCard = `
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="product-card">
                            <h3>${getCategoryHeading(product.l2)}</h3>
                            <p>${productName}</p>
                            <ul class="package-list">
                                <li><span>${descriptionLabel}:</span> ${productDesc}</li>
                                <li><span class="price-label">${priceLabel}:</span> <span class="price">${productPrice}</span></li>
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
                            price: 'Free',
                            product_type: 'ad_limit_bump'
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
                            // Check for discounted_price and assign value accordingly
                            if (product.discounted_price !== null && product.discounted_price !== undefined) {
                                product.final_price = product.discounted_price;
                            } else if (product.price !== null && product.price !== undefined) {
                                product.final_price = product.price;
                            } else {
                                product.final_price = 'Free'; // Assign 'Free' if both prices are null
                            }
                    
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
                        'free_ad': 5
                    };
        
                    // Sort products based on product_type order and price
                    uniqueProducts.sort((a, b) => {
                        if (a.product_type === 'ad_limit_bump' && a.price === 'Free') return -1;
                        if (b.product_type === 'ad_limit_bump' && b.price === 'Free') return 1;
        
                        const typeA = productTypeOrder[a.product_type] || 999;
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

        function updateBackButtonText() {
            backButton.textContent = getLabel('back');
        }

        function switchLanguage(language) {
            currentLanguage = language;
            localStorage.setItem('selectedLanguage', language);
            updateLanguageButtons();
            updateBackButtonText();
            fetchAndDisplayProducts();
        }

        enButton.addEventListener('click', () => switchLanguage('en'));
        arButton.addEventListener('click', () => switchLanguage('ar'));

        // Initial setup
        updateLanguageButtons();
        updateBackButtonText();
        fetchAndDisplayProducts();
    });
}