📚 Gerenciamento de Alunos - Projeto CRUD Full-Stack
Este é um projeto completo de um CRUD (Create, Read, Update, Delete) para gerenciamento de alunos, desenvolvido com uma arquitetura Full-Stack.

🌟 Tecnologias Utilizadas
| Categoria | Tecnologia | Versão | Descrição |

| Interface | Reagir | ^18.x | Biblioteca para construção da interface do usuário. | | Back-end | Node.js/Expresso | ^4.x | Framework para uma API RESTful. | | Banco de Dados | PostgreSQL | (Versão utilizada) | Sistema de gerenciamento de banco de dados relacional. | | Comunicação | fetch Comunicação assíncrona entre Frontend e Backend. |

📁 Estrutura do Projeto
O projeto é dividido em duas pastas principais:

aluno-frontend(ou srcprincipal): Contém o aplicativo React (Frontend) rodando na porta 5173.
aluno-backend: Contém uma API RESTful em Express.js e uma lógica de conexão com o banco de dados PostgreSQL, rodando na porta 3001.
🛠️ Pré-requisitos
Antes de começar, comprove-se de ter instalado:

Node.js e npm
PostgreSQL (e acesso a um banco de dados)
* Docker
⚙️ Configuração do Banco de Dados
Crie um banco de dados PostgreSQL (ex: crud_alunos).

Crie uma tabela alunosusando o seguinte script SQL:

CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(100) UNIQUE NOT NULL
);
Crie um arquivo .envna pasta aluno-backendcom suas credenciais de conexão:

# .env no aluno-backend
DB_USER=seu_usuario
DB_HOST=localhost
DB_DATABASE=crud_alunos
DB_PASSWORD=sua_senha
DB_PORT=5432
API_PORT=3001 # Ou 3081, a porta real do seu servidor
FRONTEND_URL=http://localhost:5173 # Necessário para o CORS
▶️Como Rodar o Projeto
Você precisará iniciar o Backend e o Frontend separadamente.

1. Iniciar o Backend (API)
Acesse a pasta do backend:
cd aluno-backend
Instale as partes:
npm install
Iniciar o servidor (utilizando nodemon):
npm run dev
A API estará rodando em http://localhost:3001.
2. Iniciar o Frontend (React)
Acesse a pasta do frontend:
npm install
npm run dev 

# cd ..
# npm install
# npm run dev
A aplicação estará disponível em http://localhost:5173.
📌 Rotas da API
Método	Ponto final	Descrição
GET	/api/alunos	Lista todos os alunos.
POST	/api/alunos	Cria um novo aluno.
PUT	/api/alunos/:id	Atualiza um aluno existente pelo ID.
DELETE	/api/alunos/:id	Remover um aluno pelo ID.
👩‍💻 Contribuição
Contribuições são bem-vindas! Se você encontrou um bug ou tem uma melhoria, por favor:

Faça um Fork do projeto.
Crie um branch para seu feature ( git checkout -b feature/minha-feature).
Faça commit de suas alterações ( git commit -m 'feat: Adiciona nova feature').
Faça um push para uma filial ( git push origin feature/minha-feature).
Abra um Pull Request.
