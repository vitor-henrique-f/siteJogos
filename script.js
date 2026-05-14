const video = document.getElementById('blackHole');
video.playbackRate = 0.8;

const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");

const leftArrow = document.getElementById("lArrow");
const rightArrow = document.getElementById("rArrow");

let index = 0;

function updateSlide(){
    slides.style.transform = `translateX(-${index * 100}%)`;
}

rightArrow.addEventListener("click", () => {

    index++;

    if(index >= slide.length){
        index = 0;
    }

    updateSlide();
});

leftArrow.addEventListener("click", () => {

    index--;

    if(index < 0){
        index = slide.length - 1;
    }

    updateSlide();
});