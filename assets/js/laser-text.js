/**
 * ALPHA LASER - Laser Text Effect
 * 레이저 각인 효과를 생성하는 함수
 */

/**
 * 헤딩 레벨에 따른 viewBox 반환
 * @param {HTMLElement} element - 대상 헤딩 요소
 * @returns {string} viewBox 문자열
 */
function getViewBoxForElement(element) {
    const tagName = element.tagName.toLowerCase();

    // 하드코딩된 viewBox 설정 (각 헤딩별 강제 크기)
    // Playwright 테스트로 최적화된 크기
    const viewBoxConfig = {
        'h1': '-30 -15 1400 250',   // H1: 200px 폰트용 - 적당한 크기
        'h2': '-25 -12 1200 220',   // H2: 150px 폰트용 - H1보다 약간 작게
        'h3': '-20 -10 1000 200',   // H3: 115px 폰트용
        'h4': '-15 -8 900 180',     // H4: 95px 폰트용
        'h5': '-12 -5 800 160',     // H5: 70px 폰트용
        'h6': '-10 -3 700 140'      // H6: 55px 폰트용
    };

    return viewBoxConfig[tagName] || '-100 0 1200 150'; // 기본값
}

/**
 * 레이저 텍스트 효과 생성
 * @param {string} text - 표시할 텍스트 (영문, 공백 포함)
 * @param {HTMLElement} targetElement - 대상 요소 (보통 h1)
 */
function createLaserText(text, targetElement) {
    if (!text || !targetElement) {
        console.error('createLaserText: text and targetElement are required');
        return;
    }

    // 텍스트를 개별 문자로 분리 (공백 포함)
    const chars = text.split('');

    // tspan 요소 생성
    const tspans = chars.map(char => `<tspan>${char}</tspan>`).join('');

    // 헤딩 레벨에 맞는 viewBox 가져오기
    const viewBox = getViewBoxForElement(targetElement);

    // SVG 구조 생성
    const laserHTML = `
        <div class="laser-writing-box">
            <div class="scanning-laser"></div>
            <svg class="writing-svg" viewBox="${viewBox}" preserveAspectRatio="xMidYMid meet">
                <text x="50%" y="50%" dy=".35em" text-anchor="middle" class="text-fill">${text}</text>
                <text x="50%" y="50%" dy=".35em" text-anchor="middle" class="text-stroke">${tspans}</text>
            </svg>
        </div>
    `;

    // 기존 요소를 레이저 효과로 대체
    targetElement.innerHTML = laserHTML;
    targetElement.style.marginBottom = '20px';
}

/**
 * data-laser-text 속성을 가진 모든 요소에 레이저 효과 자동 적용
 */
function initLaserText() {
    // data-laser-text 속성을 가진 모든 요소 찾기
    const elements = document.querySelectorAll('[data-laser-text]');

    elements.forEach(element => {
        const text = element.getAttribute('data-laser-text');
        if (text) {
            createLaserText(text, element);
        }
    });
}

// DOM 로드 완료 시 자동 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLaserText);
} else {
    // 이미 로드된 경우 즉시 실행
    initLaserText();
}

// 전역으로 노출 (수동 호출용)
window.createLaserText = createLaserText;
window.initLaserText = initLaserText;
