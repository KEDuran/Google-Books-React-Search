import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JumbotronComp from "./components/Jumbotron";

function App() {
	return (
		<Router>
			<Navbar />
			<JumbotronComp />
		</Router>
	);
}

export default App;
