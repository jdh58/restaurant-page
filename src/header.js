import Logo from './icons/weblogo.png';
const storeLogo = new Image();
storeLogo.src = Logo;

const div = document.createElement('div');
const nav = document.createElement('nav');
const header = document.createElement('header');

export function loadHeader() {
    // Create the content element and add it to the DOM.
    // Everything will be a child of this Element.
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    document.querySelector('body').appendChild(content);


    // Make the wrapper for the header so it can stay sticky
    content.appendChild(div.cloneNode(true)).classList.add('header-wrapper');
    content.querySelector('.header-wrapper').appendChild(header);

    header.appendChild(storeLogo); // Adds imported logo
    // Add the logo's classes, and create the navigation bar.
    content.querySelector('img').classList.add('banner');
    header.appendChild(nav.cloneNode(true)).classList.add('navbar');
    content.querySelector('.navbar').appendChild(document.createElement('ul')).classList.add('navlist');

    // Add all the navlist elements with the appropriate text
    for (let i = 1; i <= 6; i++) {
        content.querySelector('ul').appendChild(document.createElement('li')).setAttribute('data-navitem', `${i}`);
        let text = null;
        switch (i) {
            case 1:
                text = 'Home'
                break;
            case 2:
                text = 'Locations'
                break;
            case 3:
                text = 'Menu'
                break;
            case 4:
                text = 'About'
                break;
            case 5:
                text = 'Jobs'
                break;
            case 6:
                text = 'Contact Us'
                break;
                
            
        }
        content.querySelector(`[data-navitem="${i}"]`).textContent = text;
    }
}