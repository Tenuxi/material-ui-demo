import React from 'react';
import { List, ListItemText, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import './BottomNavigation.css';

const useStyles = makeStyles({
    root: {
        width: 300,
        float: "left",
    },
    listitem: {
        color: "#ffffff",
        width: 300,
        float: "left",
    },
    
  });


const listitems = [
    {
            text:"Etusivu",
            id: 1
    },
    {
        text:"ToiNen",
        id: 2
    },
    {
        text:"KolMasSivu",
        id: 3
    },
    {
        text:"4SiVu",
        id: 4
    },
    {
        text:"ViiTossivu",
        id: 5
    },
]

const BottomNavigation = () => {
    const classes = useStyles();
    return (
        <div className="bottomnavigation">
            <List component="nav">
                {listitems.map(item => (
                <ListItem className={classes.listitem} key={item.id}>
                    <ListItemText>
                        <Typography>
                            {item.text}
                        </Typography>
                    </ListItemText>
                </ListItem>
                ))}
            </List>


        </div>
    );
};

export default BottomNavigation;