import React from 'react'
import {
  Flex,
  Text,
  Select,
  InputLeftElement,
  Input,
  Box,
} from '@chakra-ui/react';

import {
  InputTransition,
} from '../ImageTransition'
import { IoCheckmark } from 'react-icons/io5';

export default function CustomSelect({typeText, type, setType}) 
{
  return (
    <Flex mt='25px' direction="row">
      <InputTransition 
        unitid='conditioncheck'
        selected={false}
        width='24px' height='24px' rounded='md'
        onClick={()=>{setType(!type)}}
      >
        {type &&
        <IoCheckmark width='24px' height='24px' color='#FE8600'></IoCheckmark>
        }
      </InputTransition>

      <Text ml='10px' fontSize='14px' fontWeight='400'>
        {typeText}
      </Text>
  </Flex>
  )
}
