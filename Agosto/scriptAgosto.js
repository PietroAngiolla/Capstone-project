const concerts=[    
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
    }
]

function showConcerts(list) {
    const row = document.querySelector(".row")
    list.forEach(concerto => {
        const card = document.createElement("div")
        card.classList.add("card-body", "col-6", "col-md-4", "col-lg-3")
        if (concerto.Prezzo!=="Gratis"){
             card.innerHTML = `
                <h5 class="card-title">${concerto.Artista}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${concerto.Data}</h6>
                <p class="card-text">Luogo: ${concerto.Luogo}</p>
                <a href="/info/info.html?id=${concerto.id}" class="card-link">info concerto</a>
                <a href="${concerto.href}" class="card-link">Prezzo: ${concerto.Prezzo}</a>
            `
        }else{
             card.innerHTML = `
                <h5 class="card-title">${concerto.Artista}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${concerto.Data}</h6>
                <p class="card-text">Luogo: ${concerto.Luogo}</p>
                <div class="flex-link">
                    <a href="/info/info.html?id=${concerto.id}" class="card-link">info concerto</a>
                    <p>Prezzo: ${concerto.Prezzo}</p>
                </div>
            `
        }
       
        row.appendChild(card)
    });
}

showConcerts(concerts)

function search(event) {
    event.preventDefault()
    const concertsList=document.querySelectorAll(".card-body")
    concertsList.forEach(concerto =>{
        concerto.remove()
    })
    const query = document.querySelector(".form-control").value.toLowerCase();
        const filtered = concerts.filter(concerto =>
            concerto.Artista.toLowerCase().includes(query) ||
            concerto.Luogo.toLowerCase().includes(query)  
        );
        if (filtered.length===0){
            if(document.querySelector(".no-result")){
            document.querySelector(".no-result").remove();
        }
            const warningDiv=document.createElement("div")
            warningDiv.classList.add("no-result")
            warningDiv.innerHTML=`
                <p>Siamo spiacenti, la ricerca non ha prodotto risultati</p>
            `
            const row=document.querySelector(".row")
            row.appendChild(warningDiv)
        }else{
            showConcerts(filtered);
        }
        
}