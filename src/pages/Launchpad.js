import React, { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

import 'react-multi-carousel/lib/styles.css'
import { Container } from '../components/Container'

import theme from '../theme'
import Footer from '../components/Footer'

import Hero from '../components/Launchpad/Hero'
import UpcomingProject from '../components/Launchpad/UpcomingProject'
import KYCBanner from '../components/Launchpad/KYCBanner'


export default function Launchpad() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container>
        <Hero />
        <UpcomingProject />
        <KYCBanner />
        <Footer />
      </Container>
    </ChakraProvider>
  )
}
