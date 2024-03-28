var randomNum1 = Math.floor(Math.random() * 6 + 1);
var randomNum2 = Math.floor(Math.random() * 6 + 1);
var img1 = "./images/dice" + randomNum1 + ".png";
var img2 = "./images/dice" + randomNum2 + ".png";
document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);

if(img1 > img2) {
    document.querySelector("h1").textContent = "&#128681 Player 1 Wins!"
} else if (img2 > img1) {
    document.querySelector("h1").textContent = "Player 2 Wins! &#128681"
} else {
    document.querySelector("h1").textContent = "Draw!"
}