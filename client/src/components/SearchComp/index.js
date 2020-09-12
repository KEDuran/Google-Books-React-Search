import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		margin: "30px 0px 0px 0px",
		padding: theme.spacing(4),
		textAlign: "left",
		color: theme.palette.text.secondary,
	},
	card: {
		padding: "25px",
		background: "#e8eaf6",
	},
	inputColor: {
		background: "white",
	},
}));

export default function SearchComp() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid item xs={12}>
				<Paper className={classes.paper}>
					<Card className={classes.card}>
						<CardContent>
							<Typography variant="body3" component="p">
								Search for Book
							</Typography>
						</CardContent>
						<CardActions>
							<TextField
								id="outlined-search"
								label="Enter name of book here"
								type="search"
								variant="outlined"
								fullWidth
								className={classes.inputColor}
							/>
						</CardActions>
						<CardActions>
							<Button variant="contained" color="primary">
								Search
							</Button>
						</CardActions>
					</Card>
				</Paper>
			</Grid>
		</div>
	);
}
