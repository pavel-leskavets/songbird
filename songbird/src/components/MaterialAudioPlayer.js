import React from 'react';
import { makeStyles } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'transparent',
    color: '#128a73',
    marginTop: '20px'
  },
  loopIcon: {
    color: '#3f51b5',
    '&.selected': {
      color: '#0921a9'
    },
    '&:hover': {
      color: '#7986cb'
    }
  },
  playIcon: {
    color: '#128a73',
    '&:hover': {
      opacity: .8
    }
  },
  pauseIcon: {
    color: '#128a73',
  },
  volumeIcon: {
    color: '#128a73'
  },
  volumeSlider: {
    color: '#128a73',
  },
  progressTime: {
    color: '#fcfcfc'
  },
  mainSlider: {
    color: '#128a73',
    '& .MuiSlider-rail': {
      color: '#fcfcfc'
    },
    '& .MuiSlider-track': {
      color: '#128a73'
    },
    '& .MuiSlider-thumb': {
      color: '#128a73'
    }
  }
}));

const MaterialAudioPlayer = ({width, src}) => {
  return <AudioPlayer elevation={1}
                      useStyles={useStyles}
                      width={`${width}%`}
                      variation="primary"
                      debug={false} src={src}/>
}

export default MaterialAudioPlayer;