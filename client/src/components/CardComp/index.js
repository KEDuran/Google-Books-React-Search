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
import "./bookClipart.png";

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
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
}));

function CardComp(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<h4>{props.sectionHeader}</h4>
						<Card className={classes.card}>
							<CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Book Title
									</Typography>

									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Author: {props.author}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Description: {props.description}
									</Typography>
								</CardContent>
								<CardMedia
									className={classes.media}
									image={require("./bookClipart.png")}
									title="API image"
								/>
							</CardActionArea>

							<CardActions>
								<Button size="small" color="primary">
									{props.btn1}
								</Button>
								<Button size="small" color="primary">
									{props.btn2}
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
