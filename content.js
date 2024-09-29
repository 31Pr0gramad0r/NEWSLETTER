const sections = [
    {
        id: "disruptiva",
        title: "Bitcoin Cash: Una Tecnología Disruptiva",
        content: `Bitcoin Cash es una tecnología disruptiva.\nRompe las barreras del sistema financiero tradicional.\nPermite a las personas intercambiar valor sin intermediarios como bancos o gobiernos...\nEsto no solo es una mejora, sino una revolución.\nSin embargo, la resistencia al cambio surge porque la mayoría de las personas están acostumbradas a confiar en terceros para gestionar su dinero, algo que Bitcoin Cash elimina.`
    },
    {
        id: "blockchain-seguridad",
        title: "Blockchain y su Impacto en la Seguridad",
        content: `La blockchain es la base que garantiza la seguridad de las transacciones.\nBitcoin Cash utiliza esta tecnología para crear un registro inmutable.\nEsto asegura que las transacciones no puedan ser modificadas ni eliminadas.\nEste sistema ha demostrado ser más seguro que los bancos tradicionales, que pueden ser vulnerables a ataques cibernéticos.\nEjemplo en el mundo real: En Venezuela, Bitcoin Cash ha sido clave para que los ciudadanos preserven su dinero en un entorno de censura financiera e inflación.`
    },
    {
        id: "pagos-globales",
        title: "Pagos Globales con Bitcoin Cash",
        content: `Bitcoin Cash permite enviar dinero a cualquier parte del mundo con tarifas mínimas.\nA diferencia de los sistemas tradicionales como Western Union, no hay necesidad de esperar varios días para procesar las transferencias.\nEjemplo en el mundo real: En África, Bitcoin Cash se utiliza para enviar remesas familiares, ahorrando hasta un 90% en tarifas de transacción.`
    },
    {
        id: "contratos-inteligentes",
        title: "Contratos Inteligentes",
        content: `Bitcoin Cash también soporta contratos inteligentes.\nEsto permite la automatización de acuerdos legales y financieros sin necesidad de intermediarios.\nLos contratos inteligentes pueden reducir costos y aumentar la eficiencia en múltiples industrias.\nEjemplo en el mundo real: En la industria de seguros, se están utilizando contratos inteligentes en Bitcoin Cash para automatizar pagos según condiciones, como el clima o retrasos de vuelos, ahorrando tiempo y dinero.`
    },
    {
        id: "nfts-tokenizacion",
        title: "NFTs y Tokenización en Bitcoin Cash",
        content: `La capacidad de tokenizar activos y crear NFTs en Bitcoin Cash está revolucionando el mundo del arte, la propiedad y el entretenimiento.\nLos NFTs permiten que los creadores vendan directamente a su audiencia, eliminando intermediarios como galerías de arte.\nEjemplo en el mundo real: En 2021, un artista digital vendió una pieza de arte tokenizada en Bitcoin Cash por más de $100,000, sin necesidad de una galería física.`
    },
    {
        id: "casos-uso",
        title: "Casos de Uso en el Mundo Real",
        content: `Bitcoin Cash está siendo utilizado por empresas y comunidades en todo el mundo para resolver problemas locales y globales.\nDesde tiendas que aceptan pagos en criptomonedas hasta soluciones para ayudar a comunidades sin acceso bancario.\nEjemplo en el mundo real: En Japón, un restaurante que acepta solo Bitcoin Cash ha visto aumentar sus ventas, ya que atrae a clientes que prefieren pagar con criptomonedas.`
    },
    {
        id: "inclusion-financiera",
        title: "Inclusión Financiera",
        content: `Bitcoin Cash está jugando un papel fundamental en la inclusión financiera.\nPermite que personas no bancarizadas tengan acceso a servicios financieros.\nCon solo un teléfono móvil, cualquiera puede almacenar y transferir valor sin necesidad de una cuenta bancaria.\nEjemplo en el mundo real: En Kenia, donde muchas personas no tienen acceso a bancos, Bitcoin Cash proporciona una forma segura de guardar dinero y realizar pagos.`
    },
    {
        id: "medioambiente",
        title: "Bitcoin Cash y el Medioambiente",
        content: `En comparación con otras criptomonedas, Bitcoin Cash tiene un menor consumo de energía.\nEsto lo convierte en una opción más ecológica para las transacciones.\nSe están desarrollando iniciativas para hacer que el proceso de minería sea más eficiente y sostenible.\nEjemplo en el mundo real: En Islandia, se están utilizando energías renovables para alimentar las operaciones de minería de Bitcoin Cash, minimizando su huella de carbono.`
    },
    {
        id: "educacion-adopcion",
        title: "Educación y Adopción de Bitcoin Cash",
        content: `La adopción de Bitcoin Cash está creciendo gracias a iniciativas educativas.\nEstas enseñan a las personas cómo utilizarlo de manera segura y efectiva.\nLa educación es clave para la adopción masiva de la criptomoneda.\nEjemplo en el mundo real: En América Latina, varias organizaciones sin fines de lucro están enseñando a comunidades rurales a usar Bitcoin Cash como una forma de ahorro e inversión.`
    },
    {
        id: "regulaciones-desafios",
        title: "Regulaciones y Desafíos Legales",
        content: `El futuro de Bitcoin Cash está influenciado por las regulaciones gubernamentales.\nAlgunos países han sido más rápidos en adoptar políticas que permiten el uso de criptomonedas, mientras que otros han impuesto restricciones.\nEjemplo en el mundo real: En Suiza, Bitcoin Cash es aceptado en muchas tiendas y restaurantes debido a sus leyes favorables hacia las criptomonedas.`
    },
    {
        id: "identidad-digital",
        title: "Identidad Digital Descentralizada",
        content: `Bitcoin Cash tiene el potencial de revolucionar la identidad digital.\nCon blockchain, es posible crear sistemas de identidad que no dependan de gobiernos o empresas privadas.\nEsto ofrece a las personas control total sobre su información personal.\nEjemplo en el mundo real: En Estonia, el gobierno ha comenzado a explorar la creación de una identidad digital basada en la blockchain, permitiendo a los ciudadanos acceder a servicios públicos sin identificarse con métodos tradicionales.`
    }

];



document.addEventListener('DOMContentLoaded', function () {
    const mainContent = document.getElementById('main-content');

    sections.forEach(section => {
        const sectionElement = document.createElement('section');
        sectionElement.id = section.id;
        sectionElement.innerHTML = `<h2>${section.title}</h2><p>${section.content}</p>`;
        mainContent.appendChild(sectionElement);
    });
});