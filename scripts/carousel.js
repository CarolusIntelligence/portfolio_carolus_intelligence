const carouselImages = document.querySelector('.carousel-images');
const totalImages = document.querySelectorAll('.carousel-item').length;
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Retourne à la première image
    }
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1; // Retourne à la dernière image
    }
    updateCarousel();
});

function updateCarousel() {
    const translateXValue = -(currentIndex * 100);
    carouselImages.style.transform = `translateX(${translateXValue}%)`;
}

