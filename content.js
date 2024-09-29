const sections = [
    {
        id: "disruptiva",
        title: "Bitcoin Cash: Una Tecnología Disruptiva",
        content: `<p>Bitcoin Cash es una tecnología disruptiva que ha roto las barreras del sistema financiero tradicional...</p>`
    },
    {
        id: "blockchain-seguridad",
        title: "Blockchain y su Impacto en la Seguridad",
        content: `<p>La blockchain es la base que garantiza la seguridad de las transacciones...</p>`
    },
    // Agregar más secciones aquí...
];

// Cargar el menú y el contenido
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.getElementById('menu-items');
    const mainContent = document.getElementById('main-content');

    sections.forEach(section => {
        // Crear el menú
        const menuItem = document.createElement('li');
        const menuLink = document.createElement('a');
        menuLink.href = `#${section.id}`;
        menuLink.textContent = section.title;
        menuItem.appendChild(menuLink);
        menuItems.appendChild(menuItem);

        // Crear las secciones
        const sectionElement = document.createElement('section');
        sectionElement.id = section.id;
        sectionElement.innerHTML = `<h2>${section.title}</h2>${section.content}`;
        mainContent.appendChild(sectionElement);
    });
});
