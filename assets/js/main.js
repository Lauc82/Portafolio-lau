// Los archivos js se utilizaron solamente para las trancisiones y algunas animaciones del sitio web


// En este sector se encuentran transiciones que afectan al menú de navegación y footer de todas las páginas

// Menú de navegación

window.sr = ScrollReveal();

    sr.reveal('.navbar', {
        duration: 2000,
        delay: 500,
        origin: 'bottom',
        distance: '-100px'

    });


// Footer
    sr.reveal('.footer', {
        duration: 2000,
        delay: 500,
        distance: '0px'

    });


// Aquí se encuentran transiciones y animaciones que afectan a la página de inicio

// Información

sr.reveal('#text', {
    duration: 2000,
    delay: 500,
    origin: 'right',
    distance: '-100px'

});


// Imagen

sr.reveal('.img', {
    duration: 2000,
    delay: 500,
    origin: 'right',
    distance: '100px'

});

// Botones

sr.reveal('.buttoms', {
    duration: 4000,
    delay: 500,
    distance: '0px'
    
});

