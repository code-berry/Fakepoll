const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const port = proces.env.PORT || 3000;

app.set('view-engine', 'ejs');
app.set('view-engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/main', (req, res) => {
	res.render('main');
});

app.listen(port, () => {
	console.log(`listening on ${port}`);
});