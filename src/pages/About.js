import React, { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

import 'react-multi-carousel/lib/styles.css'


import theme from '../theme'
import Footer from '../components/Footer'
import Team from '../components/Landing/Team'
import Hero from '../components/Landing/Hero'
import About from '../components/Landing/About'
import Litepaper from '../components/Landing/Litepaper'
import RoadMap from '../components/Landing/Roadmap'
import Problem from '../components/Landing/Problem'
import { Container } from '../components/Container'
import Works from '../components/Landing/HowItWorks'
import Partners from '../components/Landing/Partners'
import Advisors from '../components/Landing/Advisors'
import UpcomingProject from '../components/Landing/ComingSoonCarousel'
import IncubationProject from '../components/Landing/IncubationProject'
import Eco from '../components/Landing/Ecosystem'
import Highlights from '../components/Landing/Highlight'

export default () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container>
        <Hero />
        <Highlights />
        <About />
        <Litepaper />
        <Problem />
        <Works />
        <UpcomingProject />
        <Eco />
        <RoadMap />
        <Team />
        <Advisors />
        <Footer />
      </Container>
    </ChakraProvider>
  )
}
