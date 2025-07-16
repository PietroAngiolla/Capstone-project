const concerts = [
    {
        Artista: "Massimo Di Cataldo",
        Data: "21 Luglio",
        Luogo: "Peschici",
        Prezzo: "Gratis",
        id: 1
    },
    {
        Artista: "Rocco Hunt",
        Data: "26 Luglio",
        Luogo: "Peschici",
        Prezzo: "40,25€",
        href: "https://www.ticketone.it/event/rocco-hunt-rocco-hunt-p-arenile-del-porto-20114457/",
        id: 2
    },
    {
        Artista: "Danilo Sacco",
        Data: "28 Luglio",
        Luogo: "Roseto Valforte",
        Prezzo: "Gratis",
        id: 3
    },
    {
        Artista: "Stewart Copeland",
        Data: "29 Luglio",
        Luogo: "Foggia",
        Prezzo: "Da 28,75€",
        href: "https://www.ticketone.it/event/stewart-copeland-piazza-cavour-20163349/",
        id: 4
    },
    {
        Artista: "The Kolors",
        Data: "1 Agosto",
        Luogo: "Vieste",
        Prezzo: "Gratis",
        id: 5
    },
    {
        Artista: "Patty Pravo",
        Data: "2 Agosto",
        Luogo: "Vieste",
        Prezzo: "Gratis",
        id: 6
    },
    {
        Artista: "Fabri Fibra",
        Data: "3 Agosto",
        Luogo: "Vieste",
        Prezzo: "Da 39€",
        href: "https://www.ticketone.it/event/fabri-fibra-piazza-marina-piccola-20136862/",
        id: 7
    },
    {
        Artista: "Dirotta Su Cuba",
        Data: "14 Agosto",
        Luogo: "Stornarella",
        Prezzo: "Gratis",
        id: 8
    },
    {
        Artista: "Nek",
        Data: "15 Agosto",
        Luogo: "Lucera",
        Prezzo: "Gratis",
        id: 9
    },
    {
        Artista: "Max Gazzè",
        Data: "16 Agosto",
        Luogo: "Lucera",
        Prezzo: "Gratis",
        id: 10
    },
    {
        Artista: "The Kolors",
        Data: "17 Agosto",
        Luogo: "Lucera",
        Prezzo: "Gratis",
        id: 11
    },
    {
        Artista: "Coma Cose",
        Data: "18 Agosto",
        Luogo: "Ischitella",
        Prezzo: "Gratis",
        id: 12
    },
    {
        Artista: "Gianna Nannini",
        Data: "18 Agosto",
        Luogo: "Apricena",
        Prezzo: "Da 47€",
        href: "https://www.ticketone.it/event/gianna-nannini-sei-nellanima-festival-european-leg-2025-cava-dellerba-19134543/",
        id: 13
    },
    {
        Artista: "Nino D'Angelo",
        Data: "19 Agosto",
        Luogo: "Apricena",
        Prezzo: "Da 50€",
        href: "https://www.ticketone.it/event/nino-dangelo-cava-dellerba-19640901/",
        id: 14
    },
    {
        Artista: "Nina Zilli",
        Data: "19 Agosto",
        Luogo: "Carpino",
        Prezzo: "Gratis",
        id: 15
    },
    {
        Artista: "Tony Effe",
        Data: "21 Agosto",
        Luogo: "Apricena",
        Prezzo: "40,25€",
        href: "https://www.ticketone.it/event/tony-effe-summer-tour-cava-dellerba-20114277/",
        id: 16
    },
    {
        Artista: "Tiromancino",
        Data: "21 Agosto",
        Luogo: "Rodi Garganico",
        Prezzo: "Gratis",
        id: 17
    },
    {
        Artista: "Fiorella Mannoia",
        Data: "22 Agosto",
        Luogo: "Apricena",
        Prezzo: "Da 28,75€",
        href: "https://www.ticketone.it/event/fiorella-mannoia-fiorella-sinfonica-live-con-orchestra-cava-dellerba-19930171/",
        id: 18
    },
    {
        Artista: "Dolcenera",
        Data: "22 Agosto",
        Luogo: "Accadia",
        Prezzo: "Gratis",
        id: 19
    },
    {
        Artista: "Alex Britti",
        Data: "26 Agosto",
        Luogo: "Vico Del Gargano",
        Prezzo: "Gratis",
        id: 20
    },
    {
        Artista: "Raphael Gualazzi",
        Data: "6 Settembre",
        Luogo: "Peschici",
        Prezzo: "Gratis",
        id: 21
    }
]

