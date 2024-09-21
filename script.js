let currentAudio = null;
let drums = document.querySelectorAll(".drum");
let numberDrum = drums.length;

for (let i = 0; i < numberDrum; i++) {
    drums[i].addEventListener("click", function () {
        let buttonInnerHtml = this.innerHTML;

        stopCurrentSound();
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keypress", function (event) {
    stopCurrentSound();
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    const sounds = {
        "w": "sounds/drum1.mp3",
        "a": "sounds/drum2.mp3",
        "s": "sounds/drum3.mp3",
        "d": "sounds/drum11.mp3",
        "j": "sounds/drum10.mp3",
        "k": "sounds/drum6.mp3",
        "l": "sounds/drum7.mp3"
    };
    
    if (sounds[key]) {
        if (typeof Audio !== "undefined") {
            currentAudio = new Audio(sounds[key]);
            currentAudio.play();
        } else {
            console.error("Audio API is not supported.");
        }
    } else {
        console.log(`Invalid key: ${key}`);
    }
}

function stopCurrentSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");

        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
