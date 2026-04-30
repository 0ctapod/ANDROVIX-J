document.addEventListener('DOMContentLoaded', () => {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const slideList = document.querySelector('.slide-list');

    next?.addEventListener('click', () => {
        let items = document.querySelectorAll('.item');
        slideList.appendChild(items[0]);
    });

    prev?.addEventListener('click', () => {
        let items = document.querySelectorAll('.item');
        slideList.prepend(items[items.length - 1]);
    });

    const transition = document.getElementById('rocket-transition');
    window.addEventListener('load', () => {
        setTimeout(() => {
            transition.style.opacity = '0';
            setTimeout(() => {
                transition.style.display = 'none';
            }, 1000);
        }, 500);
    });
});