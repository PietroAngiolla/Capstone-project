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


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Homepage', 'index.html'));
});

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

// PROTECTED ROUTE
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




// START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server avviato su http://localhost:${PORT}`);
});
