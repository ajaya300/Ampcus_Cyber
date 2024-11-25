import HeroSection from '@/component/TextImage'
import React from 'react'
import gengine1 from '@/image/Gengine1.png'

function Career() {
  return (
    <div>


      <HeroSection
        title="Careers"

        description1="Welcome to Ampcus Cyber, a leading global cyber security organization headquartered in Chantilly, Virginia. At Ampcus Cyber, we specialize in providing comprehensive security solutions and services that are tailored to safeguard our clients’ networks, infrastructure, and valuable assets. With a strong commitment to excellence and a passion for protecting businesses from cyber threats, Ampcus Cyber has been a trusted partner since its establishment in 2018."
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

    </div>
  )
}

export default Career