const express = require('express');
const bodyParser = require('body-parser');

// our data "store"
const characters = [{
	name: 'Arya Stark',
	alias: 'No One',
	id: 0,
}, {
	name: 'Tyrion Lannister',
	alias: 'Hand of the Queen',
	id: 1,
}, {
	name: 'Jon Snow',
	alias: 'Warden of the North',
	id: 2,
}, {
	name: 'Daenerys Targaryen',
	alias: 'Khaleesi',
	id: 3,
}];

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

app.get('/characters', (req, res) => {
	res.send(characters);
});

app.post('/characters', (req, res) => {
	const newCharacter = req.body;

	// uniquely identify character
	newCharacter.id = characters.length;

	// add to data store
	characters.push(newCharacter);

	res.send(newCharacter);
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
