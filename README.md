# Aplicação Django React Full-Stack

Um aplicativo full-stack moderno com um backend Django REST API e um frontend React.

## Estrutura do Projeto

- `backend/`: Django REST API application
- `src/`: React frontend application

## Caracteristicas

- API REST Django baseada em classe
- Autenticação baseada em token
- Frontend React com uma interface de usuário moderna
- Validação de formulário
- Design Responsivo
- Integração de API

## Backend Setup

1. Instalar dependencias do Python:
```
pip install -r requirements.txt
```

2. Execução de Migração:
```
cd backend
python manage.py migrate
```

3. riar SuperUsuario:
```
python manage.py createsuperuser
```

4. Iniciar Servidor Django:
```
python manage.py runserver
```

## Configuração Frontend 

1. Instalar dependencias do Node.js:
```
npm install
```

2. Inicie o servidor de desenvolvimento:
```
npm run dev
```

## API Endpoints

### Autenticação
- `POST /api/auth/register/`: Registrar Novo Usuario
- `POST /api/auth/login/`: Faça login e obtenha o token de autenticação
- `POST /api/auth/logout/`: Sair e invalidar o token

### User
- `GET /api/users/me/`: Obtenha informações atuais do usuário

### Items
- `GET /api/items/`: Listar todos os itens
- `POST /api/items/`: Criar um novo item
- `GET /api/items/:id/`: Recuperar um item específico
- `PUT /api/items/:id/`: Atualizar um item específico
- `DELETE /api/items/:id/`: Delete  um item específico

## Tecnologias Usadas

### Backend
- Django
- Django REST Framework
- SQLite (for development)

### Frontend
- React
- React Router
- React Query
- Axios
- TailwindCSS
- Framer Motion
