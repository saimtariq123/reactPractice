import React, { useState } from 'react'

const AboutUsSection = () => {
  const [activeTab, setActiveTab] = useState('offer')

  const tabData = {
    offer: [
      'We deliver cost-effective solutions tailored to client needs.',
      'All projects are planned with sustainability in mind.',
      'We maintain transparent communication throughout the build.',
      'Our services align with latest construction standards.'
    ],
    provide: [
      'Providing skilled professionals for every task.',
      'Real-time monitoring and site reporting.',
      'Efficient material usage to reduce waste.',
      'Expert guidance during every construction phase.'
    ],
    guarantee: [
      'Timely completion backed by detailed project roadmaps.',
      'No compromise on safety and durability.',
      'Post-completion support and service.',
      'Guaranteed satisfaction through detailed execution.'
    ]
  }

  return (
    <section className="w-full bg-white pt-[80px] sm:pt-[100px]">
      {/* Upper About Section */}
      <div className="w-[90%] sm:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16">
        {/* Left Side with Images */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative h-[530px] overflow-hidden">
            <img
              src="/Bck Rectangle Picture.png"
              alt="Back"
              className="absolute top-0 left-[50%] md:left-[170px] w-[250px] sm:w-[338px] h-[375px] sm:h-[504px] object-cover z-0"
            />
            <img
              src="/Front square Picture.png"
              alt="Front"
              className="absolute top-[200px] sm:top-[230px] left-0 w-[220px] sm:w-[326px] h-[220px] sm:h-[326px] object-cover z-10"
            />
          </div>
        </div>

        {/* Right Side Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="w-full sm:w-[90%] md:w-[80%]">
            <div className="flex items-center mb-4 sm:mb-6">
              <hr className="w-8 sm:w-10 border-orange-500 border-2 mr-3" />
              <h2 className="text-xl sm:text-2xl font-semibold text-orange-500">About Us</h2>
            </div>
            <h3 className="text-[22px] sm:text-[28px] font-medium leading-[100%] mb-4 sm:mb-6 text-black">
              Exceptional <span className="text-orange-500">construction services</span> and expert{' '}
              <span className="text-orange-500">insights</span>, from start to finish.
            </h3>
            <p className="text-[14px] sm:text-[16px] font-light leading-[100%] text-black mb-6 sm:mb-8">
              Lorem ipsum dolor sit amet consectetur. Pellen tesque proin pretium amet id duis. Urna
              scelerisque. Pellentesque proin pretium amet id duis. Urna scelerisque.
            </p>
            <ul className="mb-6 sm:mb-8 list-disc pl-5 text-black space-y-2 font-semibold">
              <li>Creative</li>
              <li>Sustainable</li>
              <li>Efficient</li>
            </ul>
            <button className="bg-black text-white px-5 py-2 sm:px-6 sm:py-3 rounded hover:bg-orange-500 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="pl-[13%] relative w-full mt-[100px] sm:mt-[100px]">
        <div className="w-[80%] sm:w-[80%] mx-auto relative">
          {/* Left Image */}
          <img
            src="/Group 158.png"
            alt="Overlay"
            className="w-[536px] h-[517px] object-cover"
          />

          {/* Overlay Headings */}
          <div className="absolute top-[171px] left-0 sm:left-0 space-y-6">
            <h3 className="bg-orange-500 text-white text-xl sm:text-2xl font-bold px-4 py-2 w-fit">where</h3>
            <h3 className="bg-orange-500 text-white text-xl sm:text-2xl font-bold px-4 py-2 w-fit">dreams</h3>
            <h3 className="bg-orange-500 text-white text-xl sm:text-2xl font-bold px-4 py-2 w-fit">become true</h3>
          </div>

          {/* Right Tabbed Box */}
          <div className="absolute top-[70px] left-[calc(536px-50px)] sm:left-[calc(536px-50px)] bg-white p-6 sm:p-8 shadow-lg w-[100%] sm:w-[420px]">
            <h2 className="text-2xl font-semibold mb-4">What We</h2>
            <div className="flex gap-2 mb-4">
              {['offer', 'provide', 'guarantee'].map((key) => (
                <button
                  key={key}
                  className={`px-3 py-1 border ${activeTab === key ? 'bg-black text-white' : 'bg-white text-black'} transition`}
                  onClick={() => setActiveTab(key)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}
            </div>
            <ul className="list-disc text-gray-600 pl-5 space-y-2 text-sm sm:text-base">
              {tabData[activeTab].map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <br />
    </section>
  )
}

export default AboutUsSection
