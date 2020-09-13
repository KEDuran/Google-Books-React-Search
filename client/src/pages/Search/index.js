import React from "react";
import SearchComp from "../../components/SearchComp";
import JumbotronComp from "../../components/Jumbotron";
import CardComp from "../../components/CardComp";

function SearchPage() {
	return (
		<div>
			<JumbotronComp />
			<SearchComp />
			<CardComp sectionHeader="Results" btn1="View" btn2="Save"/>
		</div>
	);
}

export default SearchPage;
