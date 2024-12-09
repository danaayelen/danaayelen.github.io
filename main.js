var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('El único límite de lo que puedes programar es tu imaginación.')
    .pauseFor(2500)
    .deleteChars(18)
    .typeString('<strong>, no dudes de ti</strong>')
    .pauseFor(2500)
    .start();  