import { ChakraProvider } from "@chakra-ui/react";
import {Fee, MsgExecuteContract, WasmAPI, LCDClient } from '@terra-money/terra.js'
import { Box, Flex, Text, Input, InputGroup, InputRightElement, Img } from "@chakra-ui/react";
import React, { useEffect, useState,  useCallback, useContext, useRef, } from 'react';
import { IoChevronUpOutline, IoChevronDownOutline, IoCheckmark } from 'react-icons/io5';
import { ButtonTransition, InputTransition, InputTransitiongrey, ImageTransition } from "../components/ImageTransition";
import theme from '../theme';
import Footer from "../components/Footer"
import { useStore } from '../store'
import Notification from '../components/Notification'

let useConnectedWallet = {}
if (typeof document !== 'undefined') {
    useConnectedWallet =
        require('@terra-money/wallet-provider').useConnectedWallet
}

export default function BackProject() {
  const { state, dispatch } = useStore();
  const [condition, setCondition] = useState(false);
  const [backAmount, setBackAmount] = useState('');
  const [wfdAmount, setWfdamount] = useState('');

  const [blog1, setBlog1] = useState(false);
  const [blog2, setBlog2] = useState(false);
  const [blog3, setBlog3] = useState(false);
  const [blog4, setBlog4] = useState(false);
  const [blog5, setBlog5] = useState(false);

//----------extract project id------------------------------------------
  let queryString, urlParams, project_id;
  if(typeof window != 'undefined'){
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    project_id = urlParams.get('project_id')
  }
//-----------connect wallet and init lcd api ---------------------------
  let connectedWallet = ''
  if (typeof document !== 'undefined') {
      connectedWallet = useConnectedWallet()
  }
  const api = new WasmAPI(state.lcd_client.apiRequester);

//------------notification setting---------------------------------
  const [notification, setNotification] = useState({
    type: 'success',
    message: '',
    show: false,
  })

  function hideNotification() {
    setNotification({
        message: notification.message,
        type: notification.type,
        show: false,
    })
  }

  function showNotification(message, type, duration) {
    // console.log('fired notification')
    setNotification({
        message: message,
        type: type,
        show: true,
    });
    console.log(message + type + duration);
    // Disable after $var seconds
    setTimeout(() => {
        setNotification({
            message: message,
            type: type,
            show: false,
        })
        // console.log('disabled',notification)
    }, duration)
  }
//----------------------change Amount--------------------------
  function changeAmount(e)
  {
    if(e.target.value != '' && e.target.value != parseInt(e.target.value).toString()){
      showNotification("Please input number only", "error", 4000);
      return;
    }
    
    setBackAmount(e.target.value);
    let amount = parseInt(e.target.value) *5 / 100;
    if(amount > 0)
      setWfdamount(amount);
    else
      setWfdamount('');
  }
//---------------------back project-----------------------------
  async function backProject()
  {
    if(connectedWallet == '' || typeof connectedWallet == 'undefined'){
      showNotification("Please connect wallet first!", 'error', 6000);
      return;
    }

    console.log(connectedWallet);
    if(state.net == 'mainnet' && connectedWallet.network.name == 'testnet'){
      showNotification("Please switch to mainnet!", "error", 4000);
      return;
    }
    if(state.net == 'testnet' && connectedWallet.network.name == 'mainnet'){
      showNotification("Please switch to testnet!", "error", 4000);
      return;
    }
    
    if(backAmount != parseInt(backAmount).toString()){
      showNotification("Invalid number format!", "error", 4000);
      return;
    }
    if(parseInt(backAmount) < 100){
      showNotification("Back money at least 100 UST", "error", 4000);
      return;
    }

    let _project_id = 1;
    if(project_id != null)
      _project_id = project_id;

    const projectData = await api.contractQuery(
      state.WEFundContractAddress,
        {
            get_project: {
              project_id: `${_project_id}`
            },
        }
    )

    if(projectData == ''){
      showNotification("Can't fetch Project Data", 'error', 6000);
      return;
    }

    if(projectData.project_needback == false){
      showNotification("Project already collected! You can't back", 'error', 6000);
      return;
    }

    let wefundContractAddress = state.WEFundContractAddress;

    const obj = new Fee(10_000, { uusd: 4500})
    let BackProjectMsg = {
        back2_project: {
          backer_wallet: connectedWallet.walletAddress,
          project_id: `${_project_id}`
        },
    }

    let amount = parseInt(backAmount * 1000000 * 105 / 100);
    let msg = new MsgExecuteContract(
      connectedWallet.walletAddress,
      wefundContractAddress,
      BackProjectMsg,
      {uusd: amount}
    )

    await connectedWallet
      .post({
          msgs: [msg],
          // fee: obj,
          gasPrices: obj.gasPrices(),
          gasAdjustment: 1.7,
      })
      .then((e) => {
          if (e.success) {
            showNotification('Back to Project Success', 'success', 4000);
          } else {
              showNotification(e.message, 'error', 4000)
          }
      })
      .catch((e) => {
          showNotification(e.message, 'error', 4000)
      })
  }

  return (
    <ChakraProvider resetCSS theme={theme}>
      <div style={{background:"linear-gradient(90deg, #1F0021 0%, #120054 104.34%)", 
      width:'100%', color:'white', fontSize:'18px', fontFamily:'Sk-Modernist', fontWeight:'700' }}>
        <div style={{backgroundImage:"url('/createproject_banner_emphasis.svg')", width:'100%', zIndex:'10'}}>
        <div style={{backgroundImage:"url('/createproject_banner.svg')", position:'absolute', top:'80px', 
        width:'100%', zIndex:'11',backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
          <Flex pt='95px' justify="center">
            <Text fontSize='16px' fontWeight='normal' color={'rgba(255, 255, 255, 0.54)'}>Home &gt;&nbsp;</Text>
            <Text fontSize='16px' color={'rgba(255, 255, 255, 0.84)'}>Back the Project</Text>
          </Flex>
          <Flex mt='11px' pb='55px' mb="75px" justify='center'
            style={{fontFamily:'PilatExtended-Bold'}}>
            <Text fontSize={{base:'25px',md:'25px',lg:'40px'}}>Contribute to &nbsp;</Text>
            <Text fontSize={{base:'25px',md:'25px',lg:'40px'}} color='#4790f5'>Project</Text>
          </Flex>
        </div>
        </div>
        <Flex width='100%' justify='center' mt='80px' px='175px'>
        <Box width='900px' marginTop='200px' bg='#FFFFFF0D' px='50px' style={{fontFamily:'Sk-Modernist'}} >
          <Flex mt='65px' justify='center' align='center' direction='column'
            style={{fontFamily:'PilatExtended-Regular'}}>
            <Text fontSize='22px' fontWeight={'300'}>
              Back the Project</Text>
            <Text fontSize='28px' color='#4790f5' fontWeight={'bold'}>
              {state.oneprojectData.project_name}
            </Text>
          </Flex>
          {/* --------amount to back----------- */}
          <Flex mt='83px' textAlign={'left'} justify="space-between" align='center' direction='column'>
                <Text mb='20px' textAlign={'center'} justify={'center'}>Select Tokens and Entry Amount to back</Text>
          <InputTransition 
            unitid='backamount'
            selected={backAmount==''?false:true}
            width='300px' height='55px' rounded='md' mb='42px'
          >      
            <InputGroup size="sm" style={{border:'0', background: 'rgba(255, 255, 255, 0.05)'}}>
              <Input type="text"  h='55px' style={{border:'0', background:'transparent',  paddingLeft:'25px'}} placeholder="Type here" focusBorderColor="purple.800" rounded="md"  value={backAmount} 
              onChange={(e)=>changeAmount(e)}/>
              <InputRightElement w='60px'  h='55px' pointerEvents='none' children={<Text>UST</Text>} 
              />          
            </InputGroup>
          </InputTransition>
                <Text mb='20px' textAlign={'left'}>WFD Fees</Text>
          <InputTransition 
            unitid='WFDamount'
            selected={backAmount==''?false:true}
            width='300px' height='55px' rounded='md'
          >      
            <InputGroup size="sm" style={{border:'0', background:'rgba(255, 255, 255, 0.05)'}}>
              <Input type="text"  h='55px' style={{border:'0', background:'transparent', paddingLeft:'25px'}} placeholder="Type here" focusBorderColor="purple.800" rounded="md"  value=''
              onChange={(e)=>{}} />
              <InputRightElement w='60px'  h='55px' pointerEvents='none' children={<Text>WFD</Text>} 
              />          
            </InputGroup>
          </InputTransition>

          <Flex mt='25px' direction="row">
            {/* <Input type="checkbox"  h='55px' bg='#FFFFFF0D' borderColor="#FFFFFF33" placeholder="Type here" focusBorderColor="purple.800" rounded="md"  onChange={(e)=>{}} /> */}
            <InputTransition 
              unitid='conditioncheck'
              selected={false}
              width='24px' height='24px' rounded='md'
              onClick={()=>{setCondition(!condition)}}
            >
              {condition &&
              <IoCheckmark width='24px' height='24px' color='#FE8600'></IoCheckmark>
              }
            </InputTransition>

            <Text ml='10px' fontSize='14px' fontWeight='400'>I agree with all conditions of this Project and WeFund</Text>
          </Flex>
          </Flex>
          {/* -----------------Back Project----------------- */}
          <Flex w='100%' mt='60px'justify='center' mb='170px'>
            <ButtonTransition 
              unitid='backproject'
              border1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)' 
              background1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
              border2='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
              background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
              border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
              background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
              selected={false}
              width='200px' height='50px' rounded='33px'
            >
              <Box variant="solid" color="white" justify='center' align='center'
                  onClick = {()=>{}} >
                Back Project
              </Box>
            </ButtonTransition>
          </Flex>
          {/* -----------------------space line-------------------------------- */}
          <Img mt='102px' height='1px' objectFit='cover' src='/line.svg' alt='UST Avatar'/>

          {/* ---------------------------blog------------------------------ */}

        </Box>
        </Flex>
        <Footer/>
        <Notification 
          notification={notification}
          close={() => hideNotification()}
          />
      </div>
    </ChakraProvider>
  )
}