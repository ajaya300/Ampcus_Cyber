// import React, { useState } from 'react';
// import "../custom.css"



// const WhyChooseSection = () => {
//     const [activeTab, setActiveTab] = useState(0);

//     const tabs = [
//         {
//             label: "Expertise You Can Trust",
//             content: "Benefit from the extensive experience and expertise of our PCI QSA team, committed to staying abreast of evolving compliance standards.",
//             backgroundColor: "#b11f1f", // Red background for this tab
//             textColor: "#fff",
//         },
//         {
//             label: "Tailored Solutions",
//             content: "Our tailored solutions are designed to meet the unique requirements of your organization, ensuring compliance and security at every level.",
//             backgroundColor: "#00b2b2", // Teal background for this tab
//             textColor: "#fff",
//         },
//         {
//             label: "Proactive Security Measures",
//             content: "Stay ahead of potential threats with our proactive security measures, designed to protect your data and build trust with your customers.",
//             backgroundColor: "#00b2b2", // Teal background for this tab
//             textColor: "#fff",
//         },
//     ];

//     return (
//         <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f9f9f9' }}>
//             <h2 style={{ fontSize: '1.8em', color: '#002e5d', marginBottom: '20px' }}>
//                 Why Choose <span style={{ color: '#b11f1f' }}>Ampcus Cyber</span> As Your PCI QSA?
//             </h2>
//             <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
//                 {tabs.map((tab, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setActiveTab(index)}
//                         style={{
//                             padding: '10px 20px',
//                             fontSize: '1em',
//                             fontWeight: 'bold',
//                             cursor: 'pointer',
//                             border: 'none',
//                             borderRadius: '5px',
//                             backgroundColor: tab.backgroundColor,
//                             color: tab.textColor,
//                             boxShadow: activeTab === index ? '0px 4px 8px rgba(0, 0, 0, 0.3)' : 'none',
//                             transition: 'box-shadow 0.2s ease',
//                         }}
//                     >
//                         {tab.label}
//                     </button>
//                 ))}
//             </div>
//             <div style={{
//                 backgroundColor: tabs[activeTab].backgroundColor,
//                 color: tabs[activeTab].textColor,
//                 padding: '20px',
//                 borderRadius: '10px',
//                 maxWidth: '600px',
//                 margin: '0 auto',
//             }}>
//                 <h3 style={{ fontSize: '1.4em', marginBottom: '10px' }}>{tabs[activeTab].label}</h3>
//                 <p>{tabs[activeTab].content}</p>
//             </div>
//         </div>
//     );
// };

// export default WhyChooseSection;


import React, { useState } from "react";

const DynamicCardComponent = ({ title, items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col items-center my-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">
                {title}
            </h2>
            <div className="flex">
                {/* Left Side - Menu */}
                <div className="flex flex-col space-y-4 mt-12">
                    {items.map((item, index) => (
                        <button
                            key={index}
                            className={`py-2 px-16 text-white text-end font-semibold rounded-l-full ${activeIndex === index ? "bg-[#ae1301]" : "bg-[#00a0ad]"
                                }`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Right Side - Content */}
                <div className="ml-4 p-20 bg-[#ae1301] text-white  flex flex-col justify-center max-w-4xl rounded-[40px]">
                    <h3 className="text-3xl font-bold mb-2">{items[activeIndex].label}</h3>
                    <p>{items[activeIndex].content}</p>
                </div>
            </div>
        </div>
    );
};

export default DynamicCardComponent;

