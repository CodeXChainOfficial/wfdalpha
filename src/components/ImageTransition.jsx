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
  
  export const ImageTransition = (props) => {
   function handleMouseEnter(){
     if(typeof document !== 'undefined'){
       var medium = document.getElementById(props.unitid);
      //  console.log(medium);
       medium.classList.add('transited');
     }
   }
   function handleMouseLeave(){
     if(typeof document !== 'undefined'){
       var medium = document.getElementById(props.unitid);
      //  console.log(medium);
       medium.classList.remove('transited');
     }    
   }
   let medium_border = props.selected?props.border3:props.border2;
   let medium_back = props.selected?props.background3: props.background2;
   let trans_class = props.selected?"":"normal";

   return(
     <Box style={{position:'relative'}}  w={props.width} h={props.height} 
       mt={props.mt} ml={props.ml} mb={props.mb}>
       {/* {props.selected == false  &&  */}
       {/* <> */}
       <Flex style={{background:props.border1, position:'absolute'}} w='100%' h='100%'
         rounded={props.rounded}>
         <Flex style={{background:props.background1}} w='100%' m='2px' rounded={props.rounded}>
         </Flex>
       </Flex>
       <Flex id={props.unitid} className={trans_class} style={{background:medium_border, position:"absolute"}} w='100%' h='100%' rounded={props.rounded}>
         <Flex style={{background:medium_back}} w='100%' m='2px' rounded={props.rounded}>
         </Flex>
       </Flex>
       <Flex style={{position:"absolute"}} w='100%' h='100%' rounded={props.rounded}
           onMouseEnter={()=>{handleMouseEnter()}} onMouseLeave={()=>{handleMouseLeave()}}
           onClick={props.onClick}>
           <Flex direction='column' justify='center' align='center' w='100%' h='100%'  >
             {props.children}
           </Flex>
       </Flex>
       {/* </> */}
      {/* //  } */}
      {/* //  {props.selected && */}
      {/* //  <Flex style={{background:props.border3, position:'absolute'}} w='100%' h='100%' */}
      {/* //    rounded={props.rounded} onClick={props.onClick}> */}
      {/* //    <Flex style={{background:props.background3}} w='100%' m='2px' rounded={props.rounded} */}
      {/* //      direction='column' align='center' justify='center'> */}
      {/* //      {props.children} */}
      {/* //    </Flex> */}
      {/* //  </Flex> */}
      {/* //  } */}
     </Box>
   )
 }
 export const InputTransition = (props) => {
   return(
     <ImageTransition 
       unitid={props.unitid}
       border1='linear-gradient(180deg, #00A3FF 0%, rgba(0, 71, 255, 0) 100%)' 
       background1='linear-gradient(180deg, #2B226B 0%, #1B0131 100%)'
       border2='#6E5A88' 
       background2='#2D0F45'
       border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
       background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
       selected={props.selected}
       width={props.width} height={props.height} rounded={props.rounded}
       mt={props.mt}
       ml={props.ml}
       mb={props.mb}
       onClick={props.onClick}
     >
       {props.children}
     </ImageTransition>
   )
 }
 export const ButtonTransition = (props) => {
   return(
    <ImageTransition 
      unitid={props.unitid}
      border1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)' 
      background1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
      border2='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
      background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
      border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
      background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
      selected={props.selected}
      width={props.width} height={props.height} rounded={props.rounded}
      mt={props.mt}
      ml={props.ml}
      mb={props.mb}
      onClick={props.onClick}
    >
      {props.children}
    </ImageTransition>   
   )
 }