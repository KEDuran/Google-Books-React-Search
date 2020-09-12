import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > * + *": {
			marginLeft: theme.spacing(2),
		},
	},
}));

function Navbar(props) {
	const classes = useStyles();
	const preventDefault = (event) => event.preventDefault();
	return (
		<AppBar position="top">
			<Toolbar>
				<Typography variant="h6" className={props.title}>
					Google Books
					<Link href="#" color="text-primary" onClick={preventDefault}>
						Search
					</Link>
					<Link href="#" color="text-primary" onClick={preventDefault}>
						Saved
					</Link>
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
