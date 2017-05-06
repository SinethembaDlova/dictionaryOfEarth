var menu = document.querySelector('.menu');
var close = document.querySelector('.close');
var overlay = document.querySelector('.overlay');


function openMenu() {

    overlay.style.display = 'block';

}

function closeMenu() {
    if (overlay.style.display = 'block') {
        overlay.style.display = 'none';
    }
}


menu.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
