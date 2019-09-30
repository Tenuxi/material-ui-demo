import React from 'react';
import './App.css';


import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Toolbar } from '@material-ui/core';


import MainNavigation from './MainNavigation/MainNavigation';
import Posts from './Post/Posts';
import Footer from './Footer/Footer';


import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles({
  root: {
    padding:25,
    background: "#131313",
    flexGrow: 1,
  },
  list: {
    bacground:"green"
  },
  title: {
    flexGrow: 1,
  }
});


const App = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.root}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Material-UI DEMO
          </Typography>

          <MainNavigation />

        </Toolbar>
      </AppBar>
     
      <Posts>


      </Posts>

      <Footer> 
      
        
      </Footer>
    </div>
  );
}



export default App;
