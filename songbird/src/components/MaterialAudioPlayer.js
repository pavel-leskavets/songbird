import React from 'react';
import { makeStyles } from '@material-ui/core';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const useStyles = makeStyles(() => ({
  player: {
    width: '95%',
    backgroundColor: 'transparent',
    color: '#128a73',
    marginTop: '20px',
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

const MaterialAudioPlayer = ({ width, src, playerRef }) => {
  const classes = useStyles();

  return <AudioPlayer
    ref={playerRef}
    className={classes.player}
    autoPlayAfterSrcChange={false}
    width={`${width}%`}
    src={src}
  />;
};

export default MaterialAudioPlayer;