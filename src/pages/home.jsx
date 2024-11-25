

// import React, { useState } from "react";
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   Typography,
//   Button,
//   IconButton,
//   Input,
//   Textarea,
//   Checkbox,
// } from "@material-tailwind/react";
// import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
// import { PageTitle, Footer } from "@/widgets/layout";
// import { FeatureCard, TeamCard } from "@/widgets/cards";
// import { featuresData, teamData, contactData } from "@/data";
// import HeroDynamic from "@/component/HeroDynamic";
// import CyberSecurityCarousel from "@/component/CyberSecurityCarousel";
// import TabContent from "@/component/TabContent";
// import b2 from "../../public/img/b1.jpg"
// import b1 from ".././../public/img/b1.jpg"
// import TestimonialsSection from "@/component/Testimonial";
// import ComplianceSection from "@/component/ComplainceSection";
// import LogoSection from "@/component/LogoSection";
// import Locations from "@/component/Location";
// export function Home() {
//   const [activeTab, setActiveTab] = useState(0); // Initialize active tab index

//   // Define tab data with the image and compliance list for each tab
//   const tabData = [
//     {
//       title: "Compliance Compass",
//       content: "Navigating the complex web of regulatory requirements is simplified with our Compliance Compass.This solution serves as your trusty guide in achieving and maintaining compliance with industry standards and regulations.",
//       imageSrc: { b1 }, // Update with actual image path
//       complianceItems: [
//         "PCI DSS",
//         "PCI PIN",
//         "PCI 3DS",
//         "PCI P2PE",
//         "PCI CP",
//         "PCI SSF",
//         "Facilitated PCI SAQ",
//         "ISMS - ISO/IEC 27001",
//         "PIMS - ISO/IEC 27701",
//         "BCMS - ISO/IEC 22301",
//         "SOC 1 and SOC 2",
//         "HITRUST",
//         "NIST CSF Implementation",
//         "ISA 62443",
//         "Synergized Compliance Model",
//         "SWIFT CSF",
//         "CISA Cybersecurity Maturity Model Certification"
//       ]

