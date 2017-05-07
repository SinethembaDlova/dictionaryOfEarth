var menu = document.querySelector('.menu');
var close = document.querySelector('.close');
var overlay = document.querySelector('.overlay');
var inputBox = document.querySelector('#inputBox');
var display = document.querySelector('.results');
var searchButton = document.querySelector('#searchButton');
var searchedName = document.querySelector(".results h2")


var dictionary = [{ name: 'Earth',
                    definition: 'the planet on which we live; the world.'

                  },

                  { name: 'Space',
                    definition: 'a continuous area or expanse which is free, available, or unoccupied.'
                  },

                  { name: 'Air',
                    definition: 'the invisible gaseous substance surrounding the earth, a mixture mainly of oxygen and nitrogen.'
                  },

                  {
                    name: 'Vicarious',
                    definition: 'experienced in the imagination through the feelings or actions of another person.'
                  },
                  {
                    name: 'Programming',
                    definition: 'the process of writing computer programs.'
                  },

                  {
                    name: 'Mlab',
                    definition: 'Building Africa’s most vibrant tech innovation ecosystem through communities, code, lean innovation and start-up acceleration.'
                  },

]

function openMenu() {

    overlay.style.display = 'block';

}

function closeMenu() {
    if (overlay.style.display = 'block') {
        overlay.style.display = 'none';
    }
}

function searching(){

display.style.display = 'inline-block';

  for (var i = 0; i < dictionary.length; i++)
  {
    if (inputBox.value === dictionary[i].name)
    {
      console.log(dictionary);
      document.querySelector('.results p').innerHTML = dictionary[i].definition;
    }
  }
  searchedName.innerHTML = inputBox.value;

}



menu.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
searchButton.addEventListener('click', searching);
