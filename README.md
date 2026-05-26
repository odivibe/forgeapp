# ForgeApp

A full-stack project and task management application.

## Tech Stack

**Frontend:** React, Vite, Zustand, Tailwind CSS  
**Backend:** Node.js, Express, PostgreSQL (raw SQL)  
**Infrastructure:** Docker, Docker Compose  

## Getting Started

### Prerequisites
- Docker Desktop installed and running
- Git

### Run with Docker (recommended)

```bash
git clone https://github.com/YOUR_USERNAME/forgeapp.git
cd forgeapp
docker compose up --build
```

Open http://localhost

### Run locally (without Docker)

**Backend:**
```bash
cd server
cp .env.example .env     # fill in your values
npm install
npm run dev              # runs on http://localhost:5000
```

**Frontend:**
```bash
cd client
cp .env.example .env
npm install
npm run dev              # runs on http://localhost:5173
```

## Project Structure

## API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| POST | /api/auth/register | Create account |
| POST | /api/auth/login | Login |
| GET | /api/auth/me | Get current user |
| GET | /api/projects | List projects |
| POST | /api/projects | Create project |
| DELETE | /api/projects/:id | Delete project |
| GET | /api/projects/:id/tasks | List tasks |
| POST | /api/projects/:id/tasks | Create task |
| PATCH | /api/projects/:id/tasks/:taskId | Update task |
| DELETE | /api/projects/:id/tasks/:taskId | Delete task |
| GET | /api/stats | Dashboard stats |