import React from 'react';
import office from "../image/office.jpg"
const ContactCard = ({
    title = "Ready to secure your future?",
    subtitle = "Contact us today!",
    description = "Take the first step towards PCI DSS compliance excellence. Contact our team at letsconnect@ampcuscyber.com to discuss your specific needs and let us guide you toward a more secure tomorrow.",
    // email = "letsconnect@ampcuscyber.com",
    buttonText = "Contact Us Today!",
    onButtonClick,
}) => {
    return (
        <div 
        className="relative flex justify-center items-center bg-cover bg-center py-20" 
        style={{ backgroundImage: `url(${office})` }}
    >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
    
        {/* Content */}
        <div className="relative bg-yellow-300 rounded-3xl shadow-lg px-10 py-6 max-w-xl w-full">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-2 py-4">{title}</h2>
            <h3 className="text-3xl font-semibold text-center text-gray-900 mb-4 py-2">{subtitle}</h3>
            <p className="text-gray-800 text-center mb-6 py-2">{description}</p>
            
            <div className="flex justify-center mt-4">
                <button
                    className="bg-red-600 text-white px-6 py-2 mb-4 font-bold hover:bg-red-700 transition-colors duration-200"
                    onClick={onButtonClick}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    </div>
    
    );
};

export default ContactCard;
