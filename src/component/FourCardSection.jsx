import React from 'react';

const FourCardSection = ({ title, cards, subtitle }) => {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
      <h2 className="text-base  text-center mb-10">{subtitle}</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {cards.map((card, index) => (
          <div key={index} className="relative w-72 bg-yellow-100 p-6 rounded-lg shadow-lg">
            {/* Offset background layer */}
            <div className="absolute -top-2 -left-2 w-full h-full bg-cyan-500 rounded-lg -z-10"></div>
            <h3 className="text-xl font-bold mb-4">{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourCardSection;
