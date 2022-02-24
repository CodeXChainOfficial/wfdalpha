import { Flex, Image, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import React from 'react'

export default function Roadmap() {
  return (
    <Flex
      w="100%"
      pt="47px"
      mt="100px"
      mb="200px"
      justify="center"
      direction="column"
      alignItems="center"
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
      <Flex id="RoadMapDesktop">
        <Image
          src="/media/RoadmapLine.svg"
          height={'60em'}
          data-aos="zoom-in-up"
        />
        <Flex id="roadmapBox1">
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right">
            <Text className="RoadmapHeading">Q1 2022</Text>
            <Image src="/media/beautifulDash.svg" />
            <UnorderedList className="RoadmapDesc">
              <ListItem>Complete fundraising</ListItem>
              <ListItem>Having a successful TGE</ListItem>
              <ListItem>Platform launch 1.0</ListItem>
              <ListItem>Hackathon by weFund for crypto projects</ListItem>
              <ListItem>Fundraising for the project hosted on WeFund</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex id="roadmapBox2">
          <Flex className="RoadmapContent2" data-aos="fade-right">
            <Text className="RoadmapHeading">Q2 2022</Text>
            <Image src="/media/beautifulDash.svg" />
            <Text className="RoadmapTitle">success</Text>
            <UnorderedList className="RoadmapDesc">
              <ListItem>Fundraising for the project hosted on WeFund</ListItem>
              <ListItem>Platform update 2.0</ListItem>
              <ListItem>Have 10 projects hosted on WeFund</ListItem>
              <ListItem>Real-world project implementation</ListItem>
            </UnorderedList>
          </Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent"></Flex>
        </Flex>
        <Flex id="roadmapBox3">
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right">
            <Text className="RoadmapHeading">Q3 2022</Text>
            <Image src="/media/beautifulDash.svg" />
            <UnorderedList className="RoadmapDesc">
              <ListItem>
                Have successful fundraising for the first 10 projects
              </ListItem>
              <ListItem>Platform update 3.0</ListItem>
              <ListItem>Starting real-world project incubation</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex id="roadmapBox4">
          <Flex className="RoadmapContent2">
            <Text className="RoadmapHeading">Q4 2022</Text>
            <Image src="/media/beautifulDash.svg" />
            <UnorderedList className="RoadmapDesc">
              <ListItem>
                Have successful fundraising for real-world projects
              </ListItem>
              <ListItem>
                Startup pitch competition for real-world projects
              </ListItem>
              <ListItem>Platform update 4.0</ListItem>
            </UnorderedList>
          </Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right"></Flex>
        </Flex>
      </Flex>
      {/* {/ Roadmap For Desktop /} */}

      {/* {/ Roadmap For Mobile /} */}
      <Flex id="RoadMapMobile">
        <Image src="/media/RoadmapLine.svg" id="roadMapLineId" />
        <Flex id="roadmapBox1">
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right">
            <Text className="RoadmapHeading">Q1 2022</Text>
            <Image src="/media/beautifulDash.svg" height={"20px"} />
            <UnorderedList className="RoadmapDesc">
              <ListItem>Complete fundraising</ListItem>
              <ListItem>Having a successful TGE</ListItem>
              <ListItem>Platform launch 1.0</ListItem>
              <ListItem>Hackathon by weFund for crypto projects</ListItem>
              <ListItem>Fundraising for the project hosted on WeFund</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex id="roadmapBox2">
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right">
            <Text className="RoadmapHeading">Q2 2022</Text>
            <Image src="/media/beautifulDash.svg" height={"20px"} />
            <Text className="RoadmapTitle">success</Text>
            <UnorderedList className="RoadmapDesc">
              <ListItem>Fundraising for the project hosted on WeFund</ListItem>
              <ListItem>Platform update 2.0</ListItem>
              <ListItem>Have 10 projects hosted on WeFund</ListItem>
              <ListItem>Real-world project implementation</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex id="roadmapBox3">
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right">
            <Text className="RoadmapHeading">Q3 2022</Text>
            <Image src="/media/beautifulDash.svg" height={"20px"} />
            <UnorderedList className="RoadmapDesc">
              <ListItem>
                Have successful fundraising for the first 10 projects
              </ListItem>
              <ListItem>Platform update 3.0</ListItem>
              <ListItem>Starting real-world project incubation</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex id="roadmapBox4">
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right">
            <Text className="RoadmapHeading">Q4 2022</Text>
            <Image src="/media/beautifulDash.svg" height={"20px"} />
            <UnorderedList className="RoadmapDesc">
              <ListItem>
                Have successful fundraising for real-world projects
              </ListItem>
              <ListItem>
                Startup pitch competition for real-world projects
              </ListItem>
              <ListItem>Platform update 4.0</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
