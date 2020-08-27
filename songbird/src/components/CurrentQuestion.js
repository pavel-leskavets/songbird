import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';

import MaterialAudioPlayer from './MaterialAudioPlayer';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '1.5em',
    backgroundColor: '#212120',
    borderRadius: '5px'
  },
  questionTitleBox: {
    width: '95%',
    paddingBottom: '30px',
    borderBottom: '1px solid #fcfcfc'
  }
}));


const CurrentQuestion = ({ randomBird, isGuessed, playerRef }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid container justify="center" item xs={12} lg={3}>
        <img width="275px" height="185px" src={isGuessed ? randomBird.image : 'images/question.png'} alt="current question"/>
      </Grid>
      <Grid container justify='center' item xs={12} lg={9}>
        <h3 className={classes.questionTitleBox}>{isGuessed ? randomBird.name : '*******'}</h3>
        <MaterialAudioPlayer src={randomBird ? randomBird.audio : ''} playerRef={playerRef}/>
      </Grid>
    </Grid>
  );
};

export default CurrentQuestion;