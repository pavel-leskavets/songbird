import React, { createRef, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CurrentQuestion from './CurrentQuestion';
import AnswerList from './AnswerList';
import BirdDescription from './BirdDescription';

const POINTS_STEP = 1;
const INITIAL_POINTS = 5;

const GameField = ({ randomBird, currentCategoryList, isGuessed, setIsGuessed, score, setScore }) => {
  const playerRef = createRef();

  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedBird, setSelectedBird] = useState(null);
  const [pointPerAnswer, setPointPerAnswer] = useState(INITIAL_POINTS);

  const playAudio = (isRightAnswer) => {
    const audio = document.createElement('audio');
    audio.src = isRightAnswer ? './sounds/success.wav' : './sounds/error.wav';
    audio.play().then();
  };

  const calculateScore = isRightAnswer => {
    if (isRightAnswer) {
      setIsGuessed(isRightAnswer);
      setScore(score + pointPerAnswer);
      setPointPerAnswer(INITIAL_POINTS);
      playerRef.current.audio.current.pause();
    } else {
      setPointPerAnswer(pointPerAnswer - POINTS_STEP);
    }
  }

  const checkAnswer = (birdId) => {
    if (!selectedIds.includes(birdId) && !isGuessed) {
      const isRightAnswer = birdId === randomBird.id;
      calculateScore(isRightAnswer)
      playAudio(isRightAnswer);
    }
    setSelectedBird(currentCategoryList.find(item => item.id === birdId));
    setSelectedIds(!isGuessed ? [...selectedIds, birdId] : [...selectedIds]);
  };

  useEffect(() => {
    setSelectedIds([]);
    setSelectedBird(null);
  }, [currentCategoryList]);

  return (
    <>
      <CurrentQuestion randomBird={randomBird} isGuessed={isGuessed} playerRef={playerRef}/>
      <Grid container justify='center' spacing={3}>
        <Grid item xs={12} md={6}>
          <AnswerList randomBird={randomBird}
                      currentCategoryList={currentCategoryList}
                      checkAnswer={checkAnswer}
                      selectedIds={selectedIds}/>
        </Grid>
        <Grid container item xs={12} md={6}>
          <BirdDescription selectedBird={selectedBird} isGuessed={isGuessed}/>
        </Grid>
      </Grid>
    </>
  );
};

export default GameField;