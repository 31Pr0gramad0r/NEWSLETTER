document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    // Función para aplicar el efecto de desvanecimiento al párrafo completo
    function showParagraphWithFade(element) {
        element.classList.add('fade-in');  // Agregamos la clase de desvanecimiento
    }

    // Iniciar el efecto de desvanecimiento en los párrafos cuando están en la vista
    function handleScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                const typewriteElement = section.querySelector('.typewrite');
                if (typewriteElement && !typewriteElement.classList.contains('typed')) {
                    showParagraphWithFade(typewriteElement);  // Aplicamos el desvanecimiento al párrafo
                    typewriteElement.classList.add('typed');  // Evitar que se repita el efecto
                }
            }
        });
    }

    // Evento para manejar el scroll
    window.addEventListener('scroll', handleScroll);
});