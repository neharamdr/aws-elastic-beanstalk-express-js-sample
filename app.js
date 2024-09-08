const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('AWS Lab Test by Neha - 07 Sept 2024!--> testing pipeline after deployment'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
