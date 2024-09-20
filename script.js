let numberDrum = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberDrum; i++) {
    document.querySelectorAll(".drum")[i].
        addEventListener("click", function () {
            let buttonInerHtml = this.innerHtml;

            makeSound(buttonInerHtml);
            buttonAnimation('buttonInerHtml');

        })
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/drum1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/drum2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/drum3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/drum4.mp3");
            tom4.play();
            break;
        case "j":
            let tom5 = new Audio("sounds/drum5.mp3");
            tom5.play();
            break;
        case "k":
            let tom6 = new Audio("sounds/drum6.mp3");
            tom6.play();
            break;
        case "l":
            let tom7 = new Audio("sounds/drum7.mp3");
            tom7.play();
            break;
        default:console.log(key)    
    }
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("."+currentKey)
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100)
}