//     },
//     {
//       title: "Governance Engine",
//       content: "Maintaining control over your digital environment is crucial for sustained cybersecurity. Our Governance Engine acts as the central nervous system, orchestrating and optimizing security policies, processes, and procedures. By providing a unified framework, it empowers your organization to proactively manage risk, enforce security protocols, and foster a culture of continuous improvement.",
//       imageSrc: { b2 },
//       complianceItems: ["Security Architecture Review",
//         "Risk Assessment & Management",
//         "Governance Framework Development",
//         "Security Program Maturity Assessment & Improvement",
//         "Security Policy & Strategy Development",
//         "Third Party Risk Management",
//         "Data Governance",
//         "Metrics & Reporting",
//         "Incident Response Planning",
//         "Cyber Crisis Simulation",
//         "Cyber Security Insurance Support",
//         "ICS Security",
//         "Cybersecurity Forensics and Incident Response Investigations",
//         "Cloud Security",
//         "Virtual/Shared CISO as a Service",
//         "DPO as a Service",
//         "Data Privacy Impact Assessment"]
//     },
//     {
//       title: "Threat & Vulnerability Radar",
//       content: "In an ever-expanding threat landscape, being aware of potential vulnerabilities is non-negotiable. Our Threat & Vulnerability Radar constantly scans and assesses your digital terrain, identifying and prioritizing potential threats. By providing real-time insights and actionable intelligence, this solution equips your security teams to stay one step ahead, fortifying your defenses against emerging cyber threats.",
//       imageSrc: { b2 },
//       complianceItems: ["Network Architecture Review",
//         "Network Vulnerability Assessment & Penetration Testing",
//         "Web Application Vulnerability Assessment & Penetration Testing",
//         "Mobile Application Vulnerability Assessment & Penetration Testing",
//         "Advanced Penetration Testing",
//         "Configuration Management & Hardening",
//         "Vulnerability Remediation Guidance",
//         "Compliance Focused Assessments - PCI DSS, GDPR & HIPAA",
//         "Red Team Assessment",
//         "Purple Team Assessment",
//         "Wireless Security Assessment",
//         "Social Engineering Testing",
//         "IoT Security Assessment",
//         "Cloud Security Assessment",
//         "Source Code Review",
//         "Threat Modelling",
//         "Attack Surface Analysis",
//         "DevSecOps",
//         "Ransomware Simulation & Assessment"]
//     },
//     {
//       title: "Technology Arsenal",
//       content: "Arming your organization with the latest cybersecurity technologies is essential for staying ahead of cyber adversaries. Our Technology Arsenal comprises a suite of advanced tools and solutions tailored to your organization's specific needs. From highly developed firewalls to intrusion detection systems, our arsenal is designed to strengthen your cybersecurity infrastructure, ensuring a proactive defense against evolving cyber threats.",
//       imageSrc: { b2 },
//       complianceItems: ["Data Leakage Prevention",
//         "Identity & Access Management",
//         "SIEM",
//         "XDR",
//         "Data Discovery",
//         "Web Application Firewall",
//         "Governance, Risk & Compliance",
//         "Endpoint Detection & Response",
//         "Data Encryption Solutions",
//         "Threat Intelligence Management",
//         "Secure DevOps & Application Security",
//         "Mobile Device Management",
//         "DDoS Protection",
//         "Security Training & Awareness",
//         "Platform Security",
//         "Automation and Orchestration (SOAR)"]
//     },
//     {
//       title: "Cyberscurity Awarness",
//       content: "Recognizing that human error is a significant factor in cybersecurity incidents, our comprehensive Cybersecurity Awareness Training Programs address this vulnerability by empowering your workforce with the knowledge and skills needed to recognize and mitigate cyber threats. From phishing simulations to best practices for secure online behavior, these programs foster a security-conscious culture within your organization.",
//       imageSrc: { b2 },
//       complianceItems: ["Certified Payment Security Compliance Manager",
//         "Certified AI Security Specialist",
//         "Certified Data Privacy Manager",
//         "Certified NIST CSF v2.0 Specialist"]
//     },
//     {
//       title: "Training Program",
//       content: "Content for Tab 2",
//       imageSrc: { b2 },
//       complianceItems: ["Compliance Item A", "Compliance Item B"]
//     },
//     // Add more tab objects as needed
//   ];
//   const handleTabClick = (index) => {
//     setActiveTab(index); // Update active tab on click
//   };
//   const items = [
//     {
//       image: "https://via.placeholder.com/50", // Replace with actual image URL
//       text1: "1800 +",
//       text2: "Business Certified",
//     },
//     {
//       image: "https://via.placeholder.com/50", // Replace with actual image URL
//       text1: "2000+",
//       text2: "Projects Completed",
//     },
//     {
//       image: "https://via.placeholder.com/50", // Replace with actual image URL
//       text1: "18+",
//       text2: "Global Presence",
//     },
//   ];
//   return (
//     <>
//       <div className="relative flex h-screen content-center items-center justify-center pt-8 py-10 pb-24 border-4 border-gray-800 bg-cover bg-[url('/img/b3.jpg')] ">
//         <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
//         <div className="max-w-8xl container mx-auto px-4    flex flex-col min-h-screen absolute top-0 h-full w-full  bg-cover bg-center">
//           {/* Dynamic Section for Heading and Subheading */}
//           <HeroDynamic
//             heading={
//               <>
//                 <span className="bg-red-900 pl-4">Get Your Business Secured</span> and Compliance Ready in One Single Go!!!
//               </>
//             }
//             subheading={
//               <>
//                 Ampcus Cyber, Enabling True Security, Beyond Compliance. Our cybersecurity experts simplify the process,{" "}
//                 <span className="bg-red-900">SAVING YOU TIME, EFFORT, and MONEY.</span>
//               </>
//             }
//             headingClass="text-white mb-6"
//             subheadingClass="text-white"
//           />

//           {/* Red Boxes Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mb-12">

