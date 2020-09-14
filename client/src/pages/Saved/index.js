import React, { useState, useEffect } from "react";
import JumbotronComp from "../../components/Jumbotron";
import CardComp from "../../components/CardComp";

function SavedPage() {
	// Setting component's initial state
	const [books, setBooks] = useState([]);
	const [formObject, setFormObject] = useState({});

	// Load all books and store them with setBooks
	useEffect(() => {
		loadBooks();
	}, []);

	// Loads all books and sets them to books
	function loadBooks() {
		API.getBooks()
			.then((res) => setBooks(res.data))
			.catch((err) => console.log(err));
	}
	// Returns the components for the SavePage
	return (
		<div>
			<JumbotronComp />
			<CardComp sectionHeader="Saved Books" btn1="View" btn2="Delete" />
		</div>
	);
}

export default SavedPage;
