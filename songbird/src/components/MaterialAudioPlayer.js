import React from 'react';
import { makeStyles } from '@material-ui/core';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const useStyles = makeStyles(() => ({
  player: {
    width: '80%',
    backgroundColor: 'transparent',
    padding: '5px 0',
    margin: '5px 0',
    color: '#128a73',
    '& .rhap_time': {
      color: '#fcfcfc',
    },
    '& .rhap_progress-filled': {
      backgroundColor: '#128a73',
    },
    '& .rhap_progress-indicator': {
      backgroundColor: '#128a73',
    },
    '& .rhap_progress-bar': {
      backgroundColor: '#fcfcfc',
    },
    '& .rhap_additional-controls': {
      visibility: 'hidden'
    },
  },
}));

const MaterialAudioPlayer = ({ src, playerRef }) => {
  const classes = useStyles();

  return <AudioPlayer
    ref={playerRef}
    className={classes.player}
    autoPlayAfterSrcChange={false}
    src={src}
  />;
};

export default MaterialAudioPlayer;