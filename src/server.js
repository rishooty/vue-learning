import express from 'express'

const app = express()
const port = 3000 // You can choose any available port

// Simple endpoint
// Run with node server.js

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' })
})

app.get('/api/greet/:name', (req, res) => {
  const name = req.params.name
  res.json({ message: `Hello, ${name}!` })
})

// Example body: '{"message": "Hello, server!"}'
app.post('/api/echo', express.json(), (req, res) => {
  const data = req.body
  res.json({ received: data })
})

// Example body: '{"message": "Hello, server!"}'
app.patch('/api/echo', express.json(), (req, res) => {
  const data = req.body
  res.json({ received: data })
})

app.delete('/api/:name/DELETTHIS', (req, res) => {
  const name = req.params.name
  res.json({ message: `${name} was sent to the shadow realm.` })
})
