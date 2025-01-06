let currentIndex = 0;

const slides = document.querySelectorAll(".carousel-slide img");
const totalSlides = slides.length;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    document.querySelector(".carousel-slide").style.transform = `translateX(-${index * slideWidth}px)`;
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 3000);
