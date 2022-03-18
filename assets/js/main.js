const headerMenu = document.querySelector('[header-menu]');
const headerBurger = document.querySelector('[header-burger]');
const headerHide = document.querySelector('header .hide');


const selected = document.querySelector('.selected');
const selected_2 = document.querySelector('.selected_2');

const optionContainer = document.querySelector('.option-container');
const optionContainer_2 = document.querySelector('.option-container_2');
const optionList = document.querySelector('.option');


const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav_menu');


function active () {
    optionContainer.classList.toggle("active");
}

function active2() {
    optionContainer_2.classList.toggle("active");
}

selected.addEventListener('click', active);
selected_2.addEventListener('click', active2);

let showMenu = false;

headerMenu.addEventListener('click', toggleBtn);

function toggleBtn() {
    if (!showMenu) {
        headerBurger.classList.add('open');
        headerMenu.style.display = "flex";
        

        nav.classList.add('open');
        navMenu.classList.add('open');
        navMenu.style.display = 'flex';
        showMenu = true;
    } else {
        headerBurger.classList.remove('open');
        headerHide.style.display = "flex";

        nav.classList.remove('open');
        navMenu.classList.remove('open');
        navMenu.style.display = 'none';
        showMenu = false;
    }
}