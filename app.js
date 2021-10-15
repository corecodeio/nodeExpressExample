const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/transactions',(req, res, next) => {
  //console.log(req);
  console.log(req.body);
  res.status(200).json({ valid: true, message: 'GET, middelware'});
});

app.post('/transactions', (req, res, next) => {
  res.status(200).json({ valid: true, message: 'POST, middelware'});
});

app.use('/',(req, res, next) => {
  res.status(404).json({ 
    valid: false, 
    message: 'Endpoint not found', 
    data: { method: req.method, path: req.url }});
});

app.listen(3800, () => {
  console.log('Server running on port: 3800');
});
