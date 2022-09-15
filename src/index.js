import './styles.css';
import { loadHome } from './home';
import { loadHeader } from './header';
import { loadLocation } from './location';

// Initialize the homepage on first load
loadHeader();
loadHome();

// Add event listeners to the navigation items that swap out the page's
// main content for the selected page's.
const location = document.querySelector('li[data-navitem="2"]');
const home = document.querySelector('li[data-navitem="1"]');
location.addEventListener('click', loadLocation);
home.addEventListener('click', loadHome);
