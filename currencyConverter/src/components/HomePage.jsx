import React from 'react'
import { Link } from 'react-router-dom'
import HomeServices from './HomeServices'
import AboutUsSection from './AboutUsSection'
import ProjectsSection from './ProjectsSection'
import OurTeam from './OurTeam'

const Home = () => {
  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[650px]">
        <img
          src="/Hero1 1.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 px-6 lg:px-[calc((100%-72rem)/2+1.5rem)] flex flex-col justify-center text-white">
          <h1 className="font-medium text-[74px] leading-[82px] max-w-4xl">
            Building the future <br /> brick by brick,
          </h1>
          <p className="mt-4 font-medium text-[20px] capitalize leading-[100%]">
            with our expert construction services.
          </p>
          <div className="flex items-center mt-6 gap-6">
            <Link
              to="/contact"
              className="bg-orange-500 px-6 py-3 text-white font-medium rounded hover:bg-orange-600 transition"
            >
              Contact Us
            </Link>
            <span className="underline text-white text-[16px] font-medium leading-[100%]">
              Our Services
            </span>
          </div>
        </div>

        {/* Bottom Right Box */}
        <div
          className="absolute bg-white text-black p-5"
          style={{
            maxWidth: '275px',
            right: '375px',
            bottom: '0px',
          }}
        >
          <div className="mb-2">
            <h3 className="text-[20px] font-medium leading-[120%]">
              See What our clients <br /> has to say
            </h3>
            <hr className="bg-black border h-[4px] w-[20%] mt-1" />
          </div>
          <p className="text-[14px] font-light leading-[100%] w-[85%]">
            delivering high-quality projects that exceed our family’s expectations.
          </p>
        </div>
      </section>

      {/* Feature Boxes Section */}
      <section className="w-full mt-[100px] px-6 lg:px-[calc((100%-90rem)/2+1.5rem)] flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between gap-[117px] w-full max-w-[80%]">
          {[
            {
              title: 'HIGH QUALITY',
              desc: 'Lorem ipsum dolor sit amet consectetur. Elit vestibulum vestibulum hendrerit odio eget quam massa.',
            },
            {
              title: 'HIGH QUALITY',
              desc: 'Lorem ipsum dolor sit amet consectetur. Elit vestibulum vestibulum hendrerit odio eget quam massa.',
            },
            {
              title: 'HIGH QUALITY',
              desc: 'Lorem ipsum dolor sit amet consectetur. Elit vestibulum vestibulum hendrerit odio eget quam massa.',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex-1 relative">
              <h4 className="pl-5 text-orange-500 text-[20px] font-medium capitalize mb-4 leading-[100%]">
                {item.title}
              </h4>
              <div className="relative">
                <p className="pl-4 text-[14px] font-light leading-[28px] text-gray-800 border-l-[4px] border-orange-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <br />
        
      </section>

      <HomeServices />
      <div className="bg-white h-[2px] w-full"></div>
      <AboutUsSection />
      <div className="bg-white h-[2px] w-full"></div>
      <ProjectsSection/>
      <OurTeam/>
    </div>
  )
}

export default Home
