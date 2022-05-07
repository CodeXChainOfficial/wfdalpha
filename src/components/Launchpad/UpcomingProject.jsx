import { Box, Button, Center, Container, Flex, Grid, GridItem, Image, Link, SimpleGrid, Stack, Text, Wrap, WrapItem, chakra } from '@chakra-ui/react';
import React, { useState } from 'react';


const projects = [
  {
    image: '/media/partners/lynx-dark.png',
    name: 'Lynx Verse',
    status: 'Coming Soon',
    registration_start: 'TBA',
    platform_raise: 'TBA',
    link: '',
  },
  {
    image: '/media/partners/Kosu.png',
    name: 'Kosu',
    status: 'Coming Soon',
    registration_start: 'TBA',
    platform_raise: 'TBA',
    link: '',
  },
  {
    image: '/media/partners/Greenprotocol.png',
    name: 'Green Protocol',
    status: 'Coming Soon',
    registration_start: 'TBA',
    platform_raise: 'TBA',
    link: '',
  },
  {
    image: '/media/partners/Africred.jpeg',
    name: 'Africred',
    status: 'Coming Soon',
    registration_start: 'TBA',
    platform_raise: 'TBA',
    link: '',
  },
  {
    image: '/media/Launchpad/secret-partner.png',
    name: 'Top Secret',
    status: 'Coming Soon',
    registration_start: 'TBA',
    platform_raise: 'TBA',
    link: '',
  },
  {
    image: '/media/Launchpad/secret-partner.png',
    name: 'Top Secret',
    status: 'Coming Soon',
    registration_start: 'TBA',
    platform_raise: 'TBA',
    link: '',
  },
  {
    image: '/media/Launchpad/secret-partner.png',
    name: 'Top Secret',
    status: 'Coming Soon',
    registration_start: 'TBA',
    platform_raise: 'TBA',
    link: '',
  },
  {
    image: '/media/Launchpad/secret-partner.png',
    name: 'Top Secret',
    status: 'Coming Soon',
    registration_start: 'TBA',
    platform_raise: 'TBA',
    link: '',
  }
]

function ProjectItem(props) {
  const {name, status, image, registration_start, platform_raise, link} = props
  const {selected = false} = props
  
  return (
    <Box>
      <Box width={'300px'} background={selected?'linear-gradient(180deg, rgba(38, 138, 255, 0.63) 0%, #2ABFFF 55.52%);':null} borderRadius={'20px'}>
        
        <Stack textAlign={'center'}>
          <Center background={'radial-gradient(50% 50% at 50% 50%, #AF63FA 0%, #19117A 100%);'} width={'212px'} height={'212px'} borderRadius={'full'} margin={'24px auto'}>
            <Image borderRadius={'full'} boxSize={'160px'} src={image} backgroundColor={'white'} />
          </Center>
          
          <Text color={selected?'#170E82':'white'} fontSize={'20px'} fontFamily={'PilatExtended-Bold'} fontWeight={500}>{name}</Text>
          <Text color={selected?'#170E82':'white'} fontSize={'16px'} fontFamily={'PilatExtended-Regular'} fontWeight={500}>{status}</Text>
          <Box paddingX={'24px'} paddingY={'0px'}>
            <Box borderBottom={'2px'} width={'100%'} color={selected?'#430E82':'white'}></Box>
          </Box>
          
          <SimpleGrid templateColumns={'1fr 40px'} padding={'24px'} paddingTop={'12px'} textColor={selected?'#170E82':'white'} fontFamily={'Poppins'}>
            <Text textAlign={'left'}>Registration Start</Text>
            <Text fontWeight={'bold'}>{registration_start}</Text>
            <Text textAlign={'left'}>Platform Raise</Text>            
            <Text fontWeight={'bold'}>{platform_raise}</Text>
          </SimpleGrid>
        </Stack>
        
      </Box>
      <Center width={'300px'}>
        <Button width={'80%'} margin={'12px auto'} background={selected?'#3BC5FF':'#0084FF'} textColor={selected?'#430E82':'white'}>RESEARCH</Button>
      </Center>
    </Box>
  )
}

export default function UpcomingProject() {
  const [selected, setSelected] = useState(0)
  return (
    <Box>
      <Center marginTop={'48px'}>
        <Text
          color="#63CDFA"
          fontFamily="PilatExtended-Bold"
          fontSize={{ base: '20px', md: '25px', lg: '30px' }}>
          UPCOMING <chakra.span color={'white'}>PROJECT</chakra.span> 
        </Text>
      </Center>
      <Container maxWidth={'container.xl'} marginY={'84px'}>
        <SimpleGrid minChildWidth={'300px'} justifyItems={'center'}>
          {projects.map((project, i)=> <ProjectItem {...project} selected={selected === i} />)}
        </SimpleGrid>
      </Container>
    </Box>
  )
}