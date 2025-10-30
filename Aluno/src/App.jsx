
import { useState, useEffect } from 'react';
import AlunoLista from './components/AlunoLista';
import AlunoForm from './components/AlunoForm';
import './App.css'; 
import Toolbar from './components/Toolbar';


function App() {

  //CADASTRAR ALUNOO
  const [alunos, setAlunos] = useState([]);
  const [alunoEditando, setAlunoEditando] = useState(null);
  const editarAluno = (aluno) => {
    setAlunoEditando(aluno); 
};
  const API_URL = 'http://localhost:3001/api/alunos'; 

  
  const adicionarAluno = async (novoAluno) => {
    try {
      
      const response = await fetch(API_URL, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        
        },
       
        body: JSON.stringify(novoAluno), 
      });

      
      if (!response.ok) {
        
        throw new Error(`Erro ao cadastrar aluno: ${response.statusText}`);
      }
      
  
      const alunoCadastrado = await response.json(); 

      
      setAlunos((prevAlunos) => [...prevAlunos, alunoCadastrado]);
      
      console.log('Aluno cadastrado com sucesso!', alunoCadastrado);
      
    

    } catch (error) {
      
      console.error('Falha ao cadastrar o aluno:', error);
      
    }
  
  }
  // ATUALIZAR ALUNO


  useEffect(() => {
    const carregarAlunos = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Erro ao carregar dados: ${response.statusText}`);
        }
        const dadosAlunos = await response.json();
        setAlunos(dadosAlunos);
      } catch (error) {
        console.error('Falha ao carregar alunos:', error);
      }
    };
    carregarAlunos();
  }, []); 
  
  
  const atualizarAluno = async (alunoAtualizado) => {
    const url = `${API_URL}/${alunoAtualizado.id}`; // Ex: http://sua-api.com/alunos/1
    
    try {
      const response = await fetch(url, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(alunoAtualizado), 
      });

      if (!response.ok) {
        throw new Error(`Erro ao atualizar: ${response.statusText}`);
      }
      
      setAlunos(prevAlunos => 
        prevAlunos.map(aluno =>
          aluno.id === alunoAtualizado.id ? alunoAtualizado : aluno
        )
      );
      
      console.log('Aluno atualizado com sucesso!', alunoAtualizado.id);

    } catch (error) {
      console.error('Falha ao atualizar o aluno:', error);
    }
  };
  
  //DELETAR ALUNO
  
const deletarAluno = async (idAluno) => {
    const url = `${API_URL}/${idAluno}`; // Ex: http://sua-api.com/alunos/1
    
    if (!window.confirm("Tem certeza que deseja excluir este aluno?")) {
        return; 
    }
    
    try {
     
      const response = await fetch(url, {
        method: 'DELETE', 
        
      });

    
      if (response.status !== 204 && !response.ok) { 
        throw new Error(`Erro ao excluir: ${response.statusText}`);
      }

      
      setAlunos(prevAlunos => 
        prevAlunos.filter(aluno => aluno.id !== idAluno)
      );
      
      console.log('Aluno excluído com sucesso!', idAluno);

    } catch (error) {
      console.error('Falha ao excluir o aluno:', error);
    }
  };

  
  return (
    <div className="container">
      <h1>Cadastro de Alunos</h1>

      <Toolbar></Toolbar>

      <AlunoForm
        adicionarAluno={adicionarAluno}
        alunoEditando={alunoEditando}
        atualizarAluno={atualizarAluno}
        setAlunoEditando={setAlunoEditando} 
      />

      <AlunoLista
        alunos={alunos}
        deletarAluno={deletarAluno}
        editarAluno={editarAluno}
      />
    </div>
  );
}

export default App;