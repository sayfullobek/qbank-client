import React from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Heading, useColorModeValue } from '@chakra-ui/react'
import { faqData } from '../../../../data/default/data'

function FAQSection() {
  const bg = useColorModeValue('#f6f8fb', '#24272e')
  return (
    <section className="py-12" style={{backgroundColor: bg}}>
      <div className="max-w-4xl mx-auto px-2">
        <Heading as="h2" size="lg" textAlign="center" mb={8}>
          Frequently Asked Questions (FAQ)
        </Heading>
        <Accordion allowMultiple>
          {faqData.map((item, idx) => (
            <AccordionItem key={idx} border="none" mb={4} borderRadius="xl" bg="white" _dark={{ bg: 'gray.900' }}>
              <h2>
                <AccordionButton borderRadius="xl" _expanded={{ bg: 'gray.800'}} px={6} py={5}>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} px={6}>
                {item.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQSection