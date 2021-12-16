import React from "react";
import {
  chakra,
  Text,
  Button,
  Box,
  Image,
  Flex,
  Icon,
  HStack,
  VStack,
  Heading,
  useColorModeValue
} from "@chakra-ui/react";

import { MdHeadset, MdEmail, MdLocationOn, MdWork, MdWeb, MdWebStories } from "react-icons/md";
import { BsArrow90DegRight, BsFillBriefcaseFill } from "react-icons/bs";

const Projectfeature = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      overflow={"hidden"}
      marginBottom = {"100px"}
    >
      <VStack>
      <Flex>
        <HStack>
          <Flex maxW={"485px"} alignSelf={"flex-start"} >
          <Image
                alt={'Wefund'}
                src={
                  'featuredh.svg'
                }
              />
          </Flex>
          <Flex>
          <Button bg={"linear-gradient(180deg, rgba(0, 193, 255, 0.1) 0%, rgba(0, 193, 255, 0.1) 100%)"} width= "180px"
height= "50px" alignSelf={"flex-end"} 
border={"1.5px solid"}
borderColor={" #0047FF"} borderRadius={"40px"} backdropBlur={"54px"}> 
            Browse Projects
            </Button></Flex>
      </HStack>
      </Flex>
      <HStack spacing={8}>
      <Box
        w= "515px"
        h= "277px"
        mx="auto"
        bg={"rgba(255, 255, 255, 0.1)"}
        border= "1.5px solid rgba(255, 255, 255, 0.2)"
        boxSizing="border-box"
        borderRadius={"4xl"}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      ><HStack>
        <Flex 
        my={"6px"}
        mx={"6px"}
        width="165px"
        height="265px"
        bg="#FFFFFF"
        boxShadow={"0px 2px 10px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)"}
        borderRadius={"2xl"}
        px="30px"
        py="60px">
        
        <Image
        height="80px"
        src="lynx.jpeg"
        alt="avatar"
        />
        </Flex>

        <Box py={4} px={2}>
          
        <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            Lynx Vr
          </chakra.h1>
          <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
          Lynx VR: A charity project of a simulation game  based on VR
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon
              as={MdWebStories}
              h={6}
              w={6}
              mr={2}
            />

            <chakra.h1 px={2} fontSize="sm">
              Charity Project
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              Cardano
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdWork} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              -\
            </chakra.h1>
          </Flex>
        </Box>
        </HStack>
      </Box>
      <Box
        w= "515px"
        h= "277px"
        mx="auto"
        bg={"rgba(255, 255, 255, 0.1)"}
        border= "1.5px solid rgba(255, 255, 255, 0.2)"
        boxSizing="border-box"
        borderRadius={"20px"}
        marginLeft={"25px"}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      ><HStack>
        <Flex 
        my={"6px"}
        mx={"6px"}
        width="165px"
        height="265px"
        bg="#FFFFFF"
        boxShadow={"0px 2px 10px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)"}
        borderRadius={"2xl"}
        px="30px"
        py="60px">
        
        <Image
        height="80px"
        src="lynx.jpeg"
        alt="avatar"
        />
        </Flex>

        <Box py={4} px={2}>
          
        <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            Lynx Vr
          </chakra.h1>
          <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
          Lynx VR: A charity project of a simulation game  based on VR
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon
              as={MdWebStories}
              h={6}
              w={6}
              mr={2}
            />

            <chakra.h1 px={2} fontSize="sm">
              Charity Project
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              Cardano
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdWork} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              -\
            </chakra.h1>
          </Flex>
        </Box>
        </HStack>
      </Box>
      <Box
        w= "515px"
        h= "277px"
        mx="auto"
        bg={"rgba(255, 255, 255, 0.1)"}
        border= "1.5px solid rgba(255, 255, 255, 0.2)"
        boxSizing="border-box"
        borderRadius={"20px"}
        marginLeft={"25px"}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      ><HStack>
        <Flex 
        my={"6px"}
        mx={"6px"}
        width="165px"
        height="265px"
        bg="#FFFFFF"
        boxShadow={"0px 2px 10px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)"}
        borderRadius={"2xl"}
        px="30px"
        py="60px">
        
        <Image
        height="80px"
        src="lynx.jpeg"
        alt="avatar"
        />
        </Flex>

        <Box py={4} px={2}>
          
        <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            Lynx Vr
          </chakra.h1>
          <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
          Lynx VR: A charity project of a simulation game  based on VR
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon
              as={MdWebStories}
              h={6}
              w={6}
              mr={2}
            />

            <chakra.h1 px={2} fontSize="sm">
              Charity Project
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              Cardano
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdWork} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              -\
            </chakra.h1>
          </Flex>
        </Box>
        </HStack>
      </Box>
      <Box
        w= "515px"
        h= "277px"
        mx="auto"
        bg={"rgba(255, 255, 255, 0.1)"}
        border= "1.5px solid rgba(255, 255, 255, 0.2)"
        boxSizing="border-box"
        borderRadius={"20px"}
        marginLeft={"25px"}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      ><HStack>
        <Flex 
        my={"6px"}
        mx={"6px"}
        width="165px"
        height="265px"
        bg="#FFFFFF"
        boxShadow={"0px 2px 10px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)"}
        borderRadius={"2xl"}
        px="30px"
        py="60px">
        
        <Image
        height="80px"
        src="lynx.jpeg"
        alt="avatar"
        />
        </Flex>

        <Box py={4} px={2}>
          
        <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            Lynx Vr
          </chakra.h1>
          <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
          Lynx VR: A charity project of a simulation game  based on VR
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon
              as={MdWebStories}
              h={6}
              w={6}
              mr={2}
            />

            <chakra.h1 px={2} fontSize="sm">
              Charity Project
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              Cardano
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdWork} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              -\
            </chakra.h1>
          </Flex>
        </Box>
        </HStack>
      </Box>
      </HStack>
      </VStack>
      
      
    </Flex>
  );
};

export default Projectfeature;