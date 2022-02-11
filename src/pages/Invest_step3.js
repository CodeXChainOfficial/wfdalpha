import { CheckIcon } from "@chakra-ui/icons";
import {Fee, MsgExecuteContract, MsgSend, WasmAPI } from '@terra-money/terra.js'
import {chakra, 
  Box, 
  Flex, 
  Text, 
  Input, 
  InputGroup,  
  Select, 
  Image, 
  InputLeftElement, 
  Button, 
  HStack, 
  VStack, 
  Img
  } from "@chakra-ui/react";
import React, { useEffect, useState,  useCallback, useMemo, useRef, } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { navigate } from '@reach/router'

import { useStore } from '../store'
import { 
  ImageTransition, 
  ButtonTransition, 
  InputTransition 
} from "../components/ImageTransition";
import Notification from '../components/Notification'
import Faq from '../components/FAQ'
import PageLayout from '../components/PageLayout'
import { 
  EstimateSend, 
  ParseParam, 
  FetchData, 
  isCommunityWallet, 
  CheckNetwork,
  GetOneProject,
  isNull
} from "../components/Util";
import { 
  getMinialAmount, 
  getExchangeID, 
  sendToken, 
  getExchangeAmount,
  getExchangeStatus,
 } from '../components/Changenow_api'

let useConnectedWallet = {}
if (typeof document !== 'undefined') {
    useConnectedWallet =
        require('@terra-money/wallet-provider').useConnectedWallet
}

