'use client'

import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const tariffs = [
  {
    name: 'START',
    price: "120 000 so'm",
    period: '/ 1oy',
    description: 'Saytov - cheksiz SSL sertifikati bepul Trafik - cheksiz',
    features: [
      'Barcha modullar',
      'Tranzaksiyalar tarixi',
      'Mahsulotlar',
      'Mijozlar',
      'Fotosuratlarni saqlash',
      '24/7 qo\'llab-quvvatlash',
    ],
    badgeColor: 'bg-cyan-500',
    buttonColor: 'bg-blue-500',
    buttonText: 'Select',
    footnote: '* 3-month prepayment',
    guarantee: true,
  },
  {
    name: 'ADVANCED',
    price: "220 000 so'm",
    period: '/ 1oy',
    description: 'Saytov - cheksiz SSL sertifikati bepul Trafik - cheksiz',
    features: [
      'Start tarifidagi hamma narsa',
      'Sotuvchi sayt (Landing Page)',
      'Shifokor mobil ilovasi',
      'Online bron qilish',
    ],
    badgeColor: 'bg-blue-500',
    buttonColor: 'bg-blue-500',
    buttonText: 'Select',
    footnote: '* 3-month prepayment',
    guarantee: true,
  },
]

function TariffsSection() {
  const router = useRouter()
  const bg = useColorModeValue('#fff', '#24272e')
  return (
    <section data-aos='fade-up' className='mb-10' id='tariffs'>
      <Box className="customContainer">
        <Box paddingBottom={'40px'}>
          <Heading paddingTop={'60px'} textAlign={'center'}>
            Our tariffs
          </Heading>
          <p className='text-center text-gray-400'>A single platform for automating appointments, managing patients, and optimizing billing and reporting</p>
        </Box>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {tariffs.map((tariff, idx) => (
            <div key={tariff.name} className="flex flex-col rounded-2xl shadow-xl border border-gray-700 max-w-lg w-full p-6 relative min-h-[540px]" style={{background: bg}}>
              {/* Badge */}
              <span className={`absolute -top-4 left-6 px-5 py-1 rounded-full  font-bold text-sm ${tariff.badgeColor}`}>{tariff.name}</span>
              {/* Price */}
              <div className="mt-6 mb-2 text-3xl font-bold ">{tariff.price} <span className="text-lg font-normal text-gray-300">{tariff.period}</span></div>
              <div className=" text-sm mb-4">{tariff.description}</div>
              {/* Features */}
              <div className="mb-4">
                <div className="font-semibold  mb-2">Includes:</div>
                <ul className="space-y-2">
                  {tariff.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-base ">
                      <FaCheckCircle className="text-cyan-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Bottom section: guarantee, button, footnote */}
              <div className="flex flex-col gap-3 mt-auto">
                {tariff.guarantee && (
                  <div className="flex items-center justify-center border border-green-500 rounded-lg py-2">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    <span className="text-green-400 font-semibold">Money-back guarantee</span>
                  </div>
                )}
                <button className="w-full py-2 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-400 transition" onClick={() => router.push('/login')}>Select</button>
                <div className="text-xs text-red-400 text-center">{tariff.footnote}</div>
              </div>
            </div>
          ))}
        </div>
      </Box>
    </section>
  )
}

export default TariffsSection