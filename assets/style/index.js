'use strict';

const hamburguerIcon = document.querySelector('.h-icon');
const menu = document.querySelector('.menu-header');
const menuItems = document.querySelectorAll(".menuItem");
const closeIcon= document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menuIcon");

let statusIcon= 'hide';
hamburguerIcon.addEventListener('click', () => {
    if (statusIcon='hide') {
        menu.style.display= 'block';
        statusIcon.valueOf = 'show';
    } else if (statusIcon = 'show') {
        menu.style.display= 'none';
    }
});
        
