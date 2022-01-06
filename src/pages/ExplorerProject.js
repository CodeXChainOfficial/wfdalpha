import { ChakraProvider } from "@chakra-ui/react";
import {chakra, Box, Flex, Text, Input, InputGroup,  Icon,  HStack, VStack, Select, Image, Stack,
  CircularProgress, CircularProgressLabel, Progress } from"@chakra-ui/react";
import {WasmAPI, LCDClient, } from '@terra-money/terra.js'
import { BsArrowUpRight } from "react-icons/bs"
import Pagination from "@choc-ui/paginator"
import { MdOutlinePlace, MdOutlineAccountBalanceWallet, MdOutlineCategory } from "react-icons/md";
import React, { useEffect, useState,  useMemo, useCallback, useContext, useRef, } from 'react';
import { Router, Link } from '@reach/router'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useStore } from '../store'
import theme from '../theme';
import { ImageTransition, InputTransition } from "../components/ImageTransition";
import Footer from '../components/Footer';

let useConnectedWallet = {}
if (typeof document !== 'undefined') {
    useConnectedWallet =
        require('@terra-money/wallet-provider').useConnectedWallet
}

export default function ExplorerProject() {
  const [prjCategory, setPrjCategory] = useState('');
  const [prjName, setPrjName] = useState('');
  const { state, dispatch } = useStore();

  const [totalBackedMoney, setTotalBackedMoney] = useState(0)
  const [totalDeposit, setTotalDeposit] = useState(0)
  const [ustAmount, setUstAmount] = useState(0);
  const [austAmount, setAustAmount] = useState(0);

  //-----------connect to wallet ---------------------
  let connectedWallet = ''
  if (typeof document !== 'undefined') {
      connectedWallet = useConnectedWallet()
  }

  //----------init api, lcd-------------------------
  const lcd = useMemo(() => {
    if (!connectedWallet) {
        return null
    }
    return new LCDClient({
        URL: connectedWallet.network.lcd,
        chainID: connectedWallet.network.chainID,
    })
  }, [connectedWallet]);

  const api = new WasmAPI(state.lcd_client.apiRequester);

  //-----------fetch project data=-------------------------
  async function fetchContractQuery() 
  {
    try {
      const oneprojectData = await api.contractQuery(
        state.WEFundContractAddress,
        {
            get_project:{
              project_id: '2'
              },
        }
      )
      let projectData=[];
      projectData[0] = oneprojectData;

      if(projectData == ''){
        showNotification("Can't fetch Project Data", 'error', 6000);
        return;
      }


      let i, j
      let totalBacked = 0;
      let totalDeposit = 0;
      let fake = 120000; //fake

      for(i=0; i<projectData.length; i++)
      {
        let percent = 0;
        for(j=0; j<projectData[i].backer_states.length; j++)
        {
            totalBacked += parseInt(projectData[i].backer_states[j].ust_amount.amount);
            percent += parseInt(projectData[i].backer_states[j].ust_amount.amount);

            if(projectData[i].project_done == 0)
            {
              totalDeposit += parseInt(projectData[i].backer_states[j].ust_amount.amount);
            }
        }

        if(projectData[i].project_id == 2)//fake
          percent = parseInt((percent/10**6 + fake) / parseInt(projectData[i].project_collected)*100);
        else
          percent = parseInt((percent/10**6) / parseInt(projectData[i].project_collected)*100);
        projectData[i].percent = percent;
      }

      dispatch({
        type: 'setProjectdata',
        message: projectData,
      })
console.log(projectData);          
      totalBacked /= 10**6;
      totalDeposit /= 10**6;

      //fake
      totalBacked += fake;
      totalDeposit += fake;

      setTotalBackedMoney(totalBacked);
      setTotalDeposit(totalDeposit);

      const balanceData = await api.contractQuery(
        state.WEFundContractAddress,
          {
              get_balance: {
                wallet: state.WEFundContractAddress
              },
          }
      )
      if(!balanceData)
        return;

      setUstAmount(balanceData.amount[0].amount / 1000000);
      setAustAmount(balanceData.amount[1].amount / 1000000);

    } catch (e) {
        console.log(e)
    }
  };

  useEffect(() => {
      fetchContractQuery();
  }, [connectedWallet, lcd])

  return (
    <ChakraProvider resetCSS theme={theme}>
      <div style={{background:"linear-gradient(90deg, #1F0021 0%, #120054 104.34%)", 
      width:'100%', color:'white', fontSize:'18px', fontFamily:'Sk-Modernist-Regular', fontWeight:'500' }}>
        <div style={{boxShadow:"0px 5px 50px 0px #000000A6", width:'100%', zIndex:'10'}}>
        <div style={{backgroundImage:"url('/createproject_banner.svg')", width:'100%',  zIndex:'11',backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
          <Flex pt='64px' justify="center">
            <Text fontSize='16px' fontWeight='normal' color={'rgba(255, 255, 255, 0.54)'}>Home &gt;&nbsp;</Text>
            <Text fontSize='16px' color={'rgba(255, 255, 255, 0.84)'}>Projects</Text>
          </Flex>
          <Flex mt='11px' pb='75px' mb="75px" justify='center'
            style={{fontFamily:'PilatExtended-Bold'}} >
            <Text fontSize={{base:'25px',md:'25px',lg:'40px'}} fontWeight={'900'}>Explore&nbsp;</Text>
            <Text fontSize={{base:'25px',md:'25px',lg:'40px'}} color='#4790f5' fontWeight={'900'}>Projects</Text>
          </Flex>
        </div>
        </div>
        <Flex width={{lg:'100%'}} justify='center' mt='50px' px='175px'>
          <Box style={{fontFamily:'Sk-Modernist-Regular'}} >
            <Flex width={{lg:'100%'}} justify='center'  px='175px' zIndex={'1'}>
              <VStack paddingBottom={"50px"}>
              <Flex width={{lg:'1225px'}} style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius:'3xl',borderTopColor: 'transparent', fontFamily:'Sk-Modernist-Regular', paddingLeft:'20px', paddingRight:'20px'}} >
                      {/* ------------------project desktop---------- */}
                      <VStack visibility={{base:'hidden', md:'hidden', lg:'visible'}} maxW={{base:'0px',md:'0px',lg:'2560px'}} maxH={{base:'0px',md:'0px',lg:'9999px'}}>
                      <Tabs variant='soft-rounded' colorScheme='facebook' size='lg' style={{paddingTop:'20px'}}>
                        <TabList>
                          <Tab>Community Approval</Tab>
                          <Tab>Open Fund-raising</Tab>
                          <Tab>Project Under Milestone</Tab>
                        </TabList>
                        <TabPanels>
                          <TabPanel>
                            {/* ------------------project list---------- */}
                          <Flex marginTop={'26px'} marginBottom={'26px'} alignSelf={{lg:'flex-start'}} direction={{base:'row',md:'row',lg:'row'}} >
                            <Flex alignSelf={'flex-start'} width={{lg:'950px'}} >
                              <Text fontSize={{base:'15px',md:'15px',lg:'22px'}}>Projects Incubated</Text>
                            </Flex>
                            <Flex alignSelf={'flex-end'} marginLeft={'73px'}>
                              <Text fontSize={{base:'15px',md:'15px',lg:'22px'}} width={'100px'}>
                                {state.projectData.length} Projects
                              </Text>
                            </Flex>
                          </Flex>

                          {/* ------------------project snippet detail---------- */}
                          {state.projectData != '' && state.projectData.map((projectItem, index) => (
                          <Box w= "100%" h= "300px" mx="auto" borderTop= "1px solid rgba(255, 255, 255, 0.1)"
                            boxSizing="border-box" shadow="lg" rounded="lg" overflow="hidden" >
                            <HStack w= "100%">
                              <Flex  my={"6px"} mx={"6px"} width="400px" height="270px" bg="#FFFFFF"
                              boxShadow={"0px 2px 10px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)"}
                              borderRadius={"2xl"} px="20px" py="10px" align='center' justify='center'>
                                <object data="/logo.png" style={{width:'200px', height:'200px'}} type="image/png">
                                <Image 
                                  src={state.request+"/download?filename="+ projectItem.project_icon}
                                />
                                </object>
                              </Flex>
                              <Box py={4} px={2} w="100%">
                                <chakra.h1 color="white" fontWeight="bold" fontSize="lg" w='100px'>
                                  {projectItem.project_name}
                                </chakra.h1>
                                <chakra.p py={2} color={"gray.400"} fontSize="15px">
                                Date - <span style={{color:"#FE8600"}}>31 Dec, 2021</span>
                                </chakra.p>
                                <HStack space={10} align='self-start'>
                                  <chakra.p py={2} color={"gray.400"} w='600px'>
                                    {projectItem.project_description.substr(0, 250)}
                                  
                                  </chakra.p>
                                  <CircularProgress 
                                    value={projectItem.percent} 
                                    size='150px' 
                                    color='blue.600'
                                    
                                  >
                                    <CircularProgressLabel>
                                      {projectItem.percent}%
                                    </CircularProgressLabel>
                                  </CircularProgress>
                                </HStack>
                                <HStack justify="space-between">
                                  <Flex alignItems="center" color={"gray.400"} >
                                    <Icon as={MdOutlineCategory} h={6} w={6} mr={2} />
                                    <chakra.h1 px={2} fontSize="sm">
                                      {projectItem.project_chain}
                                    </chakra.h1>
                                  </Flex>
                                  <Flex alignItems="center" color={"gray.400"} >
                                    <Icon as={MdOutlinePlace} h={6} w={6} mr={2} />
                                    <chakra.h1 px={2} fontSize="sm">
                                      {projectItem.project_category}
                                    </chakra.h1>
                                  </Flex>
                                  <Flex alignItems="center" color={"gray.400"} >
                                    <Icon as={MdOutlineAccountBalanceWallet} h={6} w={6} mr={2} />
                                    <chakra.h1 px={2} fontSize="sm">
                                      ${projectItem.project_collected}
                                      <span style={{color:'#00A3FF'}}>  Fundraising Amount</span>
                                    </chakra.h1>
                                  </Flex>
                                  <HStack style={{width:'400px', spacing:10}}>
                                    <Flex >
                                      <ImageTransition 
                                        unitid={'visit'+index}
                                        border1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)' 
                                        background1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
                                        border2='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
                                        background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
                                        border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
                                        background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
                                        selected={false}
                                        width='125px' height='40px' rounded='23px'
                                      >
                                        <a href={projectItem.project_website}>
                                        <Box variant="solid" color="white" justify='center' align='center' style={{fontSize:"15px"}}
                                            onClick = {()=>{}} >
                                          Visit Website  
                                          <Icon as={BsArrowUpRight} h={4} w={4} mr={3} />
                                        </Box>
                                        </a>
                                      </ImageTransition>
                                    </Flex>
                                    <Flex>
                                      <ImageTransition 
                                        unitid={'view'+index}
                                        border1='linear-gradient(180deg, #FE8600 0%, #F83E00 100%)' 
                                        background1='linear-gradient(180deg, #FE8600 0%, #F83E00  100%)'
                                        border2='linear-gradient(180deg, #FE8600 0%, #F83E00 100%)'
                                        background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
                                        border3="linear-gradient(180deg, #FE8600 0%, #F83E00 100%)"
                                        background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
                                        selected={false}
                                        width='100px' height='40px' rounded='23px'
                                      >
                                        <Link to={"/detail?project_id="+projectItem.project_id}>
                                        <Box variant="solid" color="white" justify='center' align='center' style={{fontSize:"15px"}}
                                            onClick = {()=>{}} >
                                          View Project
                                        </Box>
                                        </Link>
                                      </ImageTransition>
                                    </Flex>
                                    <Flex>
                                      <ImageTransition 
                                        unitid={'view'+index}
                                        border1='linear-gradient(180deg, #FE8600 0%, #F83E00 100%)' 
                                        background1='linear-gradient(180deg, #FE8600 0%, #F83E00  100%)'
                                        border2='linear-gradient(180deg, #FE8600 0%, #F83E00 100%)'
                                        background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
                                        border3="linear-gradient(180deg, #FE8600 0%, #F83E00 100%)"
                                        background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
                                        selected={false}
                                        width='100px' height='40px' rounded='23px'
                                      >
                                        <Link to={"/detail?project_id="+projectItem.project_id}>
                                        <Box variant="solid" color="white" justify='center' align='center' style={{fontSize:"15px"}}
                                            onClick = {()=>{}} >
                                          Vote
                                        </Box>
                                        </Link>
                                      </ImageTransition>
                                    </Flex>
                                  </HStack>
                                </HStack>
                              </Box>
                            </HStack>
                          </Box>
                          ))}
                          </TabPanel>
                          <TabPanel>
                          <Flex width={{lg:'1225px'}} style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius:'3xl',borderTopColor: 'transparent', fontFamily:'Sk-Modernist-Regular', paddingLeft:'20px', paddingRight:'20px'}} ></Flex>
                          </TabPanel>
                          <TabPanel>
                          <Flex width={{lg:'1225px'}} style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius:'3xl',borderTopColor: 'transparent', fontFamily:'Sk-Modernist-Regular', paddingLeft:'20px', paddingRight:'20px'}} ></Flex>
                          </TabPanel>
                        </TabPanels>
                      </Tabs>
                          
                          
                      </VStack>
                      {/* ------------------project mobile---------- */}
                      <VStack visibility={{base:'visible', md:'visible', lg:'hidden'}}>
                      <Tabs colorScheme='facebook' w='400px' style={{padding:'10px'}}>
                        <TabList>
                          <Tab style={{fontSize:'10px'}}>Community Approval</Tab>
                          <Tab style={{fontSize:'10px'}}>Open Fund-raising</Tab>
                          <Tab style={{fontSize:'10px'}}>Project Under Milestone</Tab>
                        </TabList>
                        <TabPanels>
                          <TabPanel>
                        {/* ------------------project list---------- */}
                        <Flex 
                          marginTop={'26px'} 
                          marginBottom={'26px'} 
                          alignSelf={{lg:'flex-start'}} 
                          direction={{base:'row',md:'row',lg:'row'}} 
                        >
                          <Flex alignSelf={'flex-start'} width={{lg:'950px'}} >
                            <Text fontSize={{base:'15px',md:'15px',lg:'22px'}}>Projects Incubated</Text>
                          </Flex>
                          <Flex alignSelf={'flex-end'} marginLeft={'98px'}>
                            <Text fontSize={{base:'15px',md:'15px',lg:'22px'}}>
                              {state.projectData.length} Projects
                            </Text>
                          </Flex>
                        </Flex>

                        {/* ------------------project snippet detail---------- */}
                        <Flex
                          borderTop= "1px solid rgba(255, 255, 255, 0.1)"
                          boxSizing="border-box" shadow="lg" rounded="lg" 
                          alignSelf={'center'} 
                          direction={'column'}
                        >
                          {state.projectData != '' && state.projectData.map((projectItem, index) => (
                            <Flex width={'300px'} 
                              alignSelf={'center'} 
                              direction={'column'}
                              mb='20px'
                            >
                              {/* ------------------project image---------- */}
                              <Flex width={'300px'} direction={'column'} alignSelf={'center'}>
                                <Flex my={"6px"} mx={"6px"} minW='72px' bg="#FFFFFF" padding={'10px'}
                                  boxShadow={"0px 2px 10px rgba(0, 0, 0, 015), 0px 4px 4px rgba(0, 0, 0, 0.25)"}
                                  borderRadius={"2xl"}
                                  align='center'
                                >
                                  <object data="/logo.png" style={{width:'100%', maxHeight:'200px', alignItems:'center'}} type="image/png">
                                  <Image alignSelf={'center'}
                                    src={state.request+"/download?filename="+ projectItem.project_icon}
                                    w='72px'
                                  />
                                  </object>
                                </Flex>
                              {/* ------------------project Detail---------- */}
                                <Flex pt={2} px={2} w='240px' direction='column' alignSelf={'end'}>
                                  <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                                    {projectItem.project_name}
                                  </chakra.h1>
                                  <chakra.p pt={2} color={"gray.400"} fontSize="15px">
                                  Date - <span style={{color:"#FE8600"}}>31 Dec, 2021</span>
                                  </chakra.p>
                                  {/* ------------------project synopsis---------- */}
                                  <chakra.p pt={2} color={"gray.400"} fontSize="15px" h='auto' overflow='hidden' textAlign={'center'} justify={'center'}>
                                    {projectItem.project_description.substr(0,300)}
                                  </chakra.p>
                                </Flex>
                              </Flex>
                              <Flex 
                                alignSelf={'center'}
                                marginTop={'20px !important'}
                                >
                                  <CircularProgress 
                                    value={projectItem.percent} 
                                    size='120px' 
                                    color='blue.600'
                                  >
                                    <CircularProgressLabel>
                                      {projectItem.percent}%
                                    </CircularProgressLabel>
                                  </CircularProgress>
                              </Flex>
                                {/* ------------------project buttons---------- */}
                                <Flex mt={'25px'} mb={'25px'} direction={{base:'column',md:'column',lg:'row'}}> 
                                  <HStack style={{spacing:10}}>
                                    <Flex >
                                      <ImageTransition 
                                        unitid={'visit'+index}
                                        border1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)' 
                                        background1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
                                        border2='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
                                        background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
                                        border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
                                        background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
                                        selected={false}
                                        width='125px' height='30px' rounded='33px'
                                      >
                                        <a href={projectItem.project_website}>
                                        <Box variant="solid" color="white" justify='center' align='center' style={{fontSize:"15px"}}
                                            onClick = {()=>{}} >
                                          Visit Website  <Icon as={BsArrowUpRight} h={4} w={4} mr={3} />
                                        </Box>
                                        </a>
                                      </ImageTransition>
                                    </Flex>
                                    <Flex>
                                      <ImageTransition 
                                          unitid={'view'+index}
                                          border1='linear-gradient(180deg, #FE8600 0%, #F83E00 100%)' 
                                          background1='linear-gradient(180deg, #FE8600 0%, #F83E00  100%)'
                                          border2='linear-gradient(180deg, #FE8600 0%, #F83E00 100%)'
                                          background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
                                          border3="linear-gradient(180deg, #FE8600 0%, #F83E00 100%)"
                                          background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
                                          selected={false}
                                          width='100px' height='30px' rounded='33px'
                                        >
                                          <Link to={"/detail?project_id="+projectItem.project_id}>
                                          <Box variant="solid" color="white" justify='center' align='center' style={{fontSize:"15px"}}
                                              onClick = {()=>{}} >
                                            View Project
                                          </Box>
                                          </Link>
                                      </ImageTransition>
                                    </Flex>
                                    <Flex>
                                      <ImageTransition 
                                          unitid={'view'+index}
                                          border1='linear-gradient(180deg, #FE8600 0%, #F83E00 100%)' 
                                          background1='linear-gradient(180deg, #FE8600 0%, #F83E00  100%)'
                                          border2='linear-gradient(180deg, #FE8600 0%, #F83E00 100%)'
                                          background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
                                          border3="linear-gradient(180deg, #FE8600 0%, #F83E00 100%)"
                                          background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
                                          selected={false}
                                          width='100px' height='30px' rounded='33px'
                                        >
                                          <Link to={"/detail?project_id="+projectItem.project_id}>
                                          <Box variant="solid" color="white" justify='center' align='center' style={{fontSize:"15px"}}
                                              onClick = {()=>{}} >
                                            Vote
                                          </Box>
                                          </Link>
                                      </ImageTransition>
                                    </Flex>
                                  </HStack>
                                </Flex>
                            </Flex>
                          ))}
                        </Flex>
                        </TabPanel>
                          <TabPanel>
                          <Flex width={{lg:'1225px'}} style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius:'3xl',borderTopColor: 'transparent', fontFamily:'Sk-Modernist-Regular', paddingLeft:'20px', paddingRight:'20px'}} ></Flex>
                          </TabPanel>
                          <TabPanel>
                          <Flex width={{lg:'1225px'}} style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius:'3xl',borderTopColor: 'transparent', fontFamily:'Sk-Modernist-Regular', paddingLeft:'20px', paddingRight:'20px'}} ></Flex>
                          </TabPanel>
                        </TabPanels>
                      </Tabs>
                      </VStack>
                    </Flex>
                    <Flex w="1000px"  p={50} alignItems="center" justifyContent="center" >
                      <Pagination bg={"linear-gradient(180deg, #FE8600 21.43%, #F83E00 147.62%)"} defaultCurrent={1} total={50} paginationProps={{ display: "flex" }} />
                    </Flex>    
              </VStack>
            </Flex>
          </Box>
        </Flex>
        <Footer/>
      </div>
    </ChakraProvider>
  )
}