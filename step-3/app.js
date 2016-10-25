const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
	name: { type: String, required: true },
	alias: String
});

const Character = mongoose.model('Character', characterSchema);

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
	console.log('ERROR: could not connect to mongoDB. Is is running? (use `mongod`)');
	process.exit(1);
}

app.get('/characters', (req, res) => {
	Character.find((err, characters) => {
		if (err) return res.status(500).send(err);

		res.send(characters);
	});
});

app.post('/characters', (req, res) => {
	const newCharacter = new Character(req.body);

	newCharacter.save((err, character) => {
		if (err) return res.status(500).send(err);

		res.send(character);
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
