const div = document.createElement('div');
const p = document.createElement('p');
const mainWrap = document.querySelector('.main-wrapper');

export function loadLocation() {
    // Wipe the main content if it already exists
    if (content.querySelector('.main-wrapper') !== null) {
        content.querySelector('.main-wrapper').textContent = '';
    }

    // Add the main skeleton
    content.appendChild(div.cloneNode(true)).classList.add('main-wrapper');
    content.querySelector('.main-wrapper').appendChild(document.createElement('main'));

    // Unbold the other tabs and bold the Location tab
    const tabs = content.querySelectorAll('[data-navitem]');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('bold');
    }
    content.querySelector('[data-navitem="2"]').classList.add('bold');
    
    // Start with the previous orders box
    content.querySelector('main').appendChild(div.cloneNode(true)).classList.add('past-orders', 'box');
    content.querySelector('.past-orders').appendChild(div.cloneNode(true)).classList.add('order-header');

    // Make the 3 recent order elements
    for (let i = 1; i <= 3; i++) {
        content.querySelector('.past-orders').appendChild(div.cloneNode(true)).setAttribute('data-order', `${i}`);
    }

    // Build the place a new order box
    content.querySelector('main').appendChild(div.cloneNode(true)).classList.add('place-order', 'box');
    content.querySelector('.place-order').appendChild(div.cloneNode(true)).classList.add('address');
    content.querySelector('.address').appendChild(p.cloneNode(true)).classList.add('current');
    content.querySelector('.address').appendChild(p.cloneNode(true)).classList.add('not-yours'); 
    content.querySelector('.place-order').appendChild(div.cloneNode(true)).classList.add('delivery');
    content.querySelector('.place-order').appendChild(div.cloneNode(true)).classList.add('carryout');
    
    // Add logout elements
    content.querySelector('main').appendChild(div.cloneNode(true)).classList.add('logout', 'box');
    content.querySelector('.logout').appendChild(p.cloneNode(true));
    content.querySelector('.logout').appendChild(document.createElement('img')); // Gotta replace with a JS image element
}