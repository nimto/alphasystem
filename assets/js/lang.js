const VALID_LANGUAGES = ['ko', 'en', 'ja', 'zh-CN', 'zh-TW'];
const LANG_FLAGS = {
    'ko': 'kr',
    'en': 'us',
    'ja': 'jp',
    'zh-CN': 'cn',
    'zh-TW': 'tw'
};
const LANG_NAMES = {
    'ko': '한국어',
    'en': 'English',
    'ja': '日本語',
    'zh-CN': '简体中文',
    'zh-TW': '繁體中文'
};
const DEFAULT_LANG = 'ko';

// Make functions global for components.js
window.toggleLanguageDropdown = function () {
    const dropdown = document.getElementById('lang-dropdown');
    const arrow = document.getElementById('lang-arrow');

    if (dropdown.classList.contains('invisible')) {
        // Open
        dropdown.classList.remove('invisible', 'opacity-0', '-translate-y-2');
        arrow.classList.add('rotate-180');
    } else {
        // Close
        dropdown.classList.add('invisible', 'opacity-0', '-translate-y-2');
        arrow.classList.remove('rotate-180');
    }
}

window.closeLanguageDropdown = function () {
    const dropdown = document.getElementById('lang-dropdown');
    const arrow = document.getElementById('lang-arrow');
    if (dropdown && !dropdown.classList.contains('invisible')) {
        dropdown.classList.add('invisible', 'opacity-0', '-translate-y-2');
        arrow.classList.remove('rotate-180');
    }
}

async function loadLanguage(lang) {
    if (!VALID_LANGUAGES.includes(lang)) lang = DEFAULT_LANG;

    try {
        const response = await fetch(`assets/i18n/${lang}.json`);
        if (!response.ok) throw new Error(`Could not load language file: ${lang}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading language:', error);
        return null;
    }
}

function updateContent(langData) {
    if (!langData) return;

    const elements = document.querySelectorAll('[data-lang-key]');

    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        // Handle nested keys (e.g. "home.title")
        const keys = key.split('.');
        let value = langData;

        for (const k of keys) {
            if (value === undefined || value === null) break;
            value = value[k];
        }

        if (value) {
            // Check if element is an input with placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = value;
                }
            } else {
                // For normal text elements
                // Use innerHTML to allow simple HTML tags like <br>
                element.innerHTML = value;
            }
        }
    });

    // Update <html lang="..."> attribute
    document.documentElement.lang = localStorage.getItem('alpha_lang') || DEFAULT_LANG;
}

async function setLanguage(lang) {
    const data = await loadLanguage(lang);
    if (data) {
        updateContent(data);
        localStorage.setItem('alpha_lang', lang);

        // Update selector UI if it exists (Legacy)
        const selector = document.getElementById('lang-selector');
        if (selector) {
            selector.value = lang;
        }

        // Update Custom Dropdown UI
        const flagIcon = document.getElementById('lang-flag'); // Legacy support

        // New Custom UI Elements
        const currentLangFlag = document.getElementById('current-lang-flag');
        const currentLangText = document.getElementById('current-lang-text');

        const flagCode = LANG_FLAGS[lang] || 'kr';

        // Update new UI
        if (currentLangFlag) {
            currentLangFlag.src = `assets/img/flags/${flagCode}.png`;
            currentLangFlag.alt = lang;
        }
        if (currentLangText) {
            currentLangText.textContent = LANG_NAMES[lang] || lang;
        }

        // Update legacy flag if still exists
        if (flagIcon) {
            flagIcon.src = `assets/img/flags/${flagCode}.png`;
            flagIcon.alt = lang;
        }
    }
}

// Custom Dropdown Logic
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('lang-dropdown');
    const arrow = document.getElementById('lang-arrow');

    if (dropdown) {
        if (dropdown.classList.contains('invisible')) {
            // Open
            dropdown.classList.remove('invisible', 'opacity-0', '-translate-y-2');
            if (arrow) arrow.style.transform = 'rotate(180deg)';
        } else {
            // Close
            dropdown.classList.add('invisible', 'opacity-0', '-translate-y-2');
            if (arrow) arrow.style.transform = 'rotate(0deg)';
        }
    }
}

function closeLanguageDropdown() {
    const dropdown = document.getElementById('lang-dropdown');
    const arrow = document.getElementById('lang-arrow');

    if (dropdown && !dropdown.classList.contains('invisible')) {
        dropdown.classList.add('invisible', 'opacity-0', '-translate-y-2');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get saved language or default
    const savedLang = localStorage.getItem('alpha_lang') || DEFAULT_LANG;

    // 2. Initial load
    setLanguage(savedLang);

    // 3. Event Listener for Dropdown (Legacy)
    const selector = document.getElementById('lang-selector');
    if (selector) {
        selector.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    // 4. Custom Dropdown Event Listeners
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleLanguageDropdown();
        });
    }

    // Option Clicks
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
            closeLanguageDropdown();
        });
    });

    // Click Outside
    document.addEventListener('click', (e) => {
        const dropdownContainer = document.getElementById('lang-dropdown-container');
        if (dropdownContainer && !dropdownContainer.contains(e.target)) {
            closeLanguageDropdown();
        }
    });
});
