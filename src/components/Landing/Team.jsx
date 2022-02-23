import React from 'react'
import { Image, Flex, Text } from '@chakra-ui/react'

export default function Team() {
  return (
    <Flex
      width="100%"
      justify="center"
      alignItems="center"
      fontFamily="Sk-Modernist-Regular"
    >
      <Flex id="projectIndustryContainer">
        <Flex
          width="100%"
          justify="center"
          textAlign="center"
          alignItems="center"
          data-aos="fade-down"
          flexDirection="column"
          fontFamily="PilatExtended-Regular"
        >
          <Flex id="headingIndustry">
            <Text color="#00A3FF">WeFund&nbsp;</Text>
            <Text>Team</Text>
          </Flex>
        </Flex>

        <Flex id="missionList">
          {PROJECT_ITEMS.map((projectItem, index) => (
            <Flex
              p="10px"
              key={index}
              zIndex={'5'}
              position="relative"
              borderRadius="10px"
              data-aos="zoom-in-up"
              flexDirection="column"
              className="missionCard"
              my={{ base: '1%', lg: '2em' }}
              width={{ base: '100%', md: '45%', lg: '30%' }}
              background={'linear-gradient(45deg, #360847, #18075b)'}
            >
              <Image
                src={projectItem.imgsrc}
                objectFit="contain"
                width={'100%'}
              />
              <Flex my={'20px'} justify={'space-around'}>
                {projectItem.logos?.map((e) => (
                  <Image
                    src={e}
                    width={'40px'}
                    objectFit="contain"
                    background={'white'}
                    borderRadius={'3px'}
                  />
                ))}
              </Flex>
              <Flex w="100%" alignItems={'center'} justify={'space-between'}>
                <Text fontSize={'18px'} fontFamily={'PilatExtended-Regular'}>
                  {projectItem.name}
                </Text>
                <Image
                  width={'25px'}
                  height={'25px'}
                  src="/media/linkedin.png"
                  onClick={() => {
                    window.location.href = projectItem.link
                  }}
                  cursor={'pointer'}
                  background={'white'}
                  borderRadius={'6px'}
                />
              </Flex>
              <Text className="missionDesc">{projectItem.description}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

const PROJECT_ITEMS = [
  {
    name: 'Andrea Bello',
    link: 'https://www.linkedin.com/in/bello-andrea-380572b4/',
    logos: [
      '/media/Team_Companies/GE.png',
      '/media/Team_Companies/ABB.png',
      '/media/Team_Companies/AXA.png',
      '/media/Team_Companies/Zurich.png',
    ],
    description:
      'CEO of Mosquito Solution/ Bello Service / Hotel Lanca Funds Manager in Axa and Zurich Soft Developer on ABB, Ing. Maggia and General Electric',
    imgsrc: '/media/Team/wfd-andrea.jpg',
  },
  {
    name: 'Austin Taylor',
    link: 'https://www.linkedin.com/in/austintaylor19/',
    description:
      'Investment Manager at Pegasus Tech Ventures Business Analyst at Harman International Revenue Management Analyst at Holland America Line',
    imgsrc: '/media/Team/wfd-austin.jpg',
    logos: [
      '/media/Team_Companies/pegasus.png',
      '/media/Team_Companies/Harman.png',
      '/media/Team_Companies/Holland.jpeg',
    ],
  },
  {
    name: 'Ika Afifah',
    link: 'https://www.linkedin.com/in/ika-nur-afifah/',
    description:
      'Tencent > Tencent Music Entertainment > responsible in partnership and handling clients, Bigo > agency management specialist > handling client, Waves > as manager of Indonesia,  helped co founders to get $1.2M in pre seed funding',
    imgsrc: '/media/Team/wfd-ika.jpg',
    logos: [
      '/media/Team_Companies/waves.jpeg',
      '/media/Team_Companies/TME.png',
      '/media/Team_Companies/Tencent.jpeg',
      '/media/Team_Companies/Bigo.jpeg',
    ],
  },
  {
    name: 'Jason Galvin',
    link: 'https://www.linkedin.com/in/jasongalvin/',
    description: 'Senior Software Engineer at GoPro',
    imgsrc: '/media/Team/wfd-jason.jpg',
    logos: ['/media/Team_Companies/GoPro.jpeg'],
  },
]
