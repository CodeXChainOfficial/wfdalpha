import * as React from 'react'
import { Image, Link, Flex } from '@chakra-ui/react'

export default function Partner({ link, img }) {
  return (
    <Link href={link}>
      <Flex
        background={'linear-gradient(180deg, #FFFFFF 0%, #A98FE0 100%)'}
        width={{ base: '23vw', md: '20vw', lg: '15vw' }}
        height={{ base: '23vw', md: '20vw', lg: '15vw' }}
        mb={'10px'}
        borderRadius={{ base: '15px', md: '20px', lg: '25px' }}
      >
        <Image src={img} objectFit="contain" />
      </Flex>
    </Link>
  )
}
