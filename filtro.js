console.log('Script carregado');


// obter todos os botões de filtro
var filterButtons = document.querySelectorAll('.filter-button');

// obter todos os itens de arte
var artItems = document.querySelectorAll('.art-item');

// adiciona um clique a cada botão de filtro
filterButtons.forEach(function(button) {
  button.addEventListener('click', function() {
// remove a classe 'active' de todos os botões
    filterButtons.forEach(function(btn) {
      btn.classList.remove('active');
    });

// adiciona a classe 'active' ao botão clicado
    this.classList.add('active');

// Obtemn o tipo de filtro selecionado
    var filter = this.getAttribute('data-filter');

    // Ordena os itens de arte com base no filtro
    var sortedItems = Array.from(artItems).sort(function(a, b) {
      if (filter === 'all') {
        return 0; // mantem a ordem original
      } else {
        var aType = a.getAttribute('data-type');
        var bType = b.getAttribute('data-type');
        if (aType === filter) return -1;
        if (bType === filter) return 1;
        return 0;
      }
    });

//cria um novo contêiner de itens de arte
    var newRowContainer = document.createElement('div');
    newRowContainer.classList.add('row');

//exibe os itens ordenados no novo contêiner
    sortedItems.forEach(function(item) {
      var col = document.createElement('div');
      col.classList.add('col-6', 'col-md-3');
      col.appendChild(item);
      newRowContainer.appendChild(col);
    });

//substitui o antigo contêiner pelo novo                         att para  problema com a posição dos itens quando clicava em alguma categoria do filtro
    var artItemsContainer = document.querySelector('.art-items-container');
    artItemsContainer.innerHTML = '';
    artItemsContainer.appendChild(newRowContainer);

// mostra ou oculta os itens de arte com base no filtro
    artItems.forEach(function(item) {
      if (filter === 'all' || item.getAttribute('data-type') === filter) {
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
      }
    });
  });
});


// atualizado para não bugar quando clicamos em um item do filtro (ficava na mesma posição de quando estavam "todos")