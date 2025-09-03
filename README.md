# ICS2609 Lab 2 - CRUD API

## Project Overview
This project is a REST API for managing student and course records using Node.js, Express, and MySQL.
It supports full CRUD operations: Create, Read, Update, and Delete.

## Setup Instructions
1. Clone the repository:
git clone https://github.com/kisshia/ICS2609_Lab2_CRUD_API.git

2. Install dependencies:
npm install

3. Create a `.env` file based on `.env.example`:
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=

4. Start the server:
node server.js

5. Open Postman to test the API endpoints.

## List of Endpoints

### Health Check
GET /api/health

### Students
GET /api/students - Get all students
GET /api/students/:id - Get student by ID
POST /api/students - Create a new student
PUT /api/students/:id - Update student
DELETE /api/students/:id - Delete student

### Courses
GET /api/courses - Get all courses
GET /api/courses/:id - Get course by ID
POST /api/courses - Create a new course
PUT /api/courses/:id - Update course
DELETE /api/courses/:id - Delete course

## Notes
- Replace `<your-username>` in the clone URL with your actual GitHub username.  
- Make sure `.env` contains your real database credentials and is included in `.gitignore` so it is not uploaded to GitHub.  
- `.env.example` is provided with placeholder variables for reference.