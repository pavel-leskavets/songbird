import React from 'react';
import { makeStyles, Box, Grid } from '@material-ui/core';

import MaterialAudioPlayer from './MaterialAudioPlayer';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '1rem',
    backgroundColor: '#212120',
    borderRadius: '5px'
  },
  audioPlayerContainer: {
    width: '100%',
    height: '200px'
  },
  questionTitleBox: {
    width: '95%',
    height: '50px',
    borderBottom: '1px solid #fcfcfc'
  }
}));


const CurrentQuestion = ({randomBird, isGuessed, playerRef}) => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" justify="space-between" spacing={3} className={classes.container}>
      <Grid item xs={3}>
        {isGuessed && <img width="300px" height="200px" src={randomBird.image} alt="act"/>}
        {!isGuessed && <img width="300px" height="200px" src="images/question.png" alt="act"/>}
      </Grid>
      <Grid item xs={9}>
        <Box display='flex' flexDirection='column' alignItems="center" className={classes.audioPlayerContainer}>
          {!!randomBird && <h3 className={classes.questionTitleBox}>{ isGuessed ? randomBird.name : '*******'}</h3>}
          <MaterialAudioPlayer width={95} src={randomBird ? randomBird.audio : ''} playerRef={playerRef}/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CurrentQuestion;