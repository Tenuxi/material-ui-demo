import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
	// root: {
	// 	marginTop: 300,
	// },
	imageContainer: {
		verticalAlign: 'top',
		display: 'inline-block',
		textAlign: 'center',
	  width: 420,
	},
	image: {
		height: 300,
		maxWidth: 1000,
		float: 'left',
		padding: '25px 0 25px 0',
	},
	text: {
		padding: '25px 0 25px 0',
		display: 'block',
	},
	homeButton: {
		display: 'block',
    width: 'fit-content',
    fontSize: '.7em',
    textAlign: 'center',
	}
})



const Post = ({ match, data }) => {
	const classes = useStyles();
	let post = data.find(p => p.id == match.params.postId);


	return (
		<>

			<div style={{ margin: 150, paddingTop: 50 }}>
				<Typography variant="caption">Post #{post.id}</Typography>
				<Typography variant="h2">{post.title}</Typography>
				<div className={classes.imageContainer}>
					<img className={classes.image} src={post.image} alt={post.title} />
					<Typography variant="body1" className={classes.text}>
						{post.text}
					</Typography>
				</div>
				<Button
				component={Link}
				to='/cards'
				variant="outlined"
				className={classes.homeButton}
				>Takaisin</Button>

			</div>

		</>
	)
}

export default Post;