import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {
		margin: '140px 3% 40px 3%',
		padding: '0px 5%',
	},
	header: {
		marginBottom: 20,
	}
});


const Services = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography variant='h2' className={classes.header}>
				Kolmas sivu
			</Typography>

			<Typography variant='body2'>
				<a href="http://wikipedia.fi">Wikipedia</a>
				<br /><br />
			</Typography>
		</div>
	);
}

export default Services;