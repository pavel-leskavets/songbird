import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import MaterialAudioPlayer from './MaterialAudioPlayer';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '.7em',
    backgroundColor: '#212120',
    borderRadius: '5px'
  },
  image: {
    width: '235px',
    height: '160px',
    borderRadius: '5px'
  },
  birdsDescription: {
    height: '80px',
    fontSize: '.9em'
  },
  tip: {
    fontSize: '1.2em',
    textAlign: 'center'
  }
}));


const BirdDescription = ({ selectedBird }) => {
  const classes = useStyles();

  return (
    <Grid container alignItems='flex-start' spacing={3} className={classes.container}>
      {selectedBird &&
      <>
        <Grid container item xs={12} justify='center' alignItems='center'>
          <Grid container justify='center' item xs={12} lg={5}>
            <img src={selectedBird.image} alt="act" className={classes.image}/>
          </Grid>
          <Grid container justify='center' alignItems='center' item xs={12} lg={7}>
            <h3>{selectedBird.name} ({selectedBird.species})</h3>
            <MaterialAudioPlayer src={selectedBird ? selectedBird.audio : ''}/>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {selectedBird && <div className={classes.birdsDescription}>{selectedBird.description}</div>}
        </Grid>
      </>
      }
      {!selectedBird && <Grid item xs={12}><p className={classes.tip}>Прослушайте голос птицы и сделайте свой выбор!</p></Grid>}
    </Grid>
  );
};

export default BirdDescription;