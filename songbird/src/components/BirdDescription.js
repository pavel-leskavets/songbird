import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import birdsData from '../data/BirdsData';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000'
    }
  }
});

const BirdDescription = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <img width="300px" height="200px" src="images/cat.jpg" alt="act"/>
      </Grid>
      <Grid item xs={6}>
        {birdsData.birds[1][0].description}
      </Grid>
      <Grid item xs={12}>
        <h3>Live From Space</h3>
        <ThemeProvider theme={theme}>
          <AudioPlayer elevation={1}
                       width="350px"
                       variation="primary"
                       debug={false} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"/>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};

export default BirdDescription;