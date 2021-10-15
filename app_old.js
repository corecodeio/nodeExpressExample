const express = require('express');
const http = require('http');

const app = express(); // listener


// [CHROME] --(REQ)--> [SERVER] --(REQ)--> [MIDDLEWARE1] --(REQ)--> [MIDDLEWARE2] --(REQ)--> [MIDDLEWARE3] 
//         <-------------------------(RES)--------------------------------------------------------|

// middlewres
app.use((req, res, next) => {
  console.log('MIDDLEWARE1');
  next();
});

app.use((req, res, next) => {
  console.log('MIDDLEWARE2');
  res.send('<h1>Hello!</h1>');
});

const server = http.createServer(app);

server.listen(3800);

