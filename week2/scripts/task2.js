/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name


// Step 2:Dplace the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = "Harvey Sagario";

// Step 3: declare and instantiate a variable to hold the current year

const year = "2023"
// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = year;

// Step 5: declare and instantiate a variable to hold the name of your picture


// Step 6: copy your image into the "images" folder


// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#img').setAttribute('src', 'images/placeholder.png')



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const foods = [
    "Adobo",
    "Fried Chicken",
    "Burger"
  ];
  

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = foods;

// Step 3: declare and instantiate a variable to hold another favorite food


// Step 4: add the variable holding another favorite food to the favorite food array
const foodsecond = [
    "Rice",
    "Potato",
    "Shawarma"
  ];



// Step 5: repeat Step 2
document.querySelector('#foodsecond').innerHTML = foodsecond;


// Step 6: remove the first element in the favorite foods array
document.querySelector('#food').innerHTML = foods.slice(1)

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = foods;

// Step 8: remove the last element in the favorite foods array
document.querySelector('#food').innerHTML = foods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = foods;

