import React from 'react';
import Grid from '@material-ui/core/Grid';
import uuid from 'react-uuid';
import birdsData from '../data/BirdsData';

const Header = () => {
  return (
      <Grid container spacing={3}>
        <Grid item xs={6}>
          SongBird
        </Grid>
        <Grid container justify="flex-end" item xs={6}>
          Score
        </Grid>
        {birdsData.categories
          .map(category => <Grid container justify="center" item xs={2} key={uuid()}>{category}</Grid>)}
      </Grid>
  );
};

export default Header;