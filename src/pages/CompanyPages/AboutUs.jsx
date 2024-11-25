import HeroSection from '@/component/TextImage'
import React from 'react'

import gengine1 from '@/image/Gengine1.png'
import TwoCardSection from '@/component/TwoCardSection';
import DynamicCardWithImage from '@/component/ImageText';
import ContactCard from '@/component/CardDynamic';

function AboutUs() {

  const handleContactClick = () => {
    console.log("Contact button clicked!");
  };

  const contentItems = [
    {
      heading: "Secure Payment Card Transactions",
      description:
        "We offer expertise in a wide range of compliance certifications, including PCI DSS, SOC 1 & 2, ISO 27001, HITRUST, CMMC, and more.",
    },
    {
      heading: "Network Security",
      description:
        "Assess and fortify network security to prevent unauthorized access and ensure a secure payment environment..",
    },
    {
      heading: "Data Encryption",
      description:
        "Validate the implementation of encryption measures to safeguard data during transmission and storage",
    },

    {
      heading: "Regular Monitoring",
      description:
        "Establish processes for ongoing monitoring and vulnerability management to maintain compliance.",
    },


  ];
  return (
    <div>

      <HeroSection
        title="About Us"

        description1="Welcome to the wild side of cybersecurity careers! At Ampcus Cyber, we don’t just offer jobs; we invite you to embark on a thrilling journey filled with adrenaline-pumping challenges and mind-boggling puzzles.."
        // subtitle="Not Your Average Pen Test"
        description2="If you’re tired of the mundane and yearn for a career that keeps you on your toes, you’ve come to the right place. We’re a team of cybersecurity rockstars, hackers-turned-heroes, and code-cracking magicians who are passionate about protecting the digital world."
        description="Join us and unleash your inner cyber warrior as we conquer the realms of security, leaving no vulnerability unpatched and no threat undefeated. Dare to step into the world of Ampcus Cyber, where we turn everyday geeks into cybersecurity legends.
        Are you ready to embrace the extraordinary? To explore career opportunities at Ampcus Cyber, please send your resume at LetsConnect@ampcuscyber.com"
        imageSrc={gengine1}
        primaryButtonText="Get Started"
        secondaryButtonText="Learn More"
        onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
        onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
      />

      <TwoCardSection
        title="Our expert team provides a streamlined approach to:"
        contentItems={contentItems}
      />

      <DynamicCardWithImage
        // imageSrc="https://example.com/image.jpg"
        title="Ready to Emerge Fortified?"
        description="Don’t settle for the illusion of security. Take a bold step and plunge into the digital abyss with Ampcus Cyber’s Advanced Penetration Testing. We’ll be your guide, your digital Odysseus, as we navigate the treacherous terrain of your network, illuminating every vulnerability and empowering you to build an impenetrable digital fortress"
        description1="Contact us today for a free consultation and let our digital warriors reveal the true strength of your defenses. Together, we’ll transform your digital frontier from a vulnerable expanse into an impregnable citadel."
      />

      <ContactCard
        title="Ready to secure your future?!"
        subtitle="Contact us today!"
        description="Contact our team at letsconnect@ampcuscyber.com to discuss your specific needs and let us guide you toward a more secure tomorrow."
        // email="contact@example.com"
        buttonText="Contact 
                Us Today"
        onButtonClick={handleContactClick}
      />



    </div>)
}

export default AboutUs