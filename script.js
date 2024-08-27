const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 1;

function updateSlides() {
    slides.forEach((slide, index) => {
        // Si la imagen es la central
        if (index === currentSlide + 1) {
            slide.classList.add('active');
            slide.classList.remove('inactive');
        } 
        // Si la imagen es la anterior o la siguiente a la central
        else if (index === (currentSlide - 1 + totalSlides) % totalSlides || index === (currentSlide + 1) % totalSlides) {
            slide.classList.add('inactive');
            slide.classList.remove('active');
        } 
        // Para las demás imágenes
        else {
            slide.classList.remove('active');
            slide.classList.add('inactive');
        }
    });

    // Ajusta la posición del carrusel para mostrar siempre tres imágenes
    document.querySelector('.carousel').style.transform = `translateX(${-currentSlide * 33.3333}%)`;
}

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlides();
});

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlides();
});

// Auto-slide every 3 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlides();
}, 3000);

// Initialize
updateSlides();