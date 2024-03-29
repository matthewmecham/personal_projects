// // Event listener for 'w'
// document.querySelector("button.w").addEventListener("click", function () {
//     // I can't believe this is standard syntax for an event listener. Gross.
//     alert("w was clicked!");

// });

// // Event listener for 'a'
// document.querySelector("button.a").addEventListener("click", function () {
//     // I can't believe this is standard syntax for an event listener. Gross.

//     alert("a was clicked!");

// });

// // Event listener for 's'
// document.querySelector("button.s").addEventListener("click", function () {
//     // I can't believe this is standard syntax for an event listener. Gross.

//     alert("s was clicked!");

// });

// // Event listener for 'd'
// document.querySelector("button.d").addEventListener("click", function () {
//     // I can't believe this is standard syntax for an event listener. Gross.

//     alert("d was clicked!");

// });

// // Event listener for 'j'
// document.querySelector("button.j").addEventListener("click", function () {
//     // I can't believe this is standard syntax for an event listener. Gross.

//     alert("j was clicked!");

// });

// // Event listener for 'k'
// document.querySelector("button.j").addEventListener("click", function () {
//     // I can't believe this is standard syntax for an event listener. Gross.

//     alert("k was clicked!");

// });

// // Event listener for 'l'
// document.querySelector("button.l").addEventListener("click", function () {
//     // I can't believe this is standard syntax for an event listener. Gross.

//     alert("l was clicked!");

// });

var numOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrums; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        switch(this.innerHTML) {
            case "w":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play().
                break;
            case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                audio.play().
                break;
            case "s":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                audio.play().
                break;
            case "d":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play().
                break;
            case "j":
                var kick = new Audio("./sounds/kick-bass.mp3");
                kick.play().
                break;
            case "k":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play().
                break;
            case "l":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play().
                break;
        }
    });

}

        // var audio = new Audio("./sounds/tom-1.mp3");
        // audio.play();