//             {/* Box 1 */}
//             <div className="p-6 bg-red-900 text-white rounded-md shadow-lg">
//               <h3 className="text-lg font-semibold mb-2">Tailored Compliance Solutions</h3>
//               <p className="text-sm">
//                 We understand that every organization is unique, with distinct needs and vulnerabilities, and hence we craft tailored cybersecurity solutions that seamlessly integrate with your existing infrastructure.
//               </p>
//             </div>

//             {/* Box 2 */}
//             <div className="p-6 bg-red-900 text-white rounded-md shadow-lg">
//               <h3 className="text-lg font-semibold mb-2">Proven Expertise</h3>
//               <p className="text-sm">
//                 Highly skilled professionals with a deep understanding and hands-on experience of industry regulations and compliance requirements, securing businesses across diverse industries.
//               </p>
//             </div>

//             {/* Box 3 */}
//             <div className="p-6 bg-red-900 text-white rounded-md shadow-lg">
//               <h3 className="text-lg font-semibold mb-2">End-to-End Security</h3>
//               <p className="text-sm">
//                 From encryption to access control, we offer advanced security compliance solutions ensuring addressing every threat and complete security from potential cyber threat.
//               </p>
//             </div>

//             {/* Box 4 */}
//             <div className="p-6 bg-red-900 text-white rounded-md shadow-lg">
//               <h3 className="text-lg font-semibold mb-2">Strategic Vigilance</h3>
//               <p className="text-sm">
//                 Proactive monitoring and threat intelligence to stay one step ahead of potential risks. We get your businesses compliant against compliance standards, saving millions from data breaches and helping you grow your business and safeguard your reputations.
//               </p>
//             </div>
//           </div>

//         </div>
//         {/* <div className="absolute top-0 h-full w-full bg-[url('/img/b3.jpg')] bg-cover bg-center" />
//         <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" /> */}

//       </div>



//       {/* Tab Navigation */}
//       <div className="mt-8 container mx-auto px-4">
//         <div className="max-w-6xl mx-auto text-center px-8 mb-12">
//           {/* Main Heading */}
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
//             What Cybersecurity Solutions We Offer???
//           </h2>

//           {/* Description */}
//           <p className="text-md md:text-lg text-gray-700 leading-relaxed">
//             Safeguarding your organization against cyber threats is a critical need of the hour. Ampcus Cyber offers a comprehensive and proactive approach to defend your business. Our cybersecurity solutions are meticulously designed to provide a robust defense mechanism, ensuring the integrity, confidentiality, and availability of your critical assets.
//           </p>

//           {/* Subtext */}
//           <p className="text-md md:text-lg italic text-red-900 mt-4">
//             "Let's explore the key offerings that form the backbone of our cybersecurity posture."
//           </p>
//         </div>
//         <div>
//           <div className="flex space-x-4 border-b border-gray-300">
//             {tabData.map((tab, index) => (
//               <button
//                 key={index}
//                 className={`px-4 py-2 ${index === activeTab ? "border-b-2 border-red-500 text-black font-semibold" : "text-gray-600 font-semibold"
//                   }`}
//                 onClick={() => handleTabClick(index)}
//               >
//                 {tab.title}
//               </button>
//             ))}
//           </div>


//           <div className="mt-8">
//             <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
//               <CardBody>
//                 <Typography variant="h5" color="blue-gray" className="font-bold mb-4">
//                   {tabData[activeTab].title}
//                 </Typography>
//                 <Typography className="text-gray-700">
//                   {tabData[activeTab].content}
//                 </Typography>
//               </CardBody>
//             </Card>
//           </div>

//           {/* Render TabContent component with the data from the currently active tab */}
//           <TabContent
//             imageSrc={tabData[activeTab].imageSrc}
//             complianceItems={tabData[activeTab].complianceItems}
//           />
//         </div>

//         {/* Tab Content */}

//       </div>



//       {/* CyberSecurity Carousel */}
//       <div>
//         {/* Header section */}
//         <div className="relative bg-teal-500 py-8 mt-8 pt-4 text-white text-center "
//           style={{
//             clipPath: "polygon(0 0, 110% 0, 80% 60%, 0% 20%)"
      
