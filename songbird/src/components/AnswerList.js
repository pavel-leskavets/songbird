import React from 'react';
import { List, ListItem, ListItemText, Grid, makeStyles  } from '@material-ui/core';
import uuid from 'react-uuid';

import birdsData from '../data/BirdsData';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    marginTop: '1rem',
    backgroundColor: '#212120',
    borderRadius: '5px',
    border: '1px solid #212120'
  },
  list: {
    width: '100%',
    padding: 0
  },
  listItem: {
    width: '100%',
    '&:hover': {
      backgroundColor: '#181818',
      borderRadius: '5px',
    },
  },
}));


const AnswerList = ({currentBird, currentCategory}) => {
  const classes = useStyles();
  const onClick = (birdId) => {
    birdId === currentBird.id ? console.log('yes') : console.log('no')
  }

  return (
   <Grid container spacing={3} className={classes.container}>
     <List component="nav" aria-label="main mailbox folders" className={classes.list}>
       {currentCategory.map(item => {
         return (
           <ListItem id={item.id} key={uuid()} className={classes.listItem} onClick={() => onClick(item.id)}><ListItemText primary={item.name}/></ListItem>
         )
       })}
     </List>
   </Grid>
  );
};

export default AnswerList;