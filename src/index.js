import home from "./home.js";
import contact from "./contact.js";
import menu from "./menu.js";

const content = document.querySelector('#content');
const homeTab = document.querySelector('#home-tab');
const menuTab = document.querySelector('#menu-tab');
const contactTab = document.querySelector('#contact-tab');

home(content);

homeTab.addEventListener('click', () => {
    home(content);
})
menuTab.addEventListener('click', () => {
    menu(content);
})
contactTab.addEventListener('click', () => {
    contact(content);
})

