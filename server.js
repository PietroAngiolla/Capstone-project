import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config({ path: './db.env' });

const app = express();

// ✅ Configurazione CORS corretta
app.use(cors({
  origin: 'https://foggiavibes.onrender.com', // origine del tuo frontend (live server)
  credentials: true,
}));

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'Homepage')));
app.use(express.static(path.join(__dirname, 'Agosto')));
app.use(express.static(path.join(__dirname, 'Luglio')));
app.use(express.static(path.join(__dirname, 'Settembre')));
app.use('/css', express.static(path.join(__dirname, 'Homepage')));
app.use('/img', express.static(path.join(__dirname, 'Homepage', 'img')));
app.use('/info', express.static(path.join(__dirname, 'info')));
app.use('/css', express.static(path.join(__dirname, 'info')));
app.use(express.static(path.join(__dirname, 'Dashboard')));
app.use('/css', express.static(path.join(__dirname, 'Dashboard')));

app.get('/homepage', (req, res) => {
  res.sendFile(path.join(__dirname, 'Homepage', 'index.html'));
});

app.get('/agosto', (req, res) => {
  res.sendFile(path.join(__dirname, 'Agosto', 'indexAgosto.html'));
});

app.get('/luglio', (req, res) => {
  res.sendFile(path.join(__dirname, 'Luglio', 'indexLuglio.html'));
});

app.get('/settembre', (req, res) => {
  res.sendFile(path.join(__dirname, 'Settembre', 'indexSettembre.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'Dashboard', 'dashboard.html'));
});

app.get('/dashboard/preferiti', (req, res) => {
  res.sendFile(path.join(__dirname, 'Dashboard', 'Preferiti', 'preferiti.html'));
});

// Connessione MongoDB
mongoose.connect(process.env.MONGO_URL, {})
.then(() => {
  console.log('✅ Connesso a MongoDB Atlas!');
})
.catch((err) => {
  console.error('❌ Errore connessione MongoDB:', err);
});

// USER SCHEMA
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

// PREFERITO SCHEMA
const preferitoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  artista: String,
  data: String,
  luogo: String,
  prezzo: String,
  infoLink: String,
});
const Preferito = mongoose.model('Preferito', preferitoSchema);

// Middleware autenticazione JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ error: 'Token mancante' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token mancante' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token non valido' });
    req.user = user;
    next();
  });
}

// SIGNUP
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPw = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPw });
    await user.save();
    res.status(201).json({ message: 'Utente creato con successo!' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Errore durante la registrazione' });
  }
});

// LOGIN
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Utente non trovato' });

    const pwMatch = await bcrypt.compare(password, user.password);
    if (!pwMatch) return res.status(401).json({ error: 'Password errata' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ message: 'Login riuscito', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Errore durante il login' });
  }
});

// PROTECTED ROUTE DI ESEMPIO
app.get('/protected', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Token mancante' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: 'Accesso autorizzato!', userId: decoded.id });
  } catch (err) {
    res.status(401).json({ error: 'Token non valido' });
  }
});

// ROTTE PER PREFERITI

// Recupera tutti i preferiti dell'utente
app.get('/api/preferiti', authenticateToken, async (req, res) => {
  try {
    const preferiti = await Preferito.find({ userId: req.user.id });
    res.json(preferiti);
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero preferiti' });
  }
});

// Aggiungi un preferito
app.post('/api/preferiti', authenticateToken, async (req, res) => {
  const { artista, data, luogo, prezzo, infoLink } = req.body;
  try {
    const exists = await Preferito.findOne({ userId: req.user.id, infoLink });
    if (exists) return res.status(400).json({ error: 'Preferito già esistente' });

    const nuovoPreferito = new Preferito({
      userId: req.user.id,
      artista,
      data,
      luogo,
      prezzo,
      infoLink,
    });

    await nuovoPreferito.save();
    res.status(201).json({ message: 'Preferito aggiunto' });
  } catch (err) {
    res.status(500).json({ error: 'Errore salvataggio preferito' });
  }
});

// Rimuovi un preferito
app.delete('/api/preferiti', authenticateToken, async (req, res) => {
  const { infoLink } = req.body;
  try {
    await Preferito.deleteOne({ userId: req.user.id, infoLink });
    res.json({ message: 'Preferito rimosso' });
  } catch (err) {
    res.status(500).json({ error: 'Errore rimozione preferito' });
  }
});

// START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server avviato su http://localhost:${PORT}`);
});
