#!/bin/bash

# Start the Django server
cd backend
python manage.py migrate
python manage.py runserver &

# Start the React dev server
cd ..
npm run dev