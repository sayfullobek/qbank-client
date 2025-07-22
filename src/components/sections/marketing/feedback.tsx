import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Star, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const feedbackData = [
  {
    name: "Dr. Sarah Johnson",
    title: "Dental Surgeon",
    clinic: "SmileCare Dental",
    rating: 5,
    comment: "DentalSoft has completely transformed our practice management. The intuitive interface and comprehensive features have streamlined our workflow significantly."
  },
  {
    name: "Michael Chen",
    title: "Practice Manager",
    clinic: "Downtown Dental",
    rating: 5,
    comment: "Outstanding software! The patient scheduling system and billing integration have reduced our administrative workload by 60%. Highly recommended!"
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Orthodontist",
    clinic: "Perfect Smiles",
    rating: 4,
    comment: "The treatment planning tools are exceptional. Our patients love the digital experience, and we've seen a 40% increase in case acceptance rates."
  },
  {
    name: "James Wilson",
    title: "Clinic Director",
    clinic: "Family Dental Care",
    rating: 5,
    comment: "Incredible support team and robust features. The reporting dashboard gives us insights we never had before. Game-changer for our multi-location practice."
  },
  {
    name: "Dr. Lisa Thompson",
    title: "Periodontist",
    clinic: "Healthy Gums Clinic",
    rating: 5,
    comment: "The imaging integration and patient communication tools are top-notch. Our efficiency has improved dramatically since implementing DentalSoft."
  }
];

function FeedbackSection() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: { perView: 1, spacing: 20 },
    breakpoints: {
      '(min-width: 768px)': { slides: { perView: 2, spacing: 24 } },
      '(min-width: 1200px)': { slides: { perView: 3, spacing: 32 } },
    },
  });

  return (
    <section id="feedback" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Our Client's Feedback
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center leading-relaxed">
            Read our clients' reviews and learn what they have to say about Dental Soft
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Left Navigation */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
            aria-label="Previous feedback"
            type="button"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Carousel */}
          <div ref={sliderRef} className="keen-slider py-4">
            {feedbackData.map((card, idx) => (
              <div key={idx} className="keen-slider__slide">
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group hover:-translate-y-2 min-h-[320px] flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {card.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {card.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {card.title}
                        </p>
                        {card.clinic && (
                          <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-1">
                            {card.clinic}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < card.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300 dark:text-gray-600'
                          } transition-colors`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      {card.rating}.0
                    </span>
                  </div>

                  {/* Comment */}
                  <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed flex-grow">
                    "{card.comment}"
                  </blockquote>

                  {/* Quote decoration */}
                  <div className="mt-6 flex justify-end">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation */}
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
            aria-label="Next feedback"
            type="button"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-60"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedbackSection;