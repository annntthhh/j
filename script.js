const btn = document.getElementById('btn-magic');
const extraMessage = document.getElementById('extra-message');
const greeting = document.getElementById('greeting');

btn.addEventListener('click', () => {
    // Cambiar el mensaje
    greeting.innerText = "¡Te amo, Jesu! ❤️";
    extraMessage.classList.remove('hidden');
    btn.style.display = 'none';

    // Lanzar una alerta sencilla o efecto
    lanzarConfeti();
});

function lanzarConfeti() {
    // Aquí puedes añadir una lógica de confeti simple
    // Por ahora, simularemos que algo pasó en la consola
    console.log("¡Boom! ¡Feliz 2026!");
    alert("Ane dice: Eres lo mejor de mi año.");
}
