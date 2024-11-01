'use client';
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import bookImage from '@/assets/images/book-cover.png'
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CSS3Icon from '@/assets/icons/css3.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import ReactIcon from '@/assets/icons/react.svg'
import GithubIcon from '@/assets/icons/github.svg'
import smileMemoji from '@/assets/images/memoji-smile.png'
import mapEmoji from '@/assets/images/map.png'
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion'; 
import { useRef } from "react";

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon
  },
  {
    title: 'React',
    iconType: ReactIcon
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon
  },
  {
    title: 'Github',
    iconType: GithubIcon
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon
  },
  {
    title: 'CSS3',
    iconType: CSS3Icon
  },
]

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%'
  },
  {
    title: 'Photography',
    emoji: '📷',
    left: '50%',
    top: '5%'
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%'
  },
  {
    title: 'Hiking',
    emoji: '🥾',
    left: '35%',
    top: '40%'
  },
  {
    title: 'Music',
    emoji: '🎧',
    left: '70%',
    top: '40%'
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♂️',
    left: '5%',
    top: '65%'
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '45%',
    top: '70%'
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null)
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
      <SectionHeader
        title="A Glimpse Into My World"
        eyebrow="About Me"
        description="Learn more about who I am, what I do and what inspires me."
      />
      <div className="mt-20 flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 md:pt-8 md:px-6 lg:pt-8 lg:px-6 lg:col-span-1">
            <CardHeader 
                title="My Reading"
                description="Explore the books shaping my perspective."
                className="p-0"
            />
            <div className="w-40 mx-auto mt-2">
              <Image src={bookImage} alt="book-cover" />
            </div>
          </Card>

          <Card className="h-[320px] md:col-span-3 md:pt-8 md:px-6 lg:pt-8 lg:px-6 lg:col-span-2">
            <CardHeader
                title="My Toolbox"
                className="p-0"
                description="Explore the technologies and tools  I use to craft exceptional digital experiences."
            />
            <ToolboxItems items={toolboxItems} className="mt-8" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
            <ToolboxItems 
              items={toolboxItems} 
              className="mt-6" 
              itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:30s]"
            />
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
          <Card className="h-[320px] flex flex-col p-0 md:col-span-3 md:pt-4 md:px-2 lg:pt-4 lg:px-2 lg:col-span-2">
            <CardHeader
                title="Beyond the Code"
                className="px-6 py-6"
                description="Explore my interests and hobbies beyond the digital realm."
            />
              <div className="relative flex-1" ref={constraintRef}>
                {
                  hobbies.map((hobbie) => {
                    return (
                      <motion.div 
                        style={{
                          left: hobbie.left,
                          top: hobbie.top
                        }}
                        drag
                        dragConstraints={constraintRef}
                        className="inline-flex absolute gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5" key={hobbie.title}>
                          <span className="font-medium text-gray-950">{hobbie.title}</span>
                          <span>{hobbie.emoji}</span>
                      </motion.div>
                    )
                  })
                }
              </div>
          </Card>

          <Card className="h-[320px] relative p-0 md:col-span-2 md:p-0 lg:p-0 lg:col-span-1">
            <Image src={mapEmoji} alt="map" className="h-full w-full object-left-top object-cover" />
            <div className="absolute rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 top-1/2 size-20 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-sky-300 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-sky-300 -z-10"></div>
              <Image src={smileMemoji} className="size-20" alt="smile emoji" />
            </div>
          </Card>
        </div>
      </div>
      </div>
    </div>
  )
};
