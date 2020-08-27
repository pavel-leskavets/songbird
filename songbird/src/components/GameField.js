import React, { createRef, useEffect, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import CurrentQuestion from './CurrentQuestion';
import AnswerList from './AnswerList';
import BirdDescription from './BirdDescription';

const useStyles = makeStyles(() => ({
  container: {
    // minWidth: '300px',
    // maxWidth: '100%'
  }
}))

const GameField = ({ randomBird, currentLevel, currentCategory, isGuessed, buttonHandler, score, setScore, selectedIds, setSelectedIds }) => {
  const classes = useStyles();
  const playerRef = createRef();
  const [selectedBird, setSelectedBird] = useState(null);

  useEffect(() => {
    setSelectedBird(null);
  }, [currentCategory]);

  return (
    <>
      <CurrentQuestion randomBird={randomBird} isGuessed={isGuessed} playerRef={playerRef}/>
      <Grid container justify='center' spacing={3}>
        <Grid item xs={12} md={6} className={classes.container}>
          <AnswerList randomBird={randomBird}
                      currentLevel={currentLevel}
                      currentCategory={currentCategory}
                      setSelectedBird={setSelectedBird}
                      buttonHandler={buttonHandler}
                      isGuessed={isGuessed}
                      score={score}
                      setScore={setScore}
                      playerRef={playerRef}
                      selectedIds={selectedIds}
                      setSelectedIds={setSelectedIds}/>
        </Grid>
        <Grid container item xs={12} md={6} className={classes.container}>
          <BirdDescription selectedBird={selectedBird} isGuessed={isGuessed}/>
        </Grid>
      </Grid>
    </>
  );
};

export default GameField;