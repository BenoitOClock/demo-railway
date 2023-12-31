require('dotenv').config();

const express = require('express');
const router = require('./app/router');

const port = process.env.PORT || 4000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(router);

app.listen(port, () => {
  console.log(`Server ready: http://localhost:${port}`);
});
