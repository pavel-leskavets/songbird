import React from 'react';

import { Box, makeStyles, Grid } from '@material-ui/core';
import MaterialAudioPlayer from './MaterialAudioPlayer';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '40vh',
    margin: '1rem 0 0 .8rem',
    backgroundColor: '#212120',
    borderRadius: '5px',
  },
  questionTitleBox: {
    width: '95%',
    height: '25px',
  },
  birdsDescription: {
    fontSize: '.95em'
  }
}));


const BirdDescription = ({ selectedBird }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.container}>
      {selectedBird &&
      <>
        <Grid item xs={5}>
          <img width="240px" height="160px" src={selectedBird.image} alt="act"/>
        </Grid>
        <Grid item xs={7}>
          <Box display='flex' flexDirection='column' alignItems="flex-start">
            <h3 className={classes.questionTitleBox}>{selectedBird.name} ({selectedBird.species})</h3>
            <MaterialAudioPlayer width={95} src={selectedBird ? selectedBird.audio : ''}/>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {selectedBird && <div className={classes.birdsDescription}>{selectedBird.description}</div>}
        </Grid>
      </>
      }
      {!selectedBird && <Grid item xs={12}><p>Прослушайте голос птицы и сделайте свой выбор!</p></Grid>}
    </Grid>
  );
};

export default BirdDescription;