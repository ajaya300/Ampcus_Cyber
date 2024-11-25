import React from "react";

const testimonials = [
  {
    text: "Although I was not directly involved in the day-to-day coordination between the OmniPayments and Ampcus team, I can say for sure that we are extremely happy with the level of service provided by your team. Your team has been extremely supportive and responsive to all our needs. We look forward to working with you in the future too.",
    company: "OmniPayments LLC",
    logo: "/path-to-logo1.png",
    bgColor: "bg-white"
  },
  {
    text: "I appreciate the services being provided by Ampcus Cyber. Despite the challenges faced by the team, they were able to deliver on time and in due consideration of several limitations that the organization had. Overall, I am happy and content. It’s good to know that a local team is now becoming available to support us.",
    company: "UBx Philippines Corporation",
    logo: "/path-to-logo2.png",
    bgColor: "bg-red-600 text-white"
  },
  {
    text: "I wanted to take a moment to express my sincere appreciation for the exceptional collaboration we’ve had with your team on our recent project and working with Ampcus Cyber has been an outstanding experience from start to finish. Once again, thank you for your partnership, and we look forward to the opportunity for future collaborations.",
    company: "SellersCommerce LLC",
    logo: "/path-to-logo3.png",
    bgColor: "bg-white"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative bg-[url('/img/city.jpg')] bg-cover bg-center text-center text-white py-20">
  <div className="absolute inset-0 bg-black opacity-60"></div> {/* Transparent overlay */}
  <div className="relative z-10">
    <h2 className="text-3xl font-bold mb-4">Discover What Our Clients Say About Us</h2>
    <p className="max-w-3xl mx-auto mb-12">
      We take immense pride in delivering exceptional experiences and solutions tailored to their needs. 
      But don't just take our word for it. Hear directly from those we've served.
    </p>

    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <div key={index} className={`${testimonial.bgColor} p-6 rounded-lg shadow-lg relative`}>
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-4xl text-black bg-white rounded-full p-4">
            <i className="fas fa-quote-left"></i>
          </div>
          <p className="text-lg mb-4 mt-8 text-black">{testimonial.text}</p>
          
          {/* Positioned outside the testimonial box */}
          <div className="absolute grid inset-x-0 -bottom-20  items-center justify-center space-x-2">
            <img src={testimonial.logo} alt={testimonial.company} className="h-10" />
            <p className="font-bold text-white">{testimonial.company}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


  );
};
 
export default TestimonialsSection;
