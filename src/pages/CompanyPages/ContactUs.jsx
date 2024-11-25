import ContactForm from '@/component/ContactFormSection';
import FourCardSection from '@/component/FourCardSection';
import React from 'react';
// Make sure the path is correct
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Datacards = [
  {
    title: 'USA',
    content: '14900 Conference Center Dr,Suite # 500, Chantilly, VA 20151 Suite # 500, Chantilly, VA      (703) 666-3720(Direct)'
  },
  {
    title: 'India',
    content: '313, 3rd Floor, Beta Block Sigma Tech Park, Varthur Whitefield, Bangalore – 560066 +91 9730163135'
  },
  {
    title: 'Malaysia',
    content: 'S-22-03, Kiara 163,Menara YNH, Jalan Kiara 50480 Kuala Lumpur, Malaysia +91 9066298021.'
  },

  {
    title: 'Dubai',
    content: 'Dubai Silicon Oasis, DDP,Building A1, Dubai United Arab Emiraes +971 55 445 1152'
  },
  {
    title: 'Philippines',
    content: 'Grace Residences, Levi Mariano Avenue Ususan Taguig City, Metro Manila 1632 Philippines 3 09208320598'
  },


  {
    title: 'Phishing Lures',
    content: 'We cast sophisticated phishing nets, testing your employees’ awareness and susceptibility to deceptive emails and malicious links.'
  },
  {
    title: 'Hidden Vulnerabilities',
    content: 'We exploit outdated software, misconfigured systems, and weak access controls, revealing hidden pathways for ransomware infiltration.'
  },
  {
    title: 'Human Factor Flaws',
    content: 'We test your incident response protocols, communication channels, and crisis management procedures, uncovering critical lapses and optimizing recovery strategies.'
  },

];


function ContactUs() {
  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaFacebook />, url: "https://facebook.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaYoutube />, url: "https://youtube.com" },
  ];

  return (
    <div>
      <ContactForm
        title="Contact Us"
        contactEmail="LetsConnect@ampcuscyber.com"
        contactPhone="(703) 666-3720 (Direct)"
        socialLinks={socialLinks}
      />

      <FourCardSection
        title="Services That Define Excellence in DPO as A Service"
        cards={Datacards}
      />
    </div>
  );
}

export default ContactUs;
