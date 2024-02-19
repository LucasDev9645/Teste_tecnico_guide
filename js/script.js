// 1- Mostrando numero de telefone usuario
const buttons = document.querySelectorAll(".view-phone-btn");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Obtém o ID do alvo a partir do atributo data
    const targetId = button.getAttribute("data-target");
    const targetSpan = document.getElementById(targetId);

    // Exibe o número de telefone ao clicar no botão
    targetSpan.classList.toggle("user-details-phone-active");
  });
});

//*******************************************************************/

// 2- Função para aplicar a máscara cpf e telefone
function applyMask(input, mask, validationRegex) {
  const value = input.value.replace(/\D/gm, "");

  if (!validationRegex.test(value)) {
    input.value = value.slice(0, mask.length);
    return;
  }

  // Remove todos os caracteres não numéricos exceto os pontos e traços
  const cleanValue = value.replace(/[^0-9]/g, "");

  let maskedValue = "";

  let j = 0;
  for (let i = 0; i < mask.length && j < cleanValue.length; i++) {
    if (mask[i] === "#") {
      maskedValue += cleanValue[j++];
    } else {
      maskedValue += mask[i];
    }
  }

  input.value = maskedValue;
}

// Função para enviar a mensagem
function enviarMensagem() {
  const cpf = document.getElementById("cpfInput").value.replace(/\D/g, "");
  const phone = document.getElementById("phoneInput").value.replace(/\D/g, "");
  const subject = document.getElementById("subjectInput").value;

  if (!cpf || !phone || !subject) {
    alert("Por favor, preencha todos os campos antes de enviar a mensagem.");
  } else {
    // Lógica para enviar a mensagem
    alert("Mensagem enviada com sucesso!");
  }
}

//*******************************************************************/

// 3 -  Função calcular regra de 3

function calcularRegraDeTres() {
  const input1 = parseFloat(document.getElementById("input1").value);
  const input2 = parseFloat(document.getElementById("input2").value);
  const input3 = parseFloat(document.getElementById("input3").value);

  if (!isNaN(input1) && !isNaN(input2) && !isNaN(input3)) {
    const resultado = (input3 * input2) / input1;
    document.getElementById("input4").value = resultado.toFixed(2);
  } else {
    alert("Por favor, preencha todos os campos corretamente.");
  }
}

//*******************************************************************/

// 4 - Imagem no modal

function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

//*******************************************************************/

// 5 - Print Dowload

function downloadImage() {
  // Capturar o contêiner da imagem usando html2canvas
  html2canvas(document.getElementById("imageContainer")).then(function (
    canvas
  ) {
    // Criar um link para o download da imagem
    var link = document.createElement("a");
    link.href = canvas.toDataURL("image/png"); // Use 'image/jpeg' para JPEG
    link.download = "imagem_download.png";
    link.click();
  });
}

//*******************************************************************/

// 6 - Animação Zoom imagem

if (
  performance.getEntriesByType("navigation")[0].type === "navigate" ||
  performance.getEntriesByType("navigation")[0].type === "reload"
) {
  // Adiciona um ouvinte de evento para detectar quando o carregamento da página é concluído
  window.addEventListener("load", function () {
    // Inicia a animação de zoom
    toggleZoom();
  });
}

let isZoomedIn = false;

function toggleZoom() {
  const image = document.getElementById("zoomImage");

  // Alternar entre zoom in e zoom out
  isZoomedIn = !isZoomedIn;

  // Aplicar a escala correspondente
  image.style.transform = isZoomedIn ? "scale(1)" : "scale(2)";
}

//*******************************************************************/

// Logica do menu hamburguer

class MobileNavBar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavBar = new MobileNavBar(
  ".mobile-menu",
  ".nav-list-mobile",
  ".nav-list-mobile li"
);
mobileNavBar.init();
