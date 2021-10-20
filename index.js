let randomNum1 = Math.floor(Math.random() * 6) + 1; //random Number 1-6

var randomDiceImage = "dice" + randomNum1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

let randomNum2 = Math.floor(Math.random() * 6) + 1; //random Number 1-6

var randomImageSource2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

  function refreshPage(){
    window.location.reload();
} 
  







