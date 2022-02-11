import React, { useState, useEffect, useMemo, useRef } from 'react'
import { Image, Flex, VStack } from '@chakra-ui/react'
import { BigNumber, ethers } from "ethers";
import { Wallet, CaretRight, Power, Check } from 'phosphor-react'
import numeral from 'numeral'
import { useStore } from '../store'
import { isNull } from './Util'
import erc20_abi from '../abi/erc20.json'

export function useEtherProvider(){
  const {state, dispatch } = useStore();
  if(isNull(state.etherProvider))
    return null;
  return state.etherProvider;;
}

export default function ConnectMetaMask() {
  let connectedWallet = ''
  const [bank, setBank] = useState()
  const [connected, setConnected] = useState(false)
  const { state, dispatch } = useStore()
  const [account, setAccount] = useState();
  const [provider, setProvider] = useState();

  
  function returnBank() {
    return (
      <>
        <Wallet
          size={24}
          // color="#0F0038"
          color="white"
          style={{ display: 'inline-block', marginTop: '-3px' }}
        />
        {bank ? (
          <>
            &nbsp;&nbsp;
            <Check
              size={16}
              // color="#0F0038"
              color="white"
              weight="bold"
              style={{
                display: 'inline-block',
                marginTop: '-8px',
                marginLeft: '-5px',
              }}
            />
            &nbsp;&nbsp;
          </>
        ) : (
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </>
    )
  }

  const connectTo = async (type) => {
    if(type == 'connect'){
      try{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
  console.log(accounts);
        const account = accounts[0];

        setConnected(true);
        setAccount(account);
        setProvider(provider);
        dispatch({ type: 'setEtherProvider', message: provider })
        dispatch({ type: 'setMetamaskAccount', message: account })
      }
      catch(e){
        console.log(e);
      }
    }
    else if(type == 'disconnect'){
console.log('disconnect');
      setConnected(false);
      dispatch({ type: 'setEtherProvider', message: null})
    }
    // const signer = provider.getSigner();
    // let tmp = balance.div(ethers.constants.WeiPerEther).toNumber();
  }

  // async function getBalance(contract, account) {
  //   contract.balanceOf(account, function(error, balance){
  //       contract.decimals((error, decimals) => {            
  //           balance = balance.div(BigNumber.from(10).pow(decimals));
  //           netbalance = balance.toString();
  //           return netbalance;                                      
  //       });
  //   }); 
  // }

  const getBalance = async () => {
    // contract = web3.eth.contract(erc20_abi).at(state.ETH_USDT);
    // let balance = getBalance(contract, account);

    let balance = await provider.getBalance(account);
    setBank(ethers.utils.formatEther(balance));
  }

  useEffect( () => {
    if( !isNull(provider) )
      getBalance();
  }, [provider])

  return (
    <>
      <VStack display={{ base: 'none', md: 'none', lg: 'block'}} w='100%'>
      <div className="navbar-nav" style={{ flexDirection: 'row', width: '100%' }}>
        {!connected && (
          <>
            <button
              className="btn btn-orange  nav-item"
              type="button"
              style={{
                color: 'white',
                backGroundColor: 'red',
                width: '100%',
                background:
                  'linear-gradient(180deg, rgba(254, 134, 0, 0.2) 0%, rgba(254, 134, 0, 0) 100%)',
                backdropFilter: 'blur(54px)',
                borderRadius: '30px',
                padding: '0px'
              }}
              onClick = {() => connectTo('connect')}
            >
              Connect MetaMask&nbsp;
            </button>
          </>
        )}
        {connected && (
          <>
            <button
              className="btn btn-orange nav-item dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              type="button"
              id="dropdownMenuButton1"
              style={{
                color: 'white',
                backGroundColor: 'red',
                width: '100%',
                background:
                  'linear-gradient(180deg, rgba(254, 134, 0, 0.2) 0%, rgba(254, 134, 0, 0) 100%)',
                backdropFilter: 'blur(54px)',
                borderRadius: '30px',
              }}
            >
              &nbsp;&nbsp;{returnBank() ? returnBank() : 'loading'}&nbsp;&nbsp;
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton2"
              style={{ top: '70px' }}
            >
              {bank && (
                <div
                  className="wallet-info d-inline-block text-start px-3"
                  style={{ fontSize: '13px' }}
                >
                  <span className="d-block">
                    <strong>YOUR WALLET:</strong>
                  </span>
                  <span className="d-block" style={{ marginBottom: '-5px' }}>
                    {bank} <span className="text-sm">UST</span>
                  </span>
                </div>
              )}
              <button
                onClick={() => connectTo('disconnect')}
                className="dropdown-item"
              >
                <Power size={16} style={{ marginTop: '-2px' }} />{' '}
                <span style={{ fontSize: '13px' }}>Disconnect</span>
              </button>
            </ul>
          </>
        )}
      </div>
      </VStack>
      <VStack display={{ base: 'block', md: 'block', lg: 'none'}}>
        {!connected && (
          <Flex className="dropbtn">
            <Image alt="menu1" src="/media/menuButton1.svg" h="20px" />
          </Flex>
        )}
        {connected && (
          <div className = "dropdown-content2">
            <Flex className="dropbtn">
              <Image alt="menu1" src="/media/menuButton1.svg" h="20px" />
            </Flex>
            <div className="dropdown-content2">
              {bank && (
                <div
                  className="wallet-info d-inline-block text-start px-3"
                  style={{ fontSize: '13px' }}
                >
                  <span className="d-block">
                    <strong>YOUR WALLET:</strong>
                  </span>
                  <span className="d-block" style={{ marginBottom: '-5px' }}>
                    {bank} <span className="text-sm">ETH</span>
                  </span>
                </div>
              )}
              <button
                onClick={() => connectTo('disconnect')}
              >
                <Power size={16} style={{ marginTop: '-2px' }} />{' '}
                <span style={{ fontSize: '13px' }}>Disconnect</span>
              </button>
            </div>
          </div>
        )}
      </VStack>
    </>
  )
}
