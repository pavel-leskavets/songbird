import React from 'react';
import { Container, Grid, Button, makeStyles } from '@material-ui/core';

import Header from '../components/Header';
import CurrentQuestion from '../components/CurrentQuestion';
import AnswerList from '../components/AnswerList';
import BirdDescription from '../components/BirdDescription';

const useStyles = makeStyles(() => ({
  button: {
    width: '100%',
    '&:hover': {
      backgroundColor: '#ccc',
    },
  }
}));

const Main = () => {
  const classes = useStyles();

  return (
      <Container maxWidth="lg">
        <Header/>
        <CurrentQuestion/>
        <Grid container>
          <Grid item xs={6}><AnswerList/></Grid>
          <Grid item xs={6}><BirdDescription/></Grid>
          <Grid item xs={12}>
            <Button className={classes.button} variant="contained" color="primary">
              Next Level
            </Button>
          </Grid>
        </Grid>
      </Container>
  );
};

export default Main;