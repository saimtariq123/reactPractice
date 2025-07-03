import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import Footer from './Footer'

const ContactUs = () => {
  const [selectedService, setSelectedService] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const services = ['Consulting', 'Development', 'Design']

  return (
    <div className="w-full font-sans">
      {/* Top Banner */}
      <section className="relative">
        <figure className="relative w-full h-[250px] sm:h-[370px]">
          <img
            src="/Banner-Contact-Us.png"
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 flex justify-center items-center">
            <h1 className="text-3xl sm:text-5xl text-white font-bold">
              Contact <span className="text-orange-500">Us</span>
            </h1>
          </div>
        </figure>
      </section>

      {/* Content Section */}
      <section className=" px-4 sm:px-8  w-[80%] md:w-[] lg:w-[] xl:w- mx-auto py-8 sm:py-12 flex flex-col items-start">
        {/* Heading */}
        <div className="flex items-center mb-6 sm:mb-8">
          <hr className="w-10 border-orange-500 border-2 mr-3" />
          <h2 className="text-xl sm:text-2xl font-semibold">Contact Us</h2>
        </div>

        {/* Description */}
        <div className="mb-10 sm:mb-16 max-w-full md:max-w-5xl">
          <h2 className="mb-5 font-medium text-[35px] leading-[100%] tracking-[0em]">
  We'd love to hear from you! Get in touch with us today to discuss your construction needs.
</h2>

          <p className="text-gray-700 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur. Odio sit a ornare pharetra at neque vulputate.
            Amet sed netus libero leo. Neque elementum elementum feugiat euismod hendrerit vulputate nisl pretium.
          </p>
        </div>

        {/* Form Section */}
        <div className="flex flex-col md:flex-row gap-10 sm:gap-12 items-stretch w-full">
          <div className="w-full md:w-1/2">
            <img
              src="/Contact-Us-Get-in-Touch 1.png"
              alt="Get in Touch"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row justify-between mb-2 gap-4">
              <label className="sm:w-[48%] text-gray-800 font-semibold text-sm sm:text-base">Name</label>
              <label className="sm:w-[48%] text-gray-800 font-semibold text-sm sm:text-base">Email</label>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mb-10 sm:mb-14 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full sm:w-[48%] border border-gray-400 rounded px-3 py-2 text-sm sm:text-base focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full sm:w-[48%] border border-gray-400 rounded px-3 py-2 text-sm sm:text-base focus:outline-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between mb-2 gap-4">
              <label className="sm:w-[48%] text-gray-800 font-semibold text-sm sm:text-base">Phone</label>
              <label className="sm:w-[48%] text-gray-800 font-semibold text-sm sm:text-base">Select Services</label>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mb-10 sm:mb-14 gap-4 relative">
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full sm:w-[48%] border border-gray-400 rounded px-3 py-2 text-sm sm:text-base focus:outline-none"
              />
              <div className="w-full sm:w-[48%] relative">
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="border border-gray-400 rounded px-3 py-2 cursor-pointer flex justify-between items-center text-sm sm:text-base"
                >
                  <span>{selectedService || 'Choose Service'}</span>
                  <FaChevronDown className="text-gray-500" />
                </div>
                {dropdownOpen && (
                  <ul className="absolute left-0 right-0 bg-white shadow-md border border-gray-300 z-10 mt-1 rounded text-sm sm:text-base">
                    {services.map(service => (
                      <li
                        key={service}
                        onClick={() => {
                          setSelectedService(service)
                          setDropdownOpen(false)
                        }}
                        className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <label className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">Write Message</label>
            <textarea
              placeholder="Your message..."
              className="w-full h-40 border border-gray-400 rounded px-3 py-2 focus:outline-none resize-none mb-8 sm:mb-10 text-sm sm:text-base"
            ></textarea>

            <button className="w-full bg-black text-white py-3 text-sm sm:text-lg rounded hover:bg-orange-600 transition">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Black Background Section */}
      <section className="w-full bg-black text-white">
        <div className="px-4 sm:px-8 max-w-screen-xl mx-auto h-auto md:h-[400px] flex flex-col md:flex-row py-8 sm:py-12 items-start justify-between">
          {/* Left Side Text */}
          <div className="w-full md:w-1/2 pr-0 md:pr-10 flex flex-col justify-start h-full">
            <div className="flex items-center mb-4 sm:mb-6">
              <hr className="w-10 border-orange-500 border-2 mr-3" />
              <h3 className="text-xl sm:text-2xl font-semibold">Find us here</h3>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              We're just a Click away! Reach out to us today to schedule a consultation
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-10">
              Lorem ipsum dolor sit amet consectetur. Pellen tesque proin pretium amet id duis. Urna scelerisque.
              Pellen tesque proin pretium amet id duis. Urna scelerisque.
            </p>
            <button className="bg-white text-black px-6 py-3 text-sm sm:text-base rounded w-max hover:bg-orange-500 hover:text-white transition">
              Contact Us
            </button>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-1/2 h-full flex justify-center items-end mt-8 md:mt-0">
            <figure className="w-full max-w-sm sm:max-w-md">
              <img
                src="/right Side.png"
                alt="Contact Visual"
                className="w-full h-auto object-contain"
              />
            </figure>
          </div>
        </div>
      </section>
<div className="w-full h-px bg-white/20"></div> 
      <Footer />
    </div>
  )
}

export default ContactUs
