require('dotenv').config();
const express = require('express');
const cors = require('cors');
const alunoRoutes = require('./aluno.routes');
dev: "nodemon server.js"


const app = express();
const PORT = process.env.API_PORT || 

// Middlewares
app.use(cors({ origin: 'http://localhost:3000' })); // Configura o CORS para o seu frontend React (porta padrão 3000)


const port = 3001; 

app.use(cors({
    
    origin: 'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
app.use(express.json());
app.use('/api', alunoRoutes);

app.get('/', (req, res) => {
    res.send('API de Cadastro de Alunos Rodando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});

