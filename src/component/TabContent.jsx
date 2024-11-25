import React from 'react';

const TabContent = ({ imageSrc, complianceItems }) => {
  return (
    <div className="bg-[#0b4762] py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center lg:justify-start">
          {/* <img src={imageSrc} alt="Compliance Illustration" className="w-3/4 lg:w-full" /> */}
          <img src="/img/banner-img.png" alt="Compliance Illustration" className="w-3/4 lg:w-full" />
        </div>

        {/* Right Compliance List Section */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4 pr-8">
          {complianceItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#8c0d06] text-white p-2 rounded-tl-lg rounded-br-lg flex items-center relative overflow-hidden group"
            >
              <span className="text-xl mr-4">✔️</span>
              <span className='z-10'>{item}</span>
              <div className="absolute inset-0 bg-[#0298a5] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TabContent;