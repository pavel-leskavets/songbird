import React from 'react';
import { List, ListItem, ListItemText, Grid, makeStyles } from '@material-ui/core';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import uuid from 'react-uuid';

const useStyles = makeStyles(() => ({
  container: {
    paddingRight: 0,
    marginTop: '.7em',
    backgroundColor: '#212120',
    borderRadius: '5px',
    border: '.5px solid #212120',
    '@media (min-width:960px)': {
      width: '100%'
    }
  },
  list: {
    width: '100%',
    padding: 0
  },
  listItem: {
    width: '100%',
    '&:hover': {
      backgroundColor: '#181818',
      borderRadius: '5px'
    }
  },
  icons: {
    width: '.9rem',
    height: '.9rem',
    paddingRight: '5px',
    color: '#303030'
  },
  wrongAnswerIcon: {
    width: '.9rem',
    height: '.9rem',
    paddingRight: '5px',
    color: '#a60b00'
  },
  correctAnswerIcon: {
    width: '.9rem',
    height: '.9rem',
    paddingRight: '5px',
    color: '#128a73'
  }
}));

const AnswerList = ({ randomBird, currentCategoryList, checkAnswer, selectedIds }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.container}>
      <List component="nav" aria-label="main mailbox folders" className={classes.list}>
        {currentCategoryList.map(item => {
          return (
            <ListItem id={item.id} key={uuid()} className={classes.listItem} onClick={() => checkAnswer(item.id)}>
              {selectedIds.includes(item.id)
                ? <Brightness1Icon className={item.id === randomBird.id ? classes.correctAnswerIcon : classes.wrongAnswerIcon}/>
                : <Brightness1Icon className={classes.icons}/>
              }
              <ListItemText primary={item.name}/>
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
};

export default AnswerList;