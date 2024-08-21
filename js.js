// Selección de elementos del DOM
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signInButton = document.getElementById('signInButton');


// Eventos de clic para alternar clases
registerBtn.addEventListener('click', () => container.classList.add('active'));
loginBtn.addEventListener('click', () => container.classList.remove('active'));


// Validación del formulario de inicio de sesión y redirección
signInButton.addEventListener('click', (event) => {
    const signinForm = document.getElementById('signinForm');
   
    if (signinForm.checkValidity()) {
        event.preventDefault();
        window.location.href = '13.html';
    } else {
        signinForm.reportValidity();
    }
});


// Sincronización de letras con la canción
const audio = document.querySelector('audio');
const lyrics = document.querySelector('#lyrics');


// Datos de las letras sincronizadas con el tiempo
const lyricsData = [
  { text: "At the time", time: 15 },
  { text: "The whisper of birds", time: 18 },
  { text: "Lonely before the sun cried", time: 27 },
  { text: "Fell from the sky", time: 32 },
  { text: "Like water drops", time: 33 },
  { text: "Where I'm now? I don't know why", time: 41 },
  { text: "Nice butterflies in my hands", time: 47 },
  { text: "Too much light for twilight", time: 54 },
  { text: "In the mood for the flowers love", time: 59 },
  { text: "That vision", time: 67 },
  { text: "Really strong, blew my mind", time: 72 },
  { text: "Silence Let me see what it was", time: 78 },
  { text: "I only want to live in clouds", time: 83 },
  { text: "Where I'm now? I don't know why", time: 91 },
  { text: "Nice butterflies in my hands", time: 97 },
  { text: "Too much light for twilight", time: 104 },
  { text: "In the mood for the flowers love", time: 108 },
  { text: "At the time", time: 144 },
  { text: "The whisper of birds", time: 148 },
  { text: "Lonely before the sun cried", time: 153 },
  { text: "Fell from the sky", time: 158 },
  { text: "Like water drops", time: 164 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 176 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 140 },
];


// Función para actualizar las letras sincronizadas
function updateLyrics() {
    const time = Math.floor(audio.currentTime);
    const currentLine = lyricsData.find(line => time >= line.time && time < line.time + 6);


    if (currentLine) {
        const fadeInDuration = 0.1;
        const opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);


        lyrics.style.opacity = opacity;
        lyrics.innerHTML = currentLine.text;
    } else {
        lyrics.style.opacity = 0;
        lyrics.innerHTML = "";
    }
}


// Intervalo de actualización de letras cada segundo
setInterval(updateLyrics, 1000);


// Función para ocultar el título después de un tiempo
function ocultarTitulo() {
    const titulo = document.querySelector('.titulo');
    titulo.style.animation = 'fadeOut 3s ease-in-out forwards';
    setTimeout(() => {
        titulo.style.display = 'none';
    }, 3000);
}
