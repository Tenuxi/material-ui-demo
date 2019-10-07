import React from 'react';
import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import navItems from '../navItems';

const useStyles = makeStyles({
  listitem: {
    display: 'inline-block',
    width: 100,
    textAlign: 'right',
  },
  linkText: {
    color: '#ffffff',
  }
});

const MainNavigation = () => {
  const classes = useStyles();

  return (
    <>
      <List component='nav'>

        {navItems.map(item => (
          <ListItem className={classes.listitem} key={item.id}>
            <ListItemText>
              <Button
                component={Link}
                to={item.link}
                variant='text'
                className={classes.linkText}
              >{item.text}</Button>

              {/* <Link to={item.link} className={classes.linkText}>{item.text}</Link> */}
            </ListItemText>
          </ListItem>
        ))}

      </List>
    </>
  );
}

export default MainNavigation;