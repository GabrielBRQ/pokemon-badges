document.addEventListener('DOMContentLoaded', function() {
  hamburger = document.querySelector(".hamburger");

  hamburger.onclick = function() {
    buttons = document.querySelector(".buttons");
    buttons.classList.toggle("active");
  }

  // Obtém todas as imagens com a classe "badge-img"
  var badgeImages = document.querySelectorAll('.badge-img');
  var numberDiv = document.querySelector('.number');
  var badgeCount = 0;

  // Função para remover o filtro e definir a opacidade
  function removeFilter() {
    var cityName = this.parentNode.querySelector('.city-name');

    // Verifica se a imagem já possui a classe "active"
    if (this.classList.contains('active')) {
      this.classList.remove('active');
      this.style.filter = 'grayscale(100%)';
      this.style.opacity = '0.3';
      cityName.style.color = "red";
      badgeCount--;
    } else {
      this.classList.add('active');
      this.style.filter = 'none';
      this.style.opacity = '1';
      cityName.style.color = "green";
      badgeCount++;
    }

    numberDiv.textContent = badgeCount.toString();
  }

  // Adiciona um event listener para cada imagem
  badgeImages.forEach(function(image) {
    image.removeEventListener('click', removeFilter);
    image.addEventListener('click', removeFilter);
  });
});

// Função para adicionar a initial div
const initialDiv = document.querySelector('.initial-div');

// Função para adicionar o header
const header = document.querySelector('.header');

function saveName(){
  let name = document.querySelector("#name");
  let trainerName = document.querySelector(".trainer-name");

  trainerName.innerHTML = name.value;

  initialDiv.style.display = 'none';
  content.style.display = 'grid';
  header.style.display = 'flex';
}

// Função para adicionar a weak table
const weakTableButton = document.querySelector('.weak-table');
        
// Selecione a div com a classe "weakness-table-active"
const weaknessTable = document.querySelector('.weakness-table-active');
   

// Selecione a div com a classe "weakness-table-active"
const content = document.querySelector('.content');

// Selecione o botão de volta com a classe "back-button"
const backButton = weaknessTable.querySelector('.back-button');


// Adicione um evento de clique ao botão
weakTableButton.addEventListener('click', () => {
    // Altere a propriedade display da div weakness-table-active
    weaknessTable.style.display = 'flex';

    // Altere a propriedade display da div content
    content.style.display = 'none';
});

backButton.addEventListener('click', () => {
  // Altere a propriedade display da div "weakness-table-active" para "none"
  weaknessTable.style.display = 'none';

  // Altere a propriedade display da div content
  content.style.display = 'grid';
});
