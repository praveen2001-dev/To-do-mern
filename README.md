# MERN Stack To-Do List App

A full-stack To-Do List application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application allows users to securely manage their daily tasks with authentication using JWT and HTTP Cookies.

## 🚀 Features

- User Registration
- User Login & Logout
- JWT Authentication
- HTTP Cookie Authentication
- Protected Routes
- Create New Task
- View All Tasks
- Edit Existing Task
- Delete Single Task
- Delete Multiple Tasks
- MongoDB Atlas Database

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- React Cookie
- CSS

### Backend
- Node.js
- Express.js
- JWT (jsonwebtoken)
- bcryptjs
- Cookie Parser
- CORS

### Database
- MongoDB Atlas

---

## 📁 Project Structure

```
todo-mern/
│
├── backend/
│   ├── dbconfig.js
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── AddList.jsx
│   │   │   ├── AllList.jsx
│   │   │   ├── EditList.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── NavBar.jsx
│   │   │   ├── Protected.jsx
│   │   │   └── SignUp.jsx
│   │   ├── style/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
``````

---

## 📦 Installation

### Clone Repository

```bash
git clone https://github.com/your-username/todo-mern.git
```

### Install Backend

```bash
cd backend
npm install
```

### Install Frontend

```bash
cd frontend
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=3200

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_secret_key
```

---

## ▶️ Run Backend

```bash
npm start
```

or

```bash
npm run dev
```

---

## ▶️ Run Frontend

```bash
npm run dev
```

---

## 🔐 Authentication

- JWT Token
- HTTP Cookies
- Protected Routes
- Secure User Login & Logout

---

## 🌐 API Endpoints

### User

| Method | Endpoint |
|---------|----------|
| POST | /user/signup |
| POST | /user/login |

### Tasks

| Method | Endpoint |
|---------|----------|
| GET | /list |
| POST | /add |
| PUT | /edit/:id |
| DELETE | /delete/:id |
| DELETE | /delete-multiple |

---

## 📷 Screenshots

Add screenshots here.

Example:

- Login Page
- Signup Page
- Task List
- Add Task
- Edit Task

---

## Future Improvements

- Search Tasks
- Task Categories
- Due Date
- Task Priority
- Pagination
- Dark Mode
- User Profile

---

## Author

**Praveen Kumar**

GitHub:
https://github.com/praveen2001-dev
