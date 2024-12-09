var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 60, // Ajusta el tiempo entre cada carácter (en milisegundos)
    deleteSpeed: 25 // Velocidad al borrar (en milisegundos)
});

typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(1500) // Reduce la pausa para agilizar el efecto
    .deleteAll()
    .typeString('El único límite de lo que puedes programar es tu imaginación.')
    .pauseFor(1500)
    .deleteChars(18)
    .typeString('<strong>, no dudes de ti</strong>')
    .pauseFor(1500)
    .start();
