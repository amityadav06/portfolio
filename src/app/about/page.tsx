import { AboutMe } from '@/components/AboutMe'
import { TimeLine } from '@/components/TimeLine'
import { ContactSection } from '@/sections/Contact'
import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
        <Header />
        <AboutMe />
        <TimeLine />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default AboutPage