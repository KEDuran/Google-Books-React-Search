import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
	// cardWidth: {
	// 	maxWidth: 345,
	// },
	// mediaHeight: {
	// 	height: 140,
	// },
}));

function CardComp(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<h4>{props.sectionHeader}</h4>
						<Card>
							<CardActionArea>
								<CardMedia
									image="/static/images/cards/contemplative-reptile.jpg"
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Lizard
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
								<Button size="small" color="primary">
									Learn More
								</Button>
							</CardActions>
						</Card>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default CardComp;
