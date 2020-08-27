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
  },
}));

const Main = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [randomBird, setRandomBird] = useState(null);
  const [isGuessed, setIsGuessed] = useState(false);
  const [isGameFieldShow, setIsGameFieldShow] = useState(true);
  const [score, setScore] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);
  const classes = useStyles();

  const buttonHandler = (value) => {
    if (value) {
      setIsGuessed(value);
    }
  };

  const changeLevel = () => {
    const isLastLevel = currentLevel === birdsData.birds.length - 1;
    if (isLastLevel) {
      setIsGameFieldShow(false);
    }
    setSelectedIds([]);
    setIsGuessed(false);
    setCurrentLevel(isLastLevel ? 0 : currentLevel + 1);
  };

  const resetGame = () => {
    setScore(0);
    setSelectedIds([]);
    setCurrentLevel(0);
    setIsGuessed(false);
    setIsGameFieldShow(true);
  };

  useEffect(() => {
    const currentBird = birdsData.birds[currentLevel][Math.floor(Math.random() * birdsData.birds[currentLevel].length)];
    setRandomBird(currentBird);
  }, [currentLevel]);

  return (
    <Container maxWidth="lg">
      <Header categories={birdsData.categories} currentLevel={currentLevel} score={score}/>
      {isGameFieldShow &&
      <>
        <GameField randomBird={randomBird}
                   isGuessed={isGuessed}
                   currentLevel={currentLevel}
                   currentCategory={birdsData.birds[currentLevel]}
                   buttonHandler={buttonHandler}
                   score={score}
                   setScore={setScore}
                   selectedIds={selectedIds}
                   setSelectedIds={setSelectedIds} />
        <Grid container
              spacing={3}
              className={classes.buttonContainer}>
          <Button className={classes.button} variant="contained" color="primary" disabled={!isGuessed} onClick={() => changeLevel()}>
            Next Level
          </Button>
        </Grid>
      </>}
      {!isGameFieldShow && <Congratulations score={score} resetGame={resetGame}/>}
    </Container>
  );
};

export default Main;