// 1. Configuración de la cuenta regresiva
const countdown = () => {
    const nextYear = 2026;
    const countDate = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    document.getElementById('timer').innerText = `${d}d ${h}h ${m}m ${s}s`;

    if (gap <= 0) {
        document.getElementById('timer').innerText = "¡FELIZ AÑO NUEVO, MI AMOR!";
        lanzarFuegos();
    }
};

setInterval(countdown, 1000);

// 2. Lista de razones (puedes agregar todas las que quieras)
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
    // Mostrar contenedor de razones
    reasonContainer.classList.remove('hidden');
    
    // Elegir una razón al azar
    const randomReason = razones[Math.floor(Math.random() * razones.length)];
    reasonText.innerText = randomReason;

    // Efecto de confeti cada vez que presiona
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#f9d71c', '#ffffff']
    });

    // Cambiar texto del botón
    btn.innerText = "¡Ver otra razón!";
});

// 3. Función de fuegos artificiales para el final
function lanzarFuegos() {
    var duration = 30 * 1000;
    var animationEnd = Date.now() + duration;

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        confetti({
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 0,
            particleCount: 50,
            origin: { x: Math.random(), y: Math.random() - 0.2 }
        });
    }, 250);
}
