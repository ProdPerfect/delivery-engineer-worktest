const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Application is running successfully. Follow instructions in the README to run the exercises.'));

app.get('/assertions', (req, res) => res.send('Assertions Exercise'));

app.get('/diagnostic/failure', (req, res) => res.send('Assertions Exercise. Test should fail.'));

app.listen(port, () => console.log(`ProdPerfect worktest app listening on port ${port}`));
