


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGovernanceMegaMenuOpen, setIsGovernanceMegaMenuOpen] = useState(false);
  const [isThreatMegaMenuOpen, setIsThreatMegaMenuOpen] = useState(false);
  const [isTechnologyMegaMenuOpen, setIsTechnologyMegaMenuOpen] = useState(false);
  const [isCyberDefenceMegaMenuOpen, setIsCyberDefenceMegaMenuOpen] = useState(false);
  const [isTrainingMegaMenuOpen, setIsTrainingMegaMegaMenuOpen] = useState(false);
  const [isCompanyMegaMenuOpen, setIsCompanyMegaMenuOpen] = useState(false);
  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 relative">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AmpcusCyber</span>
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full-cta"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div id="mega-menu-full-cta" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link to="/" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Compliance Compass
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
            </li>


            <li>
              <button
                onClick={() => setIsGovernanceMegaMenuOpen(!isGovernanceMegaMenuOpen)}
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Governance Engine
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
            </li>

            <li>
              <button
                onClick={() => setIsThreatMegaMenuOpen(!isThreatMegaMenuOpen)}
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Threat & Vulnerability Radar
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
            </li>

            <li>
              <button
                onClick={() => setIsTechnologyMegaMenuOpen(!isTechnologyMegaMenuOpen)}
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Technology Arsenal
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
            </li>
            {/* <li>
              <Link to="/resources" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                Threat and Vulnerability Radar
              </Link>
            </li>
            <li>
              <Link to="/resources" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                Technology Arsenal
              </Link>
            </li> */}
            <li>
            <button
                onClick={() => setIsCyberDefenceMegaMenuOpen(!isCyberDefenceMegaMenuOpen)}
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Cyber Defence
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
            </li>
            <li>
            <button
                onClick={() => setIsTrainingMegaMegaMenuOpen(!isTrainingMegaMenuOpen)}
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Training
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
            </li>
            <li>
            <button
                onClick={() => setIsCompanyMegaMenuOpen(!isCompanyMegaMenuOpen)}
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Company
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
            </li>




          </ul>
        </div>
      </div>

      {isMegaMenuOpen && (
        <div
          id="mega-menu-full-cta-dropdown"
          className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-gray-800 text-white border-gray-200 shadow-sm border-y dark:border-gray-600 z-50"
          style={{ maxWidth: '800px', width: '90%' }} // Adjust width here
        >
          <div className="grid px-4 py-5 mx-auto text-sm md:grid-cols-3 gap-6">
            <ul className="space-y-2">
              <li><Link to="/pcdss" className="hover:text-blue-400">PCI DSS</Link></li>
              <li><Link to="/pcpin" className="hover:text-blue-400">PCI PIN</Link></li>
              <li><Link to="/pc3ds" className="hover:text-blue-400">PCI 3DS</Link></li>
              <li><Link to="/pcp2pe" className="hover:text-blue-400">PCI P2PE</Link></li>
              <li><Link to="/pcicard" className="hover:text-blue-400">PCI Card Production Compliance | PCI CP</Link></li>
              <li><Link to="/pcssf" className="hover:text-blue-400">PCI SSF</Link></li>
            </ul>
            <ul className="space-y-2">
              <li><Link to="/pcsaq" className="hover:text-blue-400">Facilitated PCI SAQ</Link></li>
              <li><Link to="/isms" className="hover:text-blue-400">ISMS – ISO/IEC 27001</Link></li>
              <li><Link to="/pims" className="hover:text-blue-400">PIMS – ISO/IEC 27701</Link></li>
              <li><Link to="/bcms" className="hover:text-blue-400">BCMS – ISO/IEC 22301</Link></li>
              <li><Link to="/soc" className="hover:text-blue-400">SOC 1 and SOC 2</Link></li>
              <li><Link to="/hitrust" className="hover:text-blue-400">HITRUST Certification</Link></li>
            </ul>
            <ul className="space-y-2">
              <li><Link to="/cisa" className="hover:text-blue-400">CISA Cybersecurity Maturity Model Certification (CMMC)</Link></li>
              <li><Link to="/nist" className="hover:text-blue-400">NIST CSF Implementation</Link></li>
              <li><Link to="/synergy" className="hover:text-blue-400">Synergized Compliance Model</Link></li>
              <li><Link to="/isa" className="hover:text-blue-400">ISA 62443</Link></li>
              <li><Link to="/swiftcsf" className="hover:text-blue-400">SWIFT CSF</Link></li>
            </ul>
          </div>
        </div>
      )}
      {isGovernanceMegaMenuOpen && (
        <div
          id="mega-menu-full-cta-dropdown"
          className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-gray-800 text-white border-gray-200 shadow-sm border-y dark:border-gray-600 z-50"
          style={{ maxWidth: '800px', width: '90%' }} // Adjust width here
        >
          <div className="grid px-4 py-5 mx-auto text-sm md:grid-cols-3 gap-6">
            <ul className="space-y-2">
              <li><Link to="/securityarchitecture" className="hover:text-blue-400">Security Architecture Review </Link></li>
              <li><Link to="/riskassessment" className="hover:text-blue-400">Risk Assessment & Management</Link></li>
              <li><Link to="/governanceframework" className="hover:text-blue-400">Governance Framework Development</Link></li>
              <li><Link to="/securityprogram" className="hover:text-blue-400">Security Program Maturity Assessment & Imrpovement</Link></li>
              <li><Link to="/securitypolicy" className="hover:text-blue-400">Security Policy & Statergy Development</Link></li>
              <li><Link to="/thirdpartyrisk" className="hover:text-blue-400">Third Party Risk Management</Link></li>
            </ul>
            <ul className="space-y-2">
              <li><Link to="/datagovernance" className="hover:text-blue-400">Data Governance </Link></li>
              <li><Link to="/metricandreporting" className="hover:text-blue-400">Metric & Reporting</Link></li>
              <li><Link to="/incidentresponse" className="hover:text-blue-400">Incident Response Planning</Link></li>
              <li><Link to="/cybercrisis" className="hover:text-blue-400">Cyber Crisis Simulation</Link></li>
              <li><Link to="/cybersecurity" className="hover:text-blue-400">Cyber Security Insurance Support</Link></li>
              <li><Link to="/cybersecurityforensic" className="hover:text-blue-400">Cybersecurity Forensics And Incident Response Investingations</Link></li>
            </ul>
            <ul className="space-y-2">
              <li><Link to="/icssecurity" className="hover:text-blue-400">ICS Security </Link></li>
              <li><Link to="/cloudsecurity" className="hover:text-blue-400">Cloud Security</Link></li>
              <li><Link to="/virtualciso" className="hover:text-blue-400">Virtual/Shared CISO as as Service</Link></li>
              <li><Link to="/dpo" className="hover:text-blue-400">DPO as a Service</Link></li>
              <li><Link to="/dataprivacy" className="hover:text-blue-400">Data Privacy Impact Assessment</Link></li>

            </ul>
          </div>
        </div>
      )}
      {isThreatMegaMenuOpen && (
        <div
          id="mega-menu-full-cta-dropdown"
          className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-gray-800 text-white border-gray-200 shadow-sm border-y dark:border-gray-600 z-50"
          style={{ maxWidth: '800px', width: '90%' }} // Adjust width here
        >
          <div className="grid px-4 py-5 mx-auto text-sm md:grid-cols-3 gap-6">
            <ul className="space-y-2">
              <li><Link to="/networkarchitecture" className="hover:text-blue-400">Network Architecture Review </Link></li>
              <li><Link to="/networkvulnerability" className="hover:text-blue-400">Network Vulnerability Assessment & Penetration Testing</Link></li>
              <li><Link to="/webapplication" className="hover:text-blue-400">Web Application Vulnerability Assessment & Penetration Testing</Link></li>
              <li><Link to="/mobileapplication" className="hover:text-blue-400">Mobile Application Vulnerability Assessment & Penetration Testing</Link></li>
              <li><Link to="/advancepenetration" className="hover:text-blue-400">Advanced Penetration Testing</Link></li>
              <li><Link to="/configurationmanagement" className="hover:text-blue-400">Configuration Management and Hardening</Link></li>
            </ul>
            <ul className="space-y-2">
              <li><Link to="/compliancefocused" className="hover:text-blue-400">Compliance Focused Assessments-PCIDSS, GDPR & HIPAA </Link></li>
              <li><Link to="/vulnerabilityredemtion" className="hover:text-blue-400">Vulnerability Remediation Guidance</Link></li>
              <li><Link to="/redteamassessment" className="hover:text-blue-400">Red Team Assessment</Link></li>
              <li><Link to="/purpleteamassessment" className="hover:text-blue-400">Purple Team Assessment</Link></li>
              <li><Link to="/wirelesssecurity" className="hover:text-blue-400">Wireless Security Assessment</Link></li>
              <li><Link to="/socialengineering" className="hover:text-blue-400">Social Engineering Testing</Link></li>
            </ul>
            <ul className="space-y-2">
              <li><Link to="/iotsecurity" className="hover:text-blue-400">IoT Security Assessment </Link></li>
              <li><Link to="/cloudsecurityassessment" className="hover:text-blue-400">Cloud Security Assessment</Link></li>
              <li><Link to="/sourcecodereview" className="hover:text-blue-400">Source Code Review</Link></li>
              <li><Link to="/threatmodelling" className="hover:text-blue-400">Threat Modelling</Link></li>
              <li><Link to="/attacksurfaceanalysis" className="hover:text-blue-400">Attack Surface Analysis</Link></li>
              <li><Link to="/devsecops" className="hover:text-blue-400">DevsecOps</Link></li>
              <li><Link to="/ransomeware" className="hover:text-blue-400">Ransomware Simulation & Assessment</Link></li>

            </ul>
          </div>
        </div>
      )}
      {isTechnologyMegaMenuOpen && (
        <div
          id="mega-menu-full-cta-dropdown"
          className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-gray-800 text-white border-gray-200 shadow-sm border-y dark:border-gray-600 z-50"
          style={{ maxWidth: '800px', width: '90%' }} // Adjust width here
        >
          <div className="grid px-4 py-5 mx-auto text-sm md:grid-cols-3 gap-6">
            <ul className="space-y-2">
              <li><Link to="/securityarchitecture" className="hover:text-blue-400">Security Architecture Review </Link></li>
              <li><Link to="/riskassessment" className="hover:text-blue-400">Risk Assessment & Management</Link></li>
              <li><Link to="/governanceframework" className="hover:text-blue-400">Governance Framework Development</Link></li>
              <li><Link to="/securityprogram" className="hover:text-blue-400">Security Program Maturity Assessment & Imrpovement</Link></li>
              <li><Link to="/securitypolicy" className="hover:text-blue-400">Security Policy & Statergy Development</Link></li>
              <li><Link to="/thirdpartyrisk" className="hover:text-blue-400">Third Party Risk Management</Link></li>
            </ul>
            <ul className="space-y-2">
              <li><Link to="/datagovernance" className="hover:text-blue-400">Data Governance </Link></li>
              <li><Link to="/metricandreporting" className="hover:text-blue-400">Metric & Reporting</Link></li>
              <li><Link to="/incidentresponse" className="hover:text-blue-400">Incident Response Planning</Link></li>
              <li><Link to="/cybercrisis" className="hover:text-blue-400">Cyber Crisis Simulation</Link></li>
              <li><Link to="/cybersecurity" className="hover:text-blue-400">Cyber Security Insurance Support</Link></li>
              <li><Link to="/cybersecurityforensic" className="hover:text-blue-400">Cybersecurity Forensics And Incident Response Investingations</Link></li>
            </ul>
            <ul className="space-y-2">
              <li><Link to="/icssecurity" className="hover:text-blue-400">ICS Security </Link></li>
              <li><Link to="/cloudsecurity" className="hover:text-blue-400">Cloud Security</Link></li>
              <li><Link to="/virtualciso" className="hover:text-blue-400">Virtual/Shared CISO as as Service</Link></li>
              <li><Link to="/dpo" className="hover:text-blue-400">DPO as a Service</Link></li>
              <li><Link to="/dataprivacy" className="hover:text-blue-400">Data Privacy Impact Assessment</Link></li>

            </ul>
          </div>
        </div>
      )}
        {isCyberDefenceMegaMenuOpen && (
        <div
          id="mega-menu-full-cta-dropdown"
          className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-gray-800 text-white border-gray-200 shadow-sm border-y dark:border-gray-600 z-50"
          style={{ maxWidth: '800px', width: '90%' }} // Adjust width here
        >
          <div className="grid px-4 py-5 mx-auto text-sm md:grid-cols-3 gap-6">
            <ul className="space-y-2">
              <li><Link to="/defendermxdr" className="hover:text-blue-400">Defender MXDR</Link></li>
            
            </ul>
        
          </div>
        </div>
      )}
        {isTrainingMegaMenuOpen && (
        <div
          id="mega-menu-full-cta-dropdown"
          className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-gray-800 text-white border-gray-200 shadow-sm border-y dark:border-gray-600 z-50"
          style={{ maxWidth: '800px', width: '90%' }} // Adjust width here
        >
          <div className="grid px-4 py-5 mx-auto text-sm md:grid-cols-4 gap-6">
            <ul className="space-y-2">
              <li><Link to="/cpscm" className="hover:text-blue-400">Certified Payment Security Complaince Manger(CPSCM) </Link></li>
              
            </ul>
            <ul className="space-y-2">
              <li><Link to="/caiss" className="hover:text-blue-400">Certified AI Secuirty Specialist(CAISS) </Link></li>
              <li><Link to="/isaca" className="hover:text-blue-400">ISACA London Chapter</Link></li>
              
            </ul>
            <ul className="space-y-2">
              <li><Link to="/cpdm" className="hover:text-blue-400">Certified Data Privacy Manger(CPDM) </Link></li>
            </ul>
            <ul className="space-y-2">
              <li><Link to="/cnists" className="hover:text-blue-400">Certified NIST CSF V2.0 Specialist(CNISTS) </Link></li>
            </ul>
          </div>
        </div>
      )}
        {isCompanyMegaMenuOpen && (
        <div
          id="mega-menu-full-cta-dropdown"
          className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-gray-800 text-white border-gray-200 shadow-sm border-y dark:border-gray-600 z-50"
          style={{ maxWidth: '800px', width: '90%' }} // Adjust width here
        >
          <div className="grid px-4 py-5 mx-auto text-sm md:grid-cols-3 gap-6">
            <ul className="space-y-2">
              <li><Link to="/aboutus" className="hover:text-blue-400">About Us </Link></li>
              <li><Link to="/career" className="hover:text-blue-400">Career</Link></li>
              <li><Link to="/contactus" className="hover:text-blue-400">Contact Us</Link></li>
                        </ul>
          
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [megaMenu, setMegaMenu] = useState({
//     compliance: false,
//     threatRadar: false,
//   });
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMegaMenu = (menu) => {
//     setMegaMenu((prevState) => ({
//       ...prevState,
//       [menu]: !prevState[menu],
//     }));
//   };

//   return (
//     <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 relative">
//       <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
//         <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AmpcusCyber</span>
//         </Link>
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="mega-menu-full-cta"
//           aria-expanded={isMobileMenuOpen}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
//           </svg>
//         </button>
//         <div id="mega-menu-full-cta" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:flex md:w-auto md:order-1`}>
//           <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
//             <li>
//               <Link to="/" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
//                 Home
//               </Link>
//             </li>

//             {/* Compliance Compass with Mega Menu */}
//             <li>
//               <button
//                 onClick={() => toggleMegaMenu('compliance')}
//                 className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Compliance Compass
//                 <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//                 </svg>
//               </button>
//             </li>

//             {/* Threat and Vulnerability Radar with Mega Menu */}
//             <li>
//               <button
//                 onClick={() => toggleMegaMenu('threatRadar')}
//                 className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Threat and Vulnerability Radar
//                 <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//                 </svg>
//               </button>
//             </li>

//             {/* Other Menu Items */}
//             <li>
//               <Link to="/marketplace" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
//                 Governance Engine
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Mega Menu Content for Compliance Compass */}
//       {megaMenu.compliance && (
//         <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-gray-800 text-white border-gray-200 shadow-sm border-y dark:border-gray-600 z-50" style={{ maxWidth: '800px', width: '90%' }}>
//           <div className="grid px-4 py-5 mx-auto text-sm md:grid-cols-3 gap-6">
//             <ul className="space-y-2">
//               <li><Link to="/pcdss" className="hover:text-blue-400">PCI DSS</Link></li>
//               <li><Link to="/pcpin" className="hover:text-blue-400">PCI PIN</Link></li>
//               <li><Link to="/pc3ds" className="hover:text-blue-400">PCI 3DS</Link></li>
//               <li><Link to="/pcp2pe" className="hover:text-blue-400">PCI P2PE</Link></li>
//             </ul>
//             <ul className="space-y-2">
//               <li><Link to="/pcsaq" className="hover:text-blue-400">Facilitated PCI SAQ</Link></li>
//               <li><Link to="/isms" className="hover:text-blue-400">ISMS – ISO/IEC 27001</Link></li>
//               <li><Link to="/pims" className="hover:text-blue-400">PIMS – ISO/IEC 27701</Link></li>
//               <li><Link to="/bcms" className="hover:text-blue-400">BCMS – ISO/IEC 22301</Link></li>
//             </ul>
//             <ul className="space-y-2">
//               <li><Link to="/soc" className="hover:text-blue-400">SOC 1 and SOC 2</Link></li>
//               <li><Link to="/hitrust" className="hover:text-blue-400">HITRUST Certification</Link></li>
//               <li><Link to="/cisa" className="hover:text-blue-400">CISA Cybersecurity Certification</Link></li>
//             </ul>
//           </div>
//         </div>
//       )}

//       {/* Mega Menu Content for Threat and Vulnerability Radar */}
//       {megaMenu.threatRadar && (
//         <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-gray-800 text-white border-gray-200 shadow-sm border-y dark:border-gray-600 z-50" style={{ maxWidth: '800px', width: '90%' }}>
//           <div className="grid px-4 py-5 mx-auto text-sm md:grid-cols-3 gap-6">
//             <ul className="space-y-2">
//               <li><Link to="/riskAssessment" className="hover:text-blue-400">Risk Assessment</Link></li>
//               <li><Link to="/incidentResponse" className="hover:text-blue-400">Incident Response</Link></li>
//               <li><Link to="/vulnerabilityManagement" className="hover:text-blue-400">Vulnerability Management</Link></li>
//             </ul>
//             <ul className="space-y-2">
//               <li><Link to="/threatHunting" className="hover:text-blue-400">Threat Hunting</Link></li>
//               <li><Link to="/malwareAnalysis" className="hover:text-blue-400">Malware Analysis</Link></li>
//               <li><Link to="/cyberThreatIntelligence" className="hover:text-blue-400">Cyber Threat Intelligence</Link></li>
//             </ul>
//             <ul className="space-y-2">
//               <li><Link to="/forensics" className="hover:text-blue-400">Digital Forensics</Link></li>
//               <li><Link to="/securityOperations" className="hover:text-blue-400">Security Operations</Link></li>
//               <li><Link to="/networkSecurity" className="hover:text-blue-400">Network Security Monitoring</Link></li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


