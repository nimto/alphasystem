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

        const getMobileActiveClass = (path) => {
            return page === path ? 'text-brand-red bg-brand-red/10' : 'text-gray-300 hover:text-brand-red hover:bg-white/5';
        };

        return `
        <div class="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
            <!-- Left Section: Hamburger (mobile) + Logo -->
            <div class="flex items-center gap-3">
                <!-- Mobile Hamburger Button (Left) -->
                <button id="mobile-menu-btn" class="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors" aria-label="메뉴">
                    <span class="hamburger-line w-5 h-0.5 bg-white rounded-full transition-all duration-300"></span>
                    <span class="hamburger-line w-5 h-0.5 bg-white rounded-full transition-all duration-300 mt-1.5"></span>
                    <span class="hamburger-line w-5 h-0.5 bg-white rounded-full transition-all duration-300 mt-1.5"></span>
                </button>

                <a href="index.html" class="flex items-center gap-2 group">
                    <div class="text-xl md:text-2xl font-montserrat font-black tracking-tighter">
                        ALPHA <span class="text-brand-red group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] transition-all">LASER</span>
                    </div>
                </a>
            </div>

            <nav class="hidden lg:flex gap-8">
                <a href="company.html" class="${getActiveClass('company.html')} font-medium transition-colors text-sm uppercase tracking-wide multilang" data-ko="회사소개" data-en="Company" data-ja="会社紹介" data-zh-cn="公司简介" data-zh-tw="公司簡介">회사소개</a>
                <a href="equipment.html" class="${getActiveClass('equipment.html')} font-medium transition-colors text-sm uppercase tracking-wide multilang" data-ko="장비현황" data-en="Equipment" data-ja="設備状況" data-zh-cn="设备现状" data-zh-tw="設備現狀">장비현황</a>
                <a href="precision-machining.html" class="${getActiveClass('precision-machining.html')} font-medium transition-colors text-sm uppercase tracking-wide multilang" data-ko="초정밀가공" data-en="Precision" data-ja="超精密加工" data-zh-cn="超精密加工" data-zh-tw="超精密加工">초정밀가공</a>
                <a href="gallery.html" class="${getActiveClass('gallery.html')} font-medium transition-colors text-sm uppercase tracking-wide multilang" data-ko="갤러리" data-en="Gallery" data-ja="ギャラリー" data-zh-cn="画廊" data-zh-tw="畫廊">갤러리</a>
                <a href="resources.html" class="${getActiveClass('resources.html')} font-medium transition-colors text-sm uppercase tracking-wide multilang" data-ko="자료실" data-en="Resources" data-ja="資料室" data-zh-cn="資料室" data-zh-tw="資料室">자료실</a>
                <a href="support.html" class="${getActiveClass('support.html')} font-medium transition-colors text-sm uppercase tracking-wide multilang" data-ko="고객지원" data-en="Support" data-ja="顧客サポート" data-zh-cn="客户支持" data-zh-tw="客戶支援">고객지원</a>
            </nav>

            <div class="flex items-center gap-3 md:gap-6">
                <!-- Profile Menu (Desktop) - Hover Dropdown -->
                <div class="hidden lg:block relative" id="profile-menu-container">
                    <!-- Profile Icon Trigger -->
                    <button id="profile-menu-btn" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-red/50 transition-all duration-300 flex items-center justify-center group">
                        <i class="fa-solid fa-user text-gray-400 group-hover:text-brand-red transition-colors"></i>
                    </button>

                    <!-- Profile Dropdown Menu -->
                    <div id="profile-dropdown" class="absolute top-full right-0 mt-3 w-64 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-out opacity-0 invisible transform -translate-y-2 scale-95 z-50">
                        <!-- Menu Header -->
                        <div class="px-4 py-3 border-b border-white/10 bg-gradient-to-r from-brand-red/10 to-transparent">
                            <span class="text-xs text-gray-500 uppercase tracking-wider multilang" data-ko="메뉴" data-en="Menu" data-ja="メニュー" data-zh-cn="菜单" data-zh-tw="選單">메뉴</span>
                        </div>

                        <!-- Menu Items -->
                        <div class="p-2">
                            <a href="quote.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-red/10 transition-all duration-200 group">
                                <div class="w-8 h-8 rounded-lg bg-brand-red/20 flex items-center justify-center">
                                    <i class="fa-solid fa-paper-plane text-brand-red text-sm"></i>
                                </div>
                                <span class="text-sm text-gray-300 group-hover:text-white transition-colors multilang" data-ko="온라인 견적" data-en="Get Quote" data-ja="オンライン見積" data-zh-cn="在线报价" data-zh-tw="線上報價">온라인 견적</span>
                            </a>
                            <a href="support.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all duration-200 group">
                                <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                    <i class="fa-solid fa-headset text-gray-400 group-hover:text-brand-red text-sm transition-colors"></i>
                                </div>
                                <span class="text-sm text-gray-300 group-hover:text-white transition-colors multilang" data-ko="고객지원" data-en="Support" data-ja="顧客サポート" data-zh-cn="客户支持" data-zh-tw="客戶支援">고객지원</span>
                            </a>
                            <a href="tel:0505-540-3000" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all duration-200 group">
                                <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                    <i class="fa-solid fa-phone text-gray-400 group-hover:text-brand-red text-sm transition-colors"></i>
                                </div>
                                <span class="text-sm text-gray-300 group-hover:text-white transition-colors">0505-540-3000</span>
                            </a>
                        </div>

                        <!-- Language Accordion -->
                        <div class="border-t border-white/10">
                            <button id="lang-accordion-btn" class="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors">
                                <div class="flex items-center gap-3">
                                    <img id="current-lang-flag" src="assets/img/flags/kr.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm" alt="Flag">
                                    <span id="current-lang-text" class="text-sm text-gray-300">한국어</span>
                                </div>
                                <i class="fa-solid fa-chevron-down text-xs text-gray-500 transition-transform duration-300" id="lang-accordion-arrow"></i>
                            </button>
                            <div id="lang-accordion-content" class="overflow-hidden transition-all duration-300 ease-out max-h-0">
                                <div class="px-2 pb-2 space-y-1">
                                    <button class="lang-option w-full flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg text-left transition-colors group" data-lang="ko">
                                        <img src="assets/img/flags/kr.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                        <span class="text-sm text-gray-400 group-hover:text-white transition-colors">한국어</span>
                                    </button>
                                    <button class="lang-option w-full flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg text-left transition-colors group" data-lang="en">
                                        <img src="assets/img/flags/us.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                        <span class="text-sm text-gray-400 group-hover:text-white transition-colors">English</span>
                                    </button>
                                    <button class="lang-option w-full flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg text-left transition-colors group" data-lang="ja">
                                        <img src="assets/img/flags/jp.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                        <span class="text-sm text-gray-400 group-hover:text-white transition-colors">日本語</span>
                                    </button>
                                    <button class="lang-option w-full flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg text-left transition-colors group" data-lang="zh-cn">
                                        <img src="assets/img/flags/cn.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                        <span class="text-sm text-gray-400 group-hover:text-white transition-colors">简体中文</span>
                                    </button>
                                    <button class="lang-option w-full flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg text-left transition-colors group" data-lang="zh-tw">
                                        <img src="assets/img/flags/tw.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                        <span class="text-sm text-gray-400 group-hover:text-white transition-colors">繁體中文</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu-overlay" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998] opacity-0 invisible transition-all duration-300 lg:hidden"></div>

        <!-- Mobile Menu Panel (Left Side) -->
        <div id="mobile-menu" class="fixed top-0 left-0 w-[300px] h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 z-[9999] transform -translate-x-full transition-transform duration-300 ease-out lg:hidden border-r border-white/10 shadow-2xl flex flex-col">
            <!-- Mobile Menu Header -->
            <div class="shrink-0 flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/50">
                <span class="text-lg font-montserrat font-black tracking-tight">ALPHA <span class="text-brand-red">LASER</span></span>
                <button id="mobile-menu-close" class="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-red/20 transition-all duration-200">
                    <i class="fa-solid fa-xmark text-white hover:text-brand-red transition-colors"></i>
                </button>
            </div>

            <!-- Mobile Menu Links -->
            <nav class="flex-1 px-4 py-4 space-y-1 overflow-y-auto bg-black/90 backdrop-blur-xl">
                <a href="index.html" class="${getMobileActiveClass('index.html')} flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group hover:bg-white/5">
                    <i class="fa-solid fa-home text-brand-red w-5 text-center"></i>
                    <span class="text-sm multilang" data-ko="홈" data-en="Home" data-ja="ホーム" data-zh-cn="首页" data-zh-tw="首頁">홈</span>
                </a>
                <a href="company.html" class="${getMobileActiveClass('company.html')} flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group hover:bg-white/5">
                    <i class="fa-solid fa-building text-brand-red w-5 text-center"></i>
                    <span class="text-sm multilang" data-ko="회사소개" data-en="Company" data-ja="会社紹介" data-zh-cn="公司简介" data-zh-tw="公司簡介">회사소개</span>
                </a>
                <a href="equipment.html" class="${getMobileActiveClass('equipment.html')} flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group hover:bg-white/5">
                    <i class="fa-solid fa-cogs text-brand-red w-5 text-center"></i>
                    <span class="text-sm multilang" data-ko="장비현황" data-en="Equipment" data-ja="設備状況" data-zh-cn="设备现状" data-zh-tw="設備現狀">장비현황</span>
                </a>
                <a href="precision-machining.html" class="${getMobileActiveClass('precision-machining.html')} flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group hover:bg-white/5">
                    <i class="fa-solid fa-crosshairs text-brand-red w-5 text-center"></i>
                    <span class="text-sm multilang" data-ko="초정밀가공" data-en="Precision" data-ja="超精密加工" data-zh-cn="超精密加工" data-zh-tw="超精密加工">초정밀가공</span>
                </a>
                <a href="gallery.html" class="${getMobileActiveClass('gallery.html')} flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group hover:bg-white/5">
                    <i class="fa-solid fa-images text-brand-red w-5 text-center"></i>
                    <span class="text-sm multilang" data-ko="갤러리" data-en="Gallery" data-ja="ギャラリー" data-zh-cn="画廊" data-zh-tw="畫廊">갤러리</span>
                </a>
                <a href="resources.html" class="${getMobileActiveClass('resources.html')} flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group hover:bg-white/5">
                    <i class="fa-solid fa-folder-open text-brand-red w-5 text-center"></i>
                    <span class="text-sm multilang" data-ko="자료실" data-en="Resources" data-ja="資料室" data-zh-cn="資料室" data-zh-tw="資料室">자료실</span>
                </a>
                <a href="support.html" class="${getMobileActiveClass('support.html')} flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group hover:bg-white/5">
                    <i class="fa-solid fa-headset text-brand-red w-5 text-center"></i>
                    <span class="text-sm multilang" data-ko="고객지원" data-en="Support" data-ja="顧客サポート" data-zh-cn="客户支持" data-zh-tw="客戶支援">고객지원</span>
                </a>

                <div class="border-t border-white/10 my-3"></div>

                <!-- Online Quote Button (Mobile) -->
                <a href="quote.html" class="flex items-center gap-3 px-3 py-3 bg-brand-red text-white rounded-lg hover:bg-red-600 transition-all duration-200 group">
                    <i class="fa-solid fa-paper-plane w-5 text-center"></i>
                    <span class="font-medium text-sm multilang" data-ko="온라인 견적" data-en="Get Quote" data-ja="オンライン見積" data-zh-cn="在线报价" data-zh-tw="線上報價">온라인 견적</span>
                    <i class="fa-solid fa-chevron-right ml-auto text-xs opacity-50"></i>
                </a>

                <div class="border-t border-white/10 my-3"></div>

                <!-- Language Accordion (Mobile) -->
                <div class="rounded-lg overflow-hidden bg-white/5">
                    <button id="mobile-lang-accordion-btn" class="w-full flex items-center justify-between px-3 py-2.5 hover:bg-white/5 transition-colors">
                        <div class="flex items-center gap-3">
                            <i class="fa-solid fa-globe text-brand-red w-5 text-center"></i>
                            <img id="mobile-current-lang-flag" src="assets/img/flags/kr.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm" alt="Flag">
                            <span id="mobile-current-lang-text" class="text-sm text-gray-300">한국어</span>
                        </div>
                        <i class="fa-solid fa-chevron-down text-xs text-gray-500 transition-transform duration-300" id="mobile-lang-accordion-arrow"></i>
                    </button>
                    <div id="mobile-lang-accordion-content" class="overflow-hidden transition-all duration-300 ease-out max-h-0">
                        <div class="px-2 pb-2 pt-1 space-y-1">
                            <button class="mobile-lang-option w-full flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg text-left transition-colors group" data-lang="ko">
                                <img src="assets/img/flags/kr.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                <span class="text-sm text-gray-400 group-hover:text-white transition-colors">한국어</span>
                            </button>
                            <button class="mobile-lang-option w-full flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg text-left transition-colors group" data-lang="en">
                                <img src="assets/img/flags/us.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                <span class="text-sm text-gray-400 group-hover:text-white transition-colors">English</span>
                            </button>
                            <button class="mobile-lang-option w-full flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg text-left transition-colors group" data-lang="ja">
                                <img src="assets/img/flags/jp.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                <span class="text-sm text-gray-400 group-hover:text-white transition-colors">日本語</span>
                            </button>
                            <button class="mobile-lang-option w-full flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg text-left transition-colors group" data-lang="zh-cn">
                                <img src="assets/img/flags/cn.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                <span class="text-sm text-gray-400 group-hover:text-white transition-colors">简体中文</span>
                            </button>
                            <button class="mobile-lang-option w-full flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg text-left transition-colors group" data-lang="zh-tw">
                                <img src="assets/img/flags/tw.png" class="w-5 h-3.5 object-cover rounded-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                <span class="text-sm text-gray-400 group-hover:text-white transition-colors">繁體中文</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Mobile Menu Footer -->
            <div class="shrink-0 px-4 py-3 border-t border-white/10 bg-black/50">
                <a href="tel:0505-540-3000" class="flex items-center justify-center gap-2 text-gray-400 hover:text-brand-red transition-colors text-sm">
                    <i class="fa-solid fa-phone text-brand-red text-xs"></i>
                    <span>0505-540-3000</span>
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

// Profile Menu Functions (Desktop)
function initProfileMenu() {
    const container = document.getElementById('profile-menu-container');
    const btn = document.getElementById('profile-menu-btn');
    const dropdown = document.getElementById('profile-dropdown');
    const accordionBtn = document.getElementById('lang-accordion-btn');
    const accordionContent = document.getElementById('lang-accordion-content');
    const accordionArrow = document.getElementById('lang-accordion-arrow');

    if (!container || !btn || !dropdown) return;

    let isOpen = false;
    let hideTimeout;

    function showDropdown() {
        clearTimeout(hideTimeout);
        dropdown.classList.remove('opacity-0', 'invisible', '-translate-y-2', 'scale-95');
        dropdown.classList.add('opacity-100', 'visible', 'translate-y-0', 'scale-100');
        isOpen = true;
    }

    function hideDropdown() {
        hideTimeout = setTimeout(() => {
            dropdown.classList.add('opacity-0', 'invisible', '-translate-y-2', 'scale-95');
            dropdown.classList.remove('opacity-100', 'visible', 'translate-y-0', 'scale-100');
            // Close accordion when dropdown closes
            if (accordionContent) {
                accordionContent.style.maxHeight = '0';
                accordionArrow?.classList.remove('rotate-180');
            }
            isOpen = false;
        }, 150);
    }

    // Hover events
    container.addEventListener('mouseenter', showDropdown);
    container.addEventListener('mouseleave', hideDropdown);

    // Keep dropdown open when hovering over it
    dropdown.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
    });
    dropdown.addEventListener('mouseleave', hideDropdown);

    // Click event for mobile/touch
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isOpen) {
            hideDropdown();
        } else {
            showDropdown();
        }
    });

    // Language Accordion
    if (accordionBtn && accordionContent && accordionArrow) {
        accordionBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = accordionContent.style.maxHeight && accordionContent.style.maxHeight !== '0px';
            if (isExpanded) {
                accordionContent.style.maxHeight = '0';
                accordionArrow.classList.remove('rotate-180');
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                accordionArrow.classList.add('rotate-180');
            }
        });
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!container.contains(e.target) && isOpen) {
            dropdown.classList.add('opacity-0', 'invisible', '-translate-y-2', 'scale-95');
            dropdown.classList.remove('opacity-100', 'visible', 'translate-y-0', 'scale-100');
            if (accordionContent) {
                accordionContent.style.maxHeight = '0';
                accordionArrow?.classList.remove('rotate-180');
            }
            isOpen = false;
        }
    });
}

// Mobile Menu Language Accordion Functions
function initMobileLangAccordion() {
    const accordionBtn = document.getElementById('mobile-lang-accordion-btn');
    const accordionContent = document.getElementById('mobile-lang-accordion-content');
    const accordionArrow = document.getElementById('mobile-lang-accordion-arrow');

    if (!accordionBtn || !accordionContent) return;

    // Toggle accordion
    accordionBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = accordionContent.style.maxHeight && accordionContent.style.maxHeight !== '0px';
        if (isExpanded) {
            accordionContent.style.maxHeight = '0';
            accordionArrow?.classList.remove('rotate-180');
        } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            accordionArrow?.classList.add('rotate-180');
        }
    });

    // Language option clicks
    document.querySelectorAll('.mobile-lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            if (typeof setLanguage === 'function') {
                setLanguage(lang);
            }
            // Update mobile menu flag and text
            updateMobileLangDisplay(lang);
            // Close accordion after selection
            accordionContent.style.maxHeight = '0';
            accordionArrow?.classList.remove('rotate-180');
        });
    });
}

// Update mobile menu language display
function updateMobileLangDisplay(lang) {
    const flagMap = { ko: 'kr', en: 'us', ja: 'jp', 'zh-cn': 'cn', 'zh-tw': 'tw' };
    const langNames = { ko: '한국어', en: 'English', ja: '日本語', 'zh-cn': '简体中文', 'zh-tw': '繁體中文' };

    const flag = document.getElementById('mobile-current-lang-flag');
    const text = document.getElementById('mobile-current-lang-text');

    if (flag) {
        flag.src = `assets/img/flags/${flagMap[lang] || 'kr'}.png`;
    }
    if (text) {
        text.textContent = langNames[lang] || '한국어';
    }
}

// Mobile Menu Functions
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menuOverlay = document.getElementById('mobile-menu-overlay');
    const menuPanel = document.getElementById('mobile-menu');
    const menuClose = document.getElementById('mobile-menu-close');
    const hamburgerLines = menuBtn?.querySelectorAll('.hamburger-line');

    if (!menuBtn || !menuOverlay || !menuPanel) return;

    // Open menu (slides from left)
    function openMobileMenu() {
        menuOverlay.classList.remove('opacity-0', 'invisible');
        menuOverlay.classList.add('opacity-100', 'visible');
        menuPanel.classList.remove('-translate-x-full');
        menuPanel.classList.add('translate-x-0');
        document.body.style.overflow = 'hidden';

        // Animate hamburger to X
        if (hamburgerLines && hamburgerLines.length >= 3) {
            hamburgerLines[0].classList.add('rotate-45', 'translate-y-2');
            hamburgerLines[1].classList.add('opacity-0', 'scale-0');
            hamburgerLines[2].classList.add('-rotate-45', '-translate-y-2');
        }
    }

    // Close menu (slides to left)
    function closeMobileMenu() {
        menuOverlay.classList.add('opacity-0', 'invisible');
        menuOverlay.classList.remove('opacity-100', 'visible');
        menuPanel.classList.add('-translate-x-full');
        menuPanel.classList.remove('translate-x-0');
        document.body.style.overflow = '';

        // Animate X back to hamburger
        if (hamburgerLines && hamburgerLines.length >= 3) {
            hamburgerLines[0].classList.remove('rotate-45', 'translate-y-2');
            hamburgerLines[1].classList.remove('opacity-0', 'scale-0');
            hamburgerLines[2].classList.remove('-rotate-45', '-translate-y-2');
        }
    }

    // Event Listeners
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !menuPanel.classList.contains('-translate-x-full');
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    if (menuClose) {
        menuClose.addEventListener('click', closeMobileMenu);
    }

    menuOverlay.addEventListener('click', closeMobileMenu);

    // Close menu when clicking on a link
    menuPanel.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menuPanel.classList.contains('-translate-x-full')) {
            closeMobileMenu();
        }
    });

    // Close menu on window resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024 && !menuPanel.classList.contains('-translate-x-full')) {
            closeMobileMenu();
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Inject Header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = HeaderComponent.render();

        // Initialize Profile Menu (Desktop hover dropdown)
        initProfileMenu();

        // Initialize Mobile Menu
        initMobileMenu();

        // Initialize Mobile Language Accordion
        initMobileLangAccordion();

        // Re-attach language option clicks (Desktop accordion)
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                if (typeof setLanguage === 'function') {
                    setLanguage(lang);
                }
                // Update mobile menu language display as well
                updateMobileLangDisplay(lang);
            });
        });

        // Re-initialize language state
        const savedLang = localStorage.getItem('alpha_lang') || 'ko';
        if (typeof setLanguage === 'function') {
            setLanguage(savedLang);
        }
        // Update mobile menu language display on init
        updateMobileLangDisplay(savedLang);
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
