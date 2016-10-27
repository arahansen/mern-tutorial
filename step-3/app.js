const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monsterSchema = new Schema({
	creature: { type: String, required: true },
	classification: String
});

const Monster = mongoose.model('Monster', monsterSchema);

/**
 * Create Express server.
 */
const app = express();

/**
 * Register Express middleware
 *  - bodyParser: allows us to access the request body of route requests
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Configure Mongoose and connect to MongoDB
 */
mongoose.Promise = global.Promise;
try {
	mongoose.connect('mongodb://localhost/mern_tutorial');
	console.log('connected to mongoDB');
} catch (e) {
	console.log('ERROR: could not connect to mongoDB. Is it running? (use `mongod`)');
	process.exit(1);
}

app.get('/monsters', (req, res) => {
	Monster.find((err, monsters) => {
		if (err) return res.status(500).send(err);

		res.send(monsters);
	});
});

app.post('/monsters', (req, res) => {
	const newMonster = new Monster(req.body);

	newMonster.save((err, monster) => {
		if (err) return res.status(500).send(err);

		res.send(monster);
	});
});

/**
 * default route: send html
 */
app.use(function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

/**
 * Start server
 */
const server = app.listen('8080', function() {
  console.log('Server up and running at port ' + server.address().port)
});
