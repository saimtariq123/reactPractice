import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const Card = ({ image, name, role }) => {
  return (
    <div className="w-[270px] h-[390px] border border-gray-300 rounded shadow-[12px_12px_24px_0px_rgba(0,0,0,0.12)] bg-white overflow-hidden group relative">
      <div className="relative w-full h-[290px]">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:brightness-75 transition" />
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 flex flex-col gap-2 transition-opacity">
          {[FaInstagramSquare, FaFacebookSquare, FaLinkedin].map((Icon, i) => (
            <div key={i} className="w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center hover:bg-black transition-colors">
              <Icon className="text-[17px] text-black group-hover:text-white" />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center px-4 py-2 bg-gray-100 group-hover:bg-black transition-colors">
        <p className="font-medium text-[16px] leading-[23px] text-black group-hover:text-white">{name}</p>
        <p className="font-normal text-[16px] leading-[23px] text-gray-700 group-hover:text-white">{role}</p>
      </div>
    </div>
  );
};

export default Card;
