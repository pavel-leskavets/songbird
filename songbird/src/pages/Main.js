import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import CurrentQuestion from '../components/CurrentQuestion';

const Main = () => {
  return (
    <Container maxWidth="lg">
      <Header/>
      <CurrentQuestion/>
    </Container>
  );
};

export default Main;