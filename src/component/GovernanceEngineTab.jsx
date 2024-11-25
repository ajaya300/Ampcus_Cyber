import React, { useState } from 'react';

const GovernanceEngineTabs = ({ title, tabs, subtitle }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className="p-8 bg-[#3689c7] text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
      <h2 className="text-base mb-6 text-center">{subtitle}</h2>
      
      {/* Tab Navigation */}
      <div className="flex justify-center gap-8 border-b border-white">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`py-2 text-lg ${activeTab === tab.label ? 'text-yellow-300 border-b-4 border-yellow-300' : 'text-white'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="mt-6 p-8 mx-auto bg-gray-100 rounded-lg shadow-lg text-black">
        {tabs.find((tab) => tab.label === activeTab)?.content && (
          <div>
            <h3 className="text-2xl font-bold mb-4">{activeTab}</h3>
            <p>{tabs.find((tab) => tab.label === activeTab).content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GovernanceEngineTabs;
