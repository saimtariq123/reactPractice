import React from 'react'
import { Link } from 'react-router-dom'
import HomeServices from './HomeServices'
import AboutUsSection from './AboutUsSection'
import ProjectsSection from './ProjectsSection'
import OurTeam from './OurTeam'
import WhoWeAreSection from './WhoWeAreSection'
import ReadyToBuildPage from './ReadyTOBuildPage'

const Home = () => {
  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
     

 <section className="relative w-full h-[263px] sm:h-[650px] mb-[80px] sm:mb-0">
  <img
    src="/Hero1 1.png"
    alt="Hero"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 px-4 sm:px-6 flex flex-col justify-center text-white">
    <h1 className="text-[25px] sm:text-[74px] font-medium sm:font-normal leading-[1.2] sm:leading-[82px]">
      Building the future, brick by brick,
    </h1>
    <p className="mt-1 sm:mt-4 text-[20px] sm:text-[28px] font-medium leading-[1.2] sm:leading-[100%] capitalize">
      with our expert construction services.
    </p>
    <div className="flex items-center mt-4 sm:mt-6 gap-4 sm:gap-6">
      <Link
        to="/contact"
        className="bg-orange-500 px-3 sm:px-6 py-1 sm:py-3 text-white text-sm sm:text-base font-medium rounded hover:bg-orange-600 transition"
      >
        Contact Us
      </Link>
      <span className="underline text-white text-[12px] sm:text-[16px] font-medium leading-[100%]">
        Our Services
      </span>
    </div>
  </div>

  {/* White Box - Adjusted positioning */}
  <div className="absolute bg-white text-black p-4 sm:p-5 w-[80%] sm:max-w-[275px] left-1/2 transform -translate-x-1/2 sm:left-auto sm:transform-none sm:right-[375px] bottom-0 translate-y-[70%] sm:translate-y-0 shadow-lg">
  <div className="mb-2">
    <div>
      <h3 className="text-[16px] sm:text-[20px] font-medium leading-[120%]">
        See What our clients <br /> has to say
      </h3>
      <hr className="bg-black border h-[2px] sm:h-[4px] w-[20%] mt-1" />
    </div>
  </div>
  <p className="text-[12px] sm:text-[14px] font-light leading-[1.2] sm:leading-[100%]">
    delivering high-quality projects that exceed our family's expectations.
  </p>
</div>
</section>
     

      {/* Feature Boxes Section */}
      <section className="w-full sm:mt-[100px] sm:px-6  flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between sm:gap-[117px] gap-[30px] w-full max-w-[80%]">
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
              <h4 className="pl-5 text-orange-500 sm:text-[20px] text-[16px] font-medium capitalize sm:mb-4  mb-2 leading-[100%]">
                {item.title}
              </h4>
              <div className="relative">
                <p className="pl-4 sm:text-[14px] text-[12px] font-light leading-[28px] text-gray-800 border-l-[4px] border-orange-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <br />
      </section>

      {/* Services Section with ID */}
      <section id="services">
        <HomeServices />
      </section>

      {/* About Us Section */}
      <section id="about-us">
        <AboutUsSection showFullContent={false} />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Who We Are Section */}
      <section id="whoWeAre">
        <WhoWeAreSection />
      </section>

      {/* Ready To Build + Our Team */}
      <ReadyToBuildPage />
      <OurTeam />
    </div>
  )
}

export default Home
