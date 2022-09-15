import Menu from './icons/list_FILL0_wght400_GRAD0_opsz48.svg';
const menuIcon = new Image();
menuIcon.src = Menu;

const div = document.createElement('div');
const p = document.createElement('p');

export function loadHome() {
    // Wipe the main content if it already exists
    if (content.querySelector('.main-wrapper') !== null) {
        content.querySelector('.main-wrapper').textContent = '';
    }

    // Add the main skeleton
    content.appendChild(div.cloneNode(true)).classList.add('main-wrapper');
    content.querySelector('.main-wrapper').appendChild(document.createElement('main'));
    
    // Unbold the other tabs and bold the Home tab
    const tabs = content.querySelectorAll('[data-navitem]');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('bold');
    }
    content.querySelector('[data-navitem="1"]').classList.add('bold');

    // Create the box for the restaurant's current specials
    content.querySelector('main').appendChild(div.cloneNode(true)).classList.add('special', 'box');
    content.querySelector('.special').appendChild(div.cloneNode(true)).classList.add('text');
    content.querySelector('.text').appendChild(p.cloneNode(true)).classList.add('head');
    content.querySelector('.text').appendChild(p.cloneNode(true)).classList.add('item');
    content.querySelector('.head').textContent = 'Our Special -';
    content.querySelector('.item').textContent = 'Big Rocks Pizza';

    // Make the Menu and Order Now buttons for the bottom of the specials box
    content.querySelector('.special').appendChild(div.cloneNode(true)).classList.add('options');
    content.querySelector('.options').appendChild(document.createElement('span')).classList.add('menu');
    content.querySelector('.menu').appendChild(menuIcon);
    content.querySelector('.menu').appendChild(p.cloneNode(true));
    content.querySelector('.menu p').textContent = 'Menu';
    content.querySelector('.options').appendChild(p.cloneNode(true)).classList.add('order-now');
    content.querySelector('.order-now').textContent = 'Order Now >';
}