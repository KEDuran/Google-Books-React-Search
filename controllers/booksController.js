const db = require("../models");

// Defining methods to apply for the booksController
module.exports = {
	// Used to pull all saved books from Book collection
	findAll: function (req, res) {
		db.Book.find()
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
};
