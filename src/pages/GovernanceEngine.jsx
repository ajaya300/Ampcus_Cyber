// import React from 'react'

// function GovernanceEngine() {
//   return (
//     <div>GovernanceEngine</div>
//   )
// }

// export default GovernanceEngine


import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import DynamicCardComponent from "@/component/ChooseSection";
// import ComplianceSection from "@/component/ComplainceSection";
import TabContent from "@/component/TabContent";
import b2 from "../../public/img/b1.jpg"
import b1 from ".././../public/img/b1.jpg"
import { useState } from "react";
import ContactCard from "@/component/CardDynamic";
import DynamicGridSection from "@/component/GridDynamic";

function GovernanceEngine() {
  const [activeTab, setActiveTab] = useState(0);


  const tabData = [
    {
      title: "Governance Engine",
      content: "Navigating the complex web of regulatory requirements is simplified with our Governance Engine.This solution serves as your trusty guide in achieving and maintaining compliance with industry standards and regulations.",
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
  // const handleTabClick = (index) => {
  //   setActiveTab(index); // Update active tab on click
  // };
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

  const itemdata = [
    {
      label: "Expertise You Can Trust",
      content:
        "Benefit from the extensive experience and expertise of our PCI QSA team, committed to staying abreast of evolving compliance standards.",
    },
    {
      label: "Tailored Solutions",
      content:
        "Our team provides customized compliance solutions that meet your organization's specific needs and objectives.",
    },
    {
      label: "Proactive Security Measures",
      content:
        "Stay ahead of potential threats with proactive measures designed to strengthen your security posture.",
    },
  ];


  const contentItems = [
    {
      heading: "Understand and meet industry-specific requirements",
      description:
        "We offer expertise in a wide range of compliance certifications, including PCI DSS, SOC 1 & 2, ISO 27001, HITRUST, CMMC, and more.",
    },
    {
      heading: "Conduct comprehensive audits and assessments",
      description:
        "Identify potential vulnerabilities and ensure adherence with thorough assessments.",
    },
    {
      heading: "Develop and implement effective compliance programs",
      description:
        "We create customized programs tailored to your specific needs and risk profile",
    },
    {
      heading: "Stay informed and adapt to evolving regulations",
      description:
        "Receive ongoing support and guidance to stay ahead of changing regulations.",
    },
  ];



  return (
    <>


      <section class="text-gray-600 body-font bg-[#2b97a0]">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-start w-full mb-12 ">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#ffeaab]">Governance Engine</h1>
          </div>


          <div class="flex flex-col text-start w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Unsure how to navigate the ever-growing landscape of regulatory requirements?</h1>

          </div>

          <div class="flex flex-col text-start w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Simplify your journey towards achieving and maintaining regulatory compliance with our comprehensive Compliance Compass solution</h1>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">At Ampcus Cyber, we understand the complexities of compliance and its impact on your organization’s success. Think of it as your trusty map and compass: This comprehensive solution provides a clear pathway to navigate the intricate web of compliance requirements, ensuring your organization operates with confidence and security</h1>
          </div>
        </div>
      </section>




      <DynamicGridSection
        title="Our expert team provides a streamlined approach to:"
        contentItems={contentItems}
      />

      <TabContent
        imageSrc={tabData[activeTab].imageSrc}
        complianceItems={tabData[activeTab].complianceItems}
      />

      <DynamicCardComponent title="Why Choose Ampcus Cyber As Your PCI QSA?" items={itemdata} />



      <ContactCard
        title="Ready to simplify your compliance journey?"
        subtitle="Contact Ampcus Cyber today and let our experienced professionals guide you towards achieving and maintaining compliance with confidence."
        description="Ampcus Cyber’s Compliance Compass acts as your one-stop resource encompassing all the necessary audits and certifications relevant to your specific needs.
        Stay compliant, stay secure, with Ampcus Cyber’s Compliance Compass."
        // email="contact@example.com"
        buttonText="Contact Ampcus cyber 
                Us Today"
      // onButtonClick={handleContactClick}
      />

    </>
  )
}

export default GovernanceEngine