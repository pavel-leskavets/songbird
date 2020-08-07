import React, { useState } from 'react';
import { Button, Container, Grid, makeStyles } from '@material-ui/core';

import Header from '../components/Header';
import birdsData from '../data/BirdsData';
import GameField from '../components/GameField';

const useStyles = makeStyles(() => ({
  buttonContainer: {
    paddingTop: '10px'
  },
  button: {
    width: '100%',
    backgroundColor: '#128a73'
  }
}));


const Main = () => {
  const [currentLevel, setLevel] = useState(0);
  const classes = useStyles();
  const getRandomBird = () => birdsData.birds[currentLevel][Math.floor(Math.random() * birdsData.birds[currentLevel].length)];

  return (
    <Container maxWidth="lg">
      <Header categories={birdsData.categories}/>
      <GameField currentBird={getRandomBird} currentCategory={birdsData.birds[currentLevel]}/>
      <Grid container spacing={3} className={classes.buttonContainer}>
        <Button className={classes.button} variant="contained" color="primary"
                onClick={() => setLevel(currentLevel === birdsData.birds.length - 1 ? 1 : currentLevel + 1)}>
          Next Level
        </Button>
      </Grid>
    </Container>
  );
};

export default Main;