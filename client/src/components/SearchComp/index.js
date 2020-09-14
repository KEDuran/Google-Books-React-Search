import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";

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
	media: {
		padding: "5px",
		width: "150px",
		height: "200px",
	},
}));

export default function SearchComp(props) {
	const classes = useStyles();
	// Setting component's initial state
	const [books, setBooks] = useState([]);
	const [search, setSearch] = useState("");

	// Loads all searched books and sets them to books
	function searchBooks(title) {
		alert(title);
		API.searchBook(title)
			.then((res) => setBooks(res.data))
			.catch((err) => console.log(err));
	}

	return (
		<div className={classes.root}>
			<Grid item xs={12}>
				<Paper className={classes.paper}>
					{/* This if for the search input portion */}
					<Card className={classes.card}>
						<CardContent>
							<Typography variant="h5" component="h2">
								Search for Book
							</Typography>
						</CardContent>
						<CardActions>
							<TextField
								id="outlined-search"
								label="Enter book here"
								type="search"
								variant="outlined"
								fullWidth
								className={classes.inputColor}
								onChange={(e) => setSearch(e.target.value)}
							/>
						</CardActions>
						<CardActions>
							<Button
								onClick={() => searchBooks(search)}
								variant="contained"
								color="primary"
							>
								Search
							</Button>
						</CardActions>
					</Card>
				</Paper>
				{/* This is for the search results */}
				<Paper className={classes.paper}>
					<h4>{props.sectionHeader}</h4>
					<Card className={classes.card}>
						<CardActionArea>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									{props.title}
								</Typography>

								<Typography variant="body2" color="textSecondary" component="p">
									{props.authors}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									{props.description}
								</Typography>
							</CardContent>
							<CardMedia
								className={classes.media}
								image={require("./bookClipart.png")}
								title="API image"
							/>
						</CardActionArea>
						<CardActions>
							<Button href={props.link} size="small" color="primary">
								{props.btn1}
							</Button>
							<Button size="small" color="primary">
								{props.btn2}
							</Button>
						</CardActions>
					</Card>
				</Paper>
			</Grid>
		</div>
	);
}
