import React from 'react';
import { makeStyles, Grid, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  textContainer: {
    height: '250px',
    marginTop: '1.5em',
    backgroundColor: '#212120',
    borderRadius: '5px',
    textAlign: 'center'
  },
  congratulation: {
    fontSize: '2em',
    paddingTop: '40px'
  },
  button: {
    marginTop: '.8em',
    width: '100%',
    backgroundColor: '#128a73'
  }
}));

const MAX_SCORE = 30;

const Congratulations = ({score, resetGame}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.textContainer}>
        <Typography variant="h3" className={classes.congratulation}>
          {score === MAX_SCORE ? 'Вы абсолютный чемпион по распознаванию чириканья' : 'Поздравляем!'}
        </Typography>
        <Typography>Вы прошли викторину и набрали {score} баллов из {MAX_SCORE} возможных!</Typography>
      </Grid>
      <Button className={classes.button} variant="contained" color="primary" onClick={() => resetGame()}>
        Play again
      </Button>
    </Grid>
  );
};

export default Congratulations;