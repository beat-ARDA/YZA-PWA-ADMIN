// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

// app.post('/user', (req, res, next) => {
//   res.send('<h1>User: ' + req.body.username + '</h1>');
// });

// app.get('/', (req, res, next) => {
//   res.send(
//     '<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
//   );
// });

// app.listen(5000);

const db = require("./db.json");
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/api/Periodo/current', (req, res) => {
  const response = [...db.Periodo]
  res.jsonp(response.pop())
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use('/api', router)
server.listen(44366, () => {
  console.log('JSON Server is running')
})