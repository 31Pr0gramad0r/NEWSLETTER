document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;

    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    // Función para cambiar de sección cuando se desliza hacia arriba o abajo
    function handleScroll(event) {
        const direction = event.deltaY > 0 ? 1 : -1;
        if (direction === 1 && currentSectionIndex < sections.length - 1) {
            // Siguiente sección
            sections[currentSectionIndex].classList.remove('active');
            currentSectionIndex++;
            sections[currentSectionIndex].classList.add('active');
        } else if (direction === -1 && currentSectionIndex > 0) {
            // Sección anterior
            sections[currentSectionIndex].classList.remove('active');
            currentSectionIndex--;
            sections[currentSectionIndex].classList.add('active');
        }
    }

    // Añadir clase "active" a la primera sección
    sections[currentSectionIndex].classList.add('active');

    // Evento para detectar el scroll
    window.addEventListener('wheel', handleScroll);
});