function showConcerts(list) {
    const row = document.querySelector(".row")
    // Prendo i preferiti dal localStorage una volta sola
    const preferiti = JSON.parse(localStorage.getItem('preferiti')) || [];
    list.forEach(concerto => {
        const card = document.createElement("div")
        card.classList.add("card-body", "col-6", "col-md-4", "col-lg-3")
         // Controllo se il concerto è già nei preferiti (basato su infoLink o id)
        const relativeLink = `/info/info.html?id=${concerto.id}`;
        const isPreferito = preferiti.some(p => p.infoLink === relativeLink);


        // Costruisco innerHTML con la classe 'filled' se è preferito
        let filledClass = isPreferito ? 'filled' : '';
        if (concerto.Prezzo !== "Gratis") {
            card.innerHTML = `
                <h5 class="card-title">${concerto.Artista}</h5> 
                <h6 class="card-subtitle mb-2 text-body-secondary">${concerto.Data}</h6>
                <p class="card-text">Luogo: ${concerto.Luogo}</p>
                <div class="flex-link">
                    <a href="/info/info.html?id=${concerto.id}" class="card-link">info concerto</a>
                    <a href="${concerto.href}" class="card-link">Prezzo: ${concerto.Prezzo}</a>
                </div>
                <div class="bookmark">
                    <button class="bookmark-btn"><span class="material-symbols-outlined">bookmark</span></button>
                </div>
            `
        } else {
            card.innerHTML = `
                <h5 class="card-title">${concerto.Artista}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${concerto.Data}</h6>
                <p class="card-text">Luogo: ${concerto.Luogo}</p>
                <div class="flex-link">
                    <a href="/info/info.html?id=${concerto.id}" class="card-link">info concerto</a>
                    <p>Prezzo: ${concerto.Prezzo}</p>
                </div>
                <div class="bookmark">
                    <button class="bookmark-btn"><span class="material-symbols-outlined">bookmark</span></button>
                </div>
            `
        }

        row.appendChild(card)
    });
     // Riazzera event listener sui nuovi bottoni (importante!)
    attachBookmarkListeners();
}

showConcerts(concerts)

function search(event) {
    event.preventDefault()
    const concertsList = document.querySelectorAll(".card-body")
    concertsList.forEach(concerto => {
        concerto.remove()
    })
    const query = document.querySelector(".form-control").value.toLowerCase();
    const filtered = concerts.filter(concerto =>
        concerto.Artista.toLowerCase().includes(query) ||
        concerto.Luogo.toLowerCase().includes(query)
    );
    if (filtered.length === 0) {
        const warningDiv = document.createElement("div")
        warningDiv.classList.add("no-result")
        warningDiv.innerHTML = `
            <p>Siamo spiacenti, la ricerca non ha prodotto risultati</p>
        `
        const row = document.querySelector(".row")
        row.appendChild(warningDiv)
    } else {
        showConcerts(filtered);
    }

}

function attachBookmarkListeners() {
    document.querySelectorAll('.bookmark-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const icon = this.querySelector('.material-symbols-outlined');
            icon.classList.toggle('filled');
            const card = this.closest('.card-body');

            const artista = card.querySelector('.card-title').textContent;
            const data = card.querySelector('.card-subtitle').textContent;
            const luogo = card.querySelector('.card-text').textContent.replace('Luogo: ', '');
            const prezzoElem = card.querySelector('.flex-link a.card-link:nth-child(2)') || card.querySelector('.flex-link p');
            const prezzo = prezzoElem ? prezzoElem.textContent.replace('Prezzo: ', '') : '';

            const aInfo = card.querySelector('.flex-link a.card-link:nth-child(1)');
            const url = new URL(aInfo.href);
            const infoLink = url.pathname + url.search;

            const concerto = { artista, data, luogo, prezzo, infoLink };
            let preferiti = JSON.parse(localStorage.getItem('preferiti')) || [];

            if (icon.classList.contains('filled')) {
                if (!preferiti.some(p => p.infoLink === infoLink)) {
                    preferiti.push(concerto);
                }
            } else {
                preferiti = preferiti.filter(p => p.infoLink !== infoLink);
            }

            localStorage.setItem('preferiti', JSON.stringify(preferiti));
        });
    });
}
