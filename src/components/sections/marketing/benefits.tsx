import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { listDataFifthList, listDataFourthList, listDataThirdList } from '../../../../data/default/data'

function BenefitSection() {
  return (
    <section data-aos='fade-u'>
      <Box className="customContainer">
        <Box paddingBottom={'70px'}>
          <Heading paddingTop={'80px'} textAlign={'start'}>
            Key benefits of the system
          </Heading>
        </Box>
        <Box>
          <Box borderBottom={'1px solid #555b65'} paddingY={'20px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'row'}>
            <Box display={'flex'} gap={'20px'} paddingBottom={'10px'}>
              {/* number of lists */}
              <Box
                width="40px"
                height="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="8px"
                fontSize="20px"
                fontWeight="bold"
                className='gradient-bg'
              >
                1
              </Box>
              <Heading className='fira-font' fontWeight={'semibold'} fontSize={'24px'}>Patient data management</Heading>
            </Box>
            <Box paddingLeft={'20px'} paddingBottom={'25px'}>
              <p className='font-semibold'>Paperless system – patient history is always at your fingertips!</p>
            </Box>
          </Box>
          <Box borderBottom={'1px solid #555b65'} paddingY={'20px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'row'}>
            <Box display={'flex'} gap={'20px'} paddingBottom={'10px'}>
              {/* number of lists */}
              <Box
                width="40px"
                height="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="8px"
                fontSize="20px"
                fontWeight="bold"
                className='gradient-bg'
              >
                2
              </Box>
              <Heading className='fira-font' fontWeight={'semibold'} fontSize={'24px'}>Reports and analytics</Heading>
            </Box>
            <Box paddingLeft={'20px'} paddingBottom={'25px'}>
              <p className='font-semibold'>Accurately track your clinic&apos;s growth!</p>
            </Box>
          </Box>
          <Box borderBottom={'1px solid #555b65'} paddingY={'20px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'row'}>
            <Box display={'flex'} gap={'20px'} paddingBottom={'10px'} width={'full'}>
              {/* number of lists */}
              <Box
                width="40px"
                height="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="8px"
                fontSize="20px"
                fontWeight="bold"
                className='gradient-bg'
              >
                3
              </Box>
              <Heading className='fira-font' fontWeight={'semibold'} fontSize={'24px'}>Inventory system</Heading>
            </Box>
            <Box paddingLeft={'20px'} paddingBottom={'25px'}>
                <ul className='list-disc font-semibold'>
                  {listDataThirdList && listDataThirdList.map((item, i) => {
                    return (
                      <li key={i}>
                        {item.name}
                      </li>
                    )
                  })}
                </ul>
            </Box>
          </Box>
          <Box borderBottom={'1px solid #555b65'} paddingY={'20px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'row'}>
            <Box display={'flex'} gap={'20px'} paddingBottom={'10px'}>
              {/* number of lists */}
              <Box
                width="40px"
                height="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="8px"
                fontSize="20px"
                fontWeight="bold"
                className='gradient-bg'
              >
                4
              </Box>
              <Heading className='fira-font' fontWeight={'semibold'} fontSize={'24px'}>Patient data management</Heading>
            </Box>
            <Box paddingLeft={'20px'} paddingBottom={'25px'}>
                <ul className='list-disc font-semibold'>
                  {listDataFourthList && listDataFourthList.map((item, i) => {
                    return (
                      <li key={i}>
                        {item.name}
                      </li>
                    )
                  })}
                </ul>
            </Box>
          </Box>
          <Box paddingY={'20px'} marginBottom={'70px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'row'}>
            <Box display={'flex'} gap={'20px'} paddingBottom={'10px'}>
              {/* number of lists */}
              <Box
                width="40px"
                height="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="8px"
                fontSize="20px"
                fontWeight="bold"
                className='gradient-bg'
              >
                5
              </Box>
              <Heading className='fira-font' fontWeight={'semibold'} fontSize={'24px'}>Patient data management</Heading>
            </Box>
            <Box paddingLeft={'20px'} paddingBottom={'25px'}>
                <ul className='list-disc font-semibold'>
                  {listDataFifthList && listDataFifthList.map((item, i) => {
                    return (
                      <li key={i}>
                        {item.name}
                      </li>
                    )
                  })}
                </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  )
}

export default BenefitSection