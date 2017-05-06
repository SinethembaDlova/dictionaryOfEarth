var menu = document.querySelector('.menu');
var close = document.querySelector('.close');
var overlay = document.querySelector('.overlay');
var inputBox = document.querySelector('#inputBox');
var searchButton = document.querySelector('#searchButton');
var searchedName = document.querySelector(".results h2")

function openMenu() {

    overlay.style.display = 'block';

}

function closeMenu() {
    if (overlay.style.display = 'block') {
        overlay.style.display = 'none';
    }
}

function searching(){
  searchedName.innerHTML = inputBox.value;

}

menu.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
searchButton/addEventListener('click', searching)
