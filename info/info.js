const concerts = [
    {
        Artista: "Massimo Di Cataldo",
        Data: "21 Luglio",
        Luogo: "Peschici",
        Prezzo: "Gratis",
        id: 1,
        info: "Massimo Di Cataldo, nato a Roma il 25 aprile 1968, è un cantautore, musicista e attore emerso tra gli anni ’90 grazie a successi come Siamo nati liberi e Se adesso te ne vai, consacrati da più partecipazioni al Festival di Sanremo. In trent’anni di carriera ha pubblicato otto album, numerose raccolte e ha collaborato con artisti di fama internazionale come Eros Ramazzotti e Renato Zero"
    },
    {
        Artista: "Rocco Hunt",
        Data: "26 Luglio",
        Luogo: "Peschici",
        Prezzo: "40,25€",
        href: "https://www.ticketone.it/event/rocco-hunt-rocco-hunt-p-arenile-del-porto-20114457/",
        id: 2,
        info: "Rocco Hunt (all’anagrafe Rocco Pagliarulo, Salerno 21 novembre 1994) è un rapper e cantautore italiano divenuto celebre per la vittoria nella sezione “Nuove Proposte” al Festival di Sanremo 2014 con Nu juorno buono. Con uno stile che mescola rap, napoletano e tematiche sociali, ha pubblicato numerosi album e singoli di successo, tra cui il più recente Mille vote ancora presentato a Sanremo 2025"
    },
    {
        Artista: "Danilo Sacco",
        Data: "28 Luglio",
        Luogo: "Roseto Valforte",
        Prezzo: "Gratis",
        id: 3,
        info: "Danilo Sacco, nato ad Agliano Terme nel 1965, è un cantante rock e pop‑rock noto tanto per la voce potente quanto per il suo periodo alla guida dei Nomadi (1993–2011) e per la successiva carriera solista con album come Un altro me, Minoranza rumorosa, Gardé e l’ultimo Colpevole."
    },
    {
        Artista: "Stewart Copeland",
        Data: "29 Luglio",
        Luogo: "Foggia",
        Prezzo: "Da 28,75€",
        href: "https://www.ticketone.it/event/stewart-copeland-piazza-cavour-20163349/",
        id: 4,
        info: "Stewart Copeland, nato il 16 luglio 1952 a Alexandria (Virginia, USA), è un celebre batterista, compositore e produttore, fondatore e anima ritmica degli The Police, noto per il suo stile ritmico innovativo e l'influenza nel rock, jazz e world music. Dopo lo scioglimento della band, ha avviato una brillante carriera solista componendo colonne sonore per film, serie TV e videogiochi."
    },
    {
        Artista: "The Kolors",
        Data: "1 Agosto",
        Luogo: "Vieste",
        Prezzo: "Gratis",
        id: 5,
        info: "The Kolors è una band pop‑rock italiana nata nel 2009 a Napoli, composta da Stash, Alex Fiordispino e Dario Iaculli. Dopo il trionfo ad Amici nel 2015 e successi come “Everytime” e “Italodisco” (primo posto nelle classifiche italiane nel 2023), hanno rappresentato un simbolo del pop italiano moderno con diverse partecipazioni al Festival di Sanremo"
    },
    {
        Artista: "Patty Pravo",
        Data: "2 Agosto",
        Luogo: "Vieste",
        Prezzo: "Gratis",
        id: 6,
        info: "Patty Pravo, nata Nicoletta Strambelli a Venezia nel 1948, è una delle voci più iconiche del pop italiano, celebre fin dagli anni ’60 con successi intramontabili come La bambola e Pazza idea. Con una carriera poliedrica che spazia tra musica, moda e teatro, continua a influenzare generazioni grazie al suo stile unico e al carisma indimenticabile."
    },
    {
        Artista: "Fabri Fibra",
        Data: "3 Agosto",
        Luogo: "Vieste",
        Prezzo: "Da 39€",
        href: "https://www.ticketone.it/event/fabri-fibra-piazza-marina-piccola-20136862/",
        id: 7,
        info: "Fabri Fibra, pseudonimo di Fabrizio Tarducci, è un rapper italiano nato a Senigallia il 17 ottobre 1976. Attivo nella scena hip hop fin dalla metà degli anni '90, ha fatto parte dei gruppi Uomini di Mare, Qustodi del tempo e del collettivo Teste Mobili. Nel 2002 ha esordito come solista con l'album Turbe giovanili, seguito da Mr. Simpatia (2004) e Tradimento (2006), che lo hanno consacrato nel panorama musicale italiano. Con oltre un milione di copie vendute, è considerato uno dei pionieri del rap italiano mainstream. Nel 2025 ha pubblicato l'album Mentre Los Angeles brucia, che segna una nuova fase della sua carriera."
    },
    {
        Artista: "Dirotta Su Cuba",
        Data: "14 Agosto",
        Luogo: "Stornarella",
        Prezzo: "Gratis",
        id: 8,
        info: "I Dirotta su Cuba sono una band italiana nata a Firenze nel 1989, pioniera dell'acid jazz e del funky italiano. Il loro album di debutto, Dirotta su Cuba (1995), ha ottenuto il Disco di Platino ed è stato celebrato con una riedizione in vinile colorato per il trentesimo anniversario. Guidati dalla cantante Simona Bencini, sono ancora attivi con il 'Let's Celebrate Tour II', riproponendo i loro successi più iconici."
    },
    {
        Artista: "Nek",
        Data: "15 Agosto",
        Luogo: "Lucera",
        Prezzo: "Gratis",
        id: 9,
        info: "Filippo Neviani, noto con il nome d'arte Nek, è un cantautore italiano nato a Sassuolo (Modena) il 6 gennaio 1972. Ha iniziato la sua carriera musicale nei primi anni '90, esordendo come solista nel 1992 con l'album omonimo. Il suo successo è esploso nel 1997 grazie al brano 'Laura non c'è', presentato al Festival di Sanremo, che lo ha consacrato nel panorama musicale italiano. Nel corso della sua carriera, ha venduto oltre 10 milioni di dischi in tutto il mondo e ha partecipato più volte al Festival di Sanremo, ottenendo riconoscimenti significativi. Nel 2024, ha collaborato con Francesco Renga nel progetto 'RengaNek', partecipando insieme al Festival di Sanremo con il brano 'Pazzo di te'"
    },
    {
        Artista: "Max Gazzè",
        Data: "16 Agosto",
        Luogo: "Lucera",
        Prezzo: "Gratis",
        id: 10,
        info: "Max Gazzè è un cantautore e bassista romano nato nel 1967. Cresciuto a Bruxelles, ha iniziato a suonare il basso in giovane età e ha fatto parte della band jazz fusion 4 Play 4. Rientrato in Italia nel 1991, ha intrapreso la carriera solista con l'album Contro un’onda del mare (1996) . Il suo stile musicale spazia dal pop al jazz, con testi spesso scritti insieme al fratello Francesco. Nel 2014 ha collaborato con Niccolò Fabi e Daniele Silvestri nel progetto Il padrone della festa . Nel 2025 è uscito il documentario Fabi, Silvestri, Gazzè – Un passo alla volta, che racconta l'amicizia e il percorso artistico che hanno unito i tre cantautori."
    },
    {
        Artista: "The Kolors",
        Data: "17 Agosto",
        Luogo: "Lucera",
        Prezzo: "Gratis",
        id: 11,
        info: "The Kolors è una band pop‑rock italiana nata nel 2009 a Napoli, composta da Stash, Alex Fiordispino e Dario Iaculli. Dopo il trionfo ad Amici nel 2015 e successi come “Everytime” e “Italodisco” (primo posto nelle classifiche italiane nel 2023), hanno rappresentato un simbolo del pop italiano moderno con diverse partecipazioni al Festival di Sanremo"
    },
    {
        Artista: "Coma Cose",
        Data: "18 Agosto",
        Luogo: "Ischitella",
        Prezzo: "Gratis",
        id: 12,
        info: "I Coma Cose sono un duo musicale italiano nato nel 2016 a Milano, composto da Fausto Zanardelli (Fausto Lama) e Francesca Mesiano (California). Entrambi ex commessi e musicisti, si sono conosciuti nel 2014 e hanno dato vita al progetto musicale nel 2016. Nel 2025 hanno partecipato per la terza volta al Festival di Sanremo con il brano 'Cuoricini'."
    },
    {
        Artista: "Gianna Nannini",
        Data: "18 Agosto",
        Luogo: "Apricena",
        Prezzo: "Da 47€",
        href: "https://www.ticketone.it/event/gianna-nannini-sei-nellanima-festival-european-leg-2025-cava-dellerba-19134543/",
        id: 13,
        info: "Gianna Nannini è una delle voci più potenti e riconoscibili del rock italiano. Nata a Siena il 14 giugno 1954, ha iniziato a studiare pianoforte da giovanissima e si è trasferita a Milano per inseguire il sogno musicale. Il suo primo grande successo arriva nel 1979 con il singolo America, che la proietta nel panorama musicale europeo. Negli anni successivi, brani come Fotoromanza (1984) e Bello impossibile (1990) la consacrano come icona del rock italiano. Nel corso della sua carriera, ha pubblicato oltre trenta album, vendendo milioni di copie e ottenendo numerosi dischi di platino. Nel 2024, ha celebrato i suoi 70 anni con l'uscita dell'album Sei nell'anima, un film biografico su Netflix e un tour europeo che ha preso il via da Jesolo . Il 9 maggio 2025 ha pubblicato il singolo Panorama, anticipando un nuovo capitolo musicale ."
    },
    {
        Artista: "Nino D'Angelo",
        Data: "19 Agosto",
        Luogo: "Apricena",
        Prezzo: "Da 50€",
        href: "https://www.ticketone.it/event/nino-dangelo-cava-dellerba-19640901/",
        id: 14,
        info: "Nino D'Angelo è un cantautore e attore napoletano nato il 21 giugno 1957 a Napoli. Esordisce nel 1976 con il singolo 'A storia mia, che ottiene un grande successo regionale. Nel corso degli anni, D'Angelo diventa un'icona della musica napoletana, partecipando anche al Festival di Sanremo e recitando in numerosi film e sceneggiate. La sua carriera attraversa diverse fasi, passando dal pop melodico alla musica etnica, e continua a essere attivo sia in ambito musicale che cinematografico."
    },
    {
        Artista: "Nina Zilli",
        Data: "19 Agosto",
        Luogo: "Carpino",
        Prezzo: "Gratis",
        id: 15,
        info: "Nina Zilli, nata Maria Chiara Fraschetta nel 1980, è una cantautrice italiana nota per il suo stile che unisce soul, R&B e musica italiana anni ’60. Ha partecipato più volte al Festival di Sanremo e rappresentato l’Italia all’Eurovision nel 2012."
    },
    {
        Artista: "Tony Effe",
        Data: "21 Agosto",
        Luogo: "Apricena",
        Prezzo: "40,25€",
        href: "https://www.ticketone.it/event/tony-effe-summer-tour-cava-dellerba-20114277/",
        id: 16,
        info: "Tony Effe, pseudonimo di Nicolò Rapisarda, è un rapper romano nato il 17 maggio 1991. È noto per il suo stile trap diretto e per essere stato uno dei membri fondatori della Dark Polo Gang, gruppo che ha avuto un ruolo fondamentale nella diffusione del genere in Italia. Nel 2021 ha intrapreso la carriera solista con l'album Untouchable, seguito nel 2024 da ICON, che ha ottenuto un enorme successo commerciale, diventando l'album più venduto in Italia nel 2024. Nel 2025 ha partecipato per la prima volta al Festival di Sanremo con il brano 'Damme 'na mano'."
    },
    {
        Artista: "Tiromancino",
        Data: "21 Agosto",
        Luogo: "Rodi Garganico",
        Prezzo: "Gratis",
        id: 17,
        info: "I Tiromancino sono un gruppo musicale romano fondato nel 1989 da Federico Zampaglione, che ne è l'unico membro fisso. La loro musica fonde elementi di rock alternativo, elettronica e folk, distinguendosi per sonorità sofisticate e testi evocativi. Il loro successo è stato consolidato da album come La descrizione di un attimo (2000), che li ha portati alla ribalta nazionale, e Ho cambiato tante case (2021), che ha visto collaborazioni con artisti della nuova scena musicale italiana. Nel corso della loro carriera, hanno partecipato al Festival di Sanremo e hanno avuto un impatto significativo sulla musica pop italiana contemporanea."
    },
    {
        Artista: "Fiorella Mannoia",
        Data: "22 Agosto",
        Luogo: "Apricena",
        Prezzo: "Da 28,75€",
        href: "https://www.ticketone.it/event/fiorella-mannoia-fiorella-sinfonica-live-con-orchestra-cava-dellerba-19930171/",
        id: 18,
        info: "Fiorella Mannoia è una delle voci più riconoscibili e rispettate della musica italiana. Nata a Roma il 4 aprile 1954, ha iniziato la sua carriera musicale nel 1968 e ha partecipato al Festival di Sanremo per la prima volta nel 1981 con il brano 'Caffè nero bollente'. Il suo successo è stato consolidato nel 1987 con 'Quello che le donne non dicono', che le ha valso il Premio della Critica. Nel corso degli anni, ha collaborato con artisti di spicco e ha partecipato a numerosi eventi di beneficenza. Nel 2024, ha pubblicato l'album Disobbedire e il singolo 'Mariposa', che ha vinto il Premio Sergio Bardotti per il miglior testo al Festival di Sanremo. La sua carriera continua a essere segnata da successi e impegno sociale."
    },
    {
        Artista: "Dolcenera",
        Data: "22 Agosto",
        Luogo: "Accadia",
        Prezzo: "Gratis",
        id: 19,
        info: "Dolcenera, nata Emanuela Trane nel 1977, è una cantautrice italiana nota per il suo stile pop-rock. Ha vinto il Festival di Sanremo nel 2003 tra le nuove proposte e ha pubblicato diversi album di successo."
    },
    {
        Artista: "Alex Britti",
        Data: "26 Agosto",
        Luogo: "Vico Del Gargano",
        Prezzo: "Gratis",
        id: 20,
        info: "Alex Britti è un cantautore e chitarrista romano, nato il 23 agosto 1968. Ha iniziato la sua carriera musicale nel blues e nel jazz, collaborando con artisti internazionali. Nel 1998, con il singolo 'Solo una volta (o tutta la vita)', ha ottenuto il suo primo grande successo. Nel 1999, ha vinto il Festival di Sanremo nella categoria Nuove Proposte con 'Oggi sono io'. Tra i suoi brani più noti ci sono 'La vasca' e '7000 caffè'. Nel 2022 ha pubblicato 'Mojo', un album interamente strumentale, e nel 2024 ha intrapreso il 'Live 2024 Tour'"
    },
    {
        Artista: "Raphael Gualazzi",
        Data: "6 Settembre",
        Luogo: "Peschici",
        Prezzo: "Gratis",
        id: 21,
        info: "Raphael Gualazzi, nato nel 1981 a Urbino, è un cantautore e pianista italiano che unisce jazz, blues e pop. Ha vinto la sezione Giovani a Sanremo 2011 con 'Follia d'amore' e ha rappresentato l’Italia all’Eurovision, ottenendo grande successo."
    }
]

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const concerto = concerts.find(c => c.id === id)

if (concerto) {
    const infoDiv = document.createElement("div")
    infoDiv.classList.add("presentation-container")
    infoDiv.innerHTML = `
    <h3>${concerto.Artista} in concerto a ${concerto.Luogo}!</h3>
    <p>${concerto.info}
    `
    const body=document.querySelector("body")
    body.appendChild(infoDiv)
} else {
    const concertNotFound = document.createElement("div")
    concertNotFound.classList.add("not-found")
    concertNotFound.innerHTML = `
    <p>Concerto non trovato!</p>
    `
    const body = document.querySelector("body")
    body.appendChild(concertNotFound)
}