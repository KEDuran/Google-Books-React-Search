const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema to create the structure of the Book collection
const bookSchema = new Schema({
    // stores the title of book
    title: { type: String, required: true },
    // stores author information
    authors: { type: String, required: true },
    // stpre book description
    description: { type: String, required: true },
    // stores URL link to image
    image: { type: mongoose.SchemaTypes.Url, required: true },
    // stores URL link to GoogleBooks site for book
	link: { type: mongoose.SchemaTypes.Url, required: true },
});

// Defines Book according to the bookSchema outline above
const Book = mongoose.model("Book", bookSchema);

// Exports the  Book schema
module.exports = Book;
