import React from "react";
import SearchComp from "../../components/SearchComp";
import JumbotronComp from "../../components/Jumbotron";
import SearchCardComp from "../../components/SearchCardComp";

function SearchPage() {
	return (
		<div>
			<JumbotronComp />
			<SearchComp />
			<SearchCardComp sectionHeader="Results" btn1="View" btn2="Save" />
		</div>
	);
}

export default SearchPage;
