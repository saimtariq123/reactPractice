import React from 'react'
import ServiceCard from './ServiceCard'
import { Form } from 'react-router-dom'
import Form1 from './Form'

const services = [
  {
    img: '../public/architect_adobe_express 1.png',
    title: 'Design',
    para: 'High-end architectureReliable construction serviceReliable construction service',
    strikethrough: false,
    color: 'white',
  },
  {
    img: '../public/BRICK ICON.png',
    title: 'Development',
    para: 'Reliable construction service Reliable construction service Reliable construction serviceReliable construction service',
    strikethrough: false,
    color: 'grey',
  },
  {
    img: '../public/BRICK ICON.png',
    title: 'Consultation Reliable ',
    para: 'Expert project planning construction service Reliable construction service Reliable construction service',
    strikethrough: false,
    color: 'white',
  },
  {
    img: '../public/BRICK ICON.png',
    title: 'Supervision',
    para: 'On-site project managementReliable construction serviceReliable construction serviceReliable construction service',
    strikethrough: false,
    color: 'grey',
  },
  {
    img: '../public/BRICK ICON.png',
    title: 'Inspection',
    para: 'Detailed quality assuranceReliable construction serviceReliable construction serviceReliable construction service',
    strikethrough: false,
    color: 'white',
  },
  {
    img: '../public/BRICK ICON.png',
    title: 'Maintenance',
    para: 'Post-completion supportReliable construction serviceReliable construction serviceReliable construction service',
    strikethrough: false,
    color: 'grey',
  },
]

const Services = () => {
  return (
    <div className="w-full font-sans">
      {/* Banner */}
      <section className="relative">
        <figure className="relative w-full h-[370px]">
          <img
            src="/Banner-Seviices-.png"
            alt="Services Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-gradient-to-r from-black/40 to-black/20 flex justify-center items-center">
            <h1 className="text-5xl text-white font-bold">Services</h1>
          </div>
        </figure>
      </section>

      {/* Description */}
      <section className="w-full px-6 max-w-screen-xl mx-auto pt-12 flex flex-col items-start">
        <div className="flex items-center mb-6">
          <hr className="w-10 border-orange-500 border-2 mr-3" />
          <h2 className="text-2xl font-semibold text-orange-500">Services</h2>
        </div>
         <div className="mb-10 sm:mb-16 max-w-full md:max-w-5xl">
          <h2 className="mb-5 font-medium sm:text-[35px] text-[20px] leading-[100%] tracking-[0em]">
  We'd love to hear from you! Get in touch with us today to discuss your construction needs.
</h2>

          <p className="text-gray-700 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur. Odio sit a ornare pharetra at neque vulputate.
            Amet sed netus libero leo. Neque elementum elementum feugiat euismod hendrerit vulputate nisl pretium.
          </p>
        </div>
      </section>

      {/* Cards */}
     <section className="w-full max-w-screen-lg mx-auto px-6 py-12">
  <div className="grid grid-cols-1  lg:grid-cols-3 gap-12">
   {services.map((service, index) => (
  <ServiceCard
    key={index}
    image={service.img}
    title={service.title}
    description={service.para}
    serial={(index + 1).toString().padStart(2, '0')}
  />
))}

  </div>
</section>

<section
        className="w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('Ready-to-build-together-banner-pic-home-pg 1.png')` }}
      >
        <div className="w-[90%] mx-auto py-12 md:py-20 flex flex-col justify-center text-white">
          <h2 className="text-[24px] sm:text-[28px] font-medium leading-tight capitalize mb-4">
            Ready To <span className="text-orange-500">Build</span> Together?
          </h2>
          <p className="text-[14px] sm:text-[16px] font-light leading-snug max-w-xl mb-6">
            Lorem ipsum dolor sit amet consectetur. Pellen tesque proin pretium amet id duis. Urna scelerisque.
            Pellentesque proin pretium amet id duis. Urna scelerisque.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded hover:bg-orange-600 transition">
              Get Started
            </button>
            <button className="bg-gray-300 text-black px-6 py-2 sm:py-3 rounded">
              Learn More
            </button>
          </div>
        </div>
      </section>
       <section className="w-full px-6 max-w-screen-xl mx-auto pt-12 flex flex-col items-start">
       <div className="flex items-center mb-6">
          <hr className="w-10 border-orange-500 border-2 mr-3" />
          <h2 className="text-2xl font-semibold text-orange-500">Get In Touch</h2>
        </div>
        </section>
      <Form1/>
    </div>
  )
}

export default Services