//           }}>
//           <h2 className="text-3xl font-extrabold">
//             Why Choose Ampcus Cyber As Your 'True Security Partner'???
//           </h2>
//           <p className="text-md mt-4">
//             Choosing the right security partner is crucial for the success and security of your business.
//             At Ampcus Cyber, we stand out for our unwavering commitment to true security and excellence.
//           </p>

//           {/* Carousel Section */}
//           <div className=" relative px-4 pb-20 pt-4 mt-6 rounded-lg -z-10">
//             <CyberSecurityCarousel />
//           </div>
//         </div>

//       </div>

//       {/* Complaince Section */}
//       <div className=" bg-white px-4 pb-20 pt-4"><ComplianceSection /></div>
//       {/* Testimonial */}
//       <TestimonialsSection />
//       <div className="flex flex-row items-center justify-center bg-[#118a95] py-16 space-x-8">
//         {items.map((item, index) => (
//           <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-lg">
//             <img
//               src={item.image}
//               alt={`Icon ${index + 1}`}
//               className="w-12 h-12 mr-4"
//             />
//             <div>
//               <div className="flex flex-col">
//                 <p className="text-lg font-bold text-gray-800">{item.text1}</p>
//                 <p className="text-lg text-gray-600">{item.text2}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <LogoSection />

//       {/* Global Location */}
//       <Locations/>

//       {/* Additional sections can go here */}

//       {/* <section className=" bg-white px-4 pb-20 pt-4">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {featuresData.map(({ color, title, icon, description }) => (
//               <FeatureCard
//                 key={title}
//                 color={color}
//                 title={title}
//                 icon={React.createElement(icon, {
//                   className: "w-5 h-5 text-white",
//                 })}
//                 description={description}
//               />
//             ))}
//           </div>
//           <div className="mt-32 flex flex-wrap items-center">
//             <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
//               <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
//                 <FingerPrintIcon className="h-8 w-8 text-white " />
//               </div>
//               <Typography
//                 variant="h3"
//                 className="mb-3 font-bold"
//                 color="blue-gray"
//               >
//                 Working with us is a pleasure
//               </Typography>
//               <Typography className="mb-8 font-normal text-blue-gray-500">
//                 Don't let your uses guess by attaching tooltips and popoves to
//                 any element. Just make sure you enable them first via
//                 JavaScript.
//                 <br />
//                 <br />
//                 The kit comes with three pre-built pages to help you get started
//                 faster. You can change the text and images and you're good to
//                 go. Just make sure you enable them first via JavaScript.
//               </Typography>
//               <Button variant="filled">read more</Button>
//             </div>
//             <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
//               <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
//                 <CardHeader floated={false} className="relative h-56">
//                   <img
//                     alt="Card Image"
//                     src="/img/teamwork.png"
//                     className="h-full w-full"
//                   />
//                 </CardHeader>
//                 <CardBody>
//                   <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography>
//                   <Typography
//                     variant="h5"
//                     color="blue-gray"
//                     className="mb-3 mt-2 font-bold"
//                   >
//                     Top Notch Services
//                   </Typography>
//                   <Typography className="font-normal text-blue-gray-500">
//                     The Arctic Ocean freezes every winter and much of the
//                     sea-ice then thaws every summer, and that process will
//                     continue whatever happens.
//                   </Typography>
//                 </CardBody>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section> */}


//       <div className="bg-white">
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Home;

