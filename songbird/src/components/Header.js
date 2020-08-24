import React from 'react';
import uuid from 'react-uuid';
import { makeStyles, Typography, Box, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  header: {
    paddingTop: '5px'
  },
  title: {
    color: '#128a73'
  },
  questionThemes: {
    margin: '.8rem 0',
    backgroundColor: '#128a73'
  },
  activeCategory: {
    margin: '.8rem 0',
    backgroundColor: '#128a73',
    opacity: '.75'
  }
}));

const Header = ({ categories, currentLevel, score }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.header}>
      <Grid container item justify="space-evenly" alignItems='center' xs={12}>
        <Grid item xs={6}>
          <Typography variant="h3">Song<span className={classes.title}>Bird</span></Typography>
        </Grid>
        <Grid item xs={6}>
          <Box textAlign="right" fontSize={20}>Score: {score}</Box>
        </Grid>
      </Grid>
      {categories
        .map((category, idx) => {
          return (
            <Grid container
                  justify="center"
                  item xs={2}
                  key={uuid()}
                  className={idx === currentLevel ? classes.activeCategory : classes.questionThemes}>
              {category}
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Header;