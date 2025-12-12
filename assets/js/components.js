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
                <a href="company.html" class="${getActiveClass('company.html')} font-medium transition-colors text-sm uppercase tracking-wide multilang" data-ko="회사소개" data-en="Company" data-ja="会社紹介" data-zh-cn="公司简介" data-zh-tw="公司簡介">회사소개</a>
                <a href="equipment.html" class="${getActiveClass('equipment.html')} font-medium transition-colors text-sm uppercase tracking-wide multilang" data-ko="장비현황" data-en="Equipment" data-ja="設備状況" data-zh-cn="设备现状" data-zh-tw="設備現狀">장비현황</a>
                <a href="support.html" class="${getActiveClass('support.html')} font-medium transition-colors text-sm uppercase tracking-wide multilang" data-ko="고객지원" data-en="Support" data-ja="顧客サポート" data-zh-cn="客户支持" data-zh-tw="客戶支援">고객지원</a>
                <a href="resources.html" class="${getActiveClass('resources.html')} font-medium transition-colors text-sm uppercase tracking-wide multilang" data-ko="자료실" data-en="Resources" data-ja="資料室" data-zh-cn="資料室" data-zh-tw="資料室">자료실</a>
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
                             <button class="lang-option w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/10 rounded-lg text-left transition-colors group" data-lang="zh-cn">
                                <img src="assets/img/flags/cn.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                <span class="text-sm text-gray-400 group-hover:text-white transition-colors">简体中文</span>
                            </button>
                             <button class="lang-option w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/10 rounded-lg text-left transition-colors group" data-lang="zh-tw">
                                <img src="assets/img/flags/tw.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                <span class="text-sm text-gray-400 group-hover:text-white transition-colors">繁體中文</span>
                            </button>
                        </div>
                    </div>
                </div>

                <a href="quote.html" class="hidden md:flex items-center gap-2 bg-brand-red/10 text-brand-red border border-brand-red px-6 py-2 rounded-full font-bold hover:bg-brand-red hover:text-white hover:shadow-glow transition-all duration-300 text-sm">
                    <i class="fa-solid fa-paper-plane"></i> <span class="multilang" data-ko="온라인 견적" data-en="Get Quote" data-ja="オンライン見積" data-zh-cn="在线报价" data-zh-tw="線上報價">온라인 견적</span>
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
        <div class="container mx-auto px-4 lg:px-6">
            <div class="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
                <!-- Logo & Social -->
                <div class="text-center md:text-left">
                    <div class="mb-4">
                        <span class="text-2xl lg:text-3xl font-montserrat font-black text-white">ALPHA <span class="text-brand-red">LASER</span></span>
                    </div>
                    <div class="flex justify-center md:justify-start gap-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all text-gray-400"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all text-gray-400"><i class="fa-brands fa-instagram"></i></a>
                        <a href="mailto:alpha@alphasystem.kr" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all text-gray-400"><i class="fa-solid fa-envelope"></i></a>
                    </div>
                </div>

                <!-- Contact Info -->
                <div class="text-center md:text-right text-gray-400 text-xs lg:text-sm leading-6 lg:leading-7">
                    <p>
                        <strong class="text-white multilang" 
                            data-ko="알파레이저" 
                            data-en="ALPHA LASER" 
                            data-ja="アルファレーザー"
                            data-zh-cn="阿尔法激光"
                            data-zh-tw="阿爾法激光">알파레이저</strong>
                        <span class="hidden sm:inline mx-2">|</span><br class="sm:hidden">
                        <span class="multilang"
                            data-ko="대표: 고민호"
                            data-en="CEO: Ko Min-ho"
                            data-ja="代表: 高敏鎬"
                            data-zh-cn="代表: 高敏镐"
                            data-zh-tw="代表: 高敏鎬">대표: 고민호</span>
                        <span class="hidden sm:inline mx-2">|</span><br class="sm:hidden">
                        <span class="multilang"
                            data-ko="사업자등록번호: 270-30-00076"
                            data-en="Business No: 270-30-00076"
                            data-ja="事業者登録番号: 270-30-00076"
                            data-zh-cn="营业执照号码: 270-30-00076"
                            data-zh-tw="營業執照號碼: 270-30-00076">사업자등록번호: 270-30-00076</span>
                    </p>
                    <p class="hidden sm:block multilang"
                        data-ko="주소: 경기도 시흥시 군자천로 21번길 13 (정왕동 2178-3, 시화공단 2바 513)"
                        data-en="Address: 13, Gunjacheon-ro 21beon-gil, Siheung-si, Gyeonggi-do, Korea"
                        data-ja="住所: 京畿道始興市軍子川路21番ギル13（井旺洞2178-3、始華工団2バ513）"
                        data-zh-cn="地址: 京畿道始兴市君子川路21街13号（井旺洞2178-3，始华工团2巴513）"
                        data-zh-tw="地址: 京畿道始興市君子川路21街13號（井旺洞2178-3，始華工團2巴513）">주소: 경기도 시흥시 군자천로 21번길 13 (정왕동 2178-3, 시화공단 2바 513)</p>
                    <p class="sm:hidden multilang"
                        data-ko="경기도 시흥시 군자천로 21번길 13"
                        data-en="Siheung-si, Gyeonggi-do, Korea"
                        data-ja="京畿道始興市軍子川路21番ギル13"
                        data-zh-cn="京畿道始兴市君子川路21街13号"
                        data-zh-tw="京畿道始興市君子川路21街13號">경기도 시흥시 군자천로 21번길 13</p>
                    <p>
                        <span class="multilang"
                            data-ko="TEL: 0505-540-3000"
                            data-en="TEL: 0505-540-3000"
                            data-ja="TEL: 0505-540-3000"
                            data-zh-cn="电话: 0505-540-3000"
                            data-zh-tw="電話: 0505-540-3000">TEL: 0505-540-3000</span>
                        <span class="mx-2">|</span>
                        <span class="multilang"
                            data-ko="FAX: 0505-541-3000"
                            data-en="FAX: 0505-541-3000"
                            data-ja="FAX: 0505-541-3000"
                            data-zh-cn="传真: 0505-541-3000"
                            data-zh-tw="傳真: 0505-541-3000">FAX: 0505-541-3000</span>
                    </p>
                    <p>Email: alpha@alphasystem.kr</p>
                </div>
            </div>

            <div class="border-t border-white/10 pt-6 lg:pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center bg-black/50 p-4 rounded-xl">
                <p class="text-gray-600 text-xs multilang"
                    data-ko="© 2025 ALPHA LASER. All Rights Reserved."
                    data-en="© 2025 ALPHA LASER. All Rights Reserved."
                    data-ja="© 2025 ALPHA LASER. All Rights Reserved."
                    data-zh-cn="© 2025 ALPHA LASER. All Rights Reserved."
                    data-zh-tw="© 2025 ALPHA LASER. All Rights Reserved.">© 2025 ALPHA LASER. All Rights Reserved.</p>
                <p class="text-gray-700 text-xs mt-2 md:mt-0">Premium Precision Tech</p>
            </div>
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
