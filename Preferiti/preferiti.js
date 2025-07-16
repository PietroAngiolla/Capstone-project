function showPreferiti() {
  const preferiti = JSON.parse(localStorage.getItem('preferiti')) || [];
  const div= document.querySelector('.saved-cards');
  div.innerHTML = ''; // pulisco prima

  preferiti.forEach(concerto => {
    const card = document.createElement('div');
    card.classList.add('card-body', 'col-6', 'col-md-4', 'col-lg-3');
    card.innerHTML = `
      <h5 class="card-title">${concerto.artista}</h5> 
      <h6 class="card-subtitle mb-2 text-body-secondary">${concerto.data}</h6>
      <p class="card-text">Luogo: ${concerto.luogo}</p>
      <div class="flex-link">
        <a href="${concerto.infoLink}" class="card-link">info concerto</a>
        <p>Prezzo: ${concerto.prezzo}</p>
      </div>
    `;
    div.appendChild(card);
  });
}

// Al caricamento della pagina
window.addEventListener('DOMContentLoaded', showPreferiti);

