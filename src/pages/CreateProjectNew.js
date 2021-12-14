import { ChakraProvider } from "@chakra-ui/react";
import theme from '../theme';
import { Container } from '../components/Container';
import {chakra, Box, Flex, SimpleGrid, GridItem, Heading, Text, Stack, FormControl, FormLabel,
    Input, InputGroup,  InputLeftAddon, FormHelperText, Textarea, Avatar, Icon, Button,  VisuallyHidden, Select, Checkbox,  RadioGroup, Radio, HStack, InputLeftElement, InputRightElement, Img
  } from "@chakra-ui/react";
import React, { useEffect, useState,  useCallback, useContext, useRef, } from 'react';
import { useStore } from '../store'
import { IoCloudUploadOutline, IoCheckbox } from 'react-icons/io5';

import '../styles/CreateProject.css';


export default function NewProject() {
  const [isUST, setIsUST] = useState(true);
  const [submitPressed, setSubmitPressed] = useState(false);
  const [whitepaper, setWhitepaper] = useState('');
  const [prjCategory, setPrjCategory] = useState('');

  function handleWhitepaper(){
    if(typeof document !== 'undefined')
    {
      let fileSelector = document.getElementById('fileSelector')
      fileSelector.click();
    }
  }
  function changeWhitepaper(){
    if(typeof document !== 'undefined')
    {
      let fileSelector = document.getElementById('fileSelector')
      var fileName = fileSelector.value;
      setWhitepaper(fileName.substr(fileName.lastIndexOf('\\')+1, fileName.length-1));
    }    
  }

  return (
    <ChakraProvider resetCSS theme={theme}>
      <div style={{backgroundImage:"linear-gradient(90deg, #0B0021 0%, #120054 104.34%)", width:'100%', color:'white', fontSize:'18px', fontFamily:'Sk-Modernist-Bold' }}>
        <div style={{backgroundImage:"url('createproject_banner_emphasis.svg')", width:'100%'}}>
        <div style={{backgroundImage:"url('createproject_banner.svg')", width:'100%'}}>
          <Flex pt='64px' justify="center">
            <Text fontSize='16px'>Home &nbsp;</Text>
            <Text fontSize='16px' as='b'>Create Your Project</Text>
          </Flex>
          <Flex mt='11px' pb='75px' mb="75px" justify='center'
            style={{fontFamily:'PilatExtended-Regular'}}>
            <Text fontSize='40px'>Create a&nbsp;</Text>
            <Text fontSize='40px' color='#4790f5'>New Project</Text>
          </Flex>
        </div>
        </div>
        <Flex width='100%' justify='center' mt='-80px' px='175px'>
        <Box width='900px' bg='#FFFFFF0D' px='50px' style={{fontFamily:'Sk-Modernist-Regular'}} >
          {/* --------Select UST or WFD------------------ */}
          <Text fontSize='18px' pt='50px'>Select Back on</Text>
          <Flex direction="row">
            <Flex className={isUST?'Coin-static':'Coin'} direction='column' mt='20px' w='120px' h='160px' justify='center' align='center'
            onClick={()=>{setIsUST(true)}}
            >
              <Img mt='23px' boxSize='50px' objectFit='cover' src='UST.svg' alt='UST Avatar'/>
              <Text mt='13px'>UST</Text>
              <Img mt='15px' boxSize='20px' objectFit='cover' src={isUST?'group_dot.svg':'group_undot.svg'} alt='UST Avatar'/>
            </Flex>
            <Flex className={isUST?'Coin':'Coin-static'} direction='column' ml='20px' mt='20px' w='120px' h='160px' justify='center' align='center' onClick={()=>{setIsUST(false)}}
            >
              <Img mt='23px' boxSize='50px' objectFit='cover' src='logo.png' alt='UST Avatar'/>
              <Text mt='13px'>WFD</Text>
              <Img mt='15px' boxSize='20px' objectFit='cover' src={isUST?'group_undot.svg':'group_dot.svg'} alt='UST Avatar'/>
            </Flex>
          </Flex>
          {/* --------project name-------------- */}
          <Box mt='40px'>
            <Flex justify="space-between">
              <Text>Project Name</Text>
              <Text size='15px'>0/150 words</Text>
            </Flex>
            <InputGroup size="sm">
              <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em' children='' />
              <Input type="text" h='55px' bg='#FFFFFF0D' borderColor="#FFFFFF33" placeholder="Type here" focusBorderColor="purple.800"  rounded="md"  value='' onChange={(e)=>{}} />
            </InputGroup>
          </Box>
          {/* ------------project description--------------- */}
          <Box mt='40px'>
            <Flex justify="space-between">
              <Text>Project Description</Text>
              <Text size='15px'>0/1000 words</Text>
            </Flex>
            <Textarea  bg='#FFFFFF0D' borderColor="#FFFFFF33" value='' onChange={(e)=>{}}
              placeholder='Type here' size='sm' h='175px' />
          </Box>
          {/* ---------------project website------------------- */}
          <Flex direction='row' mt='40px' justify='space-between'>
            <Box w='100%'>
              <Flex justify="space-between">
                <Text>Project Website</Text>
              </Flex>
              <InputGroup size="sm">
                <InputLeftAddon h='55px' bg='#FFFFFF0D' borderColor="#FFFFFF33" children="http://" color='white' rounded="md" />
                <Input type="text" h='55px' bg='#FFFFFF0D' borderColor="#FFFFFF33"  placeholder="Type here" focusBorderColor="purple.800" rounded="md"  value='' onChange={(e)=>{}} />
              </InputGroup>
            </Box>
            {/* ---------------upload---------------------------------- */}
            <Box ml='24px' w='100%'>
              <Flex justify="space-between">
                <Text>Project WhitePaper</Text>
              </Flex>
              {whitepaper == '' && 
                <InputGroup size="sm">
                  <InputLeftElement h='55px' pointerEvents='none' children={<IoCloudUploadOutline color='blue' />} />
                  <Input type="text" h='55px' bg='#FFFFFF' borderColor="#FFFFFF33" placeholder="Upload here" focusBorderColor="purple.800"  rounded="md"  
                  onClick={(e)=>{handleWhitepaper()}} /> 
                </InputGroup>}
              {whitepaper != '' && 
                <InputGroup size="sm">
                  <InputLeftElement h='55px' pointerEvents='none' children={<IoCheckbox color='blue' />} />
                  <Input type="text" h='55px' bg='#FFFFFF' borderColor="#FFFFFF33" placeholder={whitepaper} focusBorderColor="purple.800"  rounded="md"  
                  onClick={(e)=>{handleWhitepaper()}} /> 
                </InputGroup>}
              <input type='file' id="fileSelector" name='userFile' style={{display:'none'}}
                onChange={()=>changeWhitepaper()}/>
            </Box>
          </Flex>
          {/* --------------project Team description------- */}
          <Box mt='40px'>
            <Flex justify="space-between">
              <Text>Project Team Description</Text>
              <Text size='15px'>0/1000 words</Text>
            </Flex>
            <Textarea  bg='#FFFFFF0D' h='165px' borderColor="#FFFFFF33" value='' onChange={(e)=>{}}
              placeholder='Type here' size='sm'
            />
          </Box>
          {/* ------------------project category---------- */}
          <Box mt='40px' w='50%'>
            <Flex justify="space-between">
              <Text>Project Category</Text>
            </Flex>
            <Select id="sub_category" h='55px' name="sub_category" autoComplete="sub_category" mt={1}  bg='#FFFFFF0D' borderColor="#FFFFFF33" focusBorderColor="purple.800" shadow="sm" size="sm" w="full" rounded="md"
              value=''  onChange={(e)=>{}}
            >
              <option selected style={{backgroundColor:'#1B0645'}}>Crypto</option>
              <option style={{backgroundColor:'#1B0645'}}>Charity</option>
              <option style={{backgroundColor:'#1B0645'}}>Gamification</option>
            </Select>
          </Box>
          {/* -------------------project sub category--------------- */}
          <Box mt='40px' w='50%'>
            <Flex justify="space-between">
              <Text>Project Sub Category</Text>
            </Flex>
            <Select id="sub_category" h='55px' name="sub_category" autoComplete="sub_category" mt={1}  bg='#FFFFFF0D' borderColor="#FFFFFF33" focusBorderColor="purple.800" shadow="sm" size="sm" w="full" rounded="md"
              value=''  onChange={(e)=>{}}
            >
              <option selected style={{backgroundColor:'#1B0645'}}>Crypto</option>
              <option style={{backgroundColor:'#1B0645'}}>Charity</option>
              <option style={{backgroundColor:'#1B0645'}}>Gamification</option>
            </Select>
          </Box>
          {/* ------------------------blockchain category----------------- */}
          <Box mt='40px' w='50%'>
            <Flex justify="space-between">
              <Text>Blockchain category</Text>
            </Flex>
            <Select id="blockchain_category" h='55px' name="blockchain_category"  
              autoComplete="blockchain_category" mt={1}  bg='#FFFFFF0D' borderColor="#FFFFFF33" focusBorderColor="purple.800" shadow="sm" size="sm" w="full" rounded="md"
              value=''  onChange={(e)=>{}}
            >
              <option selected style={{backgroundColor:'#1B0645'}}>Terra</option>
              <option style={{backgroundColor:'#1B0645'}}>Harmony</option>
              <option style={{backgroundColor:'#1B0645'}}>Solana</option>
            </Select>
          </Box>
          {/* -------------------------email------------------------ */}
          <Flex direction='row' mt='40px' justify="space-between">
            <Box w='100%'>
              <Flex justify="space-between">
                <Text>Email</Text>
              </Flex>
              <InputGroup size="sm">
                <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em' children=' ' />
                <Input type="email" h='55px' bg='#FFFFFF0D' borderColor="#FFFFFF33" placeholder="example@email.com" focusBorderColor="purple.800" rounded="md"  value='' onChange={(e)=>{}} />
              </InputGroup>
            </Box>
            <Box ml='24px' w='100%'>
              <Flex justify="space-between">
                <Text>Amount Required</Text>
              </Flex>
              <InputGroup size="sm">
                <Input type="text"  h='55px' bg='#FFFFFF0D' borderColor="#FFFFFF33" placeholder="Type here" focusBorderColor="purple.800" rounded="md"  value='' onChange={(e)=>{}} />
                <InputRightElement w='60px'  h='55px' pointerEvents='none' children={<Text>($)USD</Text>} 
                />              
              </InputGroup>
            </Box>
          </Flex>
          {/* -----------------submit----------------- */}
          <Flex w='100%' mt='60px'justify='center' mb='170px'>
            <Box className={submitPressed?'Submit-static':'Submit'} as='button' w='350px' h='50px' variant="solid" color="white" 
            onClick = {()=>{setSubmitPressed(!submitPressed)}} >
              Submit
            </Box>
          </Flex>
        </Box>
        </Flex>
      </div>
    </ChakraProvider>
  )
}