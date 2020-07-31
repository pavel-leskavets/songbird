import React from 'react';
import Grid from '@material-ui/core/Grid';
import uuid from 'react-uuid';
import { makeStyles, Typography, Box } from '@material-ui/core';
import birdsData from '../data/BirdsData';

const useStyles = makeStyles(() => ({
  header: {
    paddingTop: '25px'
  },
  title: {
    color: '#128a73'
  },
  questionThemes: {
    margin: '.6rem 0',
    backgroundColor: '#128a73',
    borderRadius: '5px'
  }
}));


const Header = () => {
  const classes = useStyles();

  return (
      <Grid container spacing={3} className={classes.header}>
        <Grid container item justify="space-evenly" alignItems='center' xs={12}>
          <Grid item xs={6}>
            <Typography variant="h3">Song<span className={classes.title}>Bird</span></Typography>
          </Grid>
          <Grid item xs={6}>
            <Box textAlign="right" fontSize={20}>Score: 25</Box>
          </Grid>
        </Grid>
        <Grid container item justify="space-evenly" xs={12} className={classes.questionThemes}>
          {birdsData.categories
            .map(category => <Grid container justify="center" item xs={2} key={uuid()}>{category}</Grid>)}
        </Grid>
      </Grid>
  );
};

export default Header;