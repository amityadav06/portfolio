import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import { HeroOrbit } from '@/components/HeroOrbit';
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
// import resumePdf from '@/assets/images/resume-amit.pdf'

export const HeroSection = () => {
  return <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        <div className='absolute inset-0 -z-30 opacity-5' style={{backgroundImage: `url(${grainImage.src})`}}></div>
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>
       
        <HeroOrbit size={430} shouldOrbit orbitDuration='30x' shouldSpin spinDuration='6s' rotation={-14} >
          <SparkleIcon className='size-8 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={440} shouldOrbit orbitDuration='32x' shouldSpin spinDuration='6s' rotation={79}> 
          <SparkleIcon className='size-5 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={520} shouldOrbit orbitDuration='34x' rotation={-41} >
          <div className='size-2 bg-emerald-300/20 rounded-full'></div>
        </HeroOrbit>
        <HeroOrbit size={530} shouldOrbit orbitDuration='36x' shouldSpin spinDuration='6s' rotation={178} >
          <SparkleIcon className='size-10 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={550} shouldOrbit orbitDuration='38x' shouldSpin spinDuration='6s' rotation={20}> 
          <StarIcon className='size-12 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit size={590} shouldOrbit orbitDuration='40x' shouldSpin spinDuration='6s' rotation={98}> 
          <StarIcon className='size-8 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit size={650} shouldOrbit orbitDuration='42x' rotation={-5}> 
          <div className='size-3 bg-emerald-300/20 rounded-full'></div>
        </HeroOrbit>
        <HeroOrbit size={710} shouldOrbit orbitDuration='44x' shouldSpin spinDuration='6s' rotation={144} >
          <SparkleIcon className='size-14 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={720} shouldOrbit orbitDuration='46x' rotation={85}> 
          <div className='size-3 bg-emerald-300/20 rounded-full'></div>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='48x' shouldSpin spinDuration='6s'>
          <StarIcon className='size-28 text-emerald-300' />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className='size-[100px]' alt='person peeking from behind laptop' />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 rounded-full size-2.5 relative'>
              <div className="absolute rounded-full bg-green-500 inset-0 animate-ping-large"></div>
            </div>
            <div>Available for new projects</div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Building Exceptional User Experiences</h1>
            <p className='mt-4 text-center text-white/60 md:text-lg'>I specialize  in transforming designs into functional, high performing
              web applications. Lets discuss new projects.
            </p>
          </div>
          <div className='flex flex-col static z-10 items-center md:flex-row justify-center gap-4 mt-8'>
            <a href='/resume-amit.pdf' target="_blank" rel="noopener noreferrer" className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
              <span className='font-semibold'>Explore My Work</span>
              <ArrowDown className='size-4' />
            </a>
            <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
              <span>👊</span>
              <span className='font-semibold'>Let's connect</span>
            </button>
          </div>
        </div>
      </div>
  </div>;
};
