import Image from "next/image"
import profileImage from '@/assets/images/profile-pic.jpeg'

export const AboutMe = () => {
    return (
        <div className="container">
           <div className="space-y-8 my-24 relative lg:mt-36">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="col-span-1 md:col-span-3">
                        <div className="flex flex-col">
                            <div className="flex justify-center md:justify-start">
                                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                                    ABOUT ME
                                </p>
                            </div>
                            <h2 className="font-serif md:text-5xl text-3xl text-center md:text-left mt-6">
                                Know who am I
                            </h2>
                            <p className="text-center md:text-left md:text-lg max-w-md mx-auto md:mx-0 text-white/60 lg:text-xl mt-4">
                                My journey in few words.
                            </p>
                            <p className="text-justify md:text-left md:text-lg  mx-auto md:mx-0 text-white/40 lg:text-xl mt-4">
                                I’ve designed multiple web & mobile experiences for multi-cross-platform devices from desktop to mobile, 
                                etc. I’ve worked with small agencies and also with medium-sized companies. I previously worked with 
                                Liferay India Pvt Ltd large sized product based company, Pinnacle IT Solutions small startup. Currently I'm designing 
                                aesthetic and functional solutions for Pinnacle within the invest team, to enhance financial accessibility 
                                and understanding for Indian users.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 h-96 overflow-y-clip relative">
                        <div className="bg-white scale-75 hover:rotate-6 hover:transition-all duration-300">
                            <Image src={profileImage} className="-mt-14  p-6" alt="profile-image" />
                        </div>
                    </div>
                    
                </div>
                <div className="flex w-full justify-end ">
                    <p className="flex flex-col text-end pr-10 -mt-6 lg:-mt-10 font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                        <span>Frontend Developer</span>
                        <span>Amit Yadav</span>
                    </p>
                </div>
           </div>
        </div>
    )
}

