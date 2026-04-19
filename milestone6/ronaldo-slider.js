// Note to teacher: I used AI assistance for the JavaScript portion of this Ronaldo image slider.

const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentSlide = 0;
let autoSlide;

function showSlide(index) {
    slides.forEach(function (slide) {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function startAutoSlide() {
    autoSlide = setInterval(function () {
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    }, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

nextBtn.addEventListener("click", function () {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
    resetAutoSlide();
});

prevBtn.addEventListener("click", function () {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
    resetAutoSlide();
});

startAutoSlide();
