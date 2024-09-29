document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;

    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    // Función para el efecto de escritura
    function typeEffect(element, content, speed) {
        let text = '';
        let index = 0;

        function type() {
            text += content[index];
            element.innerHTML = text;
            index++;

            if (index < content.length) {
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Función para cargar la escritura letra por letra cuando se desliza hacia una sección
    function handleScroll(event) {
        const direction = event.deltaY > 0 ? 1 : -1;

        if (direction === 1 && currentSectionIndex < sections.length - 1) {
            sections[currentSectionIndex].classList.remove('active');
            currentSectionIndex++;
            sections[currentSectionIndex].classList.add('active');
            const typewriteElement = sections[currentSectionIndex].querySelector('.typewrite');
            if (typewriteElement && !typewriteElement.classList.contains('typed')) {
                const content = typewriteElement.getAttribute('data-content');
                typeEffect(typewriteElement, content, 50);
                typewriteElement.classList.add('typed'); // Asegura que no se repita la animación
            }
        } else if (direction === -1 && currentSectionIndex > 0) {
            sections[currentSectionIndex].classList.remove('active');
            currentSectionIndex--;
            sections[currentSectionIndex].classList.add('active');
            const typewriteElement = sections[currentSectionIndex].querySelector('.typewrite');
            if (typewriteElement && !typewriteElement.classList.contains('typed')) {
                const content = typewriteElement.getAttribute('data-content');
                typeEffect(typewriteElement, content, 50);
                typewriteElement.classList.add('typed');
            }
        }
    }

    // Añadir clase "active" a la primera sección y activar el efecto de escritura
    sections[currentSectionIndex].classList.add('active');
    const firstTypewrite = sections[currentSectionIndex].querySelector('.typewrite');
    if (firstTypewrite) {
        const content = firstTypewrite.getAttribute('data-content');
        typeEffect(firstTypewrite, content, 50);
    }

    // Evento para detectar el scroll
    window.addEventListener('wheel', handleScroll);
});