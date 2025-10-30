# 📚 Gerenciamento de Alunos - Projeto CRUD Full-Stack

Este é um projeto completo de um CRUD (Create, Read, Update, Delete) para gerenciamento de alunos, desenvolvido com uma arquitetura Full-Stack.

## 🌟 Tecnologias Utilizadas

| Categoria | Tecnologia | Versão | Descrição |

| **Frontend** | React | ^18.x | Biblioteca para construção da interface de usuário. |
| **Backend** | Node.js / Express | ^4.x | Framework para a API RESTful. |
| **Banco de Dados** | PostgreSQL | (Versão utilizada) | Sistema de gerenciamento de banco de dados relacional. |
| **Comunicação** | `fetch`  Comunicação assíncrona entre Frontend e Backend. |

## 📁 Estrutura do Projeto

O projeto é dividido em duas pastas principais:

* **`aluno-frontend` (ou `src` principal):** Contém a aplicação React (Frontend) rodando na porta `5173`.
* **`aluno-backend`:** Contém a API RESTful em Express.js e a lógica de conexão com o banco de dados PostgreSQL, rodando na porta `3001`.

## 🛠️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

* **Node.js e npm**
* **PostgreSQL** (e acesso a um banco de dados)
* **Docker*


## ⚙️ Configuração do Banco de Dados

1.  Crie um banco de dados PostgreSQL (ex: `crud_alunos`).
2.  Crie a tabela `alunos` usando o seguinte script SQL:

    ```sql
    CREATE TABLE alunos (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        sobrenome VARCHAR(100) NOT NULL,
        telefone VARCHAR(20),
        email VARCHAR(100) UNIQUE NOT NULL
    );
    ```
3.  Crie um arquivo `.env` na pasta **`aluno-backend`** com suas credenciais de conexão:

    ```env
    # .env no aluno-backend
    DB_USER=seu_usuario
    DB_HOST=localhost
    DB_DATABASE=crud_alunos
    DB_PASSWORD=sua_senha
    DB_PORT=5432
    API_PORT=3001 # Ou 3081, a porta real do seu servidor
    FRONTEND_URL=http://localhost:5173 # Necessário para o CORS
    ```

## ▶️ Como Rodar o Projeto

Você precisará iniciar o Backend e o Frontend separadamente.

### 1. Iniciar o Backend (API)

1.  Acesse a pasta do backend:
    ```bash
    cd aluno-backend
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor (utilizando `nodemon`):
    ```bash
    npm run dev
    ```
    *A API estará rodando em `http://localhost:3001`.*

### 2. Iniciar o Frontend (React)

1.  Acesse a pasta do frontend:
    ```bash
    
    npm install
    npm run dev 
    
    # cd ..
    # npm install
    # npm run dev
    ```
    *A aplicação estará disponível em `http://localhost:5173`.*

## 📌 Rotas da API

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/api/alunos` | Lista todos os alunos. |
| `POST` | `/api/alunos` | Cria um novo aluno. |
| `PUT` | `/api/alunos/:id` | Atualiza um aluno existente pelo ID. |
| `DELETE` | `/api/alunos/:id` | Remove um aluno pelo ID. |

## 👩‍💻 Contribuição

Contribuições são bem-vindas! Se você encontrou um bug ou tem uma melhoria, por favor:

1.  Faça um Fork do projeto.
2.  Crie uma branch para sua feature (`git checkout -b feature/minha-feature`).
3.  Faça commit das suas alterações (`git commit -m 'feat: Adiciona nova feature'`).
4.  Faça Push para a branch (`git push origin feature/minha-feature`).
5.  Abra um Pull Request.

---
