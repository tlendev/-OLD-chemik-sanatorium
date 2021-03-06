const btn: HTMLDivElement = document.querySelector('.burger-btn')!;
const path1: SVGPathElement = document.querySelector('.svg-p1')!;
const path2: SVGPathElement = document.querySelector('.svg-p2')!;
const path3: SVGPathElement = document.querySelector('.svg-p3')!;

const nav: HTMLElement = document.querySelector('.burger-cont')!;

const chat: HTMLDivElement = document.querySelector('.chat')!;

let isOpened = false;

btn.addEventListener('click', () => {

    let burger_active = 'burger-active';

    if (!isOpened) {
        path1.classList.add(burger_active);
        path2.classList.add(burger_active);
        path3.classList.add(burger_active);
        nav.style.display = 'block';
        chat.style.display = 'none';
        isOpened = true;

    } else {
        path1.classList.remove(burger_active);
        path2.classList.remove(burger_active);
        path3.classList.remove(burger_active);
        nav.style.display = 'none';
        chat.style.display = 'flex';
        isOpened = false;
    }

});
