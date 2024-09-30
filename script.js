document.addEventListener('DOMContentLoaded', function() {
    const enButton = document.getElementById('en-button');
    const arButton = document.getElementById('ar-button');
    const backButton = document.querySelector('.back-button');

    // Function to switch language and update button visibility
    function switchLanguage(language) {
        localStorage.setItem('selectedLanguage', language);
        updateButtonVisibility(language);
        setLanguage(language);
        updateBackButtonLink(language);
    }

    // Function to update button visibility
    function updateButtonVisibility(language) {
        console.log(`Updating button visibility for language: ${language}`);
        enButton.style.display = language === 'en' ? 'none' : 'inline';
        arButton.style.display = language === 'ar' ? 'none' : 'inline';
        enButton.classList.toggle('active', language === 'en');
        arButton.classList.toggle('active', language === 'ar');
    }

    // Function to set language display
    function setLanguage(lang) {
        console.log(`Setting language display to: ${lang}`);
        if (lang === 'ar') {
            document.querySelectorAll('.en-title').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.ar-title').forEach(el => el.style.display = 'block');
        } else {
            document.querySelectorAll('.en-title').forEach(el => el.style.display = 'block');
            document.querySelectorAll('.ar-title').forEach(el => el.style.display = 'none');
        }
    }

    // Function to update back button link
    function updateBackButtonLink(lang) {
        if (lang === 'ar') {
            backButton.textContent = '← العودة'; // Set Arabic text for back button
            backButton.href = 'home.html?lang=ar';
        } else {
            backButton.textContent = '← Back'; // Set English text for back button
            backButton.href = 'home.html?lang=en';
        }
    }

    // Event listeners for language buttons
    enButton.addEventListener('click', () => {
        console.log('English button clicked');
        switchLanguage('en');
    });
    arButton.addEventListener('click', () => {
        console.log('Arabic button clicked');
        switchLanguage('ar');
    });

    // Initialize the language and button visibility on page load
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Default to English
    console.log(`Initializing page with language: ${savedLanguage}`);
    switchLanguage(savedLanguage);
});