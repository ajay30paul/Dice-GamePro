var play1Name = prompt("Enter Player 1's Name");
var play2Name = prompt("Enter Player 2's Name");
var randomNumber1 = Math.floor(Math.random()*6) +1;
var play1Edit = document.getElementsByTagName("p")[0].innerHTML=play1Name;
var play2Edit = document.getElementsByTagName("p")[1].innerHTML=play2Name;




var randomDiceImage = "dice"+randomNumber1+".png";
var randomImageSource = "images/"+ randomDiceImage;

var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor((Math.random() *6) +1);
var randomDiceImage2 = "images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src" , randomDiceImage2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= play1Edit+" Wins!";

} else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = play2Edit+" Wins!";

} else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw ! Play again By giving the Names";
}



