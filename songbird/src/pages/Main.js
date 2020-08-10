import React, { useEffect, useState } from 'react';
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
  const [currentLevel, setCurrentLevel] = useState(0);
  const [randomBird, setRandomBird] = useState(null);
  const [isGuessed, setIsGuessed] = useState(false)
  const classes = useStyles();

  const buttonHandler = (value) => {
    setIsGuessed(value);
  }

  const changeLevel = () => {
    setIsGuessed(false);
    setCurrentLevel(currentLevel === birdsData.birds.length - 1 ? 0 : currentLevel + 1)
  };


  useEffect(() => {
    const currentBird = birdsData.birds[currentLevel][Math.floor(Math.random() * birdsData.birds[currentLevel].length)];
    setRandomBird(currentBird)
  }, [currentLevel])

  return (
    <Container maxWidth="lg">
      <Header categories={birdsData.categories} currentLevel={currentLevel}/>
      <GameField randomBird={randomBird} currentCategory={birdsData.birds[currentLevel]} isGuessed={isGuessed} buttonHandler={buttonHandler}/>
      <Grid container spacing={3} className={classes.buttonContainer}>
        <Button className={classes.button} variant="contained" color="primary" disabled={!isGuessed}
                onClick={() => changeLevel()}>
          Next Level
        </Button>
      </Grid>
    </Container>
  );
};

export default Main;