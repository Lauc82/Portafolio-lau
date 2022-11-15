// Aquí se encuentran transiciones y animaciones que afectan a la página del formulario


window.sr = ScrollReveal();


// Menú de navegación

    sr.reveal('.navbar', {
        duration: 2000,
        delay: 500,
        origin: 'bottom',
        distance: '-100px'
    });

// Contenido

    sr.reveal('#titulo', {
        duration: 2000,
        delay: 500,
        origin: 'right',
        distance: '300px'
    });

    sr.reveal('.formulario', {
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


