import comfyLandingPage from '@/assets/images/comfy.png'
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import carePulseLandingPage from '@/assets/images/Capture.png'
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "CarePulse",
    year: "2024",
    title: "Health Management CarePulse",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://carepulse-seven-tau.vercel.app/",
    image: carePulseLandingPage,
  },
  {
    company: "Github",
    year: "2021",
    title: "Github User Activity Analyzer",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://github-user-analyzer.netlify.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "ConfySloth",
    year: "2023",
    title: "ComfySloth E-Commerce Store",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://mycomfy-store.netlify.app/",
    image: comfyLandingPage,
  },
];

export const ProjectsSection = () => {
  return <section className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader
        title={'Real-world Results'}
        eyebrow={'Featured Projects'}
        description='See how I transformed concepts into engaging digital experiences.'
      />
      <div className="flex flex-col mt-10 gap-20 md:mt-20">
        {portfolioProjects.map((project, projectIndex) => {
          return <div className="bg-gray-800 px-8 pt-8 md:pt-12 md:px-10 lg:pt-10 lg:px-20 rounded-3xl  sticky top-14 z-0 after:z-10 after:content-[''] after:absolute after:inset-0 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none" key={project.title} style={{
            top: `calc(63px + ${projectIndex * 80}px)`
          }}>
                <div className="absolute inset-0 -z-10 opacity-5" style={{
                  backgroundImage: `url(${grainImage.src})`
                }}></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-200 to-sky-400 inline-flex gap-2 text-transparent bg-clip-text text-sm font-bold tracking-widest uppercase">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col mt-4 gap-4 md:mt-5">
                      {project.results.map((result) => {
                        return <li key={result.title} className="flex text-sm gap-2 md:text-base text-white/50">
                            <CheckCircleIcon className='size-5 md:size-6' />
                            <span>{result.title}</span>
                        </li>
                      })}
                    </ul>
                    <a className="cursor-pointer" href={project.link}>
                      <button className="bg-white md:w-auto px-6 inline-flex gap-2 mt-8 items-center justify-center text-gray-950 h-12 w-full font-semibold rounded-xl">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className='size-4' />
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" src={project.image} alt={project.title} />
                  </div>
              </div>
          </div>
        })}
      </div>
    </div>
  </section>;
};
