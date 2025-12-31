const countdown = () => {
    const nextYear = 2026;
    const countDate = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
    const d = Math.floor(gap / day), h = Math.floor((gap % day) / hour), m = Math.floor((gap % hour) / minute), s = Math.floor((gap % minute) / second);

    document.getElementById('timer').innerText = `${d}d ${h}h ${m}m ${s}s`;

    if (gap <= 0) {
        document.getElementById('timer').innerText = "¡FELIZ 2026, JESU!";
        lanzarFuegos();
    }
};
setInterval(countdown, 1000);

const razones = [
    "Por ser mi mejor amigo y mi novio a la vez.",
    "Por la forma en que me haces reír cuando estoy triste.",
    "Porque este 2026 será nuestro mejor año.",
    "Por cada momento que compartimos juntos, Jesu.",
    "Porque eres el apoyo más grande que tengo.",
    "Simplemente por ser tú, Ane te ama demasiado."
];

const btn = document.getElementById('btn-magic');
const reasonContainer = document.getElementById('reason-container');
const reasonText = document.getElementById('reason-text');

btn.addEventListener('click', () => {
    reasonContainer.classList.remove('hidden');
    const randomReason = razones[Math.floor(Math.random() * razones.length)];
    reasonText.innerText = randomReason;

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#f9d71c', '#ffffff']
    });
    btn.innerText = "¡Ver otra razón!";
});

function lanzarFuegos() {
    var duration = 30 * 1000;
    var animationEnd = Date.now() + duration;
    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        confetti({ startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, particleCount: 50, origin: { x: Math.random(), y: Math.random() - 0.2 } });
    }, 250);
}

// ESTA ES LA IDEA QUE ME PEDISTE:
function actualizarMensaje() {
    const ahora = new Date();
    const mensajeHeader = document.getElementById('greeting');
    if (ahora.getFullYear() >= 2026) {
        mensajeHeader.innerText = "¡Nuestro primer momento del 2026, Jesu! ❤️";
    } else {
        mensajeHeader.innerText = "Esperando el 2026 contigo, Jesu...";
    }
}
actualizarMensaje();
