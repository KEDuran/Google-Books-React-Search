const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router
	.route("/")
	// Get route
	.get(booksController.findAll)
	// Post route
	.post(booksController.create);

module.exports = router;
