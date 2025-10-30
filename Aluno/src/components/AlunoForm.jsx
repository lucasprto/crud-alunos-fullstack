
import React, { useState, useEffect } from 'react';

const estadoInicialFormulario = {
  nome: '',
  sobrenome: '',
  telefone: '',
  email: '',
};

const AlunoForm = ({ adicionarAluno, alunoEditando, atualizarAluno, setAlunoEditando }) => {
  const [aluno, setAluno] = useState(estadoInicialFormulario);

  
  useEffect(() => {
    if (alunoEditando) {
     
      setAluno(alunoEditando);
    } else {
      
      setAluno(estadoInicialFormulario);
    }
  }, [alunoEditando]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno({ ...aluno, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!aluno.nome || !aluno.sobrenome || !aluno.email) {
      alert("Preencha todos os campos obrigatórios: Nome, Sobrenome e Email.");
      return;
    }

    if (alunoEditando) {
      atualizarAluno(aluno);
    } else {
      adicionarAluno(aluno);
    }
    
    setAluno(estadoInicialFormulario);
  };

  const handleCancelarEdicao = () => {
    setAlunoEditando(null);
    setAluno(estadoInicialFormulario);
  };

  return (
    <div className="form-container">
      <h2>{alunoEditando ? 'Editar Aluno' : 'Cadastrar Novo Aluno'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={aluno.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="sobrenome">Sobrenome:</label>
          <input
            type="text"
            id="sobrenome"
            name="sobrenome"
            value={aluno.sobrenome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={aluno.telefone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={aluno.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">
          {alunoEditando ? 'Salvar Edição' : 'Cadastrar'}
        </button>

        {alunoEditando && (
          <button type="button" onClick={handleCancelarEdicao} style={{ marginLeft: '10px' }}>
            Cancelar Edição
          </button>
        )}
      </form>
    </div>
  );
};

export default AlunoForm;