/**
 * ALPHA LASER - Multilang Translation System
 * HTML 요소에 직접 포함된 data-* 속성 기반 번역 시스템
 */

const VALID_LANGUAGES = ['ko', 'en', 'ja', 'zh-cn', 'zh-tw'];
const LANG_FLAGS = {
    'ko': 'kr',
    'en': 'us',
    'ja': 'jp',
    'zh-cn': 'cn',
    'zh-tw': 'tw'
};
const LANG_NAMES = {
    'ko': '한국어',
    'en': 'English',
    'ja': '日本語',
    'zh-cn': '简体中文',
    'zh-tw': '繁體中文'
};
const DEFAULT_LANG = 'ko';

/**
 * 언어 드롭다운 토글
 */
window.toggleLanguageDropdown = function () {
    const dropdown = document.getElementById('lang-dropdown');
    const arrow = document.getElementById('lang-arrow');

    if (dropdown && arrow) {
        if (dropdown.classList.contains('invisible')) {
            dropdown.classList.remove('invisible', 'opacity-0', '-translate-y-2');
            arrow.classList.add('rotate-180');
        } else {
            dropdown.classList.add('invisible', 'opacity-0', '-translate-y-2');
            arrow.classList.remove('rotate-180');
        }
    }
}

/**
 * 언어 드롭다운 닫기
 */
window.closeLanguageDropdown = function () {
    const dropdown = document.getElementById('lang-dropdown');
    const arrow = document.getElementById('lang-arrow');
    if (dropdown && !dropdown.classList.contains('invisible')) {
        dropdown.classList.add('invisible', 'opacity-0', '-translate-y-2');
        if (arrow) arrow.classList.remove('rotate-180');
    }
}

/**
 * multilang 요소들의 콘텐츠를 선택된 언어로 업데이트
 * @param {string} lang - 언어 코드 (ko, en, ja, zh-cn, zh-tw)
 */
function updateMultilangContent(lang) {
    if (!VALID_LANGUAGES.includes(lang)) lang = DEFAULT_LANG;

    // multilang 클래스를 가진 모든 요소 찾기
    const elements = document.querySelectorAll('.multilang');

    elements.forEach(element => {
        const attrName = `data-${lang}`;
        const translatedText = element.getAttribute(attrName);

        if (translatedText) {
            // input/textarea는 placeholder 업데이트
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = translatedText;
                }
            } else {
                // 일반 요소는 innerHTML 업데이트
                element.innerHTML = translatedText;
            }
        }
    });

    // <html lang="..."> 속성 업데이트
    document.documentElement.lang = lang;
}

/**
 * 언어를 변경하고 UI 및 localStorage 업데이트
 * @param {string} lang - 언어 코드
 */
async function setLanguage(lang) {
    if (!VALID_LANGUAGES.includes(lang)) lang = DEFAULT_LANG;

    // 콘텐츠 업데이트
    updateMultilangContent(lang);

    // localStorage에 저장
    localStorage.setItem('alpha_lang', lang);

    // 언어 선택 UI 업데이트
    const flagCode = LANG_FLAGS[lang] || 'kr';

    // 현재 선택된 언어 표시 (헤더 드롭다운)
    const currentLangFlag = document.getElementById('current-lang-flag');
    const currentLangText = document.getElementById('current-lang-text');

    if (currentLangFlag) {
        currentLangFlag.src = `assets/img/flags/${flagCode}.png`;
        currentLangFlag.alt = lang;
    }
    if (currentLangText) {
        currentLangText.textContent = LANG_NAMES[lang] || lang;
    }

    // Legacy 지원
    const flagIcon = document.getElementById('lang-flag');
    if (flagIcon) {
        flagIcon.src = `assets/img/flags/${flagCode}.png`;
        flagIcon.alt = lang;
    }

    const selector = document.getElementById('lang-selector');
    if (selector) {
        selector.value = lang;
    }
}

/**
 * DOM 로드 완료 시 초기화
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. 저장된 언어 또는 기본 언어 가져오기
    const savedLang = localStorage.getItem('alpha_lang') || DEFAULT_LANG;

    // 2. 초기 언어 설정
    setLanguage(savedLang);

    // 3. Legacy 선택기 이벤트 (있는 경우)
    const selector = document.getElementById('lang-selector');
    if (selector) {
        selector.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    // 4. 글로벌 이벤트 위임 (동적 콘텐츠 처리)
    document.addEventListener('click', (e) => {
        const target = e.target;

        // 언어 버튼 클릭 (토글)
        const langBtn = target.closest('#lang-btn');
        if (langBtn) {
            e.stopPropagation();
            toggleLanguageDropdown();
            return;
        }

        // 언어 옵션 클릭 (선택)
        const langOption = target.closest('.lang-option');
        if (langOption) {
            const lang = langOption.getAttribute('data-lang');
            setLanguage(lang);
            closeLanguageDropdown();
            return;
        }

        // 외부 클릭 (닫기)
        const dropdownContainer = document.getElementById('lang-dropdown-container');
        if (dropdownContainer && !dropdownContainer.contains(target)) {
            closeLanguageDropdown();
        }
    });
});
