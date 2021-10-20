var randomNum1 = Math.floor(Math.random() * 6) + 1; //random Number 1-6

var randomDiceImage = "dice" + randomNum1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


