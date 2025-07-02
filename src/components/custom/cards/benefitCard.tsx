import { Box, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

function BenefitCard({imageUrl, name, description, imgW, imgH}: {imageUrl: string, name: string, description: string,imgW: number, imgH: number}) {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={'10px'} marginBottom={'35px'} >
        <Box paddingBottom={'5px'}>
            <Image className='object-cover' width={imgW} height={imgH} src={imageUrl} alt='MedStone'></Image>
        </Box>
        <Box paddingBottom={'7px'}>
            <Heading fontSize={'20px'}>{name}</Heading>
        </Box>
        <Box width={'95%'} fontWeight={'semibold'} fontSize={'17px'}>
            <p>{description}</p>
        </Box>
    </Box>
  )
}

export default BenefitCard