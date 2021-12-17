import React from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { ButtonTransition } from '../components/ImageTransition';
import { IoCloudUploadOutline } from 'react-icons/io5';

export default function Aboutone() {
    return (
      <Flex direction='column' px='115' pt='68' fontFamily='Sk-Modernist-Regular'
        backgroundImage="url('/swirl.svg')" backgroundSize="contain" bgRepeat='no-repeat'>
        <Flex direction='row'>
          <Box direction='column'>
            <Flex direction='row'>
              <Text fontFamily='PilatExtended-Regular' fontWeight='400' fontSize='18px'
                color='#FFFFFF8A'>ABOUT WEFUND
              </Text>
            </Flex>
            <Flex direction='row'>
              <Flex align='center'>
                <Image alt='Wefund' src= '/onegoal.svg' h='62px' />
              </Flex>
              <Flex>
                <Text fontFamily='PilatExtended-Regular' fontWeight='700' fontSize='31px'
                  color='white'>GOAL<br/>PASSION
                </Text>
              </Flex>
            </Flex>
            <Flex mt='22px'>
              <Text fontWeight='400' fontSize='18px' color='#FFFFFF8A' lineHeight='29px'>
                WeFund is Decentralized crowdfunding for the crypto-startup project industry and beyond implemented for a real-life use case.<br/><br/>
                The vision of WeFund is to become the connector of the blockchain ecosystem that exists on the market. to fulfill this vision, WeFund's initial development stage would be in the Terra ecosystem and will continue to use another ecosystem such as Solana, Etherium, Cardano, etc in near future
              </Text>
            </Flex>
          </Box>
          <Flex ml='0px' mt='0px' w='100%' h='100%'>
            <Image alt='feature image' h='449px' src= '/rocket.svg' />
          </Flex>
        </Flex>
        <Flex direction='row' mt='20px'>
          <Box w='202px' h='178px' bg='#FFFFFF14'>
            <Box ml='34px' mt='31px' w='120px' borderRadius='10% 0 0 10%'>
              <Image alt='Wefund' src= '/gift.svg' h='60px' />
              <Text mt='14px' fontSize='15px' fontWeight='700'>Yield Benefit for Backers</Text>
            </Box>
          </Box>
          <Box w='202px' h='178px' bg='#FFFFFF0D'>
            <Box ml='34px' mt='31px' w='120px'>
              <Image alt='phone' src= '/phone.svg' h='60px' />
              <Text mt='14px' fontSize='15px' fontWeight='700'>Secure Stable Deposits</Text>
            </Box>
          </Box>
          <Box w='202px' h='178px' bg='#FFFFFF14'>
            <Box ml='34px' mt='31px' w='120px'>
              <Image alt='Wefund' src= '/lowriskinvestment.svg' h='60px' />
              <Text mt='14px' fontSize='15px' fontWeight='700'>Low Risk investement</Text>
            </Box>
          </Box>
          <Box w='202px' h='178px' bg='#FFFFFF0D'>
            <Box ml='34px' mt='31px' w='120px' borderRadius='10% 0 0 10%'>
              <Image alt='Wefund' src= '/governance.svg' h='60px' />
              <Text mt='14px' fontSize='15px' fontWeight='700'>Governance Voting Power</Text>
            </Box>
          </Box>
          <Box w='202px' h='178px' bg='#FFFFFF14'>
            <Box ml='34px' mt='31px' w='120px'>
              <Image alt='Wefund' src= '/deflationary.svg' h='60px' />
              <Text mt='14px' fontSize='15px' fontWeight='700'>Deflationary Token Value</Text>
            </Box>
          </Box>
          <Box w='202px' h='178px' bg='#FFFFFF0D'>
            <Box ml='34px' mt='31px' w='120px' borderRadius='0 10% 10% 0'>
              <Image alt='Wefund' src= '/nftmirror.svg' h='60px' />
              <Text mt='14px' fontSize='15px' fontWeight='700'>NFT Mirror Real World Asset</Text>
            </Box>
          </Box>
        </Flex>
        <Flex mt='30px' mb='59px'>
          <ButtonTransition 
            unitid='downwhitepaper'
            selected={false}
            width='100%' height='55px' rounded='md'
          >
            <Flex justify='space-between' w='100%' px='22px'>
              <Box>Download Whitepaer</Box>
              <Box><IoCloudUploadOutline color='white'/></Box>
            </Flex>
          </ButtonTransition>
        </Flex>
      </Flex>
    );
  }