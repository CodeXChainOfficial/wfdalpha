import { 
  Box, 
  Flex, 
  Input, 
  InputGroup, 
  HStack, 
  InputRightElement, 
  Checkbox, 
  Text
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import React, { useState, useRef, useEffect } from 'react';
import { navigate } from '@reach/router'
import { ImageTransition, InputTransition } from "../components/ImageTransition";
import { useStore } from '../store';
import Notification from '../components/Notification';
import PageLayout from '../components/PageLayout';
import {getTicker, ParseParam} from '../components/Util';
import ChainAmountInput from "../components/Invest/CoinAmountInput";
import CustomSelect from "../components/Invest/CustomSelect";
import CustomCheckbox from "../components/Invest/CustomCheckbox";
import { getMinialAmount, getExchangeAmount } from "../components/Changenow_api";


export default function InvestStep2() {
  const [backAmount, setBackAmount] = useState('');
  const [wfdAmount, setWfdamount] = useState('');

  const [coinAmount, setCoinAmount] = useState(0);
  const [coinType, setCoinType] = useState('ETH');
  const [otherChain, setOtherChain] = useState();
  const [isOtherChain, setIsOtherChain] = useState(false);
  const {state, dispatch} = useStore();

  const [minialAmount, setMinialAmount] = useState();
  const [estimatedAmount, setEstimatedAmount] = useState();

  //------------parse URL for project id----------------------------
  let project_id = ParseParam();

  //------------notification setting---------------------------------
  const notificationRef = useRef();

  async function fetchMinialAmount()
  {
    let res = await getMinialAmount(getTicker('ethereum', coinType));
    if(res.status == 'success'){
      setMinialAmount(res.data)
    }

    let amount = parseInt(coinAmount);
    if(amount > parseInt(res.data)){
      res = await getExchangeAmount(getTicker('ethereum', coinType), amount)
console.log(res);
      if(res.status == 'success'){
        setEstimatedAmount(`${res.data} UST`);
      }
      else
        setEstimatedAmount('');
    }
    else
      setEstimatedAmount('');
  }
  useEffect(() => {
    fetchMinialAmount();
  }, [coinType, coinAmount])

  function onChangeBackamount(e){
    if(e.target.value != '' && e.target.value != parseInt(e.target.value).toString()){
      notificationRef.current.showNotification("Please input number only", "error", 4000);
      return;
    }
    let wefundRate = state.presale? 0.09: 0.06;
    setWfdamount(parseInt(parseInt(e.target.value)/wefundRate));
    setBackAmount(e.target.value);
  }
  function onNext(){
    dispatch({ 
      type: 'setInvestamount',
      message: backAmount,
    })
    dispatch({
      type: 'setInvestWfdAmount',
      message: wfdAmount,
    })
    dispatch({
      type: 'setIsOtherChain',
      message: isOtherChain
    })
    dispatch({
      type: 'setOtherChain',
      message: otherChain
    })

    dispatch({
      type: 'setCoinType',
      message: getTicker('ethereum', coinType)
    })
    dispatch({
      type: 'setCoinAmount',
      message: coinAmount
    })
    navigate('/invest_step3?project_id=' + project_id);
  }
  return (
    <PageLayout title="Back the Project" subTitle1="Invest" subTitle2="in WeFund">
       <Box 
        width={{base:'100%', sm:'80%', md:'80%', lg:'80%', xl:'70%'}} 
        px='50px' 
        style={{fontFamily:'Sk-Modernist-Regular'}} 
      >
        <Flex mt='83px' justify='center' align='center' direction='column' style={{fontFamily:'PilatExtended-Regular'}}>
          <HStack mt='150px' mb='50px' px='15px'>
            <Box
              width={{base:'50px', md:'40px'}}
              style={{paddingTop: '3px', paddingLeft:'3px',
              height: '24px', border: '3px solid #3BE489',
              backgroundColor: '#3BE489',
              borderRadius: '50%',
              display: 'inline-block'}}>
            <CheckIcon color="#250E3F" w={3} h={3} marginBottom={'20px'}/>
            </Box>
            <Text fontSize={{base:'12px', sm:'16px', md:'22px', lg:'22px'}}>Step 1</Text>
            <Box
              style={{height: '4px',
              width: '30%',
              background: 'linear-gradient(90deg, #3BE489 0%, rgba(59, 228, 137, 0) 100%)'}}>
            </Box>
            <Box
              width={{base:'50px', md:'40px'}}
              style={{height: '24px', border:
              '3px solid rgba(255, 255, 255, 0.3799999952316284)',
              borderRadius: '50%',
              display:'inline-block'}}>
            </Box>
            <Text fontSize={{base:'12px', sm:'16px', md:'22px', lg:'22px'}}>Step 2</Text>
            <Box
              style={{height: '0px',
              width: '30%',
              border: '2px solid rgba(255, 255, 255, 0.3799999952316284)',
              background: ' rgba(255, 255, 255, 0.3799999952316284)'}}>
            </Box>
            <Box
              width={{base:'50px', md:'40px'}}
              style={{height: '24px',
              border: '3px solid rgba(255, 255, 255, 0.3799999952316284)',
              borderRadius: '50%',
              display: 'inline-block'}}>
            </Box>
            <Text fontSize={{base:'12px', sm:'16px', md:'22px', lg:'22px'}}>Final Step</Text>
          </HStack>
          <Text fontSize={{base:'15px', md:'15px', lg:'22px'}} fontWeight={'300'}>
            Input your <span style={{color:'#00A3FF'}}>Investment Amount</span>
          </Text>
          <Text fontSize={{base:'12px', md:'12px', lg:'16x'}} maxW={'390px'} color='rgba(255, 255, 255, 0.54)' fontWeight={'normal'} mt={'20px'} textAlign={'center'}>
            Please enter UST amount and we will convert the WFD amount for you
          </Text>
        </Flex>
        {/* --------amount to back----------- */}
        <Flex direction={{base:'column', md:'column', lg:'column'}} ml={{base:'0px', md:'0px', lg:'0px'}} mt='40px' justify="center" align='center'>
        <Flex>
          <Text mb='20px'>UST amount you want to invest</Text>
        </Flex>
        <InputTransition 
          unitid='backamount'
          selected={backAmount==''?false:true}
          width='300px' height='55px' rounded='md' mb='42px'
        >
          <InputGroup 
            size={{base:'200px', lg:'sm'}}
            style={{border:'0', background: 'rgba(255, 255, 255, 0.05)'}}
          >
            <Input type="text" h='55px' 
              style={{border:'0', background:'transparent', paddingLeft:'25px'}}
              focusBorderColor="purple.800" 
              rounded="md"
              value={backAmount}
              onChange={(e)=>onChangeBackamount(e)}
            />
            <InputRightElement
              w={{base:'40px', lg:'60px'}}
              h='55px'
              pr={{base:'15px', lg:'5px'}}
              pointerEvents='none'
              children={<Text>UST</Text>}
            />
          </InputGroup>
        </InputTransition>
        <Flex>
          <Text mb='20px'>WFD tokens you will receive</Text>
        </Flex>
        <InputTransition
          unitid='WFDamount'
          selected={backAmount==''?false:true}
          width='300px' height='55px' rounded='md'
        >
          <InputGroup 
            size={{base:'200px', lg:'sm'}} 
            style={{border:'0', background: 'rgba(255, 255, 255, 0.05)'}}
          >
            <Input type="text" h='55px'
              style={{border:'0', background:'transparent', paddingLeft:'25px'}}
              focusBorderColor="purple.800"
              rounded="md"
              value={wfdAmount}
              onChange={(e)=>{}}
            />
            <InputRightElement
              w={{base:'40px', lg:'60px'}}
              h='55px'
              pr={{base:'15px', lg:'5px'}}
              pointerEvents='none'
              children={<Text>WFD</Text>}
            />
          </InputGroup>
        </InputTransition>
        </Flex>
        {/* -----------------Back Project----------------- */}
        <Flex w='100%' mt='60px'justify='center' mb='170px'>
          <ImageTransition
            unitid='Invest2invest'
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
                onClick = {()=>onNext()}>
              Invest
            </Box>
          </ImageTransition>
        </Flex>

        <Flex mt='50px'  mb='170px' justify='center'>
          <Flex direction="column" justify='center' width='300px'>
            <CustomCheckbox 
              typeText="Do you use other chain to invest?"
              type={isOtherChain} 
              setType={setIsOtherChain}
            />
            <CustomSelect
              typeText =  "Chain"
              type = {otherChain}
              setType = {setOtherChain}
              options = {['Ethereum']}
            />
            <ChainAmountInput 
              type={coinAmount} 
              setType={setCoinAmount}
              coinType = {coinType}
              setCoinType = {setCoinType}
              notificationRef = {notificationRef}
            />
            <Text mt='20px'>Minial Amount</Text>
            <Text>{minialAmount}</Text>
            <Text mt='20px'>Estimated Amount</Text>
            <Text>{estimatedAmount}</Text>
          </Flex>
        </Flex>
      </Box>
      <Notification ref={notificationRef}/>
    </PageLayout>
  )
}
