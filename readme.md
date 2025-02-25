# API Adopet - TypeScript

![Badge](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![Badge](https://img.shields.io/badge/Licença-MIT-blue)

## 📌 Sobre o Projeto

A **API Adopet** é uma API desenvolvida em **Node.js** com **TypeScript** para gerenciar a adoção de pets. Ela permite o cadastro e gerenciamento de adotantes, abrigos e animais, além de fornecer um sistema de adoção. A API foi construída utilizando **Express** e **TypeORM** com um banco de dados SQLite.

---

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)
- [SQLite](https://www.sqlite.org/)
- [Yup](https://www.npmjs.com/package/yup) (validação de dados)
- [ESLint](https://eslint.org/) (padronização de código)

---

## 📦 Instalação e Configuração

### 🔹 Pré-requisitos

Antes de iniciar, certifique-se de ter o **Node.js** instalado em sua máquina.

### 🔹 Clonando o Repositório

```bash
git clone https://github.com/lmoraesdev/api-adopet-ts.git
cd api-adopet-ts
```

```bash
npm install
```

```bash
npm run dev
```

```pgslq
📂 api-adopet-ts
 ┣ 📂 src
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 entities
 ┃ ┣ 📂 middlewares
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 config
 ┃ ┃ ┗ database.sqlite
 ┃ ┣ 📜 server.ts
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┗ 📜 README.md
```

## 📡 Endpoints da API

🔹 Abrigos (/abrigos)

POST /abrigos → Cadastrar um novo abrigo
GET /abrigos → Listar todos os abrigos
PUT /abrigos/:id → Atualizar dados de um abrigo
DELETE /abrigos/:id → Remover um abrigo
PATCH /abrigos/:id → Atualizar endereço do abrigo

🔹 Adotantes (/adotantes)

POST /adotantes → Cadastrar um novo adotante
GET /adotantes → Listar todos os adotantes
PUT /adotantes/:id → Atualizar dados do adotante
DELETE /adotantes/:id → Remover um adotante
PATCH /adotantes/:id → Atualizar endereço do adotante

🔹 Pets (/pets)

POST /pets → Cadastrar um novo pet
GET /pets → Listar todos os pets disponíveis para adoção
PUT /pets/:id → Atualizar dados de um pet
DELETE /pets/:id → Remover um pet
PUT /pets/:pet_id/:adotante_id → Adotar um pet
GET /pets/filtro → Buscar pet por características específicas

## 🤝 Contribuição

Se deseja contribuir com este projeto:

Faça um fork do repositório.
Crie uma branch (git checkout -b feature/nova-feature).
Commit suas alterações (git commit -m 'Adiciona nova feature').
Faça um push para a branch (git push origin feature/nova-feature).
Abra um Pull Request.

## 📜 Licença

Este projeto está sob a Licença MIT. Para mais detalhes, consulte o arquivo LICENSE.
