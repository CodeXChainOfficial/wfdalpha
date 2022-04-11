import * as React from 'react'
import { Box, Text, Flex, VStack} from '@chakra-ui/react'
import Partner from './partner'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 2000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
}

export default function Partners() {
  return (
    <Box as="section" mb="28" zIndex="5" w="100%" position="relative">
      <Box mx="auto" alignSelf="center" alignContent="center">
        <Text
          color="#63CDFA"
          textAlign="center"
          mt={{ base: '3em', md: '3em', lg: '3em' }}
          mb={{ base: '.5em', md: '1em', lg: '1em' }}
          fontSize={{ base: '18px', md: '25px', lg: '32px' }}
          style={{ fontFamily: 'PilatExtended-Bold' }}
        >
          Powered by
        </Text>

        <Flex
          mx="auto"
          position={'relative'}
          alignContent={'center'}
          justifyContent={'space-between'}
          width={{ base: '50%', md: '42vw', lg: '32vw' }}
        >
          <Partner
            link="https://terra.money/"
            img="/media/partners/terra.png"
          />
          <Partner
            link="https://anchorprotocol.com/"
            img="/media/partners/ANC.png"
          />
        </Flex>
      </Box>
      <Box mx="auto" alignSelf="center" alignContent="center">
        <Text
          color="#63CDFA"
          textAlign="center"
          mt={{ base: '1em', md: '3em', lg: '3em' }}
          mb={{ base: '.5em', md: '1em', lg: '1em' }}
          style={{ fontFamily: 'PilatExtended-Bold' }}
          fontSize={{ base: '18px', md: '25px', lg: '32px' }}
        >
          Launchpad Partners
        </Text>
        <Flex
          mx="auto"
          position={'relative'}
          alignContent={'center'}
          justifyContent={'space-between'}
          width={{ base: '75%', md: '49vw', lg: '50vw' }}
        >
          <Partner
            link="https://kommunitas.net/"
            img="/media/partners/Kommunitas.png"
          />
          <Partner
            link="https://www.lunapad.co/"
            img="/media/partners/lunapad.png"
          />
          <Partner
            link="https://www.ftmlaunch.com/"
            img="/media/partners/FL.png"
          />
        </Flex>
      </Box>
      <Box mx="auto" alignSelf="center" alignContent="center">
        <Text
          color="#63CDFA"
          textAlign="center"
          mt={{ base: '1em', md: '3em', lg: '3em' }}
          mb={{ base: '.5em', md: '1em', lg: '1em' }}
          fontSize={{ base: '18px', md: '25px', lg: '32px' }}
          style={{ fontFamily: 'PilatExtended-Bold' }}
        >
          Partner
        </Text>

        <Flex
          mx="auto"
          pb={'2em'}
          position={'relative'}
          flexDirection="column"
          alignContent={'center'}
          justifyContent={'center'}
          width={{ base: '100%', md: '75vw', lg: '71vw', xl: '82vw' }}
        >
          <Carousel
            showDots
            infinite
            autoPlay={true}
            swipeable={true}
            draggable={true}
            renderDotsOutside
            showThumbs={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            responsive={responsive}
            transitionDuration={500}
          >
            <Partner
              link="https://youtube.com/channel/UCmNM2yxDyy6NonRrzGSXQVA"
              img="/media/partners/pandai.png"
            />
            <Partner
              link="https://linktr.ee/DanceroNFT"
              img="/media/partners/dancero.jpg"
            />
            <Partner
              link="https://baksomania.com/"
              img="/media/partners/Baksomania.png"
            />
            <Partner
              link="https://moggiesverse.com/"
              img="/media/partners/Moggie.jpg"
            />
            <Partner
              link="https://www.lynxverse.io/"
              img="/media/partners/lynx-dark.png"
            />
            <Partner
              link="https://www.portalkripto.com/"
              img="/media/partners/Portalkripto.png"
            />
          </Carousel>
        </Flex>
      </Box>
      <Box mx="auto" alignSelf="center" alignContent="center">
        <Text
          color="#63CDFA"
          textAlign="center"
          mt={{ base: '1em', md: '3em', lg: '3em' }}
          mb={{ base: '.5em', md: '1em', lg: '1em' }}
          style={{ fontFamily: 'PilatExtended-Bold' }}
          fontSize={{ base: '18px', md: '25px', lg: '32px' }}
        >
          Media Partners
        </Text>
        <Flex
          mx="auto"
          pb={'2em'}
          position={'relative'}
          flexDirection="column"
          alignContent={'center'}
          justifyContent={'center'}
          width={{ base: '100%', md: '75vw', lg: '71vw', xl: '82vw' }}
        >
          <Carousel
            showDots
            infinite
            autoPlay={true}
            swipeable={true}
            draggable={true}
            renderDotsOutside
            showThumbs={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            responsive={responsive}
            transitionDuration={500}
          >
            <Partner
              link="https://terraspaces.org/"
              img="/media/partners/terraspace.png"
            />
            <Partner
              link="https://twitter.com/cryptodiviners/"
              img="/media/partners/devine.png"
            />
            <Partner
              link="https://twitter.com/PejuangCryptoID"
              img="/media/partners/pejuangcrypto.png"
            />
            <Partner
              link="https://www.portalkripto.com/"
              img="/media/partners/Portalkripto.png"
            />
            <Partner
              link="https://twitter.com/CryptoNews_Indo"
              img="/media/partners/cryptonews.png"
            />
          </Carousel>
        </Flex>
      </Box>
      <Box mx="auto" alignSelf="center" alignContent="center">
        <Text
          color="#63CDFA"
          textAlign="center"
          mt={{ base: '1em', md: '3em', lg: '3em' }}
          mb={{ base: '.5em', md: '1em', lg: '1em' }}
          style={{ fontFamily: 'PilatExtended-Bold' }}
          fontSize={{ base: '18px', md: '25px', lg: '32px' }}
        >
          Featured on
        </Text>
        <Flex
          mx="auto"
          pb={'2em'}
          position={'relative'}
          flexDirection="column"
          alignContent={'center'}
          justifyContent={'center'}
          width={{ base: '100%', md: '75vw', lg: '71vw', xl: '82vw' }}
        >
          <Carousel
            showDots
            infinite
            autoPlay={true}
            swipeable={true}
            draggable={true}
            renderDotsOutside
            showThumbs={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            responsive={responsive}
            transitionDuration={500}
          >
           <VStack>
            <Partner
              link="https://thejakartapost.com/front-row/2022/02/14/wefund-to-bring-forth-open-democratized-crowdfunding.html"
              img="/media/partners/Jakpost.png"
            />
            <Partner
              link="https://cnnindonesia.com/teknologi/20220218213931-303-761215/wefund-manfaatkan-blockchain-terra-untuk-crowdfunding"
              img="/media/partners/CNN_Indonesia.png"
            />
            </VStack>
            <VStack>
            <Partner
              link="https://cryptodaily.io/wefund-project-overview/"
              img="/media/partners/Cryptodaily.png"
            />
            <Partner
              link="https://www.youtube.com/watch?v=srwWRK86ZTk"
              img="/media/partners/lunatic.png"
            />
            </VStack>
            <VStack>
            <Partner
              link="https://twitter.com/ETH_Daily/status/1462292597200719875"
              img="/media/partners/ethdaily.png"
            />
            <Partner
              link="https://twitter.com/bsc_daily/status/1465644599855124489"
              img="/media/partners/bscdaily.png"
            />
            </VStack>
            <VStack>
            <Partner
              link="https://twitter.com/PolygonDaily/status/1483137329175068672"
              img="/media/partners/polygondaily.png"
            />
            <Partner
              link="https://twitter.com/TerraLUNADaily/status/1461214295656517641"
              img="/media/partners/terradaily.png"
            />
            </VStack>
            <VStack>
            <Partner
              link="https://twitter.com/tyranoanalytics"
              img="/media/partners/tyrano.jpg"
            />
            <Partner
              link="https://twitter.com/solana_daily/status/1460133912861048841"
              img="/media/partners/solanadaily.jpg"
            />
            </VStack>
            <VStack>
            <Partner
              link="https://twitter.com/cardano_daily"
              img="/media/partners/cardanodaily.png"
            />
            <Partner
              link="https://twitter.com/bullcryptonews1/"
              img="/media/partners/bull.jpg"
            />
            </VStack>
            <Partner
              link="https://twitter.com/"
              img="/media/partners/fantom.jpg"
            />
          </Carousel>
        </Flex>
      </Box>
    </Box>
  )
}
