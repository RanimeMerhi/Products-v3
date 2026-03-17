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
    "Home Decoration & Accessories": "الديكورات المنزل المنزلية والاكسسوارات",
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
    document.addEventListener('DOMContentLoaded', function () {
        const productsContainer = document.getElementById('products');
        const searchInput = document.getElementById('search-input');
        const enButton = document.getElementById('en-button');
        const arButton = document.getElementById('ar-button');
        const backButton = document.querySelector('.back-button');

        let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
        let allProducts = [];

        function getLabel(key) {
            const labels = {
                en: {
                    back: '← Back',
                    search: 'Search...',
                    noResults: 'No products found.',
                    featuredText: 'Ad will appear in the featured Ads section',
                    refreshText: 'Your ad will be refreshed automatically',
                    eliteText: 'Your ad will get premium visibility',
                    freeText: 'Basic ad package',
                    defaultText: 'Special package for your listing'
                },
                ar: {
                    back: '← العودة',
                    search: 'ابحث...',
                    noResults: 'لم يتم العثور على منتجات.',
                    featuredText: 'سيظهر الإعلان في قسم الإعلانات المميزة',
                    refreshText: 'سيتم تحديث إعلانك تلقائياً',
                    eliteText: 'سيحصل إعلانك على ظهور مميز',
                    freeText: 'باقة إعلان أساسية',
                    defaultText: 'باقة مميزة لإعلانك'
                }
            };
            return labels[currentLanguage][key];
        }

        function getCategoryHeading(category) {
            return currentLanguage === 'en'
                ? category
                : (categoryTranslations[category] || category);
        }

        function getExtraText(productType) {
            const map = {
                featured_ad: getLabel('featuredText'),
                auto_refresh_ad: getLabel('refreshText'),
                elite_ad: getLabel('eliteText'),
                free_ad: getLabel('freeText'),
                ad_limit_bump: getLabel('freeText')
            };

            return map[productType] || getLabel('defaultText');
        }

    function formatPrice(value) {
        if (value === null || value === undefined || value === '' || value === 'Free') {
            return currentLanguage === 'en' ? 'Free' : 'مجاني';
        }

        const num = parseFloat(value);

        if (isNaN(num)) {
            return `$${value}`;
        }

        return `$${num.toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1')}`;
    }

       function getFinalPrice(product) {
    return (product.final_price && Number(product.final_price) > 0)
        ? product.final_price
        : product.price;
}

function formatPrice(value) {
    if (value === null || value === undefined || value === '' || value === 'Free') {
        return currentLanguage === 'en' ? 'Free' : 'مجاني';
    }

    return `$${String(value).trim()}`;
}

        function renderProducts(products) {
    productsContainer.innerHTML = '';

    if (!products.length) {
        productsContainer.innerHTML = `
            <div class="col-12 text-center">
                <p>${getLabel('noResults')}</p>
            </div>
        `;
        return;
    }

    products.forEach(product => {
        const productName = currentLanguage === 'en'
            ? (product.product_package_name_en || '')
            : (product.product_package_name_ar || product.product_package_name_en || '');

        const productDesc = currentLanguage === 'en'
            ? (product.product_package_descr_en || '')
            : (product.product_package_descr_ar || product.product_package_descr_en || '');

        const productPrice = getFinalPrice(product);
        const formattedPrice = formatPrice(productPrice);

        const productCard = `
            <div class="product-item">
                <div class="featured-card">
                    <div class="price-badge">${formattedPrice}</div>
                    <h3 class="card-title">${productName}</h3>
                    <p class="card-duration">${productDesc}</p>
                </div>
            </div>
        `;

        productsContainer.innerHTML += productCard;
    });
}

        function applySearch() {
            const searchQuery = (searchInput.value || '').toLowerCase().trim();

            const filteredProducts = allProducts.filter(product => {
                const name = currentLanguage === 'en'
                    ? (product.product_package_name_en || '')
                    : (product.product_package_name_ar || product.product_package_name_en || '');

                return name.toLowerCase().includes(searchQuery);
            });

            renderProducts(filteredProducts);
        }

        function fetchAndDisplayProducts() {
            fetch('VAS-SHEET.json')
                .then(response => response.json())
                .then(data => {
                    let products = data.filter(product => product.l1 === l1Category && product.l2 === l2Category);

                    const hasPlace1AdProduct = products.some(product =>
                        (product.product_package_name_en || '').includes('Place 1 Ad for')
                    );

                    if (!hasPlace1AdProduct) {
                        products.push({
                            l1: l1Category,
                            l2: l2Category,
                            product_package_name_en: 'Place 1 Ad for 30 days',
                            product_package_name_ar: 'انشر إعلان واحد لمدة 30 يوم',
                            product_package_descr_en: 'I only have one item to sell',
                            product_package_descr_ar: 'لدي غرض واحد للبيع',
                            price: 'Free',
                            product_type: 'ad_limit_bump'
                        });
                    }

                    const generalProducts = data.filter(product =>
                        product.l1 === l1Category && product.l2 === 'GENERAL'
                    );

                    const existingProductNames = new Set(
                        products.map(product => `${product.l2}_${product.product_package_name_en}`)
                    );

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
                            product.final_price = getFinalPrice(product);
                            uniqueProducts.push(product);
                            uniqueKeys.add(productKey);
                        }
                    });

                    const productTypeOrder = {
                        ad_limit_bump: 1,
                        featured_ad: 2,
                        auto_refresh_ad: 3,
                        elite_ad: 4,
                        free_ad: 5
                    };

                    uniqueProducts.sort((a, b) => {
                        if (a.product_type === 'ad_limit_bump' && getFinalPrice(a) === 'Free') return -1;
                        if (b.product_type === 'ad_limit_bump' && getFinalPrice(b) === 'Free') return 1;

                        const typeA = productTypeOrder[a.product_type] || 999;
                        const typeB = productTypeOrder[b.product_type] || 999;

                        return typeA - typeB;
                    });

                    allProducts = uniqueProducts;
                    applySearch();
                })
                .catch(error => {
                    console.error('Error loading products:', error);
                    productsContainer.innerHTML = `
                        <div class="col-12 text-center">
                            <p>Failed to load products.</p>
                        </div>
                    `;
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

        function updateSearchPlaceholder() {
            searchInput.placeholder = getLabel('search');
        }

        function updateDocumentDirection() {
            if (currentLanguage === 'ar') {
                document.documentElement.setAttribute('dir', 'rtl');
                document.documentElement.setAttribute('lang', 'ar');
            } else {
                document.documentElement.setAttribute('dir', 'ltr');
                document.documentElement.setAttribute('lang', 'en');
            }
        }

        function switchLanguage(language) {
            currentLanguage = language;
            localStorage.setItem('selectedLanguage', language);

            updateLanguageButtons();
            updateBackButtonText();
            updateSearchPlaceholder();
            updateDocumentDirection();
            applySearch();
        }

        enButton.addEventListener('click', () => switchLanguage('en'));
        arButton.addEventListener('click', () => switchLanguage('ar'));

        searchInput.addEventListener('input', applySearch);

        updateLanguageButtons();
        updateBackButtonText();
        updateSearchPlaceholder();
        updateDocumentDirection();
        fetchAndDisplayProducts();
    });
}