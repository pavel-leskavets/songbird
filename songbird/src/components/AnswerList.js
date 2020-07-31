import React from 'react';
import { List, ListItem, ListItemText, makeStyles  } from '@material-ui/core';
import uuid from 'react-uuid';
import birdsData from '../data/BirdsData';

const useStyles = makeStyles(() => ({
  listItem: {
    width: '100%',
    maxWidth: '300px',
    '&:hover': {
      backgroundColor: '#ccc',
    },
  },
}));


const AnswerList = () => {
  const classes = useStyles();
  return (
    <List component="nav" aria-label="main mailbox folders">
      {birdsData.birds.map(item => {
        return (
          <ListItem key={uuid()}><ListItemText className={classes.listItem} primary={item[0].name}/></ListItem>
        )
      })}
    </List>
  );
};

export default AnswerList;