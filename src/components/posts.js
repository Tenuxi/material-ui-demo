import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from 'react-router-dom';

import postdata from '../postdata';

const useStyles = makeStyles({
  text: {
    overflow: 'hidden',
    height: 80,
  },
  card: {
    minWidth: 250
  },
  showMoreButton: {
    fontSize: '.6em',
  }
});


const Posts = ({ match }) => {
  const classes = useStyles();
  const posts = postdata;

  return (
    <div style={{ marginTop: 100, padding: 60}}>
      <Grid
        container
        direction="row"
        justify="center"
        spacing={2}>

        {posts.map(item => (

          <Grid item xs={3} key={item.id} className={classes.card}>

            <Card key={item.id} style={{ height: 450 }}>
              <CardMedia
                component='img'
                height="250px"
                image={item.image}
              />

              <CardContent style={{ height: 110 }}>
                <Typography variant="h6">
                  {item.title}
                </Typography>
                <Typography variant="body2" className={classes.text}>
                  {item.text}
                </Typography>
              </CardContent>

              <CardActions>

                  <Button
                    component={Link}
                    to={`/cards/${item.id}`}
                    variant="outlined"
                    color="primary"
                    label="Näytä lisää"
                    value="Näytä Lisää"
                    className={classes.showMoreButton}
                  >
                    Näytä koko teksti
                </Button>
              
                {/* <Button variant="outlined" color="primary" href="https://bc.fi" target="_blank">Show more</Button> */}
                {/* <Link to={`/cards/${item.id}`}>Read more</Link> */}
              </CardActions>

            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Posts;