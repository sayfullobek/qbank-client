'use client'

import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { feedbackData } from '../../../../data/default/data'
import { FaStar } from 'react-icons/fa'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

function FeedbackSection() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      '(min-width: 768px)': { slides: { perView: 2, spacing: 24 } },
      '(min-width: 1200px)': { slides: { perView: 3, spacing: 32 } },
    },
  })

  return (
    <section data-aos='fade-up' id='feedback'>
      <Box className="customContainer">
        <Box paddingBottom={'40px'}>
          <Heading paddingTop={'60px'} textAlign={'center'}>
            Our client&apos;s feedback
          </Heading>
          <p className='text-center text-gray-400'>Read our clients&apos; reviews and learn what they have to say about Dental Soft.</p>
        </Box>
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition border-4 border-white dark:border-black"
            aria-label="Previous"
            type="button"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 22l-8-8 8-8"/></svg>
          </button>
          {/* Carousel */}
          <div ref={sliderRef} className="keen-slider py-2">
            {feedbackData.map((card, idx) => (
              <div key={idx} className="keen-slider__slide flex flex-col bg-transparent border border-gray-800 rounded-2xl p-6 min-w-[280px] max-w-[370px] flex-shrink-0 shadow-md mx-auto transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📢</span>
                  <span className="font-bold text-lg">{card.name}</span>
                </div>
                <div className="text-sm text-gray-400 mb-2">{card.title} {card.clinic && <span className="text-gray-500">&quot;{card.clinic}&quot;</span>}</div>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({length: card.rating}).map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
                </div>
                <div className="text-base">{card.comment}</div>
              </div>
            ))}
          </div>
          {/* Right arrow */}
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition border-4 border-white dark:border-black"
            aria-label="Next"
            type="button"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 6l8 8-8 8"/></svg>
          </button>
        </div>
      </Box>
    </section>
  )
}

export default FeedbackSection