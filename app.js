const express = require('express');
const mongoose = require('mongoose');

const app = express();

// routes
const authRoute = require('./routes/authRoute')

// middleware
app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://pass:pass@node.dakub.mongodb.net/delivery?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(3000, () => console.log('server is runnign')))
    .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));

// imported routes
app.use(authRoute)