import ReactIcon from '@/assets/icons/react.svg'
import GithubIcon from '@/assets/icons/github.svg'
import CssIcon from '@/assets/icons/css3.svg'
import HtmlIcon from '@/assets/icons/html5.svg'
import { RiNextjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiJquery } from "react-icons/si";

export const Skills = () => {
  return (
    <div className='container'>
        <div className='py-4 lg:py-8 overflow-x-clip'>
            <div className=' [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] -mx-1'>
                <div className="flex">
                    <div className="flex flex-none gap-4 py-3 animate-move-left [animation-duration:10s]">         
                        <div className='inline-flex items-center gap-16'>
                            <SiTypescript className='size-10 text-white/40' />
                            <ReactIcon className='size-10 text-white/40' />
                            <GithubIcon className='size-10 text-white/40' />
                            <RiNextjsLine className='size-10 text-white/40' />
                            <CssIcon className='size-10 text-white/40' />
                            <RiTailwindCssLine className='size-10 text-white/40' />
                            <HtmlIcon className='size-10 text-white/40' />
                            <SiJavascript className='size-10 text-white/40' />
                            <SiJquery className='size-10 text-white/40' />
                            <SiTypescript className='size-10 text-white/40' />
                            <ReactIcon className='size-10 text-white/40' />
                            <GithubIcon className='size-10 text-white/40' />
                            <RiNextjsLine className='size-10 text-white/40' />
                            <CssIcon className='size-10 text-white/40' />
                            <RiTailwindCssLine className='size-10 text-white/40' />
                            <HtmlIcon className='size-10 text-white/40' />
                            <SiJavascript className='size-10 text-white/40' />
                            <SiJquery className='size-10 text-white/40' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};
