import React from 'react';

const ContactForm = ({
    title = "Contact Us",
    contactEmail = "LetsConnect@ampcuscyber.com",
    contactPhone = "(703) 666-3720 (Direct)",
    socialLinks = [],
}) => {
    return (
        <div className="flex flex-col items-center p-10 bg-gray-100 min-h-screen">
            <h2 className="text-4xl font-bold mb-8">{title}</h2>
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">

                {/* Contact Info */}
                <div className="bg-gray-100 p-8 w-full md:w-1/3">
                    <h3 className="text-xl font-semibold mb-4">Let's get in touch</h3>
                    <p className="mb-2">
                        <a href={`mailto:${contactEmail}`} className="text-blue-500 hover:underline">
                            📧 {contactEmail}
                        </a>
                    </p>
                    <p className="mb-6">
                        <a href={`tel:${contactPhone}`} className="text-red-500 hover:underline">
                            📞 {contactPhone}
                        </a>
                    </p>
                    <div className="mb-4">
                        <h4 className="font-semibold">Follow us:</h4>
                        <div className="flex space-x-3 mt-2">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white bg-blue-500 p-2 rounded-full"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="p-8 w-full md:w-2/3">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="fullName">Full Name *</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="companyName">Company Name *</label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="captcha">Captcha</label>
                            <div className="w-full p-2 border border-gray-300 rounded">
                                {/* Placeholder for CAPTCHA */}
                                <div className="text-center text-gray-500">CAPTCHA Component</div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-600 transition"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
