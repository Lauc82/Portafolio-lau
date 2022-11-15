// Aquí se encuentran transiciones y animaciones que afectan a la página about


window.sr = ScrollReveal();


// Menú de navegación

    sr.reveal('.navbar', {
        duration: 2000,
        delay: 500,
        origin: 'bottom',
        distance: '-100px'
    });

// Contenido

     sr.reveal('#me', {
        duration: 2000,
        delay: 500,
        origin: 'right',
        distance: '-300px'
    });

    sr.reveal('#info', {
        duration: 2000,
        delay: 500,
        origin: 'left',
        distance: '-300px'
    });
    
// Footer

    sr.reveal('.footer', {
        duration: 2000,
        delay: 500,
        origin: 'top',
        distance: '0px'

    });

