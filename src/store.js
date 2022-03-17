import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { LCDClient } from '@terra-money/terra.js'
import { Set2Mainnet, Set2Testnet } from './components/Util';

const StoreContext = createContext()


export const WEFUND_MAIN = "terra1fe42wt74wx8z0snwnzkeytsxpmz5l4yu83uxyy";
export const VESTING_MAIN = "terra1clufns3djy7fye5k3sq3m4y3777e85jw5v2ygk";
export const STAKING_MAIN = "";
export const WFDTOKEN_MAIN = "terra1nppndpgfusn7p8nd5d9fqy47xejg0x55jjxe2y" //mainnet

export const WEFUND_TEST = "terra1ef73f5knkez000drwrne47kzvhs6m7vdx6vkz0";
export const VESTING_TEST = "terra1055p3nlct3pg4xr2gxkvmec9d055wwfy56gf07";
export const STAKING_TEST = "terra1nvwalgxrrtadw3xmgazun57hqrf00a696g0lsl";
export const WFDTOKEN_TEST = "terra1pkytkcanua4uazlpekve7qyhg2c5xwwjr4429d"; //testnet

const initialState = {
  // net: 'mainnet',
  // WEFundContractAddress: WEFUND_MAIN, //mainnet v2.3
  // VestingContractAddress: VESTING_MAIN, //mainnet
  // WEFUNDTokenAddress: WFDTOKEN_MAIN,
  // lcd_client: new LCDClient({ //mainnet
  //   URL: 'https://lcd.terra.dev',
  //   chainID: 'columbus-5',
  //   gasPrices: { uusd: 0.45 },
  // }),

  net: 'testnet',
  WEFundContractAddress: WEFUND_TEST, //testnet v2.3
  VestingContractAddress: VESTING_TEST, //testnet
  StakingContractAddress: STAKING_TEST,
  WFDTokenAddress: WFDTOKEN_TEST,
  lcd_client: new LCDClient({ //testnet
    URL: 'https://bombay-lcd.terra.dev/',
    chainID: 'bombay-12',
    gasPrices: { uusd: 0.45 },
  }),

  presale: true,
  referralCount: 0,
  referralLink: '',
  projectData: '',
  activeProjectData: '',
  communityData: '',
  configData: '',
  connectedWallet: [],
  timer: '',
  wallet: {},
  allNativeCoins: [],
  config: {},
  ustBalance: 0,
  contractBalance: {},

  investAmount: '0',
  investWfdamount: '',
  investName: '',
  investEmail: '',
  investTitle: '',
  investDate: '',
  investSignature: '',
  request: 'https://wefund-nodejs-gwb6v.ondigitalocean.app',
  // request: 'http://0b3d-188-43-136-33.ngrok.io',
  pdfFile: '',
  whitepaper: '',
  logo: '',
  wefundID: 1,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setNet':
      return { ...state, net: action.message }
    case 'setLcdClient':
      return { ...state, lcd_client: action.message }
    case 'setWefundContract':
      return { ...state, WEFundContractAddress: action.message }
    case 'setVestingContract':
      return { ...state, VestingContractAddress: action.message }
    case 'setStakingContract':
      return { ...state, StakingContractAddress: action.message }
    case 'setWFDTokenContract':
      return { ...state, WFDTokenContract: action.message }      
    case 'setPresale':
      return { ...state, presale: action.message }
    case 'setReferralCount':
      return { ...state, referralCount: action.message }
    case 'setReferralLink':
      return { ...state, referralLink: action.message }
    case 'setConnectedWallet':
      return { ...state, connectedWallet: action.message }
    case 'setTimer':
      return { ...state, timer: action.message }
    case 'setConfigData':
      return { ...state, configData: action.message }
    case 'setCommunityData':
      return { ...state, communityData: action.message }
    case 'setActiveProjectData':
      return { ...state, activeProjectData: action.message }
    case 'setLogo':
      return { ...state, logo: action.message }
    case 'setWhitepaper':
      return { ...state, whitepaper: action.message }
    case 'setInvestDate':
      return { ...state, investDate: action.message }
    case 'setInvestWfdAmount':
      return { ...state, investWfdamount: action.message }
    case 'setDocxfile':
      return { ...state, docxFile: action.message }
    case 'setPdffile':
      return { ...state, pdfFile: action.message }
    case 'setInvestname':
      return { ...state, investName: action.message }
    case 'setInvestemail':
      return { ...state, investEmail: action.message }
    case 'setInvesttitle':
      return { ...state, investTitle: action.message }
    case 'setInvestsignature':
      return { ...state, investSignature: action.message }
    case 'setInvestamount':
      return { ...state, investAmount: action.message }
    case 'setContractBalance':
      return { ...state, contractBalance: action.message }
    case 'setProjectData':
      return { ...state, projectData: action.message }
    case 'setWallet':
      return { ...state, wallet: action.message }
    case 'setAllNativeCoins':
      return { ...state, allNativeCoins: action.message }
    case 'setConfigData':
      return { ...state, config: action.message }
    case 'setUstBalance':
      return { ...state, ustBalance: action.message }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(()=>{
    let net = window.localStorage.getItem('net') || "mainnet";
    if( net == "testnet" ){
      Set2Testnet(state, dispatch);
    }
    else{
      Set2Mainnet(state, dispatch);
    }
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
