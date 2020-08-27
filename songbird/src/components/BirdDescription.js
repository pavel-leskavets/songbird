import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';
import MaterialAudioPlayer from './MaterialAudioPlayer';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '1rem',
    backgroundColor: '#212120',
    borderRadius: '5px'
  },
  birdsDescription: {
    fontSize: '.90em'
  },
  tip: {
    fontSize: '1.2em',
    textAlign: 'center'
  }
}));


const BirdDescription = ({ selectedBird }) => {
  const classes = useStyles();

  return (
    <Grid container justify='center' spacing={3} className={classes.container}>
      {selectedBird &&
      <>
        <Grid container item xs={12} justify='center'>
          <Grid container justify='center' item xs={12} lg={5}>
            <img width="240px" height="160px" src={selectedBird.image} alt="act"/>
          </Grid>
          <Grid container justify='center' item xs={12} lg={7}>
            <h3>{selectedBird.name} ({selectedBird.species})</h3>
            <MaterialAudioPlayer src={selectedBird ? selectedBird.audio : ''}/>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.mediaContainer}>
          {selectedBird && <div className={classes.birdsDescription}>{selectedBird.description}</div>}
        </Grid>
      </>
      }
      {!selectedBird && <Grid item xs={12}><p className={classes.tip}>Прослушайте голос птицы и сделайте свой выбор!</p></Grid>}
    </Grid>
  );
};

export default BirdDescription;