import React from 'react';

import { Box, makeStyles, Grid } from '@material-ui/core';
import birdsData from '../data/BirdsData';
import MaterialAudioPlayer from './MaterialAudioPlayer';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    margin: '1rem 0 0 .8rem',
    backgroundColor: '#212120',
    borderRadius: '5px',
    border: '1px solid #212120'
  },
  audioPlayerContainer: {
    width: '100%',
  },
  questionTitleBox: {
    width: '95%',
    height: '25px',
    margin: '5px'
  },
  birdsDescription: {
    height: '76px',
    padding: 0,
    margin: 0
  }
}));



const BirdDescription = ({currentBird}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={5}>
        <img width="240px" height="160px" src="images/cat.jpg" alt="act"/>
      </Grid>
      <Grid item xs={7}>
        <Box display='flex' flexDirection='column' alignItems="center" className={classes.audioPlayerContainer}>
          <h3 className={classes.questionTitleBox}>{currentBird.name}</h3>
          <h4 className={classes.questionTitleBox}>{currentBird.species}</h4>
          <MaterialAudioPlayer width={95}/>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <p className={classes.birdsDescription}>{currentBird.description}</p>
      </Grid>
    </Grid>
  );
};

export default BirdDescription;