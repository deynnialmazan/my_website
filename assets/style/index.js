'use strict';

const hamburguerIcon = document.querySelector('.h-icon');
const menu = document.querySelector('.menu-header');
const menuItems = document.querySelectorAll('.menu-items');

let statusIcon= 'hide';
hamburguerIcon.addEventListener('click', () => {
    if (statusIcon ==='hide') {
        menu.style.display= 'block';
        statusIcon = 'show';
    } else if (statusIcon === 'show') {
        menu.style.display= 'none';
        statusIcon = 'hide';
    }
});


