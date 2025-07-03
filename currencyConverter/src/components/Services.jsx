import React from 'react'
import CardForServices from './CardForServices'

const services = [
  {
    img: '../public/architect_adobe_express 1.png',
    title: 'Design',
    para: 'High-end architecture',
    strikethrough: false,
    color: 'white',
  },
  {
    img: '../public/BRICK ICON.png',
    title: 'Development',
    para: 'Reliable construction service',
    strikethrough: false,
    color: 'grey',
  },
  {
    img: '../public/BRICK ICON.png',
    title: 'Consultation',
    para: 'Expert project planning',
    strikethrough: false,
    color: 'white',
  },
  {
    img: '../public/BRICK ICON.png',
    title: 'Supervision',
    para: 'On-site project management',
    strikethrough: false,
    color: 'grey',
  },
  {
    img: '../public/BRICK ICON.png',
    title: 'Inspection',
    para: 'Detailed quality assurance',
    strikethrough: false,
    color: 'white',
  },
  {
    img: '../public/BRICK ICON.png',
    title: 'Maintenance',
    para: 'Post-completion support',
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
          <h2 className="mb-5 font-medium text-[35px] leading-[100%] tracking-[0em]">
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
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-18">
          {services.map((service, index) => (
  <CardForServices
    key={index}
    img={service.img}
    title={service.title}
    para={service.para}
    strikethrough={service.strikethrough}
    color={service.color}
    serial={index + 1}
  />
))}

        </div>
      </section>
    </div>
  )
}

export default Services
