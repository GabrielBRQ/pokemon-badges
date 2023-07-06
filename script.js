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
