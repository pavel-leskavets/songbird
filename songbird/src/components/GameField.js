import React, { createRef, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import CurrentQuestion from './CurrentQuestion';
import AnswerList from './AnswerList';
import BirdDescription from './BirdDescription';


const GameField = ({ randomBird, currentLevel, currentCategory, isGuessed, buttonHandler, score, setScore }) => {
  const playerRef = createRef()
  const [selectedBird, setSelectedBird] = useState(null);

  useEffect(() => {
    setSelectedBird(null);
  }, [currentCategory])

  return (
    <>
      <CurrentQuestion randomBird={randomBird} isGuessed={isGuessed} playerRef={playerRef}/>
      <Grid container spacing={3}>
        <Grid item xs={6}><AnswerList randomBird={randomBird}
                                      currentLevel={currentLevel}
                                      currentCategory={currentCategory}
                                      setSelectedBird={setSelectedBird}
                                      buttonHandler={buttonHandler}
                                      isGuessed={isGuessed}
                                      score={score}
                                      setScore={setScore}
                                      playerRef={playerRef}/></Grid>
        <Grid item xs={6}><BirdDescription selectedBird={selectedBird} isGuessed={isGuessed}/></Grid>
      </Grid>
    </>
  );
};

export default GameField;