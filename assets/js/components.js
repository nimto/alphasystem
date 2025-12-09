// assets/js/components.js

// Header Component
const HeaderComponent = {
    render: () => {
        const currentPath = window.location.pathname;
        const page = currentPath.split('/').pop() || 'index.html';

        // Define active state classes
        const getActiveClass = (path) => {
            return page === path ? 'text-brand-red' : 'text-gray-300 hover:text-brand-red';
        };

        return `
        <div class="container mx-auto px-6 h-20 flex items-center justify-between">
            <a href="index.html" class="flex items-center gap-2 group">
                <div class="text-2xl font-montserrat font-black tracking-tighter">
                    ALPHA <span class="text-brand-red group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] transition-all">LASER</span>
                </div>
            </a>
            
            <nav class="hidden md:flex gap-8">
                <a href="company.html" class="${getActiveClass('company.html')} font-medium transition-colors text-sm uppercase tracking-wide" data-lang-key="common.nav_company">회사소개</a>
                <a href="equipment.html" class="${getActiveClass('equipment.html')} font-medium transition-colors text-sm uppercase tracking-wide" data-lang-key="common.nav_equipment">장비현황</a>
                <a href="support.html" class="${getActiveClass('support.html')} font-medium transition-colors text-sm uppercase tracking-wide" data-lang-key="common.nav_support">고객지원</a>
                <a href="resources.html" class="${getActiveClass('resources.html')} font-medium transition-colors text-sm uppercase tracking-wide" data-lang-key="common.nav_data">자료실</a>
            </nav>

            <div class="flex items-center gap-6">
                 <!-- Language Switcher (Dropdown) -->
                <div class="relative" id="lang-dropdown-container">
                    <!-- Trigger Button -->
                    <button id="lang-btn" class="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors min-w-[120px] justify-between">
                        <div class="flex items-center gap-2">
                            <img id="current-lang-flag" src="assets/img/flags/kr.png" class="w-6 h-4 object-cover rounded shadow-sm" alt="Flag">
                            <span id="current-lang-text" class="text-sm text-gray-200 font-medium">한국어</span>
                        </div>
                        <i class="fa-solid fa-chevron-down text-xs text-gray-500 transition-transform duration-200" id="lang-arrow"></i>
                    </button>

                    <!-- Dropdown Menu -->
                    <div id="lang-dropdown" class="absolute top-full right-0 mt-2 w-40 bg-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-card overflow-hidden transition-all duration-200 opacity-0 invisible transform -translate-y-2 z-50">
                        <div class="p-1">
                             <button class="lang-option w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/10 rounded-lg text-left transition-colors group" data-lang="ko">
                                <img src="assets/img/flags/kr.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                <span class="text-sm text-gray-400 group-hover:text-white transition-colors">한국어</span>
                            </button>
                             <button class="lang-option w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/10 rounded-lg text-left transition-colors group" data-lang="en">
                                <img src="assets/img/flags/us.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                <span class="text-sm text-gray-400 group-hover:text-white transition-colors">English</span>
                            </button>
                             <button class="lang-option w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/10 rounded-lg text-left transition-colors group" data-lang="ja">
                                <img src="assets/img/flags/jp.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                <span class="text-sm text-gray-400 group-hover:text-white transition-colors">日本語</span>
                            </button>
                             <button class="lang-option w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/10 rounded-lg text-left transition-colors group" data-lang="zh-CN">
                                <img src="assets/img/flags/cn.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                <span class="text-sm text-gray-400 group-hover:text-white transition-colors">简体中文</span>
                            </button>
                             <button class="lang-option w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/10 rounded-lg text-left transition-colors group" data-lang="zh-TW">
                                <img src="assets/img/flags/tw.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                <span class="text-sm text-gray-400 group-hover:text-white transition-colors">繁體中文</span>
                            </button>
                        </div>
                    </div>
                </div>

                <a href="quote.html" class="hidden md:flex items-center gap-2 bg-brand-red/10 text-brand-red border border-brand-red px-6 py-2 rounded-full font-bold hover:bg-brand-red hover:text-white hover:shadow-glow transition-all duration-300 text-sm">
                    <i class="fa-solid fa-paper-plane"></i> <span data-lang-key="common.btn_quote">온라인 견적</span>
                </a>
            </div>
        </div>
        `;
    }
};

// Footer Component
const FooterComponent = {
    render: () => {
        return `
        <div class="container mx-auto px-6 text-center">
            <div class="mb-8">
                <span class="text-3xl font-montserrat font-black text-white">ALPHA <span class="text-brand-red">LASER</span></span>
            </div>

            <div class="flex justify-center gap-6 mb-12">
                <a href="#" class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all text-gray-400"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#" class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all text-gray-400"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all text-gray-400"><i class="fa-solid fa-envelope"></i></a>
            </div>

            <p class="text-gray-600 text-sm" data-lang-key="common.footer_rights">
                &copy; 2025 ALPHA LASER SYSTEM. All Rights Reserved.
            </p>
            <p class="text-gray-700 text-xs mt-2">Designed with Tailwind CSS 3.4 & Dark Premium Theme</p>
        </div>
        `;
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Inject Header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = HeaderComponent.render();
        // Re-attach event listeners for the new DOM elements
        if (typeof toggleLanguageDropdown === 'function') {
            const langBtn = document.getElementById('lang-btn');
            if (langBtn) {
                langBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleLanguageDropdown();
                });
            }
            // Re-attach option clicks
            document.querySelectorAll('.lang-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    const lang = option.getAttribute('data-lang');
                    setLanguage(lang);
                    closeLanguageDropdown();
                });
            });

            // Re-initialize language state
            const savedLang = localStorage.getItem('alpha_lang') || 'ko';
            setLanguage(savedLang);
        }
    }

    // Inject Footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = FooterComponent.render();
    }

    // Header Scroll Effect (re-apply)
    const headers = document.querySelectorAll('header'); // Get the header element (now inside the container or the container itself)
    // Actually, we should target the header element we just injected or the container if it acts as header
    // The rendered HTML structure is just internal DIV content, so we need to wrap it in <header> tag in HTML or make container the header.
});
