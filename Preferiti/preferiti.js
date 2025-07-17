function renderSavedCards() {
  const container = document.querySelector('saved-cards');
  container.innerHTML = '';
  const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];

  savedCards.forEach(item => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = item.html;

    // Rimuovi eventuali vecchi bottoni bookmark clonati
    const btn = wrapper.querySelector('.bookmark-btn');
    if (btn) btn.remove();

    // Aggiungi pulsante per rimuovere
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Rimuovi dai preferiti';
    removeBtn.addEventListener('click', function () {
      removeCard(item.id);
    });

    wrapper.appendChild(removeBtn);
    container.appendChild(wrapper);
  });
}

function removeCard(cardId) {
  let savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
  savedCards = savedCards.filter(item => item.id !== cardId);
  localStorage.setItem('savedCards', JSON.stringify(savedCards));

  // Aggiorna lista
  renderSavedCards();

  // Notifica anche la pagina principale (triggera evento "storage")
  localStorage.setItem('lastUpdate', new Date().getTime());
}

// Ricarica cards quando cambia lo storage
window.addEventListener('storage', function () {
  renderSavedCards();
});

renderSavedCards();