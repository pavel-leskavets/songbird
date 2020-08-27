import React from 'react';
import uuid from 'react-uuid';
import { makeStyles, Typography, Box, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  header: {
    marginTop: '5px'
  },
  navContainer: {
    marginTop: '10px',
    backgroundColor: '#128a73',
    borderRadius: '5px',
    fontSize: '.9em',
    textAlign: 'center',
    overflow: 'hidden'
  },
  title: {
    color: '#128a73'
  },
  activeCategory: {
    backgroundColor: '#00bc8c'
  }
}));

const Header = ({ categories, currentLevel, score }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container item justify="space-between" alignItems='center' xs={12} className={classes.header}>
        <Grid item xs={6}><Typography variant="h3">Song<span className={classes.title}>Bird</span></Typography></Grid>
        <Grid item xs={6}><Box textAlign="right" fontSize={20}>Score: {score}</Box></Grid>
      </Grid>
      <Grid container spacing={3} justify='center' className={classes.navContainer}>
        {categories
          .map((category, idx) => {
            return (
              <Grid
                item xs={6} sm={4} md={3} lg={2}
                key={uuid()}
                className={idx === currentLevel ? classes.activeCategory : ''}>
                {category}
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default Header;