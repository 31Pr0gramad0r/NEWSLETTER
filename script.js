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

    // Función para manejar el scroll y transiciones suaves sin bloquear el desplazamiento
    function handleScroll(event) {
        const direction = event.deltaY > 0 ? 1 : -1;

        // Mover a la siguiente sección o la anterior
        if (direction === 1 && currentSectionIndex < sections.length - 1) {
            sections[currentSectionIndex].classList.remove('active');
            currentSectionIndex++;
            sections[currentSectionIndex].classList.add('active');
        } else if (direction === -1 && currentSectionIndex > 0) {
            sections[currentSectionIndex].classList.remove('active');
            currentSectionIndex--;
            sections[currentSectionIndex].classList.add('active');
        }

        // Iniciar el efecto de escritura si aún no se ha escrito
        const typewriteElement = sections[currentSectionIndex].querySelector('.typewrite');
        if (typewriteElement && !typewriteElement.classList.contains('typed')) {
            const content = typewriteElement.getAttribute('data-content');
            typeEffect(typewriteElement, content, 20);  // Aumento de la velocidad a 20ms por letra
            typewriteElement.classList.add('typed'); // Evitar que se repita el efecto
        }
    }

    // Añadir clase "active" a la primera sección
    sections[currentSectionIndex].classList.add('active');
    const firstTypewrite = sections[currentSectionIndex].querySelector('.typewrite');
    if (firstTypewrite) {
        const content = firstTypewrite.getAttribute('data-content');
        typeEffect(firstTypewrite, content, 20);  // Aumento de la velocidad inicial a 20ms por letra
    }

    // Evento para permitir el scroll sin bloquear
    window.addEventListener('wheel', handleScroll);
});