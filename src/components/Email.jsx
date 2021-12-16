import { FormEvent, ChangeEvent, useState } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Center,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import React from 'react';

export default function Emailsub() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState(
    'initial'
  );
  const [error, setError] = useState(false);

  return (
    <Flex
      minH={'40vh'}
      align={'center'}
      justify={'center'}
      w={'100%'}
      h={"621px"}
      id = {'Contactme'}
      bg={'url(saft1.svg)'}
      backgroundSize = {"cover"}
      bgRepeat={"no-repeat"}
      >
      
      <Container
        boxShadow={'xl'}
        rounded={'lg'}
        p={6}
        bg={'url(saft2.svg)'}
        minW= {"1212px"}
        marginTop={'535px'}
        h= {"808px"}
        bgRepeat={"no-repeat"}
        >
        <Heading
          as={'h2'}
          fontSize={{ base: '22px', sm: '2xl' }}
          textAlign={'center'}
          mb={5}
          fontFamily="Pilat Extended"
fontStyle={"normal"}
fontWeight={"normal"}
lineHeight={"28px"}
textTransform={"uppercase"}
color="rgba(255, 255, 255, 0.54)">
          Get in Wefund
        </Heading>
        <Heading fontFamily="Pilat Extended"
fontStyle="normal"
fontWeight="bold"
fontSize="35px"
lineHeight="45px" textAlign={'center'}>Grow With Us</Heading>
<Center>
        <Button bg={"linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"}  size="lg" maxW={'200'} marginTop={"150px"}>
            Start Funding
            </Button></Center>
      </Container>
    </Flex>
  );
}