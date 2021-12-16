import React from 'react';
import { FormEvent, ChangeEvent, useState } from 'react';
import { Box, Text, Flex, } from '@chakra-ui/react';
import { InputTransition, ButtonTransition } from '../components/ImageTransition';

export default function Emailsub() {

  return (
    <Flex direction='column' mx='115px' mt='219px' h='350px' bg='url(saft2.svg)' backgroundSize = "cover" bgRepeat="no-repeat" >
      <Flex mt='66px' justify='center'>
        <Text fontFamily='PilatExtended-Regular' fontWeight='400' fontSize='22px'>
          GET IN WEFUND
        </Text>
      </Flex>
      <Flex mt='14px' justify='center'>
        <Text fontFamily='PilatExtended-Regular' fontWeight='700' fontSize='35px'>
          Grow With Us Now
        </Text>
      </Flex>
      <Flex mt='72px' mb='1000px' justify='center'>
          <InputTransition 
            unitid='investinwefund'
            selected={false}
            width='210px' height='50px' rounded='md'
          >
            Invest in WeFund
          </InputTransition>
      </Flex>
    </Flex>
  );
}