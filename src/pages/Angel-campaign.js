import { ChakraProvider } from "@chakra-ui/react";
import theme from '../theme';
import { Container } from '../components/Container';
import {chakra, Box, Flex, SimpleGrid, GridItem, Heading, Text, Stack,Progress, Stat, Span,
    Input, InputGroup,  StatNumber, StatLabel,CircularProgress, CircularProgressLabel, Textarea, Avatar, Icon, Button,  VisuallyHidden, Image, Select, Checkbox,  RadioGroup, Radio, HStack, VStack, InputLeftElement, InputRightElement, Img
  } from "@chakra-ui/react";
import React, { useEffect, useState,  useCallback, useContext, useRef, } from 'react';

import '../styles/CreateProject.css';
import { BsArrowUpRight,BsBookmarksFill, BsBox, BsPerson, BsCashCoin } from "react-icons/bs"
import { ImageTransition, InputTransition, InputTransitiongrey } from "../components/ImageTransition";
import  CampaignIntro from 'components/Campaign/Campaign-Header.jsx'
import  CampaignAbout from 'components/Campaign/Campaign-About.jsx'
import CampaignHow from "../components/Campaign/Campaign-How";

export default function NewProject() {



  return (
    <ChakraProvider resetCSS theme={theme}>
      <div style={{ 
      width:'100%', color:'white', fontSize:'18px', fontFamily:'Sk-Modernist-Regular', fontWeight:'500' }}>
        <div>
          <div style={{backgroundImage:"url('/projectbanner.svg')", width:'100%', width:'100%', zIndex:'11',backgroundPosition:'left', backgroundRepeat:'no-repeat', backgroundSize:'cover',zIndex:'11'}}>
            <Flex pt='64px' ml='100px' justify="left" height="200px">
            </Flex>
          </div>
        </div>
          <Flex width='100%' justify='center' mt='50px'>
            <Box style={{fontFamily:'Sk-Modernist-Regular'}} >
              
              {/* ------------Details------------ */}
              <Flex width='100%' justifyContent='center' alignItems={'center'} zIndex={'1'} mt={'-180px'}>
                <VStack>
                    <CampaignIntro/>
                    
                    <Flex justifyContent='center'>
                          <Flex  px={'45px'} paddingTop={"35px"} mt="40px" width={'80%'} background={'linear-gradient(180deg, rgba(106, 206, 245, 0) -22.8%, rgba(0, 156, 217, 0.32) 72.18%)'}  border={'1.5px solid rgba(255, 255, 255, 0.15)'} borderRadius='25px'>
                            {/* ------------Description of Project------------ */}
                            <VStack>
                    
                              <chakra.p p={8} color={"rgba(255, 255, 255, 0.84)"} fontSize= {"18px"} lineHeight={"150%"}>
                              <span style={{color:"white",fontWeight:"900" ,fontSize:"18px" ,marginBottom:"20px"}}>

                              </span>
                              <br/><br/>    
                              WeFund will be leveraging Angel Protocol to act as an additional gateway for the WeFund community to participate in charity campaigns found on Angel. WeFund projects will have the option (not required) to allocate a percentage of funds raised to be allocated to Angel. The purpose of this milestone is to host a live beta test of WeFund’s mainnet. Funds will go to Anchor protocol and then to Angel protocol. This will simulate a project’s crowdfunding journey.
 <br/><br/>

 WeFund will be hosting a game for users to identify any issues and/or bugs within WeFund’s fundraising system. Those who can successfully identify issues and/or bugs will be eligible for a 500 UST in WFD token prize. To qualify for WeFund’s prize of 500 UST in WFD token, users MUST participate in WeFund’s live beta test of Angel protocol by contributing funds to charity on WeFund’s platform.
<br/><br/>

The purpose of this test is to identify any obstacles that users may come across on the platform. The funds are set to be raised on May 14-20 and will be transferred to Angel Protocol on May 21st.<br/><br/>
<br/><br/>
                              </chakra.p>
                            
                    <CampaignHow/>
                            <CampaignAbout/>
                              </VStack>
                          </Flex>
                          
                    </Flex>
                </VStack>    
              </Flex>
              <Flex height={'200px'}>

              </Flex>
            </Box>
        </Flex>
      </div>
    </ChakraProvider>
  )
}