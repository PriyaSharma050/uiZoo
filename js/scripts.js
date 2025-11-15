const moreBtn = document.querySelector('.more-btn');
const moreMenu = document.querySelector('.more-menu');

moreBtn.addEventListener('click', () => {
  moreMenu.style.display = moreMenu.style.display === 'block' ? 'none' : 'block';
});


const modeToggle = document.getElementById('modeIcon');
const logo = document.getElementById('logo');
const footerLogo = document.getElementById('footerLogoImage');
const githubIcon = document.getElementById('githubIcon');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if(body.classList.contains('light-mode')){
        modeToggle.src = '../assets/icons/mode/darkMode.png';
    } else {
        modeToggle.src = '../assets/icons/mode/lightMode.png';
    }

    if(body.classList.contains('light-mode')){
        logo.src = '../assets/logo/uiZooLogoLightMode.png';
    } else {
        logo.src = '../assets/logo/uiZooLogoDarkMode.png';
    }

    if(body.classList.contains('light-mode')){
        footerLogo.src = '../assets/logo/uiZooLogoLightMode.png';
    } else {
        footerLogo.src = '../assets/logo/uiZooLogoDarkMode.png';
    }

    if(body.classList.contains('light-mode')){
        githubIcon.src = '../assets/icons/githubLightModeIcon.png';
    } else {
        githubIcon.src = '../assets/icons/githubDarkModeIcon.png';
    }

    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }

});

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        modeToggle.src = '../assets/icons/mode/darkMode.png';
        logo.src = '../assets/logo/uiZooLogoLightMode.png'; 
        footerLogo.src = '../assets/logo/uiZooLogoLightMode.png'; 
        githubIcon.src = '../assets/icons/githubLightModeIcon.png';
    } else {
        body.classList.remove('light-mode');
        modeToggle.src = '../assets/icons/mode/lightMode.png';
        logo.src = '../assets/logo/uiZooLogoDarkMode.png'; 
        footerLogo.src = '../assets/logo/uiZooLogoDarkMode.png'; 
        githubIcon.src = '../assets/icons/githubDarkModeIcon.png';
    }
});

const searchBox = document.getElementById('searchBox');
searchBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const query = searchBox.value.trim();
        if (query) {
            window.location.href = `elements.html?search=${encodeURIComponent(query)}`;
        }
    }
});

// Contact Us
document.querySelectorAll("form").forEach((form) => {
    const textarea = form.querySelector("textarea");
    if (textarea) {
        textarea.addEventListener("keydown", function (e) {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                form.submit();
            }
        });
    }
});
