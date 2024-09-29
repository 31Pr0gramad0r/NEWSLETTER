const sections = [
    {
        id: "disruptiva",
        title: "Bitcoin Cash: Una Tecnología Disruptiva",
        content: `<p>Bitcoin Cash es una tecnología disruptiva que ha roto las barreras del sistema financiero tradicional. Por primera vez en la historia, una moneda digital permite a las personas intercambiar valor sin depender de intermediarios como los bancos o gobiernos. Esto no solo es una mejora, sino una revolución. Sin embargo, la resistencia al cambio surge porque la mayoría de las personas están acostumbradas a confiar en terceros para gestionar su dinero, algo que Bitcoin Cash elimina.</p>
        <p>La razón por la que mucha gente no entiende su potencial es que nunca antes había existido una tecnología descentralizada a este nivel. La capacidad de transferir valor globalmente, sin censura, y a costos extremadamente bajos, es algo que solo la blockchain de Bitcoin Cash puede ofrecer hoy en día.</p>`
    },
    {
        id: "blockchain-seguridad",
        title: "Blockchain y su Impacto en la Seguridad",
        content: `<p>La blockchain es la base que garantiza la seguridad de las transacciones. Bitcoin Cash utiliza esta tecnología para crear un registro inmutable, lo que significa que las transacciones no pueden ser alteradas ni eliminadas. Este sistema ha demostrado ser más seguro que los bancos tradicionales, que pueden ser vulnerables a ataques cibernéticos.</p>
        <p><strong>Ejemplo en el mundo real:</strong> Un estudio reciente demostró que Bitcoin Cash ha sido una herramienta clave en países como Venezuela, donde la inflación y la censura financiera han hecho que los ciudadanos busquen alternativas para preservar su dinero de forma segura.</p>`
    },
    {
        id: "pagos-globales",
        title: "Pagos Globales con Bitcoin Cash",
        content: `<p>Bitcoin Cash permite enviar dinero a cualquier parte del mundo con tarifas mínimas, algo que los sistemas tradicionales como Western Union no pueden competir. Además, no hay necesidad de esperar varios días para que las transferencias se procesen.</p>
        <p><strong>Ejemplo en el mundo real:</strong> En África, Bitcoin Cash se ha utilizado para enviar remesas de familiares que viven en el extranjero, ahorrando hasta el 90% en tarifas de transacción.</p>`
    },
    {
        id: "contratos-inteligentes",
        title: "Contratos Inteligentes",
        content: `<p>Bitcoin Cash también soporta contratos inteligentes, lo que permite la automatización de acuerdos legales y financieros sin necesidad de intermediarios. Esto puede reducir costos y aumentar la eficiencia en múltiples industrias.</p>
        <p><strong>Ejemplo en el mundo real:</strong> En la industria de seguros, se están utilizando contratos inteligentes en Bitcoin Cash para automatizar pagos basados en condiciones como el clima o los retrasos en vuelos, ahorrando tiempo y dinero a las empresas.</p>`
    },
    {
        id: "nfts-tokenizacion",
        title: "NFTs y Tokenización en Bitcoin Cash",
        content: `<p>La capacidad de tokenizar activos y crear NFTs (tokens no fungibles) en Bitcoin Cash está revolucionando el mundo del arte, la propiedad y el entretenimiento. Los NFTs permiten que los creadores vendan directamente a su audiencia, eliminando intermediarios como galerías de arte.</p>
        <p><strong>Ejemplo en el mundo real:</strong> En 2021, un artista digital vendió una pieza de arte tokenizada en Bitcoin Cash por más de $100,000, todo sin necesidad de una galería física.</p>`
    },
    {
        id: "casos-uso",
        title: "Casos de Uso en el Mundo Real",
        content: `<p>Bitcoin Cash está siendo utilizado por empresas y comunidades en todo el mundo para resolver problemas locales y globales. Desde tiendas que aceptan pagos en criptomonedas hasta soluciones para ayudar a comunidades sin acceso bancario, las aplicaciones son innumerables.</p>
        <p><strong>Ejemplo en el mundo real:</strong> En Japón, un restaurante que acepta solo Bitcoin Cash ha visto aumentar sus ventas, ya que atrae a clientes que prefieren pagar con criptomonedas.</p>`
    },
    {
        id: "inclusion-financiera",
        title: "Inclusión Financiera",
        content: `<p>Bitcoin Cash está jugando un papel fundamental en la inclusión financiera, permitiendo que personas no bancarizadas tengan acceso a servicios financieros. Con solo un teléfono móvil, cualquiera puede almacenar y transferir valor sin necesidad de una cuenta bancaria.</p>
        <p><strong>Ejemplo en el mundo real:</strong> En países como Kenia, donde muchas personas no tienen acceso a bancos, Bitcoin Cash ha proporcionado una forma segura de guardar dinero y realizar pagos.</p>`
    },
    {
        id: "medioambiente",
        title: "Bitcoin Cash y el Medioambiente",
        content: `<p>En comparación con otras criptomonedas, Bitcoin Cash tiene un menor consumo de energía, lo que lo convierte en una opción más ecológica para las transacciones. Además, se están desarrollando iniciativas para hacer que el proceso de minería sea más eficiente y sostenible.</p>
        <p><strong>Ejemplo en el mundo real:</strong> En Islandia, se están utilizando energías renovables para alimentar las operaciones de minería de Bitcoin Cash, minimizando su huella de carbono.</p>`
    },
    {
        id: "educacion-adopcion",
        title: "Educación y Adopción de Bitcoin Cash",
        content: `<p>La adopción de Bitcoin Cash está creciendo gracias a iniciativas educativas que enseñan a las personas cómo utilizarlo de manera segura y efectiva. La educación es clave para la adopción masiva de la criptomoneda, y hay esfuerzos en todo el mundo para que más personas entiendan su valor.</p>
        <p><strong>Ejemplo en el mundo real:</strong> En América Latina, varias organizaciones sin fines de lucro están enseñando a comunidades rurales a usar Bitcoin Cash como una forma de ahorro e inversión.</p>`
    },
    {
        id: "regulaciones-desafios",
        title: "Regulaciones y Desafíos Legales",
        content: `<p>El futuro de Bitcoin Cash también está influenciado por las regulaciones gubernamentales. Algunos países han sido más rápidos en adoptar políticas que permiten el uso de criptomonedas, mientras que otros han impuesto restricciones.</p>
        <p><strong>Ejemplo en el mundo real:</strong> En Suiza, Bitcoin Cash es aceptado en muchas tiendas y restaurantes debido a sus leyes favorables hacia las criptomonedas. Por otro lado, en países como China, las restricciones más estrictas han hecho que el uso de Bitcoin Cash se mueva hacia canales más informales.</p>`
    },
    {
        id: "identidad-digital",
        title: "Identidad Digital Descentralizada",
        content: `<p>Bitcoin Cash también tiene el potencial de revolucionar la identidad digital. A través de la blockchain, es posible crear sistemas de identidad que no dependan de gobiernos o empresas privadas, ofreciendo a las personas control total sobre su información personal.</p>
        <p><strong>Ejemplo en el mundo real:</strong> En Estonia, el gobierno ha comenzado a explorar la creación de una identidad digital basada en la blockchain, lo que permitiría a los ciudadanos acceder a servicios públicos sin la necesidad de identificarse a través de métodos tradicionales.</p>`
    }
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