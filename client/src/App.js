import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JumbotronComp from "./components/Jumbotron";
import SearchPage from "./pages/Search";
import SavedPage from "./pages/Saved";

function App() {
	return (
		<Router>
			<Navbar />
			<JumbotronComp />
			<Switch>
				<Route path="/" exact component={SearchPage} />
				<Route path="/search" component={SearchPage} />
				<Route path="/saved" component={SavedPage} />
			</Switch>
		</Router>
	);
}

export default App;
