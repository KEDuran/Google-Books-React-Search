import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		color: "white",
        padding: "0px 15px 0px 15px",
	},
});

function Navbar() {
	const classes = useStyles();
	const preventDefault = (event) => event.preventDefault();
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					Google Books
				</Typography>
				<Link href="#" className={classes.root} onClick={preventDefault}>
					Search
				</Link>
				<Link href="#" className={classes.root} onClick={preventDefault}>
					Saved
				</Link>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
