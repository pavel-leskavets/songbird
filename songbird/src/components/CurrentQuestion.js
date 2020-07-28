import React from 'react';
import Typography from '@material-ui/core/Typography';
import AudioPlayer from 'material-ui-audio-player';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000'
    }
  }
});


const CurrentQuestion = () => {
  return (
    <Grid container alignItems="center" justify="space-around" spacing={3}>
      <Grid item xs={3}>
        <img width="300px" height="200px" src="images/cat.jpg" alt="act"/>
      </Grid>
      <Grid item xs={5}>
        <h3>Live From Space</h3>
        <ThemeProvider theme={theme}>
          <AudioPlayer elevation={1}
                       width="500px"
                       variation="primary"
                       debug={false} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"/>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};

export default CurrentQuestion;