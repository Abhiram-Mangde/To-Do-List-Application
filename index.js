const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let tasks = [];

app.get('/tasks', (req, res) => res.json(tasks));
app.post('/tasks', (req, res) => {
    tasks.push(req.body.task);
    res.status(201).send('Task added');
});

app.listen(3000, () => console.log('Backend running on port 3000'));