export default function Invest_step3() {
  const [signature, setSignature] = useState('');
  const [InsTitle, setInsTitle] = useState('');
  const [InsName, setInsName] = useState('');
  const [InsEmail, setInsEmail] = useState('');
  const [chain, setChain] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [oneprojectData, setOneprojectData] = useState('');
  const [sending, setSending] = useState(false);
  
  let timerID = 0;
  let exchangeID = 0;
  let estimatedAmount = 0;

  const {state, dispatch} = useStore();
  const canvasRef = useRef({});
  
  //------------parse URL for project id----------------------------
  let project_id = ParseParam();
  useEffect( () => {
    async function fetchData(){
      let {projectData, communityData, configData} = await FetchData(api, notificationRef, state, dispatch);

      const oneprojectData = GetOneProject(projectData, project_id);
      if(oneprojectData == ''){
        notificationRef.current.showNotification("Can't fetch project data", 'error', 6000);
        return '';
      }
      setOneprojectData(oneprojectData);
      setChain(oneprojectData.project_ecosystem);
    }
    fetchData();
  }, 
  [project_id])

  //---------------wallet connect-------------------------------------
  let connectedWallet = ''

  if (typeof document !== 'undefined') {
    connectedWallet = useConnectedWallet()
  }
  //----------init api, lcd-------------------------
  const api = new WasmAPI(state.lcd_client.apiRequester)

  //---------------notification setting---------------------------------
  const notificationRef = useRef();

  //----------------upload signature----------------------------
  function openUpload(){
    if(typeof document !== 'undefined') {
      let fileSelector = document.getElementById('fileSelector')
      fileSelector.click();
    }
  }

  function onChangeSignature(e){
    if(typeof document !== 'undefined') {
      let fileSelector = document.getElementById('fileSelector')
      var fileName = fileSelector.value;
      setSignature(fileName.substr(fileName.lastIndexOf('\\')+1, fileName.length-1));
      dispatch({
        type: 'setInvestsignature',
        message: e.target.files[0],
      })

      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function () {
        canvasRef.current.fromDataURL(reader.result);
      };
      
    }    
  }
  //---------------on next------------------------------------
  function checkValication()
  {
    if(CheckNetwork(connectedWallet, notificationRef, state) == false)
      return false;
console.log(parseInt(state.investAmount));
console.log(state);
    if(state.isOtherChain == true){
      if(isNull(state.etherProvider)){
        notificationRef.current.showNotification("Please connect Metamask", "error", 40000);
        return false;
      }
      if(parseInt(state.coinAmount) <= 0){
        notificationRef.current.showNotification("Please input Coin amount", "error", 4000);
        return false;
      }
    }
    else{
      if(parseInt(state.investAmount) <= 0 ){
        notificationRef.current.showNotification("Please input UST amount", "error", 40000);
        console.log('Please input UST amount');
        return false;
      }
      if(state.presale == false && parseInt(state.investAmount) < 20000){
        notificationRef.current.showNotification("Input UST amount for private sale of at least 20,000", "error", 40000);
        console.log('Invalid private sale amount');
        return false;
      }
    }
    return true;
  }

  async function createSAFTPdf(date){
    var formData = new FormData();
    formData.append("investName", InsName);
    formData.append("investTitle", InsTitle);
    formData.append("investEmail", InsEmail);
    formData.append("investAmount", state.investAmount);
    formData.append("investDate", date);
    formData.append("investSignature", canvasRef.current.toDataURL());
    formData.append("presale", state.presale);
    // formData.append("file", state.investSignature);

    const requestOptions = {
      method: 'POST',
      body: formData,
    };

    notificationRef.current.showNotification("Uploading", 'success', 100000)

    await fetch(state.request + '/pdfmake', requestOptions)
    .then((res) => res.json())
    .then((data) => {
      notificationRef.current.hideNotification();
      dispatch({
        type: 'setPdffile',
        message: data.data,
      })
      console.log(data);
    })
    .catch((e) =>{
      console.log("Error:"+e);
    })
  }
  async function createSAFTDocx(date){
console.log(oneprojectData);
    var formData = new FormData();
    formData.append("docxTemplate", oneprojectData.project_saft);
    formData.append("purchaserName", InsName);
    formData.append("purchaserTitle", InsTitle);
    formData.append("purchaserEmail", InsEmail);
    formData.append("purchaserAmount", state.investAmount);
    formData.append("purchaserDate", date);
    formData.append("purchaserSignature", canvasRef.current.toDataURL());

    const requestOptions = {
      method: 'POST',
      body: formData,
    };

    notificationRef.current.showNotification("Uploading", 'success', 100000)

    await fetch(state.request + '/docxmake', requestOptions)
    .then((res) => res.json())
    .then((data) => {
      notificationRef.current.hideNotification();
      dispatch({
        type: 'setDocxfile',
        message: data.data,
      })
      console.log(data);
    })
    .catch((e) =>{
      console.log("Error:"+e);
    })
  }

  const myTimer = async() => {
    let res = await getExchangeStatus(exchangeID);
console.log(res);
    if(res.status == true && res.data.status == 'finished'){
      setSending(false);
      notificationRef.current.hideNotification();
console.log('hidenotfiatoin');
      clearInterval(timerID);
console.log('coming here')
      navigate('/invest_step4?project_id=' + project_id);
    }
  }
  async function bridge(terraWallet){

    let res = await getExchangeID(state.coinType, terraWallet, 
      state.coinAmount, state.metamaskAccount, notificationRef)
    if(res.status == 'failed')
      return;
    
    exchangeID = res.ExchangeID;
    let payinAddr = res.payinAddr;

    const provider = state.etherProvider;
    const signer = provider.getSigner();

    var contractAddress = '';
    if(state.coinType == 'usdterc20')
      contractAddress = state.ETH_USDT;
    else if(state.coinType == 'usdc')
      contractAddress = state.ETH_USDC;

    res = await sendToken(contractAddress, state.coinAmount, payinAddr, 
      state.metamaskAccount, provider, signer, notificationRef);
    if(res == false)
      return;
      
    setSending(true);
    timerID = setInterval(myTimer, 1000 * 1);//1s
  }

  async function onNext(){
    //----------verify connection--------------------------------
    if(checkValication() == false)
      return false;

    if(state.etherProvider)
    dispatch({
      type: 'setInvestname',
      message: InsName,
    })
    dispatch({
      type: 'setInvestemail',
      message: InsEmail,
    })
    dispatch({
      type: 'setInvesttitle',
      message: InsTitle
    })

    const currentDate = new Date();
    let date = currentDate.getDate() + "/" + (currentDate.getMonth()+1) + 
          "/" + currentDate.getFullYear();
    dispatch({
      type: 'setInvestDate',
      message: date,
    })

    if(project_id == state.wefundID){
      await createSAFTPdf(date);

      if(state.isOtherChain){
        notificationRef.current.showNotification(
          "Sending! Don't do anything while sending! It may takes over 10 minutes", 
          "success", 
          100000000000
        );
console.log(state.wefundWallet)
        bridge(state.wefundWallet);

        // bridge('terra1emwyg68n0wtglz8ex2n2728fnfzca9xkdc4aka');
      }
      else{
        let amount = parseInt(state.investAmount) * 10**6;

        const msg = new MsgSend(
          connectedWallet.walletAddress,
          state.wefundWallet,
          { uusd: amount }
        );
        let memo = state.presale? "Presale" : "Private sale";
        let res = await EstimateSend(connectedWallet, state.lcd_client, msg, "Invest success ", notificationRef, memo);
        
        if(res == true)
          navigate('/invest_step4?project_id=' + project_id);
      }
    }
    else{
      if(state.isOtherChain){
        // bridge(state.terraWallet);
      }
      else{
        await createSAFTDocx(date);

        let res = await backProject();
        if(res == true)
          navigate('/invest_step4?project_id=' + project_id);
      }
    }
  }

  async function backProject()
  {
    const isCommunityMember = isCommunityWallet(state, project_id);
    const targetAmount = parseInt(oneprojectData.project_collected)*(10**6)/2;

    let leftAmount = 0;
    if(isCommunityMember)
      leftAmount = targetAmount - oneprojectData.communitybacked_amount;
    else
      leftAmount = targetAmount - oneprojectData.backerbacked_amount;

    if(leftAmount <= 0){
      if(isCommunityMember)
        notificationRef.current.showNotification("Community allocation has already been collected! You can't back this project.", 'error', 6000);
      else
        notificationRef.current.showNotification("Backer allocation has already been collected! You can't back this project.", 'error', 6000);
      return false;
    }

    if(parseInt(state.investAmount) < 6){
      notificationRef.current.showNotification("Investment amount should be at least 6 UST.", 'error', 6000);
      return false;
    }

    let wefundContractAddress = state.WEFundContractAddress;
    let BackProjectMsg = {
        back2_project: {
          backer_wallet: connectedWallet.walletAddress,
          otherchain: chain,
          otherchain_wallet: walletAddress,
          project_id: `${project_id}`
        },
    }

    let amount = parseInt(state.investAmount) * 10**6;
    let msg = new MsgExecuteContract(
      connectedWallet.walletAddress,
      wefundContractAddress,
      BackProjectMsg,
      {uusd: amount}
    );

    return await EstimateSend(connectedWallet, state.lcd_client, msg, "Back to Project Success", notificationRef);
  }
  const OtherChainWallet = () => {
    return(
      <Flex direction={{base:'column',md:'column',lg:'row'}} mt='40px' justify="center" align='center'>
        <Box align='center' ml={{base:'0px',md:'0px',lg:'0px'}}>
          <Flex>
            <Text mb='20px'>Select Chain</Text>
          </Flex>
          <InputTransition
            unitid = "chaintransition"
            selected = {false}
            width = "300px"
            height = "45px"
            rounded = "md"
          >
            <Select
              id = "chainselect"
              style = {{ background: 'transparent', border: '0' }}
              h = "45px"
              shadow = "sm"
              size = "sm"
              w = "100%"
              value = {chain}
              rounded = "md"
              onChange={(e) => {
                setChain(e.target.value)
              }}
            >
              <option style={{ backgroundColor: '#1B0645' }}>
                Ethereum
              </option>
              <option style={{ backgroundColor: '#1B0645' }}>
                BSC
              </option>
              <option style={{ backgroundColor: '#1B0645' }}>
                Solana
              </option>
              <option style={{ backgroundColor: '#1B0645' }}>
                Harmony
              </option>
              <option style={{ backgroundColor: '#1B0645' }}>
                Osmis
              </option>
              <option style={{ backgroundColor: '#1B0645' }}>
                Terra
              </option>
            </Select>
          </InputTransition>
        </Box>
        <Box align='center' ml={{base:'0px',md:'0px',lg:'30px'}}>
          <Flex mt={{base:'40px', md:'40px', lg:'0px'}}>
            <Text mb='20px'>Wallet Address</Text>
          </Flex>
          <Box>
          <InputTransition
              unitid="inputwallet"
              selected = {false}
              width= "300px"
              height= "45px"
              rounded= "md"
            >
              <Input
                background={'transparent'}
                border = '0px'
                h= '45px'
                type='text'
                placeholder='Paste wallet address here'
                boxShadow={''}
                rounded= 'md'
                value = {walletAddress}
                onChange = {(e) => {setWalletAddress(e.target.value)}}
              />
            </InputTransition>
          </Box>
        </Box>
      </Flex>
    )
  }
  return (
    <PageLayout title="Back the project" subTitle1="Invest" subTitle2="in WeFund">
      <Box 
        width={{base:'100%',sm:'80%',md:'80%',lg:'80%', xl: '70%'}} 
        px='50px' 
        style={{fontFamily:'Sk-Modernist-Regular'}} 
      >
        <Flex 
          mt='83px' 
          justify='center' 
          align='center' 
          direction='column'
          style={{fontFamily:'PilatExtended-Regular'}}
        >
          <HStack  mt='150px' mb='50px'>
            <Box 
              width={{base:'50px',md:'40px'}} 
              style={{paddingTop: '3px', 
              paddingLeft:'3px', 
              height: '24px', 
              border: '3px solid #3BE489', 
              backgroundColor: '#3BE489', 
              borderRadius: '50%', 
              display:'inline-block'}}
            >
            <CheckIcon color="#250E3F" w={3} h={3} marginBottom={'20px'}/>
            </Box>
            <Text fontSize={{base:'12px',sm:'16px',md:'22px',lg:'22px'}}>Step 1</Text>
            <Box style={{height: '0x', width: '30%', border: '2px solid #3BE489', background: ' #3BE489'}}></Box>
            <Box 
              width={{base:'50px',md:'40px'}} 
              style={{paddingTop: '3px', 
              paddingLeft:'3px', 
              height: '24px', 
              border: '3px solid #3BE489', 
              backgroundColor: '#3BE489', 
              borderRadius: '50%', 
              display:'inline-block'}}>
            <CheckIcon color="#250E3F" w={3} h={3} marginBottom={'20px'}/>
            </Box>
            <Text fontSize={{base:'12px',sm:'16px',md:'22px',lg:'22px'}}>Step 2</Text>
            <Box style={{height: '4px', width: '30%', background: 'linear-gradient(90deg, #3BE489 0%, rgba(59, 228, 137, 0) 100%)'}}></Box>
            <Box 
              width={{base:'50px',md:'40px'}} 
              style={{height: '24px', 
              border: '3px solid rgba(255, 255, 255, 0.3799999952316284)', 
              borderRadius: '50%', 
              display:'inline-block'}}>
            </Box>
            <Text 
              fontSize={{base:'12px',sm:'16px',md:'22px',lg:'22px'}}>
              Final Step
              </Text>
          </HStack>
          <Text 
            fontSize={{base:'16px',md:'16px',lg:'22px'}} 
            fontWeight={'300'}
          >
            Please <span style={{color:'#00A3FF'}}>share with us</span> this information
          </Text>
          <Text 
            fontSize={{base:'14px',md:'14px',lg:'16px'}} 
            color='rgba(255, 255, 255, 0.54)' 
            fontWeight={'normal'} 
            mt={'20px'} 
            textAlign={'center'}
          >
            Please fill in all fields to finalize the SAFT process
          </Text>
        </Flex>
        
        {/* -----------------Name and Title----------------- */}
        <Flex direction={{base:'column',md:'column',lg:'row'}} ml='0px' mt='40px' justify="center" align='center'>
          <Box align='center'>
            <Flex ml={{base:'0px',md:'0px',lg:'0px'}}>
              <Text mb='20px'>Name</Text>
            </Flex>
            <InputTransition 
              unitid='investorname'
              selected={InsName==''?false:true}
              width='100%' height='55px' rounded='md' width='290px'
            >      
              <InputGroup size="sm" style={{background: 'rgba(255, 255, 255, 0.05)'}}>
                <InputLeftElement style={{background: 'transparent', }} pointerEvents='none' color='gray.300' fontSize='1.2em' children=' ' />
                <Input style={{ }} type="text" h='55px'placeholder="Type Name" rounded="md"  value={InsName} onChange={(e)=>{setInsName(e.target.value)}} />
              </InputGroup>
            </InputTransition>
          </Box>
          <Box align='center' ml={{base:'0px',md:'0px',lg:'30px'}}>
            <Flex ml={{base:'0px',md:'0px',lg:'0px'}} mt={{base:'40px', md:'40px', lg:'0px'}}>
              <Text mb='20px'>Title</Text>
            </Flex>
            <InputTransition 
              unitid='investortitle'
              selected={InsTitle==''?false:true}
              width='100%' height='55px' rounded='md' width='290px'
            >      
              <InputGroup size="sm" style={{background: 'rgba(255, 255, 255, 0.05)'}}>
                <InputLeftElement style={{background: 'transparent', }} pointerEvents='none' color='gray.300' fontSize='1.2em' children=' ' />
                <Input style={{ }} type="text" h='55px'placeholder="Your title" rounded="md"  value={InsTitle} onChange={(e)=>{setInsTitle(e.target.value)}} />
              </InputGroup>
            </InputTransition>
          </Box>
        </Flex>
        
        <Flex direction={{base:'column',md:'column',lg:'row'}} mt='40px' justify="center" align='center'>
          <Box align='center' ml={{base:'0px',md:'0px',lg:'0px'}} mt={{base:'0px',md:'0px',lg:'-100px'}}>
            <Flex>
              <Text mb='20px'>Email</Text>
            </Flex>
            <InputTransition 
              unitid='investoremail'
              selected={InsEmail==''?false:true}
              width='100%' height='55px' rounded='md' width='290px'
            >      
              <InputGroup size="sm" style={{background: 'rgba(255, 255, 255, 0.05)'}}>
                <InputLeftElement style={{background: 'transparent', }} pointerEvents='none' color='gray.300' fontSize='1.2em' children=' ' />
                <Input style={{ }} type="email" h='55px'placeholder="example@email.com" rounded="md"  value={InsEmail} onChange={(e)=>{setInsEmail(e.target.value)}} />
              </InputGroup>
            </InputTransition>
          </Box>
          <Box align='center' ml={{base:'0px',md:'0px',lg:'30px'}}>
            <Flex mt={{base:'40px', md:'40px', lg:'0px'}}>
              <Text mb='20px'>Signature</Text>
            </Flex>
            <Box>
              <Flex justify = 'center' w='300px' rounded="md" bg='white' >
                <SignatureCanvas ref={canvasRef} penColor='black'
                  canvasProps={{width: 300, height: 100}}/>
              </Flex>
              <Flex style={{cursor:'pointer'}} mt='20px' justify='left' fontSize='14px'>
                <ButtonTransition unitid="clear"
                  selected={false}
                  width='100px' height='40px' rounded='20px'
                >
                  <Box onClick={()=>{canvasRef.current.clear()}}>Clear</Box>
                </ButtonTransition>
                <ButtonTransition unitid="Open Signature"
                  selected={false}
                  width='150px' height='40px' rounded='20px' ml='40px'
                >
                  <Box onClick={()=>openUpload()}>Open Signature</Box>
                </ButtonTransition>
              </Flex>
            </Box>
            <input type='file' id="fileSelector" name='userFile' style={{display:'none'}}
              onChange={(e)=>onChangeSignature(e)}/>
          </Box>
        </Flex>
        {state.wefundID != project_id && <OtherChainWallet /> }
        
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
            width='200px' height='50px' rounded='33px'
          >
            <Box variant="solid" color="white" justify='center' align='center' 
              onClick={()=>onNext()}
            >
              Submit
            </Box>
          </ImageTransition>
        </Flex>
        <Faq/>
      </Box>
      <Notification ref={notificationRef} />
    </PageLayout>
  )
}