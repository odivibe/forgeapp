// server/src/index.js
// This is the entry point — where the app starts

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'

// Load environment variables from .env file
// Must be called before anything that uses process.env
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// ── Middleware ────────────────────────────────────────────────────
// Middleware runs on every request, in order, before your routes

// helmet: automatically sets security HTTP headers
app.use(helmet())

// cors: allows requests from your React app
// Without this, browser will block the request
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true   // allow cookies/auth headers
}))

// express.json: allows reading JSON from request body
// Without this, req.body is undefined
app.use(express.json())

// ── Health check ──────────────────────────────────────────────────
// Simple endpoint to confirm the server is running
// Docker and AWS will ping this to check app health
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// ── Routes ────────────────────────────────────────────────────────
// We'll add these in Step 3
// app.use('/api/auth', authRoutes)
// app.use('/api/projects', projectRoutes)
// app.use('/api/tasks', taskRoutes)

// ── Global error handler ──────────────────────────────────────────
// Catches any error thrown in route handlers
// Must have 4 parameters — Express recognises this as error middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({
    error: err.message || 'Something went wrong'
  })
})

// Start listening
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})