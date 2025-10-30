// src/components/AlunoLista.jsx
import React from 'react';

const AlunoLista = ({ alunos, deletarAluno, editarAluno }) => {
  return (
    <div className="lista-container">
      <h2>Lista de Alunos ({alunos.length})</h2>
      
      {alunos.length === 0 ? (
        <p>Nenhum aluno cadastrado.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome Completo</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map(aluno => (
              <tr key={aluno.id}>
                <td>{aluno.id}</td>
                <td>{aluno.nome} {aluno.sobrenome}</td>
                <td>{aluno.telefone}</td>
                <td>{aluno.email}</td>
                <td>
                  <button onClick={() => editarAluno(aluno)}>Editar</button>
                  <button onClick={() => {
                    if (window.confirm(`Tem certeza que deseja deletar ${aluno.nome} ${aluno.sobrenome}?`)) {
                      deletarAluno(aluno.id);
                    }
                  }} style={{ marginLeft: '5px' }}>
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AlunoLista;