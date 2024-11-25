import React from 'react';

function GetStarted({ image, header, description, buttonText, onButtonClick }) {
  return (
    <div 
      className="relative flex justify-center items-center bg-cover bg-center h-80 " 
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Content */}
      <div className="relative text-center text-white px-8 py-12 bg-opacity-70">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{header}</h1>
        <p className="text-sm md:text-lg mb-6">{description}</p>
        <button
          className="bg-red-600 text-white px-6 py-2 font-bold rounded hover:bg-red-700 transition duration-300"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default GetStarted;
