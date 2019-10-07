import React from 'react';
import { Typography } from '@material-ui/core';
import { TextField, makeStyles, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel, FormGroup, Checkbox, Button } from '@material-ui/core';
import { FavoriteBorder, Favorite } from '@material-ui/icons/';
import '../mainArea.css';


const useStyles = makeStyles({
	root: {
		margin: '140px auto 60px auto',
		background: '#b729ff14',
		padding: '0px 5px 10px 5px',
		maxWidth: 800,
		borderRadius: 20,
		minHeight: 480,
		position: 'relative',
	},
	form: {
		background: '#617fc52b',
		padding: '10px 50px',
		margin: 20,
		borderRadius: 20,
		minHeight: 480,
		position: 'relative',
	},
	textfield: {
		display: 'block',
		marginBottom: 20,
	},
	link: {
		paddingLeft: 20,
		color: '#435055',
	},
	linkHeader: {
		paddingTop: 20,
		paddingLeft: 20,
		color: '#b15489',
	},
	radioButtons: {
		flexDirection: 'row',
	},
	button: {
		position: 'absolute',
		right: 0,
		bottom: 0,

	},
	contactFormHeader: {
		padding: '10px 0px',
		textAlign: 'center',
	}
})


const Contact = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<form className={classes.form}>
				<Typography variant="body2" color="textSecondary" className={classes.contactFormHeader}>Contact form</Typography>

				<TextField variant="outlined" fullWidth label="Firstname" className={classes.textfield}></TextField>
				<TextField variant="outlined" fullWidth label="Lastname" className={classes.textfield}></TextField>
				<TextField variant="outlined" fullWidth label="Phone number" type="number" className={classes.textfield}></TextField>
				<TextField variant="outlined" required fullWidth label="Email" type="email" className={classes.textfield}></TextField>

				<FormControl component="fieldset" fullWidth>
					<FormLabel component="legend">Gender</FormLabel>
					<RadioGroup aria-label="gender" name="gender1" className={classes.radioButtons}>
						<FormControlLabel value="female" control={<Radio />} label="Female" />
						<FormControlLabel value="male" control={<Radio />} label="Male" />
						<FormControlLabel value="other" control={<Radio />} label="Other" />
					</RadioGroup>


					<FormLabel component="legend">
						<Typography variant="body1">Checkbox examples</Typography>
					</FormLabel>

					<FormGroup className={classes.radioButtons}>
						<FormControlLabel
							control={<Checkbox color="primary" />}
							label="First"
							labelPlacement="end"
						/>
						<FormControlLabel
							control={<Checkbox color="primary" />}
							label="Second"
							labelPlacement="end"
						/>
						<FormControlLabel
							control={<Checkbox color="primary" />}
							label="Third"
							labelPlacement="end"
						/>
						<FormControlLabel
							control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="primary" />}
							label="Fourth"
							labelPlacement="end"
						/>
					</FormGroup>

					<Button variant="outlined" color="primary" className={classes.button}>Send</Button>

				</FormControl>

			</form>
		</div>
	);
}

export default Contact;