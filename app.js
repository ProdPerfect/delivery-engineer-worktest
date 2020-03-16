const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));

const landing_message = 'Application is running successfully. Follow instructions in the README to run the exercises.';

app.get('/', (req, res) => res.send(landing_message));

app.get('/assertions', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/assertions/index.html')); 
});

app.get('/diagnostic', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/diagnostic/index.html')); 
});

app.listen(port, () => console.log(`ProdPerfect worktest app listening on port ${port}`));
