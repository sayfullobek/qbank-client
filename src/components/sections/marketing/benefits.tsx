import React from 'react';
import { Check, Database, BarChart3, Package, Users, Shield } from 'lucide-react';
import { useColorModeValue } from '@chakra-ui/react';
import { listDataFifthList, listDataFourthList, listDataThirdList } from '../../../../data/default/data'

const benefits = [
  {
    id: 1,
    title: 'Patient Data Management',
    description: 'Paperless system – patient history is always at your fingertips!',
    icon: Database,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Reports and Analytics',
    description: 'Accurately track your clinic\'s growth!',
    icon: BarChart3,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Inventory System',
    description: null,
    list: listDataThirdList,
    icon: Package,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    title: 'Patient Management',
    description: null,
    list: listDataFourthList,
    icon: Users,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    title: 'Security & Compliance',
    description: null,
    list: listDataFifthList,
    icon: Shield,
    color: 'from-indigo-500 to-blue-500'
  }
];

function BenefitSection() {
  const bg = useColorModeValue('#fafcff', '#0a0a0aaf')
  const text = useColorModeValue('black', 'white')

  return (
    <section className={`py-20 ${bg === "#0a0a0aaf" ? "bg-[#0a0a0aaf]" : "bg-white"} relative overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-lg">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-[${text}] mb-4 leading-tight`}>
            Key Benefits of the
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> System</span>
          </h2>
          <p className={`text-xl pt-6 text-[${text}] text-center`}>
            Discover how our comprehensive healthcare management system <br /> can transform your clinic operations and improve patient care.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className={`group relative ${bg === "#0a0a0aaf" ? "bg-[#0a0a0aaf]" : "bg-white"} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100`}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>

                <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  {/* Left side - Title and Icon */}
                  <div className="flex items-center gap-6">
                    {/* Number badge */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className={`text-2xl font-bold text-[${text}]`}>{benefit.id}</span>
                    </div>

                    {/* Icon */}
                    {/* <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 bg-gradient-to-br ${benefit.color} bg-clip-text text-transparent`} />
                    </div> */}

                    {/* Title */}
                    <div>
                      <h3 className={`"text-2xl lg:text-4xl font-bold text-[${text}] group-hover:text-[${text}] transition-colors duration-300"`}>
                        {benefit.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right side - Description or List */}
                  <div className="flex-1 lg:max-w-lg">
                    {benefit.description ? (
                      <div className={`${bg === "#0a0a0aaf" ? "bg-[#0a0a0aaf]" : "bg-white"} rounded-2xl p-6 group-hover:${bg === "#0a0a0aaf" ? "bg-[#0a0a0aaf]" : "bg-white"} transition-colors duration-300`}>
                        <p className={`"text-lg font-semibold text-[${text}] leading-relaxed"`}>
                          {benefit.description}
                        </p>
                      </div>
                    ) : (
                      <div className={`${bg === "#0a0a0aaf" ? "bg-[#0a0a0aaf]" : "bg-white"} rounded-2xl p-6 group-hover:${bg === "#0a0a0aaf" ? "bg-[#0a0a0aaf]" : "bg-white"} transition-colors duration-300`}>
                        <ul className="space-y-3">
                          {benefit.list?.map((item, i) => (
                            <li key={i} className={`"flex items-center gap-3 text-[${text}] font-semibold"`}>
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${benefit.color} shadow-sm`}></div>
                              <span className="text-base leading-relaxed">{item.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Decorative line */}
                <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-gray-600 font-medium">
            <span>Ready to transform your clinic?</span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// function App() {
//   return (
//     <div className="min-h-screen bg-white">
//       <BenefitSection />
//     </div>
//   );
// }

export default BenefitSection;

// import { Box, Heading } from '@chakra-ui/react'
// import React from 'react'
// import { listDataFifthList, listDataFourthList, listDataThirdList } from '../../../../data/default/data'

// function BenefitSection() {
//   return (
//     <section data-aos='fade-u'>
//       <Box className="customContainer">
//         <Box paddingBottom={'70px'}>
//           <Heading paddingTop={'80px'} textAlign={'start'}>
//             Key benefits of the system
//           </Heading>
//         </Box>
//         <Box>
//           <Box borderBottom={'1px solid #555b65'} paddingY={'20px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'row'}>
//             <Box display={'flex'} gap={'20px'} paddingBottom={'10px'}>
//               {/* number of lists */}
//               <Box
//                 width="40px"
//                 height="40px"
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="center"
//                 borderRadius="8px"
//                 fontSize="20px"
//                 fontWeight="bold"
//                 className='gradient-bg'
//               >
//                 1
//               </Box>
//               <Heading className='fira-font' fontWeight={'semibold'} fontSize={'24px'}>Patient data management</Heading>
//             </Box>
//             <Box paddingLeft={'20px'} paddingBottom={'25px'}>
//               <p className='font-semibold'>Paperless system – patient history is always at your fingertips!</p>
//             </Box>
//           </Box>
//           <Box borderBottom={'1px solid #555b65'} paddingY={'20px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'row'}>
//             <Box display={'flex'} gap={'20px'} paddingBottom={'10px'}>
//               {/* number of lists */}
//               <Box
//                 width="40px"
//                 height="40px"
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="center"
//                 borderRadius="8px"
//                 fontSize="20px"
//                 fontWeight="bold"
//                 className='gradient-bg'
//               >
//                 2
//               </Box>
//               <Heading className='fira-font' fontWeight={'semibold'} fontSize={'24px'}>Reports and analytics</Heading>
//             </Box>
//             <Box paddingLeft={'20px'} paddingBottom={'25px'}>
//               <p className='font-semibold'>Accurately track your clinic&apos;s growth!</p>
//             </Box>
//           </Box>
//           <Box borderBottom={'1px solid #555b65'} paddingY={'20px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'row'}>
//             <Box display={'flex'} gap={'20px'} paddingBottom={'10px'} width={'full'}>
//               {/* number of lists */}
//               <Box
//                 width="40px"
//                 height="40px"
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="center"
//                 borderRadius="8px"
//                 fontSize="20px"
//                 fontWeight="bold"
//                 className='gradient-bg'
//               >
//                 3
//               </Box>
//               <Heading className='fira-font' fontWeight={'semibold'} fontSize={'24px'}>Inventory system</Heading>
//             </Box>
//             <Box paddingLeft={'20px'} paddingBottom={'25px'}>
//                 <ul className='list-disc font-semibold'>
//                   {listDataThirdList && listDataThirdList.map((item, i) => {
//                     return (
//                       <li key={i}>
//                         {item.name}
//                       </li>
//                     )
//                   })}
//                 </ul>
//             </Box>
//           </Box>
//           <Box borderBottom={'1px solid #555b65'} paddingY={'20px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'row'}>
//             <Box display={'flex'} gap={'20px'} paddingBottom={'10px'}>
//               {/* number of lists */}
//               <Box
//                 width="40px"
//                 height="40px"
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="center"
//                 borderRadius="8px"
//                 fontSize="20px"
//                 fontWeight="bold"
//                 className='gradient-bg'
//               >
//                 4
//               </Box>
//               <Heading className='fira-font' fontWeight={'semibold'} fontSize={'24px'}>Patient data management</Heading>
//             </Box>
//             <Box paddingLeft={'20px'} paddingBottom={'25px'}>
//                 <ul className='list-disc font-semibold'>
//                   {listDataFourthList && listDataFourthList.map((item, i) => {
//                     return (
//                       <li key={i}>
//                         {item.name}
//                       </li>
//                     )
//                   })}
//                 </ul>
//             </Box>
//           </Box>
//           <Box paddingY={'20px'} marginBottom={'70px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'row'}>
//             <Box display={'flex'} gap={'20px'} paddingBottom={'10px'}>
//               {/* number of lists */}
//               <Box
//                 width="40px"
//                 height="40px"
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="center"
//                 borderRadius="8px"
//                 fontSize="20px"
//                 fontWeight="bold"
//                 className='gradient-bg'
//               >
//                 5
//               </Box>
//               <Heading className='fira-font' fontWeight={'semibold'} fontSize={'24px'}>Patient data management</Heading>
//             </Box>
//             <Box paddingLeft={'20px'} paddingBottom={'25px'}>
//                 <ul className='list-disc font-semibold'>
//                   {listDataFifthList && listDataFifthList.map((item, i) => {
//                     return (
//                       <li key={i}>
//                         {item.name}
//                       </li>
//                     )
//                   })}
//                 </ul>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </section>
//   )
// }

// export default BenefitSection

