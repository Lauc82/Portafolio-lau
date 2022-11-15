// Aquí se encuentran transiciones y animaciones que afectan a la página del portafolio

// Menú de navegación

window.sr = ScrollReveal();

    sr.reveal('.navbar', {
        duration: 2000,
        delay: 500,
        origin: 'bottom',
        distance: '-100px'
    });

//  Contenido

    sr.reveal('#proyectos', {
        duration: 3000,
        delay: 500,
        origin: 'left',
        distance: '-300px'
    });

    sr.reveal('.categories', {
        duration: 5000,
        delay: 500,
        
    });


// Footer

    sr.reveal('.footer', {
        duration: 2000,
        delay: 500,
        origin: 'top',
        distance: '0px'

    });


