import React from 'react';
import './App.css';
import './mainArea.css';

import AppBar from '@material-ui/core/AppBar';
import { Typography, makeStyles, Toolbar } from '@material-ui/core';
import MainNavigation from './components/MainNavigation';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import Home from './components/Home';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Services from './components/Services';
import Post from './components/Post';
import ScrollToTop from './components/ScrollToTop';

import postdata from './postdata';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: '#131313',
    color: '#ffffff',
    
  },
  title: {
    flexGrow: 1,
    padding: 25,
  }
});

const App = ({ match }) => {
  const classes = useStyles();

  return (
    <div>
      <Router basename='/'>

        <AppBar className={classes.root}>
          <Toolbar>
            <Typography variant="h2" className={classes.title}>
              Material UI Demo
        </Typography>

            <MainNavigation />
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cards' component={Cards} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/contact' component={Contact} />

          <ScrollToTop>
            <Route exact path={`/cards/:postId`}
              render={(props) => <Post data={postdata} {...props} />}
            />
          </ScrollToTop>
        </Switch>

        <Footer className={classes.root} />

      </Router>
    </div>
  );
}

export default App;