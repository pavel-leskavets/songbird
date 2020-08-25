import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Grid, makeStyles } from '@material-ui/core';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import uuid from 'react-uuid';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
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

const pointsStep = 1;
const initialPoints = 5;
let selectedIds = [];

const AnswerList = ({ randomBird, currentCategory, setSelectedBird, buttonHandler, playerRef, isGuessed, score, setScore }) => {
  const [pointPerAnswer, setPointPerAnswer] = useState(initialPoints);
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
        setPointPerAnswer(initialPoints);
      } else {
        setPointPerAnswer(pointPerAnswer - pointsStep);
      }
      buttonHandler(isRightAnswer);
      playAudio(isRightAnswer);
    }
    setSelectedBird(currentCategory.find(item => item.id === birdId));
    selectedIds = [...selectedIds, birdId];
  };

  useEffect(() => {
    selectedIds = [];
  }, [currentCategory]);

  return (
    <Grid container spacing={3} className={classes.container}>
      <List component="nav" aria-label="main mailbox folders" className={classes.list}>
        {currentCategory.map(item => {
          return (
            <ListItem id={item.id} key={uuid()} className={classes.listItem} onClick={() => checkAnswer(item.id)}>
              {!selectedIds.includes(item.id) && <Brightness1Icon className={classes.icons}/>}
              {selectedIds.includes(item.id) && item.id === randomBird.id && <Brightness1Icon className={classes.correctAnswerIcon}/>}
              {selectedIds.includes(item.id) && !isGuessed && item.id !== randomBird.id && <Brightness1Icon className={classes.wrongAnswerIcon}/>}
              <ListItemText primary={item.name}/>
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
};

export default AnswerList;