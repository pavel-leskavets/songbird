import React from 'react';
import { makeStyles, Box, Grid, Button, Container } from '@material-ui/core';
import Header from './Header';
import birdsData from '../data/BirdsData';

const useStyles = makeStyles(() => ({
  container: {
    height: '40vh',
    marginTop: '1rem',
    backgroundColor: '#000',
    borderRadius: '5px'
  },
  buttonContainer: {
    paddingTop: '10px'
  },
  button: {
    width: '100%',
    backgroundColor: '#128a73'
  },
  audioPlayerContainer: {
    width: '100%',
    height: '200px'
  },
  questionTitleBox: {
    width: '95%',
    height: '50px',
    borderBottom: '1px solid #fcfcfc'
  }
}));

const Congratulations = () => {
  const classes = useStyles();


  return (
    <Grid container spacing={3} className={classes.buttonContainer}>
      <Grid item xs={12} className={classes.container}>fffgfg</Grid>
      <Button className={classes.button} variant="contained" color="primary">
        Play again
      </Button>
    </Grid>
  );
};

export default Congratulations;