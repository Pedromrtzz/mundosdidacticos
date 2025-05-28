window.addEventListener('DOMContentLoaded', function() {

    // Función para manejar los sliders
    function showSlide(sliderId, slideIndex) {
        const slides = document.querySelectorAll(`#${sliderId} .slide`);
        slides.forEach(slide => slide.classList.remove('active')); // Ocultar todas las imágenes
        slides[slideIndex].classList.add('active'); // Mostrar solo la imagen seleccionada
    }

    // Variables de índice para cada slider
    const slideIndexes = {
        'slider-izquierdo': 0,
        'slider-derecho': 0
    };

    // Mostrar la primera imagen de cada slider
    showSlide('slider-izquierdo', slideIndexes['slider-izquierdo']);
    showSlide('slider-derecho', slideIndexes['slider-derecho']);

    // Función para pasar a la siguiente imagen
    window.nextSlide = function(sliderId) {
        const slides = document.querySelectorAll(`#${sliderId} .slide`);
        slideIndexes[sliderId] = (slideIndexes[sliderId] + 1) % slides.length;
        showSlide(sliderId, slideIndexes[sliderId]);
    };

    // Función para regresar a la imagen anterior
    window.prevSlide = function(sliderId) {
        const slides = document.querySelectorAll(`#${sliderId} .slide`);
        slideIndexes[sliderId] =
            (slideIndexes[sliderId] - 1 + slides.length) % slides.length;
        showSlide(sliderId, slideIndexes[sliderId]);
    };

});


