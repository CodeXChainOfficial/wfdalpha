import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function Roadmaps() {
  return (
    <Flex mt='117px' direction='column' px='115px' pt='47px' fontFamily='Sk-Modernist-Regular'>
      <Text fontFamily='PilatExtended-Regular' fontWeight='400' fontSize='22px'>RoadMap</Text>
      <Flex mt='15px' direction='row' fontFamily='PilatExtended-Regular' fontWeight='700' fontSize='35px'>
        <Text color='#00A3FF'>WeFund&nbsp;</Text>
        <Text>RoadMap</Text>
      </Flex>
      <Flex mt='45px' direction='row'>
        <Flex>
          <Image  alt={'Wefund'} src='/RoadMap_Horz.svg' />
        </Flex>
        <Flex>
          <Image  alt={'Wefund'} src='/sphere.svg' />
        </Flex>
      </Flex>
    </Flex>
  );
}