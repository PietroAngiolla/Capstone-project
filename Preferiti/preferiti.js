document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector(".saved-cards");

    const token = localStorage.getItem("token");
    if (!token) {
        container.innerHTML = `<p>Devi essere loggato per vedere i preferiti.</p>`;
        return;
    }

    try {
        const res = await fetch("https://foggiavibes.onrender.com/api/preferiti", {
            headers: { 'Authorization': 'Bearer ' + token }
        });

        if (!res.ok) throw new Error("Errore nel recupero dei preferiti");

        const preferiti = await res.json();

        if (preferiti.length === 0) {
            container.innerHTML = `<p>Non hai ancora aggiunto concerti ai preferiti.</p>`;
            return;
        }

        preferiti.forEach(concerto => {
            const card = document.createElement("div");
            card.classList.add("card-body", "col-6", "col-md-4", "col-lg-3");

            card.innerHTML = `
                <h5 class="card-title">${concerto.artista}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${concerto.data}</h6>
                <p class="card-text">Luogo: ${concerto.luogo}</p>
                <div class="flex-link">
                    <a href="${concerto.infoLink}" class="card-link">info concerto</a>
                    <p>Prezzo: ${concerto.prezzo}</p>
                </div>
                <div class="bookmark">
                    <button class="bookmark-btn"><span class="material-symbols-outlined filled">bookmark</span></button>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (err) {
        console.error(err);
        container.innerHTML = `<p>Errore nel caricamento dei preferiti.</p>`;
    }
});
