const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).send('Invalid input');
  }
  const result = a + b;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
