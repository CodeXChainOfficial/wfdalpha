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

import { ImageTransition, InputTransition } from "../components/ImageTransition";

export default function NewProject() {
  const [isUST, setIsUST] = useState(true);
  const [submitPressed, setSubmitPressed] = useState(false);
  const [whitepaper, setWhitepaper] = useState('');
  const [prjCategory, setPrjCategory] = useState('');
  const [prjName, setPrjName] = useState('');
  const [prjDescription, setPrjDescription] = useState('');
  const [prjWebsite, setPrjWebsite] = useState('');
  const [prjTeamdescription, setPrjTeamdescription] = useState('');
  const [prjEmail, setPrjEmail] = useState('');
  const [prjAmount, setPrjAmount] = useState('');
  const [prjSubcategory, setPrjSubcategory]= useState('');
  const [prjChain, setPrjChain] = useState('');

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
      <div style={{background:"linear-gradient(90deg, #1F0021 0%, #120054 104.34%)", 
      width:'100%', color:'white', fontSize:'18px', fontFamily:'Sk-Modernist-Regular', fontWeight:'700' }}>
        <div style={{backgroundImage:"url('/createproject_banner_emphasis.svg')", 
        boxShadow:"0px 5px 50px 0px #000000A6", width:'100%', zIndex:'10'}}>
        <div style={{backgroundImage:"url('/createproject_banner.svg')", width:'100%', zIndex:'11'}}>
          <Flex pt='64px' justify="center">
            <Text fontSize='16px' fontWeight='400'>Home &gt;&nbsp;</Text>
            <Text fontSize='16px'>Create Your Project</Text>
          </Flex>
          <Flex mt='11px' pb='75px' mb="75px" justify='center'
            style={{fontFamily:'PilatExtended-Bold'}}>
            <Text fontSize='40px'>Create a&nbsp;</Text>
            <Text fontSize='40px' color='#4790f5'>New Project</Text>
          </Flex>
        </div>
        </div>
        <Flex width='100%' justify='center' mt='-80px' px='175px'>
        <div style={{width:'900px', background:"#FFFFFF0D", fontFamily:'Sk-Modernist-Regular', paddingLeft:'50px', paddingRight:'50px'}} >
          {/* --------Select UST or WFD------------------ */}
          <Text fontSize='18px' pt='50px'>Select Back on</Text>

          <Flex direction="row" mt='20px'>
            {/* ------------UST---------------------- */}
            <ImageTransition 
              unitid='coinust'
              border1='linear-gradient(180deg, #00A3FF 0%, rgba(0, 71, 255, 0) 100%)' 
              background1='linear-gradient(180deg, #2B226B 0%, #1B0131 100%)'
              border2='linear-gradient(180deg, rgba(255, 255, 255, 0.54) 0%, rgba(255, 255, 255, 0) 100%)' 
              background2='linear-gradient(180deg, #31173A 0%, #421D50 0.01%, #21052C 100%)'
              border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
              background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
              selected={isUST}
              width='120px' height='160px' rounded='10px'
              onClick={()=>{setIsUST(true)}}
            >
              <Img mt='23px' boxSize='50px' objectFit='cover' src='/UST.svg' alt='UST Avatar'/>
              <Text mt='13px'>UST</Text>
              <Img mt='15px' boxSize='20px' objectFit='cover' src={isUST?'/group_dot.svg':'/group_undot.svg'} alt='UST Avatar'/>
            </ImageTransition>

            {/* --------------------------WFD------------------------- */}
            <ImageTransition 
              unitid='coinwfd'
              border1='linear-gradient(180deg, #00A3FF 0%, rgba(0, 71, 255, 0) 100%)' 
              background1='linear-gradient(180deg, #2B226B 0%, #1B0131 100%)'
              border2='linear-gradient(180deg, rgba(255, 255, 255, 0.54) 0%, rgba(255, 255, 255, 0) 100%)' 
              background2='linear-gradient(180deg, #31173A 0%, #421D50 0.01%, #21052C 100%)'
              border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
              background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
              selected={!isUST}
              width='120px' height='160px' rounded='10px' ml='20px'
              onClick={()=>{setIsUST(false)}}
            >
              <Img mt='23px' height='50px' objectFit='cover' src='/WeFund Logos only.png' alt='UST Avatar'/>
              <Text mt='13px'>WFD</Text>
              <Img mt='15px' boxSize='20px' objectFit='cover' src={isUST?'/group_undot.svg':'/group_dot.svg'} alt='UST Avatar'/>  
            </ImageTransition>
          </Flex>
          {/* --------project name-------------- */}
          <Box mt='40px'>
            <Flex justify="space-between">
              <Text>Project Name</Text>
              <Text fontSize='15px'  opacity='0.5'>0/150 words</Text>
            </Flex>
            <InputTransition 
              unitid='projectname'
              selected={prjName==''?false:true}
              width='100%' height='55px' rounded='md'
            >
              <InputGroup style={{border:'0', background:'transparent'}} size="sm" border='0px'>
                <Input style={{border:'0', background:'transparent'}} type="text" h='55px'  rounded="md"  value={prjName} placeholder='Type here'  />
              </InputGroup>
            </InputTransition>
          </Box>
          {/* ------------project description--------------- */}
          <Box mt='40px'>
            <Flex justify="space-between">
              <Text>Project Description</Text>
              <Text fontSize='15px' opacity='0.5'>0/1000 words</Text>
            </Flex>
            <InputTransition 
              unitid='projectdescription'
              selected={prjDescription==''?false:true}
              width='100%' height='175px' rounded='md'
            >
              <Textarea style={{border:'0', background:'transparent'}} value={prjDescription} 
              onChange={(e)=>{setPrjDescription(e.target.value)}} rounded="md"
                placeholder='Type here' size='sm' h='175px' />
            </InputTransition>
          </Box>
          {/* ---------------project website------------------- */}
          <Flex direction='row' mt='40px' justify='space-between'>
            <Box w='100%'>
              <Flex justify="space-between">
                <Text>Project Website</Text>
              </Flex>
              <InputTransition 
                unitid='projectwebsite'
                selected={prjWebsite==''?false:true}
                width='100%' height='55px' rounded='md'
              >              
                <InputGroup size="sm" style={{border:'0', background:'transparent'}}>
                  <InputLeftAddon h='55px' style={{border:'0', background:'transparent'}} children="http://" color='white' rounded="md" />
                  <Input type="text" h='55px'style={{border:'0', background:'transparent'}} placeholder="Type here" rounded="md"  
                  value={prjWebsite} onChange={(e)=>{setPrjWebsite(e.target.value)}} />
                </InputGroup>
              </InputTransition>
            </Box>
            {/* ---------------upload---------------------------------- */}
            <Box ml='24px' w='100%'>
              <Flex justify="space-between">
                <Text>Project WhitePaper</Text>
              </Flex>
              {whitepaper == '' && 
                <InputGroup size="sm">
                  <InputLeftElement h='55px' pointerEvents='none' children={<IoCloudUploadOutline color='#00A3FF' width='30px' height='30px'/>} />
                  <Input type="text" h='55px' bg='#FFFFFF' borderColor="#FFFFFF33" placeholder="Upload here" focusBorderColor="purple.800"  rounded="md"  
                  onClick={(e)=>{handleWhitepaper()}} /> 
                </InputGroup>}
              {whitepaper != '' && 
                <InputGroup size="sm">
                  <InputLeftElement h='55px' pointerEvents='none' children={<IoCheckbox color='00A3FF'  width='30px' height='30px' />} />
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
              <Text  fontSize='15px' opacity='0.5'>0/1000 words</Text>
            </Flex>
            <InputTransition 
              unitid='prjTeamdescription'
              selected={prjTeamdescription==''?false:true}
              width='100%' height='175px' rounded='md'
              style={{border:'0', background:'transparent'}}
            >
              <Textarea style={{border:'0', background:'transparent'}} h='165px' value={prjTeamdescription} onChange={(e)=>{setPrjTeamdescription(e.target.value)}}
                placeholder='Type here' size='sm'  rounded="md"
              />
            </InputTransition>
          </Box>
          {/* ------------------project category---------- */}
          <Box mt='40px' w='50%'>
            <Flex justify="space-between">
              <Text>Project Category</Text>
            </Flex>

            <InputTransition 
              unitid='projectcategory'
              selected={prjCategory==''?false:true}
              width='100%' height='55px' rounded='md'
            >       
              <Select id="sub_category" style={{border:'0', background:'transparent'}} h='55px' name="sub_category" autoComplete="sub_category" focusBorderColor="purple.800" shadow="sm" size="sm" w="full" rounded="md"
                value='' onChange={(e)=>{setPrjCategory(e.target.value)}} 
              >
                <option selected style={{backgroundColor:'#1B0645'}}>Crypto</option>
                <option style={{backgroundColor:'#1B0645'}}>Charity</option>
                <option style={{backgroundColor:'#1B0645'}}>Gamification</option>
              </Select>
            </InputTransition>
          </Box>
          {/* -------------------project sub category--------------- */}
          <Box mt='40px' w='50%'>
            <Flex justify="space-between">
              <Text>Project Sub Category</Text>
            </Flex>
            <InputTransition 
              unitid='projectsubcategory'
              selected={prjSubcategory==''?false:true}
              width='100%' height='55px' rounded='md'
            >       
              <Select id="sub_category" style={{border:'0', background:'transparent'}} h='55px' name="sub_category" autoComplete="sub_category" focusBorderColor="purple.800" shadow="sm" size="sm" w="full" rounded="md"
                value='' onChange={(e)=>{setPrjSubcategory(e.target.value)}} 
              >
                <option selected style={{backgroundColor:'#1B0645'}}>Crypto</option>
                <option style={{backgroundColor:'#1B0645'}}>Charity</option>
                <option style={{backgroundColor:'#1B0645'}}>Gamification</option>
              </Select>
            </InputTransition>
          </Box>
          {/* ------------------------blockchain category----------------- */}
          <Box mt='40px' w='50%'>
            <Flex justify="space-between">
              <Text>Blockchain category</Text>
            </Flex>
            <InputTransition 
              unitid='projectchain'
              selected={prjChain==''?false:true}
              width='100%' height='55px' rounded='md'
            >       
              <Select id="sub_category" style={{border:'0', background:'transparent'}} h='55px' name="sub_category" autoComplete="sub_category" focusBorderColor="purple.800" shadow="sm" size="sm" w="full" rounded="md"
                value='' onChange={(e)=>{setPrjChain(e.target.value)}} 
              >
                <option selected style={{backgroundColor:'#1B0645'}}>Crypto</option>
                <option style={{backgroundColor:'#1B0645'}}>Charity</option>
                <option style={{backgroundColor:'#1B0645'}}>Gamification</option>
              </Select>
            </InputTransition>
          </Box>
          {/* -------------------------email------------------------ */}
          <Flex direction='row' mt='40px' justify="space-between">
            <Box w='100%'>
              <Flex justify="space-between">
                <Text>Email</Text>
              </Flex>
              <InputTransition 
                unitid='projectemail'
                selected={prjEmail==''?false:true}
                width='100%' height='55px' rounded='md'
              >      
                <InputGroup size="sm" style={{border:'0', background:'transparent'}}>
                  <InputLeftElement style={{border:'0', background:'transparent'}} pointerEvents='none' color='gray.300' fontSize='1.2em' children=' ' />
                  <Input style={{border:'0', background:'transparent'}} type="email" h='55px'placeholder="example@email.com" focusBorderColor="purple.800" rounded="md"  value={prjEmail} onChange={(e)=>{setPrjEmail(e.target.value)}} />
                </InputGroup>
              </InputTransition>
            </Box>
            <Box ml='24px' w='100%'>
              <Flex justify="space-between">
                <Text>Amount Required</Text>
              </Flex>
              <InputTransition 
                unitid='projectamount'
                selected={prjEmail==''?false:true}
                width='100%' height='55px' rounded='md'
              >      
                <InputGroup size="sm" style={{border:'0', background:'transparent'}}>
                  <Input style={{border:'0', background:'transparent'}} type="text"  h='55px' placeholder="Type here" focusBorderColor="purple.800" rounded="md"  value={prjAmount} onChange={(e)=>{setPrjAmount(e.target.value)}} />
                  <InputRightElement style={{border:'0', background:'transparent'}} w='125px'  h='55px' pointerEvents='none' align='center'
                  /> 
                  <Select id="peg" style={{border:'0', background:'transparent'}} h='55px' w='140px' name="peg" autoComplete="peg" focusBorderColor="purple.800" shadow="sm" size="sm" rounded="md" fontSize='16px' value='' onChange={(e)=>{setPrjChain(e.target.value)}} 
                  >
                    <option selected style={{backgroundColor:'#1B0645'}}>($)USD</option>
                    <option style={{backgroundColor:'#1B0645'}}>($)USD</option>
                    <option style={{backgroundColor:'#1B0645'}}>($)USD</option>
                  </Select>
                </InputGroup>
              </InputTransition>
            </Box>
          </Flex>
          {/* -----------------submit----------------- */}
          <Flex w='100%' mt='60px'justify='center' mb='170px'>
            <ImageTransition 
              unitid='submit'
              border1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)' 
              background1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
              border2='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
              background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
              border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
              background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
              selected={false}
              width='350px' height='50px' rounded='33px'
            >
              <Box variant="solid" color="white" justify='center' align='center'
                  onClick = {()=>{setSubmitPressed(!submitPressed)}} >
                Submit
              </Box>
            </ImageTransition>
          </Flex>
        </div>
        </Flex>
      </div>
    </ChakraProvider>
  )
}