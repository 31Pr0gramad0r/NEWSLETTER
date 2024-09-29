const sections = [
    {
        id: "disruptiva",
        title: "Bitcoin Cash: Una TecnologÃ­a Disruptiva",
        content: `Bitcoin Cash es una tecnologÃ­a disruptiva. Rompe las barreras del sistema financiero tradicional. Permite a las personas intercambiar valor sin intermediarios como bancos o gobiernos...`
    },
    {
        id: "blockchain-seguridad",
        title: "Blockchain y su Impacto en la Seguridad",
        content: `La blockchain es la base que garantiza la seguridad de las transacciones. Bitcoin Cash utiliza esta tecnologÃ­a para crear un registro inmutable...`
    },
    {
        id: "remesas",
        title: "Remesas Internacionales RÃ¡pidas y Baratas",
        content: `Las remesas internacionales son costosas y lentas. Bitcoin Cash permite enviar dinero internacionalmente en minutos, con tarifas extremadamente bajas (menos de $0.01), facilitando a las familias recibir dinero rÃ¡pidamente sin perder grandes cantidades en tarifas de intermediarios.`
    },
    {
        id: "inclusion-financiera",
        title: "InclusiÃ³n Financiera Global",
        content: `Bitcoin Cash ofrece una soluciÃ³n a la falta de acceso a servicios bancarios en muchas partes del mundo. Con solo un telÃ©fono mÃ³vil, cualquier persona puede almacenar, enviar y recibir dinero, sin importar dÃ³nde se encuentre, sin necesidad de una cuenta bancaria tradicional.`
    },
    {
        id: "efecto-cantillon",
        title: "El Efecto Cantillon",
        content: `El efecto Cantillon explica cÃ³mo la creaciÃ³n de nuevo dinero beneficia primero a los mÃ¡s cercanos al sistema financiero, mientras que el resto de la poblaciÃ³n sufre por el aumento de los precios. Bitcoin Cash mitiga este efecto al no depender de la emisiÃ³n arbitraria de dinero.`
    },
    {
        id: "efecto-gresham",
        title: "El Efecto Gresham",
        content: `El efecto Gresham establece que el 'dinero malo expulsa al bueno'. Bitcoin Cash, al ser una moneda deflacionaria, incentiva a las personas a conservarlo, rompiendo el ciclo donde el dinero devaluado es gastado rÃ¡pidamente mientras se guarda el dinero que tiene mÃ¡s valor.`
    },
    {
        id: "ciclos-economicos",
        title: "TeorÃ­a de los Ciclos EconÃ³micos",
        content: `SegÃºn la Escuela AustrÃ­aca, los ciclos econÃ³micos son causados por la manipulaciÃ³n de las tasas de interÃ©s y la oferta de dinero por los bancos centrales. Bitcoin Cash, al no depender de la intervenciÃ³n de bancos centrales, reduce la influencia de estos ciclos artificiales.`
    },
    {
        id: "valor-subjetivo",
        title: "TeorÃ­a del Valor Subjetivo",
        content: `El valor de Bitcoin Cash depende Ãºnicamente de la demanda del mercado y su utilidad, no de decisiones gubernamentales. Esto permite que las personas determinen el valor de la moneda en funciÃ³n de lo que estÃ©n dispuestas a intercambiar por ella.`
    },
    {
        id: "inflacion-fiscal",
        title: "InflaciÃ³n Fiscal",
        content: `Los gobiernos a menudo financian dÃ©ficits imprimiendo dinero, lo que crea inflaciÃ³n y reduce el poder adquisitivo de las personas. Bitcoin Cash, con su suministro limitado, protege a los usuarios de la inflaciÃ³n causada por la emisiÃ³n excesiva de dinero por los gobiernos.`
    },
    {
        id: "privatizacion-dinero",
        title: "PrivatizaciÃ³n del Dinero",
        content: `HistÃ³ricamente, los gobiernos han controlado la emisiÃ³n de dinero, pero Bitcoin Cash permite la privatizaciÃ³n del dinero, ofreciendo una alternativa descentralizada donde ninguna entidad central controla la emisiÃ³n o circulaciÃ³n del dinero.`
    },
    {
        id: "pagos-transfronterizos",
        title: "Pagos Transfronterizos Eficientes",
        content: `Bitcoin Cash permite pagos internacionales instantÃ¡neos y con tarifas mÃ­nimas, eliminando los intermediarios que retrasan y encarecen las transferencias internacionales en los sistemas financieros tradicionales.`
    },
    {
        id: "dinero-programable",
        title: "Dinero Programable y Libertad",
        content: `Mientras los gobiernos exploran monedas digitales centralizadas que podrÃ­an restringir el uso del dinero de los ciudadanos, Bitcoin Cash ofrece dinero programable descentralizado, donde los usuarios pueden establecer sus propias reglas sin la intervenciÃ³n de terceros.`
    },
    {
        id: "desigualdad-financiera",
        title: "Desigualdad Financiera Global",
        content: `Bitcoin Cash reduce las barreras de entrada al sistema financiero, permitiendo que personas de todo el mundo, incluso aquellas sin acceso a cuentas bancarias tradicionales, participen en la economÃ­a global y mejoren su situaciÃ³n financiera.`
    },
    {
        id: "confianza-deuda",
        title: "Problemas de Confianza y EmisiÃ³n de Deuda",
        content: `Mientras los gobiernos dependen de la emisiÃ³n de deuda para financiarse, Bitcoin Cash no estÃ¡ vinculado a obligaciones de deuda, proporcionando una alternativa segura como reserva de valor que no depende de la capacidad de los gobiernos para pagar sus deudas.`
    },
    {
        id: "centralizacion-dinero",
        title: "Paradoja de la CentralizaciÃ³n del Dinero",
        content: `El sistema financiero tradicional depende de la centralizaciÃ³n del dinero a travÃ©s de bancos y gobiernos. Bitcoin Cash, al ser descentralizado, resuelve esta paradoja devolviendo el control del dinero a las personas, sin intermediarios.`
    },
    {
        id: "dinero-digital-privacidad",
        title: "Paradoja del Dinero Digital y la Privacidad",
        content: `Los sistemas de pago digital comprometen la privacidad al compartir informaciÃ³n con intermediarios. Bitcoin Cash soluciona esto mediante la seudonimizaciÃ³n, permitiendo que los usuarios mantengan su privacidad sin depender de terceros.`
    },
    {
        id: "inflacion",
        title: "Paradoja de la InflaciÃ³n",
        content: `La creaciÃ³n arbitraria de dinero por parte de los gobiernos provoca inflaciÃ³n y reduce el poder adquisitivo. Bitcoin Cash, con su suministro limitado, resuelve esta paradoja protegiendo a sus usuarios de la devaluaciÃ³n de su dinero.`
    },
    {
        id: "acceso-servicios-bancarios",
        title: "Paradoja del Acceso a los Servicios Bancarios",
        content: `Millones de personas no tienen acceso a servicios bancarios, aunque el sistema financiero deberÃ­a ser inclusivo. Bitcoin Cash resuelve esta paradoja al permitir a cualquier persona almacenar y transferir dinero sin necesidad de un banco.`
    },
    {
        id: "sistema-legal-contratos",
        title: "Paradoja del Sistema Legal y los Contratos",
        content: `Los contratos tradicionales requieren intermediarios para ser ejecutados. Bitcoin Cash resuelve esta paradoja al permitir la creaciÃ³n de contratos inteligentes que se ejecutan automÃ¡ticamente sin necesidad de abogados o notarios.`
    },
    {
        id: "confianza-bancaria",
        title: "Paradoja de la Confianza en el Sistema Bancario",
        content: `Los bancos dependen de la confianza de los usuarios para mantener sus fondos seguros. Bitcoin Cash elimina esta paradoja otorgando a los usuarios control directo sobre su dinero, sin depender de terceros.`
    },
    {
        id: "dinero-programable-libertad",
        title: "Paradoja del Dinero Programable y la Libertad",
        content: `Las monedas digitales emitidas por bancos centrales permiten a los gobiernos programar cÃ³mo se utiliza el dinero de los ciudadanos, restringiendo su libertad. Bitcoin Cash resuelve esta paradoja ofreciendo dinero programable descentralizado.`
    },
    {
        id: "propiedad-dinero",
        title: "Paradoja de la Propiedad del Dinero",
        content: `Aunque las personas piensan que el dinero en el banco es suyo, los bancos pueden congelar o bloquear fondos. Bitcoin Cash resuelve esta paradoja dÃ¡ndole a los usuarios control total sobre su dinero, almacenado en billeteras privadas.`
    },
    {
        id: "neutralidad-dinero",
        title: "Paradoja de la Neutralidad del Dinero",
        content: `El dinero deberÃ­a ser neutral y accesible para todos, pero los gobiernos y bancos imponen restricciones. Bitcoin Cash resuelve esta paradoja siendo accesible a cualquier persona con una conexiÃ³n a Internet, sin discriminaciÃ³n.`
    },
    {
        id: "microtransacciones",
        title: "Paradoja del Costo de las Microtransacciones",
        content: `Las plataformas tradicionales hacen inviables las microtransacciones por sus tarifas elevadas. Bitcoin Cash, con sus bajas comisiones, resuelve esta paradoja permitiendo transacciones pequeÃ±as de manera econÃ³mica.`
    },
    {
        id: "valor-escasez",
        title: "Paradoja del Valor y la Escasez",
        content: `El dinero tradicional se devalÃºa cuanto mÃ¡s se imprime. Bitcoin Cash resuelve esta paradoja con un suministro limitado de 21 millones de monedas, asegurando que su valor no sea erosionado por la sobreproducciÃ³n.`
    },
    {
        id: "tiempo-transferencias",
        title: "Paradoja del Tiempo y el Costo de las Transferencias Bancarias",
        content: `Aunque vivimos en una era digital, las transferencias bancarias internacionales pueden tardar dÃ­as. Bitcoin Cash resuelve esta paradoja permitiendo transferencias globales rÃ¡pidas y de bajo costo en minutos.`
    },
    {
        id: "transparencia-anonimato",
        title: "Paradoja de la Transparencia y el Anonimato",
        content: `Los sistemas financieros tradicionales exigen transparencia para los usuarios pero no para las instituciones. Bitcoin Cash resuelve esta paradoja al permitir transacciones transparentes y anÃ³nimas simultÃ¡neamente.`
    },
    {
        id: "control-dinero",
        title: "Paradoja del Control Gubernamental sobre el Dinero",
        content: `Los gobiernos controlan la emisiÃ³n de dinero, pero los ciudadanos no tienen influencia sobre cÃ³mo se gestiona. Bitcoin Cash resuelve esta paradoja al ser una moneda descentralizada, sin control gubernamental.`
    },
    {
        id: "velocidad-bancaria",
        title: "Paradoja de la Velocidad del Dinero y los Bancos",
        content: `Las transferencias electrÃ³nicas deberÃ­an ser instantÃ¡neas, pero los bancos tardan horas o dÃ­as en procesarlas. Bitcoin Cash resuelve esta paradoja con transacciones inmediatas sin depender de intermediarios.`
    },
    {
        id: "dinero-fiduciario",
        title: "Paradoja del Dinero Fiduciario y la Confianza",
        content: `El dinero fiduciario no tiene valor intrÃ­nseco, pero la gente confÃ­a en Ã©l porque los gobiernos lo emiten. Bitcoin Cash resuelve esta paradoja al tener un valor basado en su utilidad y demanda, no en la confianza en una autoridad central.`
    },
    {
        id: "libertad-dinero-programable",
        title: "Paradoja del Control y la Libertad en el Dinero Programable",
        content: `El dinero programable controlado por gobiernos puede restringir la libertad financiera. Bitcoin Cash resuelve esta paradoja ofreciendo una forma de dinero programable que respeta la libertad del usuario.`
    },
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