import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    HStack,
    VStack,
    Center,
    StackDivider,
    ButtonGroup,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoArrowForwardCircle,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';

  import React from 'react';
  import { BsBookmarksFill, BsBox, BsPerson, BsCashCoin } from 'react-icons/bs';
  // interface FeatureProps {
  //   text: string;
  //   iconBg: string;
  //   icon?: ReactElement;
  // }
  

  
  export default function Aboutone() {
    return (
      <Container maxW={'8xl'} py={12} p="6">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} backgroundImage={'url(swirl.svg)'} backgroundSize = {"contain"} bgPosition={'center'} bgRepeat={'no-repeat'}>
          <Stack spacing={1}>
          <Container ml={'-10'}>
            <VStack>
            <Text
                  textTransform={'uppercase'}
                  color={'rgba(255, 255, 255, 0.54)'}
                  fontWeight={'normal'}
                  fontSize={'18px'}
                  p={2}
                  alignSelf={'flex-start'}
                  rounded={'lg'}>
                  About WeFund
                </Text>
              <Image
              alignSelf={'flex-start'}
                alt={'Wefund'}
                src={
                  'onegoal.svg'
                }
              />
              <Container >
                
              </Container>
            </VStack>
          </Container>
          <br/>
          <Text color={'gray.200'} fontSize={'lg'}>
          WeFund is Decentralized crowdfunding for the crypto-startup project industry and beyond implemented for a real-life use case. <br/> <br/> The vision of WeFund is to become the connector of the blockchain ecosystem that exists on the market.
            to fulfill this vision, WeFund's initial development stage would be in the Terra ecosystem and will continue to use another ecosystem such as Solana, Etherium, Cardano, etc in near future.
          </Text>
        </Stack>
          
          <Flex>            
            <Image
              alt={'feature image'}
              mt={'15%'}
              ml={'10%'}
              w={'80%'}
              h={'80%'}
              src={
                'rocket.svg'
              }
            />
          </Flex>
        </SimpleGrid>
        <Flex alignItems="center"
      justifyContent="center"
      overflow={"hidden"}>
          <VStack>
        <HStack alignSelf={"center"} borderRadius={"30px 0px 0px 30px"}>
        <Center>
      <Flex as={Stack} 
              bg={"rgba(255, 255, 255, 0.08)"}
              width={"202px"}
              height= {"178px"}>
          <Image
              marginTop={10}
              maxH = {100}
              src="prj-startup.svg"
              alt="WeFund"
              /> 
              <Stack direction={'row'} spacing={12} p={5}>
              <Text fontSize={14} maxW={24} textAlign="center">Crypto-Startup Industry </Text>
              </Stack>
      </Flex>
      <Flex as={Stack}
              bg={"rgba(255, 255, 255, 0.05)"} 
              width={"202px"}
              height= {"178px"}>
      <Image
              maxH = {10}
              src="time-not%20yet.svg"
              alt="WeFund"
              marginRight={"70%"}
              /> 
          <Image
              maxH = {100}
              src="prj-gaming.svg"
              alt="WeFund"
              /> 
              <Stack direction={'row'} spacing={12} p={4}>
              <Text fontSize={14} maxW={24} textAlign="center">Gaming Industry</Text>
              </Stack>
      </Flex>
      <Flex as={Stack} 
              bg={"rgba(255, 255, 255, 0.08)"}
              width={"202px"}
              height= {"178px"}>
      <Image
              maxH = {10}
              src="time-not%20yet.svg"
              alt="WeFund"
              marginRight={"70%"}
              /> 
          <Image
              maxH = {100}
              src="prj-creative.svg"
              alt="WeFund"
              /> 
              <Stack direction={'row'} spacing={12} p={4}>
              <Text fontSize={14} maxW={24} textAlign="center">Creative Industry </Text>
              </Stack>
      </Flex>
      <Flex as={Stack} 
              bg={"rgba(255, 255, 255, 0.05)"}
              width={"202px"}
              height= {"178px"}>
          <Image
              maxH = {10}
              src="time-not%20yet.svg"
              alt="WeFund"
              marginRight={"70%"}
              /> 
              <Image
              maxH = {100}
              src="prj-sport.svg"
              alt="WeFund"
              /> 
              <Stack direction={'row'} spacing={12} p={6}>
              <Text fontSize={14} maxW={24} textAlign="center">Sport Industry </Text>
              </Stack>
      </Flex>
      <Flex as={Stack} 
              bg={"rgba(255, 255, 255, 0.08)"}
              width={"202px"}
              height= {"178px"}>
      <Image
              maxH = {10}
              src="time-not%20yet.svg"
              alt="WeFund"
              marginRight={"70%"}
              /> 
          <Image
              maxH = {100}
              src="prj-real%20estate.svg"
              alt="WeFund"
              /> 
              <Stack direction={'row'} spacing={12} p={3}>
              <Text fontSize={14} maxW={24} textAlign="center">Real Estate Industry </Text>
              </Stack>
      </Flex>
      <Flex as={Stack} 
              bg={"rgba(255, 255, 255, 0.05)"}
              width={"202px"}
              height= {"178px"}>
          <Image
              maxH = {10}
              src="time-not%20yet.svg"
              alt="WeFund"
              marginRight={"70%"}
              /> 
              <Image
              maxH = {100}
              src="prj-sport.svg"
              alt="WeFund"
              /> 
              <Stack direction={'row'} spacing={12} p={6}>
              <Text fontSize={14} maxW={24} textAlign="center">Sport Industry </Text>
              </Stack>
      </Flex>
      
      </Center>
        </HStack>
        <br/><br/><br/>
        <Center>
          <Flex 
          bg="linear-gradient(180deg, rgba(0, 193, 255, 0.1) 0%, rgba(0, 193, 255, 0.1) 100%)" 
          width= "1212px"
          height= "50px"
          borderRadius={"30px"}
          border={"1.5px solid"}
          borderColor={" #0047FF"}

>
          <Text>Download Whitepaper</Text>
          <BsPerson size={'2em'} /></Flex></Center></VStack>
        </Flex>
      </Container>
    );
  }