// main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. 헤더 스크롤 효과
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. 숫자가 올라가는 카운팅 효과 (예: 실적 등) - 나중에 섹션 추가 시 활용
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / 200;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    // 3. 스무스 스크롤 (앵커 태그)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 4. Hero 섹션 등장은 CSS Animation으로 처리됨.
    // 추가적인 인터랙션이 필요하면 여기에 작성
    console.log("Alpha Laser System Loaded - Premium Red Theme");
});
