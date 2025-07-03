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