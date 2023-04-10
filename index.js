const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(
  cors({
    origin: '*',
  })
);

app.get('/dice/roll', (req, res) => {
  const num = Math.round(Math.random() * 5 + 1);
  res.json({
    result: num,
  });
});

const { PORT = 500 } = process.env;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
