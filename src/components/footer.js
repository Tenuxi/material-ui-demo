import React from 'react';
import { TextField, makeStyles, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel, FormGroup, Link, List, ListItem, Checkbox, Button, Grid, Typography } from '@material-ui/core';
import { FavoriteBorder, Favorite } from '@material-ui/icons/';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';


const useStyles = makeStyles({
  root: {
    boxShadow: 'inset 0 0 10px #000000',
    background: '#ffffff',
    padding: '20px 35px',
    margin: 20,
    borderRadius: 20,
    minHeight: 480,
    position: 'relative',
  },
  textfield: {
    display: 'block',
    marginBottom: 20,
  },
  footer: {
    background: '#131313',
  },
  link: {
    paddingLeft: 20,
    color: '#ffffff',
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

const Footer = () => {
  const classes = useStyles();


  return (
    <div className={classes.footer}>

      <Grid container
        className={classes.grid}
        spacing={0}>


        <Grid item xs={6}>
          

          <List>
            <ListItem>
              <Typography variant="h6" color="primary" >
                <Link component="button" className={classes.link} variant="h6">EnsimmäinenLinkki</Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" color="primary" >
                <Link component="button" className={classes.link} variant="h6">ToiNeNlinKKi</Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" color="primary" >
                <Link component="button" className={classes.link} variant="h6">3Linkki</Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" color="primary" >
                <Link component="button" className={classes.link} variant="h6">4SivunLinkki</Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" color="primary" >
                <Link component="button" className={classes.link} variant="h6">ViiTosLinkki</Link>
              </Typography>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={6}>
          <form className={classes.root}>
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
                <Typography variant="body1">Asuminen</Typography>
              </FormLabel>

              <FormGroup className={classes.radioButtons}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Omakotitalo"
                  labelPlacement="end"
                />
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Rivitalo"
                  labelPlacement="end"
                />
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Kerrostalo"
                  labelPlacement="end"
                />
                <FormControlLabel
                  control={<Checkbox icon={<AccountBalanceIcon />} checkedIcon={<Favorite />} color="primary" />}
                  label="Muu"
                  labelPlacement="end"
                />
              </FormGroup>

              <Button variant="outlined" color="primary" className={classes.button}>Lähetä</Button>

            </FormControl>

          </form>
        </Grid>


      </Grid>
    </div>
  )
}

export default Footer;