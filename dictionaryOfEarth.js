var menu = document.querySelector('.menu');
var close = document.querySelector('.close');
var overlay = document.querySelector('.overlay');
var inputBox = document.querySelector('#inputBox');
var display = document.querySelector('.results');
var searchButton = document.querySelector('#searchButton');
var searchedName = document.querySelector(".results h2")


var dictionary = [{ name: 'Earth',
                    definition: 'The planet on which we live; the world.'

                  },

                  { name: 'Space',
                    definition: 'A continuous area or expanse which is free, available, or unoccupied.'
                  },

                  { name: 'Air',
                    definition: 'The invisible gaseous substance surrounding the earth, a mixture mainly of oxygen and nitrogen.'
                  },

                  {
                    name: 'Vicarious',
                    definition: 'Experienced in the imagination through the feelings or actions of another person.'
                  },
                  {
                    name: 'Programming',
                    definition: 'The process of writing computer programs.'
                  },

                  {
                    name: 'Mlab',
                    definition: 'Building Africa’s most vibrant tech innovation ecosystem through communities, code, lean innovation and start-up acceleration.'
                  },
                  {
                    name: 'Aerosol',
                    definition: 'A substance enclosed under pressure and released as a fine spray by means of a propellant gas.'
                  },

                  {
                    name: 'Atmosphere',
                    definition: 'The envelope of gases surrounding the earth or another planet.'
                  },
                  {
                    name: 'NASA',
                    definition: 'NASA stands for National Aeronautics and Space Administration. NASA was started in 1958 as a part of the United States government. NASA is in charge of U.S. science and technology that has to do with airplanes or space.'
                  },

                  {
                    name:'Mercury',
                    definition: 'The chemical element of atomic number 80, a heavy silvery-white metal which is liquid at ordinary temperatures.'
                  }
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
