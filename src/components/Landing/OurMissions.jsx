import React from 'react'
import { Image, Flex, Text } from '@chakra-ui/react'

export default function OurMissions() {
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
            <Text>Mission</Text>
          </Flex>
          <Text
            fontFamily="Sk-Modernist-Regular"
            id="aboutUsPageHeadingDesc"
            color="#FFFFFF8A"
          >
            WeFund's mission is to improve and ultimately solve these key
            aspects of crowdfunding
          </Text>
        </Flex>

        <Flex id="missionList">
          {PROJECT_ITEMS.map((projectItem, index) => (
            <Flex key={index} className="missionCard" data-aos="zoom-in-up">
              <Image src={projectItem.imgsrc} className="missionImage" />
              <Text className="missionTitle">{projectItem.title}</Text>
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
    title: 'Projects are approved by the community',
    description:
      'This helps to give backers what they want, and allows greater agility for projects to adjust and follow market trends.',
    imgsrc: '/media/mission/Community.jpg',
  },
  {
    title: 'Backers are protected',
    description:
      "Funds are released gradually after they are approved by the community. At the same time, this process helps to keep the team's morale and motivation high.",
    imgsrc: '/media/mission/Protect.jpg',
  },
  {
    title: 'Security',
    description:
      'By using Anchor protocol we safeguard funds from hackers and human errors, which in turn helps projects to move forward with greater peace of mind.',
    imgsrc: '/media/mission/Secure.jpg',
  },
  {
    title: 'Milestone fund release with investor approval',
    description:
      "We create a set of fundraising events along the project's development timeline, which gives credibility and a greater chance of success, and at the same time avoids collecting and risking large sums of backer funds before a project demonstrates progress.",
    imgsrc: '/media/mission/Milestone.jpg',
  },
  {
    title: 'Crowdfunding',
    description:
      'works when done with fairness, therefore we created a system to maximize the backing opportunity proportional to the number of potential backers, always guaranteeing the possibility for backers to participate.',
    imgsrc: '/media/mission/CrowdFunding.jpg',
  },
  {
    title: 'WeFund changes the game',
    description:
      ' Protects backers and at the same time protects project creators, making the whole process more secure and transparent.',
    imgsrc: '/media/mission/ChangeGame.jpg',
  },
]
