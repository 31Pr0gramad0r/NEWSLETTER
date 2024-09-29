document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;

    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    // Función para el efecto de mostrar línea por línea
    function showLines(element, content, speed) {
        const lines = content.split('\n');  // Dividimos el contenido en líneas
        let index = 0;

        function showLine() {
            if (index < lines.length) {
                element.innerHTML += lines[index] + '<br>';  // Agregamos cada línea con un salto de línea
                index++;
                setTimeout(showLine, speed);  // Esperamos para mostrar la siguiente línea
            }
        }
        showLine();
    }

    // Función para manejar el scroll y transiciones suaves
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

        // Iniciar el efecto de mostrar línea por línea si aún no se ha mostrado
        const typewriteElement = sections[currentSectionIndex].querySelector('.typewrite');
        if (typewriteElement && !typewriteElement.classList.contains('typed')) {
            const content = typewriteElement.getAttribute('data-content');
            showLines(typewriteElement, content, 500);  // Ajustamos la velocidad entre líneas
            typewriteElement.classList.add('typed'); // Evitar que se repita el efecto
        }
    }

    // Añadir clase "active" a la primera sección
    sections[currentSectionIndex].classList.add('active');
    const firstTypewrite = sections[currentSectionIndex].querySelector('.typewrite');
    if (firstTypewrite) {
        const content = firstTypewrite.getAttribute('data-content');
        showLines(firstTypewrite, content, 500);  // Mostrar líneas más rápido
    }

    // Evento para permitir el scroll sin bloquear
    window.addEventListener('wheel', handleScroll);
});