import React from 'react';
import { Grid } from '@material-ui/core';
import CurrentQuestion from './CurrentQuestion';
import AnswerList from './AnswerList';
import BirdDescription from './BirdDescription';


const GameField = ({ randomBird, currentCategory, isGuessed, buttonHandler }) => {
  return (
    <>
      <CurrentQuestion randomBird={randomBird} isGuessed={isGuessed}/>
      <Grid container spacing={3}>
        <Grid item xs={6}><AnswerList randomBird={randomBird} currentCategory={currentCategory} buttonHandler={buttonHandler}/></Grid>
        <Grid item xs={6}><BirdDescription randomBird={randomBird}/></Grid>
      </Grid>
    </>
  );
};

export default GameField;