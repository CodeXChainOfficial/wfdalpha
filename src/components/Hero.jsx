import React from "react";

import {
  Flex,
  Image,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react';

export default function CallToActionWithIllustration() {
  return (
    <Container 
      minWidth={"1440px"}
      w={'100%'}
      height= {"1001px"}
      bg={'url(herobackground.svg)'}
      backgroundSize = {"cover"}
      bgRepeat={"no-repeat"}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Image src="horizontallogo.svg"></Image>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          
          The foremost enabler of crypto-blockchain based crowdfunding launchpad
        </Heading>
                <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            borderRadius= "33px"
            _hover={{ bg: 'linear-gradient(180deg, rgba(0, 193, 255, 0.1) 0%, rgba(0, 193, 255, 0) 100%)', transition:"all .5s" }}>
            Get started
          </Button>
          <Button rounded={'full'} px={6}
          bg="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
          borderRadius= "33px"
          _hover={{ bg: 'linear-gradient(180deg, rgba(0, 193, 255, 0.1) 0%, rgba(0, 193, 255, 0) 100%)', transition:"all .5s" }}>
            Learn more
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
