document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sections = document.querySelectorAll('section');

    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    // Función para mostrar cada línea con un efecto desvanecido
    function showLinesWithFade(element, content, speed) {
        const lines = content.split('\n');  // Dividimos el contenido en líneas
        let index = 0;

        function showLine() {
            if (index < lines.length) {
                const newLine = document.createElement('span');  // Creamos un span para cada línea
                newLine.innerHTML = lines[index] + '<br>';  // Añadimos el contenido de la línea
                newLine.classList.add('fade-in');  // Agregamos la clase de desvanecimiento
                element.appendChild(newLine);
                index++;
                setTimeout(showLine, speed);  // Mostramos la siguiente línea con el tiempo indicado
            }
        }
        showLine();
    }

    // Iniciar el efecto de mostrar línea por línea con desvanecimiento en una sección
    function handleScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                const typewriteElement = section.querySelector('.typewrite');
                if (typewriteElement && !typewriteElement.classList.contains('typed')) {
                    const content = typewriteElement.getAttribute('data-content');
                    showLinesWithFade(typewriteElement, content, 500);  // Mostramos líneas cada 500 ms
                    typewriteElement.classList.add('typed');  // Evitar que se repita el efecto
                }
            }
        });
    }

    // Añadir la clase "active" a la primera sección
    sections[0].classList.add('active');
    const firstTypewrite = sections[0].querySelector('.typewrite');
    if (firstTypewrite) {
        const content = firstTypewrite.getAttribute('data-content');
        showLinesWithFade(firstTypewrite, content, 500);  // Mostrar líneas en la primera sección
    }

    // Evento para manejar el scroll
    window.addEventListener('scroll', handleScroll);
});