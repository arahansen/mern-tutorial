const express = require('express');
const bodyParser = require('body-parser');

// our data "store"
const monsters = [{
	creature: 'Zombie',
	classification: 'Undead',
	id: 0,
}, {
	creature: 'Frankenstein\'s Monster',
	classification: 'Creation of Man',
	id: 1,
}, {
	creature: 'Ghost 👻',
	classification: 'Spirit',
	id: 2,
}, {
	creature: 'Giant Spider',
	classification: 'Arachnid',
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

app.get('/monsters', (req, res) => {
	res.send(monsters);
});

app.post('/monsters', (req, res) => {
	const newMonster = req.body;

	// uniquely identify monster
	newMonster.id = monsters.length;

	// add to data store
	monsters.push(newMonster);

	res.send(newMonster);
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
