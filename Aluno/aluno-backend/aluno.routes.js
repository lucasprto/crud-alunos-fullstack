const express = require('express');
const router = express.Router();
const pool = require('./db'); // Importa a conexão com o banco


router.post('/alunos', async (req, res) => {
  const { nome, sobrenome, telefone, email } = req.body;
  try {
    const query = 'INSERT INTO alunos (nome, sobrenome, telefone, email) VALUES ($1, $2, $3, $4) RETURNING *';
    const result = await pool.query(query, [nome, sobrenome, telefone, email]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao cadastrar aluno:', error);
    if (error.code === '23505') { 
        return res.status(409).json({ message: 'Email já cadastrado.' });
    }
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});


router.get('/alunos', async (req, res) => {
  try {
    const query = 'SELECT id, nome, sobrenome, telefone, email FROM alunos ORDER BY id';
    const result = await pool.query(query);

    
    const alunosFormatados = result.rows.map(aluno => ({
        id: aluno.id,
        nomeCompleto: `${aluno.nome} ${aluno.sobrenome}`,
        telefone: aluno.telefone,
        email: aluno.email,
    }));

    res.json(alunosFormatados);
  } catch (error) {
    console.error('Erro ao listar alunos:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});


router.put('/alunos/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, telefone, email } = req.body;
    try {
        const query = 'UPDATE alunos SET nome = $1, sobrenome = $2, telefone = $3, email = $4 WHERE id = $5 RETURNING *';
        const result = await pool.query(query, [nome, sobrenome, telefone, email, id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Aluno não encontrado.' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao editar aluno:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});


router.delete('/alunos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const query = 'DELETE FROM alunos WHERE id = $1';
        const result = await pool.query(query, [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Aluno não encontrado.' });
        }
        res.status(204).send(); // 204 No Content
    } catch (error) {
        console.error('Erro ao deletar aluno:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});

module.exports = router;