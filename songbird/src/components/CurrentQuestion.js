import React from 'react';
import AudioPlayer from 'material-ui-audio-player';
import { createMuiTheme, ThemeProvider, makeStyles, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '1rem',
    backgroundColor: '#212120',
    borderRadius: '5px'
  }
}));


const theme = createMuiTheme({
  root: {
    type: "light",
    primary: '#ccc',
  }
});


const CurrentQuestion = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" justify="space-between" spacing={3} className={classes.container}>
      <Grid item xs={3}>
        <img width="300px" height="200px" src="images/cat.jpg" alt="act"/>
      </Grid>
      <Grid item xs={9}>
        <Box display='flex' flexDirection='column' alignItems="center" justifyContent="center">
          <h3>Live From Space</h3>
          <ThemeProvider theme={theme}>
            <AudioPlayer elevation={1}
                         width="500px"
                         variation="primary"
                         debug={false} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"/>
          </ThemeProvider>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CurrentQuestion;