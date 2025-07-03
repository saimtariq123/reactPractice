import React from 'react'

const CardForServices = ({ img, title, para, strikethrough, color, serial }) => {
  let bgColor = '#FFFFFF'
  let textColor = 'text-black'
  let borderColor = 'bg-black'

  if (color === 'grey') {
    bgColor = '#2D2D2D'
    textColor = 'text-white'
    borderColor = 'bg-orange-500'
  } else if (color === 'black') {
    bgColor = '#000000'
    textColor = 'text-[#9E9E9E]'
    borderColor = 'bg-orange-500'
  }

  return (
    <div
      className={`w-[240px] h-[240px] flex flex-col justify-between items-center text-center p-4 relative`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Serial Number */}
      <span className={`absolute top-2 left-3 text-sm font-semibold ${textColor}`}>
        {serial < 10 ? `0${serial}` : serial}
      </span>

      <div className="flex flex-col items-center mt-4">
        <img src={img} alt={title} className="w-[65px] h-[65px] mb-4 object-contain" />
        <h3 className={`font-medium text-[20px] leading-[100%] ${textColor} mb-2`}>
          {title}
        </h3>
        <p
          className={`text-[14px] leading-[100%] mt-2 font-[300] ${textColor} ${strikethrough ? 'line-through' : ''}`}
        >
          {para}
        </p>
      </div>

      <div className={`w-full h-[3px] ${borderColor}`}></div>
    </div>
  )
}

export default CardForServices
