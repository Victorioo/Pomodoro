const start = document.querySelector(".btn");
const breakbtn = document.querySelector(".break")
const temporizador = document.getElementById("temporizador");
const pomo = document.getElementById('pomo-container')
let intervalId = null;
let tiempoTotal = 300;
start.textContent = 'Start here'
breakbtn.textContent = "Take a break"

// Función que se ejecuta al hacer clic en el botón
start.addEventListener("click",function() {
    pomo.classList.add('contrunning')
    pomo.classList.remove('contpause')
    start.textContent = 'Start here'
    breakbtn.textContent = "Take a break"
    function actualizarTemporizador() {
        breakbtn.classList.remove('reset')
        breakbtn.textContent = "Take a break"
        start.classList.remove('pause')
        start.textContent = 'Time running!'
        tiempoTotal -= 1; // Restamos un segundo al tiempo total
        const horas = Math.floor(tiempoTotal / 3600);
        const minutos = Math.floor((tiempoTotal - (horas * 3600)) / 60);
        const segundos = tiempoTotal - (horas * 3600) - (minutos * 60);
        temporizador.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        if (tiempoTotal === 0) {
          detenerTemporizador();
        }
      }     
  if (intervalId === null) {
    intervalId = setInterval(actualizarTemporizador, 1000); // Actualizamos el temporizador cada segundo
  }
})

// Función que detiene el temporizador y lo restablece a 5 minutos
breakbtn.addEventListener("click",function(){
    if (breakbtn.textContent == 'Take a break'){
  pomo.classList.remove('contrunning')
  pomo.classList.add('contpause')
  breakbtn.classList.add('reset')
  breakbtn.textContent = 'Reset'
  clearInterval(intervalId);
  intervalId = null;
  tiempoTotal = tiempoTotal; // Pausa la función
  start.classList.add('pause')
  start.textContent = 'Resume'
 } else {
        restablecerTemporizador()
 }
})

// Función que restablece el temporizador a 5 minutos
function restablecerTemporizador() {
  tiempoTotal = 301;
  tiempoTotal -= 1
  const horas = Math.floor(tiempoTotal / 3600);
  const minutos = Math.floor((tiempoTotal - (horas * 3600)) / 60);
  const segundos = tiempoTotal - (horas * 3600) - (minutos * 60);
  temporizador.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

