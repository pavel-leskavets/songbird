import React from 'react';
import { makeStyles, Grid, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  textContainer: {
    height: '40vh',
    margin: '1rem 0',
    backgroundColor: '#212120',
    borderRadius: '5px',
    textAlign: 'center'
  },
  title: {
    paddingTop: '10vh'
  },
  button: {
    width: '100%',
    backgroundColor: '#128a73'
  }
}));

const Congratulations = ({score, resetGame}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.textContainer} >
        <Typography className={classes.title} variant="h3">{score === 0 ? 'Это фиаско!' : 'Поздравляем!'}</Typography>
        <Typography>Вы прошли викторину и набрали {score} баллов из 30 возможных!</Typography>
      </Grid>
      <Button className={classes.button} variant="contained" color="primary" onClick={() => resetGame()}>
        Play again
      </Button>
    </Grid>
  );
};

export default Congratulations;