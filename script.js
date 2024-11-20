// Seleciona o elemento HTML onde o contador será exibido
const countdownElement = document.getElementById('demo');

// Define a data da festa (ajuste para a data correta)
const countDownDate = new Date("november 24, 2024 ").getTime();

// Atualiza o contador a cada segundo
const x = setInterval(function() {

  // Obtém a data e hora atuais
  const now = new Date().getTime();

  // Calcula a diferença entre a data da festa e a data atual
  const distance = countDownDate - now;

  // Calcula dias, horas, minutos e segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibe o resultado em um formato legível
  countdownElement.innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Se o contador chegar a zero, exibe uma mensagem
  if (distance < 0) {
    clearInterval(x);
    countdownElement.innerHTML = "Chegou a Hora!!";
  }
 

const imagens = ["lipe01.jpg", "lipe02.jpg", ]; 
let indiceImagem = 0; // Índice da imagem atual

function proximaImagem() {
  indiceImagem = (indiceImagem + 1) % imagens.length;
  document.getElementById("imagem").src = imagens[indiceImagem];
}
}, 1000);