import React from 'react'
import { Flex, Image, Text, UnorderedList, ListItem } from '@chakra-ui/react'

export default function Roadmap() {
  return (
    <Flex
      w="100%"
      pt="47px"
      mt="100px"
      justify="center"
      direction="column"
      alignItems="center"
      mb={{ base: '50px', md: '200px', lg: '200px' }}
    >
      <Flex
        data-aos="fade-down"
        direction="column"
        textAlign="center"
        fontFamily="Sk-Modernist-Regular"
      >
        <Text id="aboutUsPageLable">ROADMAP</Text>
        <Flex id="headingIndustry">
          <Text color="#00A3FF">WeFund&nbsp;</Text>
          <Text>Roadmap</Text>
        </Flex>
      </Flex>

      {/* {/ Roadmap For Desktop /} */}
      <Flex
        mt={'2em'}
        position="relative"
        alignItems={'center'}
        flexDirection="column"
        justifyContent={'center'}
        display={{ base: 'none', md: 'flex', lg: 'flex' }}
      >
        <Image
          src="/media/RoadmapLine.svg"
          height={{ md: '175em', lg: '200em' }}
          data-aos="zoom-in-up"
        />
        <Flex
          position={'absolute'}
          alignItems={'flex-start'}
          top={{ md: '5em', lg: '10em' }}
          justifyContent={'space-between'}
          width={{ md: '40em', lg: '50em' }}
        >
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right">
            <Text
              mb={'5px'}
              mt={'-10px'}
              color="#fe8600"
              fontWeight="bolder"
              fontFamily={'PilatExtended-Bold'}
              fontSize={{ md: '18px', lg: '22px' }}
            >
              January 2022
            </Text>
            <Image src="/media/beautifulDash.svg" />
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="18px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Platform V2
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={{ md: '15px', lg: '18px' }}
            >
              <ListItem color={'green.300'}>
                Community registration system
              </ListItem>
              <ListItem color={'green.300'}>
                Community project approval by voting power
              </ListItem>
              <ListItem color={'green.300'}>
                Project creation with milestone system
              </ListItem>
              <ListItem color={'green.300'}>Multi-stage fundraising</ListItem>
              <ListItem color={'green.300'}>
                Milestone funds released with backers approval through voting
                power
              </ListItem>
              <ListItem>Customer service</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          position={'absolute'}
          alignItems={'flex-start'}
          top={{ md: '24em', lg: '33em' }}
          justifyContent={'space-between'}
          width={{ md: '40em', lg: '50em' }}
        >
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right">
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="18px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              WeFund Investment Status
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={{ md: '15px', lg: '18px' }}
            >
              <ListItem color={'green.300'}>
                Seed phase until end of January
              </ListItem>
              <ListItem color={'green.300'}>Pre-sale begins</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          top={{ md: '30em', lg: '41em' }}
          width={{ md: '40em', lg: '50em' }}
        >
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right">
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="18px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Project Incubation
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={{ md: '15px', lg: '18px' }}
            >
              <ListItem>Bakso Mania Seed Phase</ListItem>
              <ListItem>Pandai Crypto Seed Phase</ListItem>
              <ListItem>LynxVR Seed Phase</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          top={{ md: '38em', lg: '50em' }}
          width={{ md: '40em', lg: '50em' }}
        >
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right">
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="18px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Documentation
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={{ md: '15px', lg: '18px' }}
            >
              <ListItem color={'green.300'}>Release Whitepaper 2.0</ListItem>
              <ListItem color={'green.300'}>Update Litepaper</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          top={{ md: '45em', lg: '61em' }}
          width={{ md: '40em', lg: '50em' }}
        >
          <Flex className="RoadmapContent2" data-aos="fade-left">
            <Text
              mb={'5px'}
              mt={'-10px'}
              color="#fe8600"
              fontWeight="bolder"
              fontFamily={'PilatExtended-Bold'}
              fontSize={{ md: '18px', lg: '22px' }}
            >
              February 2022
            </Text>
            <Image src="/media/beautifulDash.svg" />
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="18px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Platform V3
            </Text>
            <UnorderedList
              mb="20px"
              dir="rtl"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={{ md: '15px', lg: '18px' }}
            >
              <ListItem color={'green.300'}>
                Set up community allocation
              </ListItem>
              <ListItem color={'green.300'}>
                Set up WeFund holder allocation
              </ListItem>
              <ListItem color={'green.300'}>Set up staking mechanism</ListItem>
            </UnorderedList>
          </Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent"></Flex>
        </Flex>
        <Flex
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          top={{ md: '58em', lg: '76em' }}
          width={{ md: '40em', lg: '50em' }}
        >
          <Flex className="RoadmapContent2" data-aos="fade-left">
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="18px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              WeFund Investment Status
            </Text>
            <UnorderedList
              mb="20px"
              dir="rtl"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={{ md: '15px', lg: '18px' }}
            >
              <ListItem>Presale phase until end of February</ListItem>
              <ListItem>Marketing for IWO (ICO/IDO)</ListItem>
            </UnorderedList>
          </Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent"></Flex>
        </Flex>
        <Flex
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          top={{ md: '64em', lg: '83em' }}
          width={{ md: '40em', lg: '50em' }}
        >
          <Flex className="RoadmapContent2" data-aos="fade-left">
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="18px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Project Incubation
            </Text>
            <UnorderedList
              mb="20px"
              dir="rtl"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={{ md: '15px', lg: '18px' }}
            >
              <ListItem>Real World Projects (Details coming soon)</ListItem>
            </UnorderedList>
          </Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent"></Flex>
        </Flex>
        <Flex
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          top={{ md: '71em', lg: '88em' }}
          width={{ md: '40em', lg: '50em' }}
        >
          <Flex className="RoadmapContent2" data-aos="fade-left">
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="18px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Documentation
            </Text>
            <UnorderedList
              mb="20px"
              dir="rtl"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={{ md: '15px', lg: '18px' }}
            >
              <ListItem>Release Whitepaper 3.0</ListItem>
              <ListItem>Update Litepaper</ListItem>
            </UnorderedList>
          </Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent"></Flex>
        </Flex>
        <Flex
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          top={{ md: '78em', lg: '95em' }}
          width={{ md: '40em', lg: '50em' }}
        >
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right">
            <Text
              mb={'5px'}
              mt={'-10px'}
              color="#fe8600"
              fontWeight="bolder"
              fontFamily={'PilatExtended-Bold'}
              fontSize={{ md: '18px', lg: '22px' }}
            >
              March 2022
            </Text>
            <Image src="/media/beautifulDash.svg" />
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="18px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              WeFund Investment Status
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={{ md: '15px', lg: '18px' }}
            >
              <ListItem>IWO (ICO/IDO)</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          top={{ md: '87em', lg: '105em' }}
          width={{ md: '40em', lg: '50em' }}
        >
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent">
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="18px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Project Incubation
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={{ md: '15px', lg: '18px' }}
            >
              <ListItem>Sport industry first project - Seed phase</ListItem>
              <ListItem>Game industry first project - Seed phase</ListItem>
              <ListItem>Creative industry first project - Seed phase</ListItem>
              <ListItem>
                Real estate industry first project - Seed phase
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          top={{ md: '102em', lg: '120em' }}
          width={{ md: '40em', lg: '50em' }}
        >
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent">
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="18px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Q1 2022
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={{ md: '15px', lg: '18px' }}
            >
              <ListItem color={'green.300'}>
                Community registration system
              </ListItem>
              <ListItem color={'green.300'}>Platform launch 1.0</ListItem>
              <ListItem color={'green.300'}>
                WeFund project approval by voting power
              </ListItem>
              <ListItem color={'green.300'}>
                Project creation with milestone system
              </ListItem>
              <ListItem color={'green.300'}>Multi-stage fundraising</ListItem>
              <ListItem color={'green.300'}>
                Milestone funds released with backers approval through voting
                power
              </ListItem>
              <ListItem color={'green.300'}>
                Starting real-world project + Crypto projects incubation (10 at
                this moment)
              </ListItem>
              <ListItem color={'green.300'}>Release Whitepaper 2.0</ListItem>
              <ListItem color={'green.300'}>Update Litepaper</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          top={{ md: '123em', lg: '145em' }}
          width={{ md: '40em', lg: '50em' }}
        >
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent">
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="18px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Q2 2022
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={{ md: '15px', lg: '18px' }}
            >
              <ListItem>
                Closing private round for WeFund (seed and presale)
              </ListItem>
              <ListItem>Hackathon by WeFund for crypto projects</ListItem>
              <ListItem color={'green.300'}>Platform update 2.0</ListItem>
              <ListItem>Have 10 projects hosted on WeFund</ListItem>
              <ListItem>
                Start the fundraising for the first 10 project
              </ListItem>
              <ListItem>Real-world project implementation</ListItem>
              <ListItem>Staking system with NFT card ready to use</ListItem>
              <ListItem>Having a successful TGE</ListItem>
              <ListItem>Release Whitepaper 3.0</ListItem>
              <ListItem>Update Litepaper</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          top={{ md: '146em', lg: '170em' }}
          width={{ md: '40em', lg: '50em' }}
        >
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent">
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="18px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Q3 2022
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={{ md: '15px', lg: '18px' }}
            >
              <ListItem>
                Have successful fundraising for the first 10 projects
              </ListItem>
              <ListItem>
                Have new 10 projects hosted on WeFund (5 real world)
              </ListItem>
              <ListItem>Platform update 3.0</ListItem>
              <ListItem>
                Accepting all the stable coin payment + Visa/Mastercard
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          top={{ md: '160em', lg: '185em' }}
          width={{ md: '40em', lg: '50em' }}
        >
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent">
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="18px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Q4 2022
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={{ md: '15px', lg: '18px' }}
            >
              <ListItem>
                Have successful fundraising for the first 10 projects
              </ListItem>
              <ListItem>Platform update 3.0</ListItem>
              <ListItem>Starting real-world project incubation</ListItem>
              <ListItem>Platform update 4.0</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
      {/* {/ Roadmap For Desktop /} */}

      {/* {/ Roadmap For Mobile /} */}
      <Flex
        mb="0"
        mt="2em"
        width={'85%'}
        position="relative"
        alignItems="flex-start"
        flexDirection={'column'}
        justifyContent={'flex-start'}
        display={{ base: 'flex', md: 'none', lg: 'none' }}
      >
        <Image src="/media/RoadmapLine.svg" height={'105em'} />
        <Flex
          top={'3em'}
          left=".2em"
          width={'100%'}
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
        >
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right" width={'100%'}>
            <Text
              mb={'5px'}
              mt={'-10px'}
              color="#fe8600"
              fontSize="13px"
              fontWeight="bolder"
              fontFamily={'PilatExtended-Bold'}
            >
              January 2022
            </Text>
            <Image src="/media/beautifulDash.svg" height={'20px'} />
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="13px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Platform V2
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={'11px'}
            >
              <ListItem color={'green.300'}>
                Community registration system
              </ListItem>
              <ListItem color={'green.300'}>
                Community project approval by voting power
              </ListItem>
              <ListItem color={'green.300'}>
                Project creation with milestone system
              </ListItem>
              <ListItem color={'green.300'}>Multi-stage fundraising</ListItem>
              <ListItem color={'green.300'}>
                Milestone funds released with backers approval through voting
                power
              </ListItem>
              <ListItem>Customer service</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          left=".2em"
          top={'15em'}
          width={'100%'}
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
        >
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right" width={'100%'}>
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="13px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              WeFund Investment Status
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={'11px'}
            >
              <ListItem>Seed phase until end of January</ListItem>
              <ListItem>Pre-sale begins</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          left=".2em"
          top={'20em'}
          width={'100%'}
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
        >
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right" width={'100%'}>
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="13px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Project Incubation
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={'11px'}
            >
              <ListItem>Bakso Mania Seed Phase</ListItem>
              <ListItem>Pandai Crypto Seed Phase</ListItem>
              <ListItem>LynxVR Seed Phase</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          left=".2em"
          top={'25em'}
          width={'100%'}
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
        >
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right" width={'100%'}>
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="13px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Documentation
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={'11px'}
            >
              <ListItem color={'green.300'}>Release Whitepaper 2.0</ListItem>
              <ListItem color={'green.300'}>Update Litepaper</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          top={'30em'}
          width={'100%'}
          left=".2em"
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
        >
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right" width={'100%'}>
            <Text
              mb={'5px'}
              mt={'-10px'}
              color="#fe8600"
              fontSize="13px"
              fontWeight="bolder"
              fontFamily={'PilatExtended-Bold'}
            >
              February 2022
            </Text>
            <Image src="/media/beautifulDash.svg" height={'20px'} />
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="13px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Platform V3
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={'11px'}
            >
              <ListItem color={'green.300'}>
                Set up community allocation
              </ListItem>
              <ListItem color={'green.300'}>
                Set up WeFund holder allocation
              </ListItem>
              <ListItem color={'green.300'}>Set up staking mechanism</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          left=".2em"
          top={'39em'}
          width={'100%'}
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
        >
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right" width={'100%'}>
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="13px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              WeFund Investment Status
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={'11px'}
            >
              <ListItem>Presale phase until end of February</ListItem>
              <ListItem>Marketing for IWO (ICO/IDO)</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          left=".2em"
          top={'44em'}
          width={'100%'}
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
        >
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right" width={'100%'}>
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="13px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Project Incubation
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={'11px'}
            >
              <ListItem>Real World Projects (Details coming soon)</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          left=".2em"
          top={'47em'}
          width={'100%'}
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
        >
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right" width={'100%'}>
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="13px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Documentation
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={'11px'}
            >
              <ListItem>Release Whitepaper 3.0</ListItem>
              <ListItem>Update Litepaper</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          left=".2em"
          top={'52em'}
          width={'100%'}
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
        >
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right" width={'100%'}>
            <Text
              mb={'5px'}
              mt={'-10px'}
              color="#fe8600"
              fontSize="13px"
              fontWeight="bolder"
              fontFamily={'PilatExtended-Bold'}
            >
              March 2022
            </Text>
            <Image src="/media/beautifulDash.svg" height={'20px'} />
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="13px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              WeFund Investment Status
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={'11px'}
            >
              <ListItem>IWO (ICO/IDO)</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          top={'58em'}
          width={'100%'}
          left=".2em"
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
        >
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right" width={'100%'}>
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="13px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Project Incubation
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={'11px'}
            >
              <ListItem>Sport industry first project - Seed phase</ListItem>
              <ListItem>Game industry first project - Seed phase</ListItem>
              <ListItem>Creative industry first project - Seed phase</ListItem>
              <ListItem>
                Real estate industry first project - Seed phase
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          left=".2em"
          top={'64em'}
          width={'100%'}
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
        >
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right" width={'100%'}>
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="13px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Q1 2022
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={'11px'}
            >
              <ListItem color={'green.300'}>
                Community registration system
              </ListItem>
              <ListItem color={'green.300'}>Platform launch 1.0</ListItem>
              <ListItem color={'green.300'}>
                WeFund project approval by voting power
              </ListItem>
              <ListItem color={'green.300'}>
                Project creation with milestone system
              </ListItem>
              <ListItem color={'green.300'}>Multi-stage fundraising</ListItem>
              <ListItem color={'green.300'}>
                Milestone funds released with backers approval through voting
                power
              </ListItem>
              <ListItem color={'green.300'}>
                Starting real-world project + Crypto projects incubation (10 at
                this moment)
              </ListItem>
              <ListItem color={'green.300'}>Release Whitepaper 2.0</ListItem>
              <ListItem color={'green.300'}>Update Litepaper</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          left=".2em"
          top={'77em'}
          width={'100%'}
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
        >
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right" width={'100%'}>
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="13px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Q2 2022
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={'11px'}
            >
              <ListItem>
                Closing private round for WeFund (seed and presale)
              </ListItem>
              <ListItem>Hackathon by WeFund for crypto projects</ListItem>
              <ListItem color={'green.300'}>Platform update 2.0</ListItem>
              <ListItem>Have 10 projects hosted on WeFund</ListItem>
              <ListItem>
                Start the fundraising for the first 10 project
              </ListItem>
              <ListItem>Real-world project implementation</ListItem>
              <ListItem>Staking system with NFT card ready to use</ListItem>
              <ListItem>Having a successful TGE</ListItem>
              <ListItem>Release Whitepaper 3.0</ListItem>
              <ListItem>Update Litepaper</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          top={'90em'}
          left=".2em"
          width={'100%'}
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
        >
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right" width={'100%'}>
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="13px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Q3 2022
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontFamily="Sk-Modernist-Regular"
              fontSize={'11px'}
            >
              <ListItem>
                Have successful fundraising for the first 10 projects
              </ListItem>
              <ListItem>
                Have new 10 projects hosted on WeFund (5 real world)
              </ListItem>
              <ListItem>Platform update 3.0</ListItem>
              <ListItem>
                Accepting all the stable coin payment + Visa/Mastercard
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          top={'98em'}
          width={'100%'}
          left=".2em"
          position={'absolute'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
        >
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right" width={'100%'}>
            <Text
              mb={'15px'}
              mt={'-5px'}
              color={'white'}
              fontSize="13px"
              fontWeight="bolder"
              fontFamily="Sk-Mondernist-Bold"
            >
              Q4 2022
            </Text>
            <UnorderedList
              mb="20px"
              mr={'15px'}
              mt={'-10px'}
              color="#aea3b2"
              fontSize={'11px'}
              fontFamily="Sk-Modernist-Regular"
            >
              <ListItem>
                Have successful fundraising for the first 10 projects
              </ListItem>
              <ListItem>Platform update 3.0</ListItem>
              <ListItem>Starting real-world project incubation</ListItem>
              <ListItem>Platform update 4.0</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
