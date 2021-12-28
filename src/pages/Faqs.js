import React from 'react';
import theme from '../theme';
import { ChakraProvider } from '@chakra-ui/react';

import FaqHeader from '../components/FaqHeader';
import About from '../components/about';
import Industry from '../components/Industry';
import RoadMap from '../components/Roadmap';
import Email from '../components/Email';
import Footer from '../components/Footer';
import { Container } from '../components/Container';
import '../styles/transition.css';

export default () => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container>
        <FaqHeader />
        <About />
        <Industry />
        <RoadMap />
        <Email />
        <Footer />
      </Container>
    </ChakraProvider>
  );
};
