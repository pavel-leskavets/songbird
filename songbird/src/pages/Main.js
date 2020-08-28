import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, makeStyles } from '@material-ui/core';

import Header from '../components/Header';
import birdsData from '../data/BirdsData';
import GameField from '../components/GameField';
import Congratulations from '../components/Congratulations';

const useStyles = makeStyles(() => ({
  buttonContainer: {
    marginTop: '1.5em'
  },
  button: {
    width: '100%',
    backgroundColor: '#128a73',
    '&:disabled': {
      backgroundColor: '#303030',
      color: '#fcfcfc'
    }
  }
}));

const INITIAL_SCORE = 0;
const INITIAL_LEVEL = 0;

const Main = () => {
  const classes = useStyles();

  const [score, setScore] = useState(INITIAL_SCORE);
  const [isGuessed, setIsGuessed] = useState(false);
  const [randomBird, setRandomBird] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(INITIAL_LEVEL);
  const [isGameFieldShow, setIsGameFieldShow] = useState(true);

  const changeLevel = () => {
    const isLastLevel = currentLevel === birdsData.birds.length - 1;
    if (isLastLevel) {
      setIsGameFieldShow(false);
    }
    setIsGuessed(false);
    setCurrentLevel(isLastLevel ? INITIAL_LEVEL : currentLevel + 1);
  };

  const resetGame = () => {
    setScore(INITIAL_SCORE);
    setIsGuessed(false);
    setCurrentLevel(INITIAL_LEVEL);
    setIsGameFieldShow(true);
  };

  useEffect(() => {
    const currentBird = birdsData.birds[currentLevel][Math.floor(Math.random() * birdsData.birds[currentLevel].length)];
    setRandomBird(currentBird);
  }, [currentLevel]);

  return (
    <Container maxWidth="lg">
      <Header categories={birdsData.categories} currentLevel={currentLevel} score={score} randomBird={randomBird}/>
      {isGameFieldShow &&
      <>
        <GameField randomBird={randomBird}
                   currentCategory={birdsData.categories[currentLevel]}
                   currentCategoryList={birdsData.birds[currentLevel]}
                   isGuessed={isGuessed}
                   setIsGuessed={setIsGuessed}
                   score={score}
                   setScore={setScore}/>
        <Grid container
              spacing={3}
              className={classes.buttonContainer}>
          <Button className={classes.button} variant="contained" color="primary" disabled={!isGuessed}
                  onClick={() => changeLevel()}>
            Next Level
          </Button>
        </Grid>
      </>}
      {!isGameFieldShow && <Congratulations score={score} resetGame={resetGame}/>}
    </Container>
  );
};

export default Main;