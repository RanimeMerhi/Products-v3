document.addEventListener('DOMContentLoaded', function() {
    const enButton = document.getElementById('en-button');
    const arButton = document.getElementById('ar-button');
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
    // Function to set language display
    function setLanguage(lang) {
        if (lang === 'ar') {
            document.querySelectorAll('.en-title').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.ar-title').forEach(el => el.style.display = 'block');
        } else {
            document.querySelectorAll('.en-title').forEach(el => el.style.display = 'block');
            document.querySelectorAll('.ar-title').forEach(el => el.style.display = 'none');
        }
    }

    // Set default language based on local storage or default to English
    const userLang = localStorage.getItem('language') || 'en';
    setLanguage(userLang);

    // Event listeners for language buttons
    enButton.addEventListener('click', () => {
        setLanguage('en');
        localStorage.setItem('language', 'en');
    });

    arButton.addEventListener('click', () => {
        setLanguage('ar');
        localStorage.setItem('language', 'ar');
    });
    switchLanguage('en'); // Set default language to English
});
