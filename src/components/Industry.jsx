import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
  Icon,
  Link,
  Button,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import React from 'react';

export default function Industry() { 
  return(
    <Flex>
  <Tabs size="lg" marginTop = {20}  colorScheme="white" >
  <TabList justifyContent={"space-evenly"}>
    <Center>
      <Tab as={Stack} bg={"rgba(255, 255, 255, 0.08)"} width= "242px" height= "161px">
          <Image
              marginTop={10}
              maxH = {100}
              src="prj-startup.svg"
              alt="WeFund"
              /> 
              <Stack direction={'row'} spacing={12} p={5}>
              <Text fontSize={14} maxW={24} textAlign="center">Crypto-Startup Industry </Text>
              </Stack>
      </Tab>
      <Tab as={Stack} bg={"rgba(255, 255, 255, 0.05)"}width= "242px" height= "161px">
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
      </Tab>
      <Tab as={Stack} bg={"rgba(255, 255, 255, 0.08)" }  width= "242px" height= "161px">
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
      </Tab>
      <Tab as={Stack} bg={"rgba(255, 255, 255, 0.05)"}width= "242px" height= "161px">
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
      </Tab>
      <Tab as={Stack} bg={"rgba(255, 255, 255, 0.08)"} width= "242px" height= "161px">
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
      </Tab>
      
      </Center>
      
  </TabList>
  <TabPanels  size="md" maxW={'6xl'} maxH={'48vh'} py={12} p="6" >
  <TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
          <Heading
fontStyle=" normal"
fontWeight=" 300"
fontSize=" 18px"
lineHeight=" 150%"
/* identical to box height, or 27px */

letterSpacing=" 0.05em"
textTransform=" uppercase"
color=" rgba(255, 255, 255, 0.54)">Crypto Startup Industry</Heading>
          <Heading color={'white'} fontFamily="Pilat Extended">Crypto Project</Heading>
          <Text color={"#2AC54D"} fontFamily=" Sk-Modernist"
fontStyle=" normal"
fontWeight=" bold"
fontWize=" 18px"
lineHeight=" 140%">Ongoing</Text>
          <Text  fontFamily=" Sk-Modernist"
fontStyle=" normal"
fontWeight=" normal"
fontSize=" 18px"
lineHeight=" 150%"


color=" #FFFFFF">
          WeFund supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.
          </Text>
            <Button bg={"linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"}  size="lg" maxW={'200'} marginTop={"56px"}>
            Start Funding
            </Button>
        </Stack>
        <Flex>
          <Box>
          <br/>
          <Image 
            width="563px"
            height="438px"
            left="774px"
            top="2641px"
            borderRadius={"4xl"}
            paddingLeft={20}
            src={
              'nft.svg'
            }
          />
          </Box>
        </Flex>
        
      </SimpleGrid>
      </TabPanel>
      <TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
          <Heading font-family="Pilat Extended"
font-style=" normal"
font-weight=" 300"
font-size=" 18px"
line-height=" 150%"
/* identical to box height, or 27px */

letter-spacing=" 0.05em"
text-transform=" uppercase"

color=" rgba(255, 255, 255, 0.54)">Crypto Startup Industry</Heading>
          <Heading color={'white'} font-family="Pilat Extended">Crypto Project</Heading>
          <Text color={"#2AC54D"} font-family="Sk-Modernist"
font-style=" normal"
font-weight=" bold"
font-size=" 18px"
line-height=" 140%">Ongoing</Text>
          <Text fontSize={'lg'} font-family="Sk-Modernist"
font-style=" normal"
font-weight=" normal"
font-size=" 18px"
line-height=" 150%"
/* or 27px */


color=" #FFFFFF">
          WeFund supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.
          </Text>
          <Stack spacing={12} direction={'row'}>
          <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
            <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
            <Button bg={"linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"}  size="lg" maxW={'200'}>
            Start Funding
            </Button>
            </Stack>
        </Stack>
        <Flex>
          <Box>
          <br/>
          <Image 
            width="563px"
            height="438px"
            left="774px"
            top="2641px"
            borderRadius={"4xl"}
            paddingLeft={20}
            src={
              'nft.svg'
            }
          />
          </Box>
        </Flex>
        
      </SimpleGrid>
      </TabPanel>
      <TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
          <Heading font-family=" Pilat Extended"
            font-style=" normal"
            font-weight=" 300"
            font-size=" 18px"
            line-height=" 150%"
            /* identical to box height, or 27px */

            letter-spacing=" 0.05em"
            text-transform=" uppercase"

            color=" rgba(255, 255, 255, 0.54)">Crypto Startup Industry
          </Heading>
          <Heading color={'white'} font-family="Pilat Extended">Crypto Project</Heading>
          <Text color={"#2AC54D"} font-family=" Sk-Modernist"
            font-style=" normal"
            font-weight=" bold"
            font-size=" 18px"
            line-height=" 140%">Ongoing</Text>
                      <Text fontSize={'lg'} font-family=" Sk-Modernist"
            font-style=" normal"
            font-weight=" normal"
            font-size=" 18px"
            line-height=" 150%"
            /* or 27px */


            color=" #FFFFFF">
          WeFund 1 supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.
          </Text>
          <br/><br/><br/><br/>
          <Stack spacing={12} direction={'row'}>
          <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
            <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
            <Button bg={"linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"}  size="lg" maxW={'200'}>
            Start Funding
            </Button>
            </Stack>
        </Stack>
        <Flex>
          <Box>
          <br/>
          <Image 
            width="563px"
            height="438px"
            left="774px"
            top="2641px"
            borderRadius={"4xl"}
            paddingLeft={20}
            src={
              'nft.svg'
            }
          />
          </Box>
        </Flex>
        
      </SimpleGrid>
      </TabPanel>
      <TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
          <Heading font-family=" Pilat Extended"
font-style=" normal"
font-weight=" 300"
font-size=" 18px"
line-height=" 150%"
/* identical to box height, or 27px */

letter-spacing=" 0.05em"
text-transform=" uppercase"

color=" rgba(255, 255, 255, 0.54)">Crypto Startup Industry</Heading>
          <Heading color={'white'} font-family="Pilat Extended">Crypto Project</Heading>
          <Text color={" #FE8600"} font-family=" Sk-Modernist"
font-style=" normal"
font-weight=" bold"
font-size=" 18px"
line-height=" 140%">OComing Soon</Text>
          <Text fontSize={'lg'} font-family=" Sk-Modernist"
font-style=" normal"
font-weight=" normal"
font-size=" 18px"
line-height=" 150%"
/* or 27px */


color=" #FFFFFF">
          WeFund 2 supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.
          </Text>
          <br/><br/><br/><br/>
          <Stack spacing={12} direction={'row'}>
          <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
            <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
            <Button bg={"linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"}  size="lg" maxW={'200'}>
            Start Funding
            </Button>
            </Stack>
        </Stack>
        <Flex>
          <Box>
          <br/>
          <Image 
            width="563px"
            height="438px"
            left="774px"
            top="2641px"
            borderRadius={"4xl"}
            paddingLeft={20}
            src={
              'nft.svg'
            }
          />
          </Box>
        </Flex>
        
      </SimpleGrid>
      </TabPanel>
      <TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
          <Heading font-family=" Pilat Extended"
          font-style=" normal"
          font-weight=" 300"
          font-size=" 18px"
          line-height=" 150%"
          /* identical to box height, or 27px */

          letter-spacing=" 0.05em"
          text-transform=" uppercase"

          color=" rgba(255, 255, 255, 0.54)">Crypto Startup Industry</Heading>
                    <Heading color={'white'} font-family="Pilat Extended">Crypto Project</Heading>
                    <Text color={" #FE8600"} font-family=" Sk-Modernist"
          font-style=" normal"
          font-weight=" bold"
          font-size=" 18px"
          line-height=" 140%">Coming Soon</Text>
                    <Text fontSize={'lg'} font-family=" Sk-Modernist"
          font-style=" normal"
          font-weight=" normal"
          font-size=" 18px"
          line-height=" 150%"
          /* or 27px */


          color=" #FFFFFF">
          WeFund supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.
          </Text>
          <br/><br/><br/><br/>
          <Stack spacing={12} direction={'row'}>
          <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
            <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
            <Button bg={"linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"}  size="lg" maxW={'200'}>
            Start Funding
            </Button>
            </Stack>
        </Stack>
        <Flex>
          <Box>
          <br/>
          <Image 
            width="563px"
            height="438px"
            left="774px"
            top="2641px"
            borderRadius={"4xl"}
            paddingLeft={20}
            src={
              'nft.svg'
            }
          />
          </Box>
        </Flex>
        
      </SimpleGrid>
      </TabPanel>
  </TabPanels>
  </Tabs>
  </Flex>
  );
}
