import React, { useState } from 'react';
import { List, ListItem, ListItemText, Grid, makeStyles } from '@material-ui/core';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import uuid from 'react-uuid';

const useStyles = makeStyles(() => ({
  container: {
    // width: '100%',
    marginTop: '1rem',
    backgroundColor: '#212120',
    borderRadius: '5px',
    border: '.5px solid #212120'
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

const POINTS_STEP = 1;
const INITIAL_POINTS = 5;

const AnswerList = ({ randomBird, currentCategory, setSelectedBird, buttonHandler, isGuessed, score, setScore, playerRef, selectedIds, setSelectedIds }) => {
  const [pointPerAnswer, setPointPerAnswer] = useState(INITIAL_POINTS);
  const classes = useStyles();

  const playAudio = (isRightAnswer) => {
    const audio = document.createElement('audio');
    audio.src = isRightAnswer ? './sounds/success.wav' : './sounds/error.wav';
    audio.play().then();
  };

  const checkAnswer = (birdId) => {
    if (!selectedIds.includes(birdId) && !isGuessed) {
      const isRightAnswer = birdId === randomBird.id;
      if (isRightAnswer) {
        playerRef.current.audio.current.pause();
        setScore(score + pointPerAnswer);
        setPointPerAnswer(INITIAL_POINTS);
      } else {
        setPointPerAnswer(pointPerAnswer - POINTS_STEP);
      }
      buttonHandler(isRightAnswer);
      playAudio(isRightAnswer);
    }
    setSelectedBird(currentCategory.find(item => item.id === birdId));
    setSelectedIds(!isGuessed ? [...selectedIds, birdId] : [...selectedIds]);
  };

  return (
    <Grid container spacing={3} className={classes.container}>
      <List component="nav" aria-label="main mailbox folders" className={classes.list}>
        {currentCategory.map(item => {
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