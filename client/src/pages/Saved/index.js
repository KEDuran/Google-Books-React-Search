import React from "react";
import JumbotronComp from "../../components/Jumbotron";
import SavedCardComp from "../../components/SavedCardComp";

function SavedPage() {
	// Returns the components for the SavePage
	return (
		<div>
			<JumbotronComp />
			<SavedCardComp sectionHeader="Saved Books" btn1="View" btn2="Delete" />
		</div>
	);
}

export default SavedPage;
