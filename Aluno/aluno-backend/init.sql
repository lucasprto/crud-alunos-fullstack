CREATE TABLE IF NOT EXISTS alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(100) UNIQUE NOT NULL
);


INSERT INTO alunos (nome, sobrenome, telefone, email) VALUES
('Ana', 'Silva', '11987654321', 'ana@email.com') ON CONFLICT (email) DO NOTHING;

INSERT INTO alunos (nome, sobrenome, telefone, email) VALUES
('Bruno', 'Santos', '21998765432', 'bruno@email.com') ON CONFLICT (email) DO NOTHING;

INSERT INTO alunos (nome, sobrenome, telefone, email) VALUES
('Lucas', 'Porto', '11987654322', 'lucas.santos@principia.net') ON CONFLICT (email) DO NOTHING;