document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('agenda-form');
    var tableBody = document.getElementById('agenda-body');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var eventoInput = document.getElementById('evento');
      var dataInput = document.getElementById('data');
  
      var evento = eventoInput.value;
      var data = dataInput.value;
  
      adicionarEvento(evento, data);
  
      eventoInput.value = '';
      dataInput.value = '';
    });
  
    function adicionarEvento(evento, data) {
      var newRow = document.createElement('tr');
  
      var eventoCell = document.createElement('td');
      eventoCell.textContent = evento;
  
      var dataCell = document.createElement('td');
      dataCell.textContent = data;
  
      newRow.appendChild(eventoCell);
      newRow.appendChild(dataCell);
  
      tableBody.appendChild(newRow);
    }
  });
  
      