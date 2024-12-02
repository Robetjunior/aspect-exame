# Aspect - Gerenciamento de Agendamentos de Exames Hospitalares

## Objetivo

Desenvolver uma aplicação web para gerenciamento de agendamentos de exames hospitalares, permitindo que os usuários visualizem exames disponíveis, adicionem agendamentos e excluam agendamentos existentes.

---

## Requisitos Funcionais

### 1. Gerenciamento de Exames

- **Visualizar Exames Disponíveis**
  - Listar todos os tipos de exames disponíveis para agendamento.
  - Detalhes de cada exame:
    - Nome do Exame
    - Especialidade médica

### 2. Agendamento de Exames

- **Adicionar Agendamento**
  - Permitir que usuários agendem um exame selecionando:
    - Tipo de exame
    - Data e hora disponíveis
    - Informações adicionais (observações)

- **Visualizar Agendamentos**
  - Listar todos os exames agendados.
  - Detalhes de cada agendamento:
    - Tipo de exame
    - Data e hora agendada
    - Informações adicionais

- **Excluir Agendamento**
  - Permitir que usuários removam um agendamento existente.

---

## Tecnologias Utilizadas

### **Frontend**
- **Framework:** React.js com TypeScript
- **Gerenciamento de Estado:** Redux Toolkit
- **Bibliotecas Adicionais:**
  - React Calendar
  - React Toastify
  - Styled Components
  - Redux: Biblioteca para gerenciamento de estado da aplicação.
- **Build:** Vite.js

### **Backend**
- **Framework:** Node.js com TypeScript
- **Bibliotecas:**
  - Express.js
  - TypeORM
  - Supabase.js
  - Date-Fns
- **Banco de Dados:** PostgreSQL

### **Infraestrutura**
- **Gerenciamento de Contêineres:** Docker e Docker Compose

---

## Como Executar o Projeto

### Pré-requisitos

1. **Node.js** instalado na máquina.
2. **Docker** e **Docker Compose** configurados.
3. **Git** para clonar o repositório.

---

### Passo-a-Passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/Robetjunior/aspect-exame.git
   cd aspect-exame

2. Crie os arquivos .env para o backend com as seguintes variáveis:
   ```bash
    SUPABASE_URL=https://warbnlibtbaktxtyjoxb.supabase.co
    SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhcmJubGlidGJha3R4dHlqb3hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5MTQxODgsImV4cCI6MjA0ODQ5MDE4OH0.xfQ36D6VmYHMvrPKQGX1i2w-gBuqZHuvcu0wPK4CMKM
    ```

3. Construa os contêineres usando Docker Compose:
    ```bash
    docker-compose build
    ```

4. Inicie os contêineres:
    ```bash
    docker-compose up -d
    ```

5. Após executar este comando, seus serviços estarão ativos e prontos para uso. Você pode verificar o status dos contêineres com:
    ```bash
    docker-compose ps
    ```

6. E visualizar os logs com:
    ```bash
    docker-compose logs
    ```

7. Acesse o frontend no navegador:
    - URL: http://localhost:5173

8. Certifique-se de que o backend está rodando:
    - URL: http://localhost:3000

### Deploy
- Frontend: Pode ser hospedado em serviços como Vercel ou Netlify.
- Backend: Pode ser hospedado em Heroku ou configurado para execução em servidores próprios.

### Executando sem Docker
Caso prefira executar o projeto sem Docker, siga os passos abaixo:

1. Frontend
```bash
cd frontend
npm install
npm run dev
```

1. Backend
```bash
cd backend
npm install
npm run dev
```

### Autor
José Roberto Ferreira Junior

GitHub: [https://github.com/Robetjunior](https://github.com/Robetjunior)

LinkedIn: [https://www.linkedin.com/in/jos%C3%A9-roberto-dev/](https://www.linkedin.com/in/jos%C3%A9-roberto-dev/)
