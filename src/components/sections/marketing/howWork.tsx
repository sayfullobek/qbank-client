'use client'

import React from 'react'
import Image from 'next/image'

function HowWorkSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            System Overview
          </div>
          <h2 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
            How the system works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center pt-10">
            "How Does Dental Soft Work?" - Discover our streamlined process
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2">
            <div className="h-full bg-gradient-to-r from-blue-200 via-purple-200 to-emerald-200 dark:from-blue-800 dark:via-purple-800 dark:to-emerald-800 rounded-full"></div>
          </div>
          
          {/* Mobile vertical line */}
          <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
            <div className="h-full bg-gradient-to-b from-blue-200 via-purple-200 to-emerald-200 dark:from-blue-800 dark:via-purple-800 dark:to-emerald-800 rounded-full"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="group relative">
              <div className="flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg z-20">
                  1
                </div>
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center transform transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/25 border border-gray-100 dark:border-slate-700">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-xl flex items-center justify-center">
                      <Image src="/icons/documentIcon.svg" alt="Register your clinic" width={32} height={32} className="filter drop-shadow-sm" />
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                </div>

                {/* Content */}
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 transform transition-all duration-300 group-hover:shadow-xl">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Register your clinic
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Add your clinic to the system and create profiles for doctors.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative">
              <div className="flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg z-20">
                  2
                </div>
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center transform transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/25 border border-gray-100 dark:border-slate-700">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 rounded-xl flex items-center justify-center">
                      <Image src="/icons/clientIcon.svg" alt="Add patients and assign services" width={32} height={32} className="filter drop-shadow-sm" />
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                </div>

                {/* Content */}
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 transform transition-all duration-300 group-hover:shadow-xl">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Add patients and assign services
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Manage appointments and accept payments seamlessly.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative">
              <div className="flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg z-20">
                  3
                </div>
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center transform transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-emerald-500/25 border border-gray-100 dark:border-slate-700">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/50 dark:to-emerald-800/50 rounded-xl flex items-center justify-center">
                      <Image src="/icons/chartIcon.svg" alt="Increase revenue and manage your clinic easily" width={32} height={32} className="filter drop-shadow-sm" />
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                </div>

                {/* Content */}
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 transform transition-all duration-300 group-hover:shadow-xl">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Increase revenue and manage easily
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Automate workflows and eliminate errors completely!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <span>Get Started Today</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWorkSection