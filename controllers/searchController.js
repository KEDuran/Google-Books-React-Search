// Defining methods to apply for the booksController
module.exports = {
	// Used to pull all saved books from Book collection
	findAll: function (req, res) {
		var axios = require("axios");
		const searchQuery = req.query.title;
		var config = {
			method: "get",
			url: `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}=${process.env.API_KEY}`,
			headers: {},
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
			})
			.catch(function (error) {
				console.log(error);
			});

		db.Book.find(req.query)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
};
