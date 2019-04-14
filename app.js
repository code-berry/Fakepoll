// MyStuff.js
/* global localStorage */

// Use localStorage below with no linter errors

const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

const app = express();

const port = process.env.PORT || 3000;

app.set('view-engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home.ejs');
});

app.get('/main', (req, res) => {
	res.render('main.ejs');
});

app.get('/features', (req,res) => {
	res.render('features.ejs');
});

app.post('/main', (req, res) => {
	const responses = req.body.numResponses;
	const questions = req.body.numQuestions;
	res.render('input.ejs', {rez: responses, ques: questions});
});

app.post('/input', (req, res) => {
	res.render('output.ejs', {uInput: req.body, god: req.body.god});
});

app.listen(port, () => {
	console.log(`listening on ${port}`);
});