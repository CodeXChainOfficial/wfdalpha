import * as React from 'react';
import { chakra, Link, Stack, Box, Button, useColorModeValue } from '@chakra-ui/react';

const CampaignAbout = () => {
  return (
    <Box pb={8} mt={8}>
      <Box p={4} isolation="isolate" zIndex={3} mt="-10rem" marginInline="auto">
        <Box
          p={{ base: 4, sm: 8 }}
          overflow="hidden"
          rounded="2xl"
        >
          <Stack pos="relative" zIndex={1} direction="column" spacing={5} textAlign="left">
            <chakra.h1 fontSize="3xl" lineHeight={1.2} fontWeight="bold">
              About Angel Protocol
            </chakra.h1>
            <chakra.h1 color="gray.400" fontSize="xl"  lineHeight={1.2} >
              Anchor Protocol is Angel Protocol provides charities across the world, large and small and with a huge variety of aims, with their own free endowments.
               This enables them to connect to more donors, provides them with a more reliable income stream and allows them to spend less time on fundraising and more time to focus on what they do best. 
               <br/><br/> 
               Donations are directed to a charity’s Angel Protocol account and automatically invested in low-risk, high-yielding products made possible by blockchain technologies (also known as Decentralized Finance or DeFi). 
               Every week, a portion of the interest from those DeFi products is sent to the charity and the remainder is automatically reinvested, compounding in perpetuity
            </chakra.h1>

            <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>
              <Button
                color="white"
                variant="solid"
                rounded="md"
                lineHeight={1}
                bg="blue.400"
                _hover={{ bg: 'blue.600' }}
              >
                Visit Angel Protocol
              </Button>
              
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default CampaignAbout;