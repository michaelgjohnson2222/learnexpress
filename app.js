const express = require('express');
<<<<<<< HEAD

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>I love myself</h1>');
});

app.get('/hello', (req, res) => {
    res.send('<h1>Hello Jacascript Developer</h1>');
});

app.listen(3000, () => {
    console.log('The application is running on localhost')
});

klhdgsklhg
=======
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});
>>>>>>> commit message
