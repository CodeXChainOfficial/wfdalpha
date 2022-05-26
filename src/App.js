import React, { Component, Suspense } from 'react'
import { Root } from 'react-static'
import { Router } from '@reach/router'
import './styles/base.scss'
import { Head } from 'react-static'
import ReactGA from 'react-ga'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let bootstrap = {}
if (typeof document !== 'undefined') {
  bootstrap = require('bootstrap')
}
import { StoreProvider } from './store'

import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

import { ParallaxProvider } from 'react-scroll-parallax'

import Navbar from './components/Navbar'
import Index from 'pages/Index'
import Launchpad from 'pages/Launchpad'
import Faq from 'pages/Faq'
import WalletInfo from 'pages/WalletInfo'
import ExplorerProject from 'pages/ExploreComingSoon'
import CreateProject from 'pages/CreateProject'
import ModifyProject from 'pages/ModifyProject'
import BackProject from 'pages/BackProject'
import DetailProject from 'pages/ProjectDetail'
import Invest_step0 from 'pages/Invest_step0'
import Invest_step1 from 'pages/Invest_step1'
import Invest_step2 from 'pages/Invest_step2'
import Invest_step3 from 'pages/Invest_step3'
import Invest_step4 from 'pages/Invest_step4'
import Invest_KYC1 from 'pages/Invest_KYC1'
import Invest_KYC2 from 'pages/Invest_KYC2'
import Invest_KYC3 from 'pages/Invest_KYC3'
import Invest_KYC4 from 'pages/Invest_KYC4'
import Invest_KYC5 from 'pages/Invest_KYC5'
import Invest_KYC6 from 'pages/Invest_KYC6'
import Blog from 'pages/Blog'
import Dashboard from 'pages/Dashboard'
import Staking from 'pages/Staking'
import Cards from 'pages/Cards'
import AngelCampaign from 'pages/Angel-campaign'
import About from 'pages/About'
import NotFound from 'pages/NotFound'

export default class App extends Component {
  setGA = () => {
    ReactGA.initialize('UA-219919867-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  };
  componentDidMount() {
    this.setGA();
  }
  render() {
    return (
      <Suspense
        fallback={
          <div className="vh-100 d-flex">
            <div className="align-self-center w-100 text-center">
              <img src="/media/logo.png" className="img-fluid mb-4" />
              <p
                style={{
                  color: '#f038f0',
                  textTransform: 'uppercase',
                  fontSize: '36px',
                  fontWeight: '300',
                  textShadow: '0px 0px 26px #ff36ff',
                  fontFamily: "'Monoton', cursive",
                }}
                className="loading_animation"
              >
                Loading...{' '}
              </p>
            </div>
          </div>
        }
      >
        <Root>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            <title>WeFund - Community Crowdfunding Cross-Chain Incubator</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link data-hid="shortcut-icon" rel="shortcut icon" href="/favicon.ico" />
            <meta property="og:title" content="WeFund" />
            <meta property="og:image" content="/favicon.png" />
            <meta property="og:image:alt" content="WeFund icon" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="WeFund Interface" />
            <meta
              property="og:description"
              content="WeFund is decentralized crowdfunding for the crypto-startup project industry and beyond, implemented for real-life use cases. The vision of WeFund is to become the connector of the blockchain ecosystem that exists on the market. to fulfill this vision, WeFund's initial development stage would be in the Terra ecosystem and will continue to use another ecosystem such as Solana, Ethereum, Cardano, etc in the near future!"
            />
            <meta name="keywords" content="WeFund, Funding, Crowdfunding, Democratic Crowdfunding, DeFi, Decentralized, Terramoney, Terra, Launchpad, Multi Chain Launchpad" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="WeFund" />
            <meta name="twitter:title" content="WeFund - Community Crowdfunding Cross-Chain Incubator" />
            <meta
              name="twitter:description"
              content="WeFund is decentralized crowdfunding for the crypto-startup project industry and beyond, implemented for real-life use cases. The vision of WeFund is to become the connector of the blockchain ecosystem that exists on the market. to fulfill this vision, WeFund's initial development stage would be in the Terra ecosystem and will continue to use another ecosystem such as Solana, Ethereum, Cardano, etc in the near future"
            />
            <meta name="twitter:image" content="/favicon.png" />
          </Head>
          <StoreProvider>
            <ChakraProvider resetCSS theme={theme}>
              <ParallaxProvider>
                <Navbar />
                <Router>
                  <Index path="/" />
                  <Faq path="faq" />
                  <Launchpad path="launchpad" />
                  <CreateProject path="create" />
                  <ModifyProject path="modify" />
                  <BackProject path="back" />
                  <ExplorerProject path="explorer" />
                  <DetailProject path="detail" />
                  <Invest_step0 path="invest_step0" />
                  <Invest_step1 path="invest_step1" />
                  <Invest_step2 path="invest_step2" />
                  <Invest_step3 path="invest_step3" />
                  <Invest_step4 path="invest_step4" />
                  <Invest_KYC1 path="invest_kyc1" />
                  <Invest_KYC2 path="invest_kyc2" />
                  <Invest_KYC3 path="invest_kyc3" />
                  <Invest_KYC4 path="invest_kyc4" />
                  <Invest_KYC5 path="invest_kyc5" />
                  <Invest_KYC6 path="invest_kyc6" />
                  <WalletInfo path="walletInfo" />
                  <Blog path="blog" />
                  <Dashboard path="dashboard" />
                  <Staking path="staking" />
                  <Cards path="cards" />
                  <AngelCampaign path="angel-campaign" />
                  <About path="about" />
                  <NotFound default />
                </Router>
                <ToastContainer/>
              </ParallaxProvider>
            </ChakraProvider>
          </StoreProvider>
        </Root>
      </Suspense>
    )
  }
}
