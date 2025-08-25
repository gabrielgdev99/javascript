function clockTimer() {

function firstTime (sec) {
    const date = new Date(sec * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector('.parar');
const zerar = document.querySelector('.zerar');

let sec = 0;
let clock;

function startClock() {
    clock = setInterval(function() {
        sec++;
        timer.innerHTML = firstTime(sec);
    }, 1000);
}

document.addEventListener('click', function(event) {
    const element = event.target;

    if(element.classList.contains('iniciar')) {
        timer.classList.remove('pausado');
        clearInterval(clock);
        startClock()
    }

    if(element.classList.contains('parar')) {
        clearInterval(clock);
        timer.classList.add('pausado');
    }

    if(element.classList.contains('zerar')) {
        clearInterval(clock);
        timer.innerHTML = '00:00:00'
        sec = 0;
        timer.classList.remove('pausado');
        }
});

// iniciar.addEventListener('click', function(event) {
//     timer.classList.remove('pausado');
//     clearInterval(clock);
//     startClock()
// });

// parar.addEventListener('click', function(event) {
//     clearInterval(clock);
//     timer.classList.add('pausado');
// });

// zerar.addEventListener('click', function(event) {
//     clearInterval(clock);
//     timer.innerHTML = '00:00:00'
//     sec = 0;
//     timer.classList.remove('pausado');
// });

};

clockTimer();
