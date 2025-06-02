# Django React Full-Stack Application

A modern full-stack application with a Django REST API backend and React frontend.

## Project Structure

- `backend/`: Django REST API application
- `src/`: React frontend application

## Features

- Class-based Django REST API
- Token-based authentication
- React frontend with a modern UI
- Form validation
- Responsive design
- API integration

## Backend Setup

1. Install Python dependencies:
```
pip install -r requirements.txt
```

2. Run migrations:
```
cd backend
python manage.py migrate
```

3. Create a superuser:
```
python manage.py createsuperuser
```

4. Start the Django server:
```
python manage.py runserver
```

## Frontend Setup

1. Install Node.js dependencies:
```
npm install
```

2. Start the development server:
```
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register/`: Register a new user
- `POST /api/auth/login/`: Login and get authentication token
- `POST /api/auth/logout/`: Logout and invalidate token

### User
- `GET /api/users/me/`: Get current user information

### Items
- `GET /api/items/`: List all items
- `POST /api/items/`: Create a new item
- `GET /api/items/:id/`: Retrieve a specific item
- `PUT /api/items/:id/`: Update a specific item
- `DELETE /api/items/:id/`: Delete a specific item

## Technologies Used

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