import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import HeroDynamic from "@/component/HeroDynamic";
import CyberSecurityCarousel from "@/component/CyberSecurityCarousel";
import TabContent from "@/component/TabContent";
import b2 from "../../public/img/b1.jpg"
import b1 from ".././../public/img/b1.jpg"
import TestimonialsSection from "@/component/Testimonial";
import ComplianceSection from "@/component/ComplainceSection";
import LogoSection from "@/component/LogoSection";
import Locations from "@/component/Location";
import GetStarted from "@/component/GetStarted";
import LatestBlog from "@/component/LatestBlog";
import image1 from '@/image/bgimage.jpg'
export function Home() {
  const [activeTab, setActiveTab] = useState(0); // Initialize active tab index

  // Define tab data with the image and compliance list for each tab
  const tabData = [
    {
      title: "Compliance Compass",
      content: "Navigating the complex web of regulatory requirements is simplified with our Compliance Compass.This solution serves as your trusty guide in achieving and maintaining compliance with industry standards and regulations.",
      imageSrc: { b1 }, // Update with actual image path
      complianceItems: [
        "PCI DSS",
        "PCI PIN",
        "PCI 3DS",
        "PCI P2PE",
        "PCI CP",
        "PCI SSF",
        "Facilitated PCI SAQ",
        "ISMS - ISO/IEC 27001",
        "PIMS - ISO/IEC 27701",
        "BCMS - ISO/IEC 22301",
        "SOC 1 and SOC 2",
        "HITRUST",
        "NIST CSF Implementation",
        "ISA 62443",
        "Synergized Compliance Model",
        "SWIFT CSF",
        "CISA Cybersecurity Maturity Model Certification"
      ]

    },
    {
      title: "Governance Engine",
      content: "Maintaining control over your digital environment is crucial for sustained cybersecurity. Our Governance Engine acts as the central nervous system, orchestrating and optimizing security policies, processes, and procedures. By providing a unified framework, it empowers your organization to proactively manage risk, enforce security protocols, and foster a culture of continuous improvement.",
      imageSrc: { b2 },
      complianceItems: ["Security Architecture Review",
        "Risk Assessment & Management",
        "Governance Framework Development",
        "Security Program Maturity Assessment & Improvement",
        "Security Policy & Strategy Development",
        "Third Party Risk Management",
        "Data Governance",
        "Metrics & Reporting",
        "Incident Response Planning",
        "Cyber Crisis Simulation",
        "Cyber Security Insurance Support",
        "ICS Security",
        "Cybersecurity Forensics and Incident Response Investigations",
        "Cloud Security",
        "Virtual/Shared CISO as a Service",
        "DPO as a Service",
        "Data Privacy Impact Assessment"]
    },
    {
      title: "Threat & Vulnerability Radar",
      content: "In an ever-expanding threat landscape, being aware of potential vulnerabilities is non-negotiable. Our Threat & Vulnerability Radar constantly scans and assesses your digital terrain, identifying and prioritizing potential threats. By providing real-time insights and actionable intelligence, this solution equips your security teams to stay one step ahead, fortifying your defenses against emerging cyber threats.",
      imageSrc: { b2 },
      complianceItems: ["Network Architecture Review",
        "Network Vulnerability Assessment & Penetration Testing",
        "Web Application Vulnerability Assessment & Penetration Testing",
        "Mobile Application Vulnerability Assessment & Penetration Testing",
        "Advanced Penetration Testing",
        "Configuration Management & Hardening",
        "Vulnerability Remediation Guidance",
        "Compliance Focused Assessments - PCI DSS, GDPR & HIPAA",
        "Red Team Assessment",
        "Purple Team Assessment",
        "Wireless Security Assessment",
        "Social Engineering Testing",
        "IoT Security Assessment",
        "Cloud Security Assessment",
        "Source Code Review",
        "Threat Modelling",
        "Attack Surface Analysis",
        "DevSecOps",
        "Ransomware Simulation & Assessment"]
    },
    {
      title: "Technology Arsenal",
      content: "Arming your organization with the latest cybersecurity technologies is essential for staying ahead of cyber adversaries. Our Technology Arsenal comprises a suite of advanced tools and solutions tailored to your organization's specific needs. From highly developed firewalls to intrusion detection systems, our arsenal is designed to strengthen your cybersecurity infrastructure, ensuring a proactive defense against evolving cyber threats.",
      imageSrc: { b2 },
      complianceItems: ["Data Leakage Prevention",
        "Identity & Access Management",
        "SIEM",
        "XDR",
        "Data Discovery",
        "Web Application Firewall",
        "Governance, Risk & Compliance",
        "Endpoint Detection & Response",
        "Data Encryption Solutions",
        "Threat Intelligence Management",
        "Secure DevOps & Application Security",
        "Mobile Device Management",
        "DDoS Protection",
        "Security Training & Awareness",
        "Platform Security",
        "Automation and Orchestration (SOAR)"]
    },
    {
      title: "Cyberscurity Awarness",
      content: "Recognizing that human error is a significant factor in cybersecurity incidents, our comprehensive Cybersecurity Awareness Training Programs address this vulnerability by empowering your workforce with the knowledge and skills needed to recognize and mitigate cyber threats. From phishing simulations to best practices for secure online behavior, these programs foster a security-conscious culture within your organization.",
      imageSrc: { b2 },
      complianceItems: ["Certified Payment Security Compliance Manager",
        "Certified AI Security Specialist",
        "Certified Data Privacy Manager",
        "Certified NIST CSF v2.0 Specialist"]
    },
    {
      title: "Training Program",
      content: "Content for Tab 2",
      imageSrc: { b2 },
      complianceItems: ["Compliance Item A", "Compliance Item B"]
    },
    // Add more tab objects as needed
  ];
  const handleTabClick = (index) => {
    setActiveTab(index); // Update active tab on click
  };
  const items = [
    {
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      text1: "1800 +",
      text2: "Business Certified",
    },
    {
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      text1: "2000+",
      text2: "Projects Completed",
    },
    {
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      text1: "18+",
      text2: "Global Presence",
    },
  ];
  const blogs = [
    {
      image: "/path-to-image1.jpg",
      title: "Introduction to Managed Detection and Response (MDR)",
      description: "Managed Detection and Response (MDR) is your all-in-one solution for cybersecurity.",
      link: "#"
    },
    {
      image: "/path-to-image2.jpg",
      title: "Digital Operational Resilience Act (DORA): A Comprehensive Guide",
      description: "Understanding the DORA Act for enhanced cybersecurity compliance.",
      link: "#"
    },
    {
      image: "/path-to-image3.jpg",
      title: "Comprehensive Guide to the NIS 2 Directive",
      description: "Key changes, compliance requirements, and implications.",
      link: "#"
    }
  ];
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-8 py-10 pb-24 border-4 border-gray-800 bg-cover bg-[url('/img/b3.jpg')] ">
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container mx-auto px-4    flex flex-col min-h-screen absolute top-0 h-full w-full  bg-cover bg-center">
          {/* Dynamic Section for Heading and Subheading */}
          <HeroDynamic
            heading={
              <>
                <span className="bg-red-900 pl-4">Get Your Business Secured</span> and Compliance Ready in One Single Go!!!
              </>
            }
            subheading={
              <>
                Ampcus Cyber, Enabling True Security, Beyond Compliance. Our cybersecurity experts simplify the process,{" "}
                <span className="bg-red-900">SAVING YOU TIME, EFFORT, and MONEY.</span>
              </>
            }
            headingClass="text-white mb-6"
            subheadingClass="text-white"
          />

          {/* Red Boxes Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mb-12">

            {/* Box 1 */}
            <div className="p-6 bg-red-900 text-white rounded-md shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Tailored Compliance Solutions</h3>
              <p className="text-sm">
                We understand that every organization is unique, with distinct needs and vulnerabilities, and hence we craft tailored cybersecurity solutions that seamlessly integrate with your existing infrastructure.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-6 bg-red-900 text-white rounded-md shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Proven Expertise</h3>
              <p className="text-sm">
                Highly skilled professionals with a deep understanding and hands-on experience of industry regulations and compliance requirements, securing businesses across diverse industries.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-6 bg-red-900 text-white rounded-md shadow-lg">
              <h3 className="text-lg font-semibold mb-2">End-to-End Security</h3>
              <p className="text-sm">
                From encryption to access control, we offer advanced security compliance solutions ensuring addressing every threat and complete security from potential cyber threat.
              </p>
            </div>

            {/* Box 4 */}
            <div className="p-6 bg-red-900 text-white rounded-md shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Strategic Vigilance</h3>
              <p className="text-sm">
                Proactive monitoring and threat intelligence to stay one step ahead of potential risks. We get your businesses compliant against compliance standards, saving millions from data breaches and helping you grow your business and safeguard your reputations.
              </p>
            </div>
          </div>

        </div>
        {/* <div className="absolute top-0 h-full w-full bg-[url('/img/b3.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" /> */}

      </div>



      {/* Tab Navigation */}
      <div className="mt-8 container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center px-8 mb-12">
          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
            What Cybersecurity Solutions We Offer???
          </h2>

          {/* Description */}
          <p className="text-md md:text-lg text-gray-700 leading-relaxed">
            Safeguarding your organization against cyber threats is a critical need of the hour. Ampcus Cyber offers a comprehensive and proactive approach to defend your business. Our cybersecurity solutions are meticulously designed to provide a robust defense mechanism, ensuring the integrity, confidentiality, and availability of your critical assets.
          </p>

          {/* Subtext */}
          <p className="text-md md:text-lg italic text-red-900 mt-4">
            "Let's explore the key offerings that form the backbone of our cybersecurity posture."
          </p>
        </div>
        <div>
          <div className="flex space-x-4 border-b border-gray-300">
            {tabData.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 ${index === activeTab ? "border-b-2 border-red-500 text-black font-semibold" : "text-gray-600 font-semibold"
                  }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>


          <div className="mt-8">
            <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="font-bold mb-4">
                  {tabData[activeTab].title}
                </Typography>
                <Typography className="text-gray-700">
                  {tabData[activeTab].content}
                </Typography>
              </CardBody>
            </Card>
          </div>

          {/* Render TabContent component with the data from the currently active tab */}
          <TabContent
            imageSrc={tabData[activeTab].imageSrc}
            complianceItems={tabData[activeTab].complianceItems}
          />
        </div>

        {/* Tab Content */}

      </div>



      {/* CyberSecurity Carousel */}
      <div className="relative">
      {/* Background Layer for Header */}
      <div
        className="absolute inset-0 bg-teal-500"
        style={{
          clipPath: "polygon(0 0, 110% 0, 80% 60%, 0% 20%)",
          zIndex: 0 // Background layer
        }}
      ></div>
    
      {/* Content Layer */}
      <div className="relative z-10 py-8 mt-8 pt-4 text-white text-center">
        <h2 className="text-3xl font-extrabold">
          Why Choose Ampcus Cyber As Your 'True Security Partner'???
        </h2>
        <p className="text-md mt-4">
          Choosing the right security partner is crucial for the success and security of your business.
          At Ampcus Cyber, we stand out for our unwavering commitment to true security and excellence.
        </p>
    
        {/* Carousel Section */}
        <div className="relative px-4 pb-20 pt-4 mt-6 rounded-lg z-20">
          <CyberSecurityCarousel />
        </div>
      </div>
    </div>
    

      {/* Complaince Section */}
      <div className=" bg-white px-4 pb-20 pt-4"><ComplianceSection /></div>
      {/* Testimonial */}
      <TestimonialsSection />
      <div className="flex flex-row items-center justify-center bg-[#118a95] py-16 space-x-8">
        {items.map((item, index) => (
          <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-lg">
            <img
              src={item.image}
              alt={`Icon ${index + 1}`}
              className="w-12 h-12 mr-4"
            />
            <div>
              <div className="flex flex-col">
                <p className="text-lg font-bold text-gray-800">{item.text1}</p>
                <p className="text-lg text-gray-600">{item.text2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <LogoSection />
      {/* Global Location */}
            <Locations/>
{/* Get Started */}
<GetStarted
  image={image1}
  header="Ready To Get Started? We're Here To Help!"
  description="Empower your organization with expert cybersecurity solutions tailored to your specific needs."
  buttonText="Contact Us Now!"
  onButtonClick={() => alert("Contact button clicked")}
/>
{/* BlogSection */}
<LatestBlog blogs={blogs} />
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;