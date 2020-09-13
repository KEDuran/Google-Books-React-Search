import React from "react";
import JumbotronComp from "../../components/Jumbotron";
import CardComp from "../../components/CardComp";

function SavedPage() {
	return (
		<div>
			<JumbotronComp />
			<CardComp sectionHeader="Saved Books" btn1="View" btn2="Delete" />
		</div>
	);
}

export default SavedPage;
