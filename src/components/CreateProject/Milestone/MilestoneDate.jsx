import React from 'react'
import {
  Box,
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  Input
} from '@chakra-ui/react'

import {
  InputTransition,
} from '../../ImageTransition'

import{
  isNull,
} from '../../Util'

export default function MilestoneDate({
  index, 
  milestoneDate,
  setMilestoneDate,
  extra
}) 
{
  function onChangeMilestoneDate(e, index){
    let ar=[...milestoneDate];
    ar[index] = e.target.value;
    setMilestoneDate(ar);
  }

  return (
    <Box w="48%">
      <Flex justify="space-between">
        <Text mb="20px">Milestone Duration</Text>
      </Flex>
      <InputTransition
        unitid={`milestone${extra}date${index}`}
        width="100%"
        height="55px"
        rounded="md"
        selected={isNull(milestoneDate[index]) ? false : true}
      >
        <InputGroup
          size="sm"
          style={{ background: 'rgba(255, 255, 255, 0.05)' }}
        >
          <InputLeftElement
            style={{ background: 'transparent', border: '0' }}
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children=" "
          />
          <Input
            style={{ background: 'transparent', border: '0' }}
            type="date"
            h="55px"
            placeholder={extra + " Date ( dd - mm - yyyy )" }
            focusBorderColor="purple.800"
            rounded="md"
            value={milestoneDate[index]}
            onChange={(e) => onChangeMilestoneDate(e, index)}
          />
        </InputGroup>
      </InputTransition>
    </Box>
  )
};