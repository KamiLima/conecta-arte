// obtem todos os elementos da imagem
var images = document.getElementsByClassName("art-item__image");

// loop através de cada imagem
for (var i = 0; i < images.length; i++) {
  // Adicione um evento de clique a cada imagem
  images[i].onclick = function() {

// obtem a imagem clicada
    var modalImage = document.getElementById("modal-image");
    modalImage.src = this.src;
    modalImage.style.maxWidth = "100%";
    modalImage.style.maxHeight = "100%";

// exibe o modal
    var modal = document.getElementById("image-modal");
    modal.style.display = "block";

// adiciona um clique ao botao de fechar
    var closeButton = document.getElementsByClassName("image-modal__close-button")[0];
    closeButton.onclick = function() {
      modal.style.display = "none";
    };

// fecha o modal quando clicar fora dele
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };
}