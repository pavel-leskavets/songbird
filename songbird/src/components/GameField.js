import React from 'react';
import { Grid } from '@material-ui/core';
import CurrentQuestion from './CurrentQuestion';
import AnswerList from './AnswerList';
import BirdDescription from './BirdDescription';


const GameField = ({ currentBird, currentCategory }) => {
  return (
    <>
      <CurrentQuestion currentBird={currentBird}/>
      <Grid container spacing={3}>
        <Grid item xs={6}><AnswerList currentBird={currentBird} currentCategory={currentCategory}/></Grid>
        <Grid item xs={6}><BirdDescription currentBird={currentBird}/></Grid>
      </Grid>
    </>
  );
};

export default GameField;