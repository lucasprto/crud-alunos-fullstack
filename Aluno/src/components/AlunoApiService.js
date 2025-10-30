// src/services/alunoApiService.js

// Certifique-se de que esta variável de ambiente está definida no .env do seu Frontend!
const BASE_URL = import.meta.env.VITE_API_BASE_URL; // Ex: http://localhost:3001/api

/**
 * Envia um novo registro de aluno para o backend (POST /alunos).
 * @param {Object} alunoData - Dados do aluno a ser cadastrado.
 * @returns {Promise<Object>} O objeto do aluno criado (com o ID do DB).
 */
export const cadastrarAlunoAPI = async (alunoData) => {
    const url = `${BASE_URL}/alunos`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(alunoData),
        });

        const data = await response.json(); 

        if (!response.ok) {
            // Trata erros de API (como 409 Conflict)
            throw new Error(data.message || `Erro HTTP: Status ${response.status}`);
        }
        
        return data; // Retorna o aluno salvo
    } catch (error) {
        console.error("Erro na API - Cadastro:", error);
        throw error; 
    }
};

// Exporte outras funções de API aqui, como listarAlunosAPI
// export const listarAlunosAPI = async () => { ... }