const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/time', (req, res) => {
  res.send(new Date().toLocaleString());
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});