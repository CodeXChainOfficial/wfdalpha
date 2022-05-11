import * as React from 'react';
import {
  Container,
  Heading,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link
} from '@chakra-ui/react';

const CampaignIntro = () => {
  return (
    <Container maxW="5xl" px={{ base: 3, md: 1 }} py={10}>
      <Stack direction={{ base: 'column-reverse', md: 'row' }} justifyContent={"center"}>
        <Stack direction="column" spacing={6} mr={6} pl={6}>
          <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            textAlign="left"
          >
            WeFund Beta Testing with Angel Protocol
          </Heading>
          <Text
            color={'gray.400'}
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="300"
          >
            WeFund to enter testing phase with Angel Protocol aimed to ensure functionality of WeFund in a public testing while raising funds for Angel Protocol
          </Text>
          <HStack spacing={5}>
            <Button 
              colorScheme="blue" 
              variant="solid" 
              size="md" 
              rounded="md" 
              as={Link} 
              href={'/detail?project_id=7'}>
                Start Backing Test
            </Button>
            <Box
              border="1px solid"
              borderColor="gray.300"
              p={2}
              lineHeight={1.18}
              rounded="md"
              boxShadow="md"
              as={Link}
              href={'https://docs.google.com/document/d/1WVI9YaNqOU11XZnF_rFVllefleJYBdg34F6R6yr724k/edit?usp=sharing'}
            >
              Report Issues
            </Box>
          </HStack>
        </Stack>
        <Box ml={{ base: 0, md: 5 }}>
          <Image
          alignSelf={'flex-end'}
            
            w="50%"
            minW={{ base: 'auto', md: '20rem' }}
            objectFit="cover"
            src="media/partners/Angelcampaign.png"
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default CampaignIntro;