const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('AWS Lab Test by Neha - 18 August 2024!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
