const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from React app
app.use(express.static(path.join(__dirname, '../../client/build')));

// API endpoints
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.get('/api/time', (req, res) => {
  res.json({ time: new Date().toLocaleString() });
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});