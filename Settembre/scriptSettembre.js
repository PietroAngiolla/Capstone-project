const concerts=[
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

// Login
const loginModal = document.getElementById("loginModal");
const openLoginBtn = document.getElementById("openLoginBtn");
const closeLogin = document.getElementById("closeLogin");

openLoginBtn.onclick = function() {
  loginModal.style.display = "block";
}
closeLogin.onclick = function() {
  loginModal.style.display = "none";
}

// Sign Up
const signupModal = document.getElementById("signupModal");
const openSignupBtn = document.getElementById("openSignupBtn");
const closeSignup = document.getElementById("closeSignup");

openSignupBtn.onclick = function() {
  signupModal.style.display = "block";
}
closeSignup.onclick = function() {
  signupModal.style.display = "none";
}

// Chiudere se clicchi fuori dal contenuto
window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
}

const BASE_URL = 'https://foggiavibes.onrender.com';

// Login form submit
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert('Login riuscito!');
      console.log('Token:', data.token);
      // Salva il token se ti serve, es. localStorage.setItem('token', data.token)
      // Chiudi modal o fai redirect
      localStorage.setItem('token', data.token);

      // ✅ Ricarica la pagina
      window.location.href = '/dashboard';
    } else {
      alert('Errore login: ' + (data.error || 'Errore sconosciuto'));
    }
  } catch (err) {
    alert('Errore di rete o server');
    console.error(err);
  }
});

// Signup form submit
document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Nota: se vuoi salvare il nome, aggiungi lato backend e qui in body
  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert('Registrazione riuscita!');
      // Chiudi modal o fai altre azioni
      window.location.href = '/dashboard';
    } else {
      alert('Errore registrazione: ' + (data.error || 'Errore sconosciuto'));
    }
  } catch (err) {
    alert('Errore di rete o server');
    console.error(err);
  }
});