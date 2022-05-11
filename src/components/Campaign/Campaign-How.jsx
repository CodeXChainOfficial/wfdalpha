import * as React from 'react';
import { Container, Box, Heading, Text, Flex, useColorModeValue } from '@chakra-ui/react';

export default function CampaignHow() {
  return (
    <Container maxW={'5xl'} py={8} px={10}>
      <Box
        maxW="64rem"
        marginX="auto"
        py={{ base: '3rem', md: '4rem' }}
        px={{ base: '1rem', md: '0' }}
      >
        <Heading
          as="h3"
          fontSize="1.5rem"
          fontWeight="bold"
          textAlign="left"
          mb={{ base: '4', md: '2' }}
          pb={4}
          borderBottom="1px solid"
          borderColor="gray.300"
        >
          How the Beta Testing with Angel Protocol Goes
        </Heading>
        <Flex
          as="section"
          alignItems="start"
          justify="between"
          flexDirection={{ base: 'column', md: 'row' }}
          my={{ base: '1.5rem', md: '2.5rem' }}
          borderBottom="1px solid"
          borderColor="gray.300"
          pb={8}
        >
          {featuresList.map((feature) => {
            return (
              <Box
                key={feature.id}
                w={{ base: '100%', md: 1 / 3 }}
                px={{ md: '0.5rem' }}
                mb={{ base: '6', md: '0' }}
              >
                {feature.icon}
                <Text textAlign="left" fontWeight="700" mt={3} mb={1}>
                  {feature.title}
                </Text>
                <Text
                  color={'gray.400'}
                  fontSize="0.875rem"
                  fontWeight="300"
                  textAlign="left"
                  mt={3}
                  mb={1}
                >
                  {feature.desc}
                </Text>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Container>
  );
}

export const featuresList = [
  {
    id: 1,
    title: 'Registration',
    desc: `Register yourself for the test by connecting your Terra Station wallet to WeFund.`,
    
  },
  {
    id: 2,
    title: 'Back Angel Protocol',
    desc: `Prepare your UST and go to Angel Protocol Fundraising Project Page. Choose the option to back the project and add your desired amount to be pledged toward Angel Protocol.`,
    
  },
  {
    id: 3,
    title: 'Report Findings',
    desc: `Report any findings of irregularities or anything abnormal about the process and submit feedback. If the findings are valid, you may be rewarded.`,
    
  }
];