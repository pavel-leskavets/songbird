import React from 'react';
import { List, ListItem, ListItemText, Grid, makeStyles  } from '@material-ui/core';
import uuid from 'react-uuid';

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


const AnswerList = ({randomBird, currentCategory, buttonHandler}) => {
  const classes = useStyles();
  const checkAnswer = (birdId) => buttonHandler(birdId === randomBird.id);

  return (
   <Grid container spacing={3} className={classes.container}>
     <List component="nav" aria-label="main mailbox folders" className={classes.list}>
       {currentCategory.map(item => {
         return (
           <ListItem id={item.id} key={uuid()} className={classes.listItem} onClick={() => checkAnswer(item.id)}><ListItemText primary={item.name}/></ListItem>
         )
       })}
     </List>
   </Grid>
  );
};

export default AnswerList;