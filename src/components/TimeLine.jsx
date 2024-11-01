import { SectionHeader } from "./SectionHeader"


export const TimeLine = () => {
    return(
        <div className="container">
            
           <div className="space-y-8 my-24 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                <SectionHeader
                    title="MY EXPERIENCES"
                    eyebrow="Where I've Been Employed"
                />
                <div className="relative flex items-center mt-4 justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 bg-gradient-to-r from-emerald-300 to-sky-400  group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 hover:transition-all hover:duration-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <svg className="text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                            <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                        </svg>
                    </div>
                    
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-4 rounded hover:bg-gradient-to-r from-emerald-300/15 to-sky-400/15 hover:shadow-lg transition duration-500 ease-in-out shadow">
                        <div className="flex flex-col md:flex-row  items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-white">Pinnacle It Solutions</div>
                            <time className="font-caveat font-medium text-indigo-500">Feb 2024 - Present</time>
                        </div>
                        <ul className="list-disc pl-4 text-white/70 text-base flex flex-col gap-2">
                            <li>
                                Led the development of a comprehensive job portal Brunei, allowing users to apply for jobs, explore opportunities
                                across various market sectors, and track their application status. The platform provides a user-friendly interface for job
                                seekers to find and manage their applications efficiently.
                            </li>
                            <li>
                                Enhanced performance by implementing lazy loading, code splitting, and image optimization, improving page load
                                times by 20%.
                            </li>
                            <li>
                                Conducted unit testing and integration testing with Jest, ensuring stable releases and reducing bugs by 15%.
                                Applied WCAG standards to improve website accessibility, achieving a 98% accessibility score on Lighthouse.
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 bg-gradient-to-r from-emerald-300 to-sky-400 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <svg className="text-gray-800" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                            <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                        </svg>
                    </div>
                    
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-4 rounded hover:bg-gradient-to-r from-emerald-300/15 to-sky-400/15 hover:shadow-lg transition-all duration-500 ease-in-out">
                        <div className="flex flex-col md:flex-row  items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-white">Liferay India Pvt Ltd</div>
                            <time className="font-caveat font-medium text-indigo-500">Aug 2021 - Feb 2024</time>
                        </div>
                        <ul className="list-disc pl-4 text-white/70 text-base flex flex-col gap-2">
                            <li>
                                Contributed to the FIFA ticket booking website, which handled millions of concurrent users. The platform featured
                                real-time ticket booking, user issue resolution support, and optimized performance to ensure seamless user
                                experience during high-traffic periods
                            </li>
                            <li>
                                Led the front-end redevelopment of the Reserve Bank of India (RBI) website, migrating the old site to a modern, fully
                                accessible platform used by millions of users. The new website provides comprehensive information on upcoming
                                events, press releases, statistics, and policies.

                            </li>
                            <li>
                                Worked on the frontend development of the Vodafone Idea website, enabling users to choose from various recharge
                                plans, including prepaid and postpaid options, as well as special offers and coupons
                            </li>
                            <li>
                                Implemented a user-friendly interface with optimized performance and seamless navigation for purchasing services
                            </li>
                            <li>    
                                Led the transformation of the National Health Authority (NHA) website from its outdated version to a modern,
                                user-centric platform. The redevelopment focused on enhancing accessibility, usability, and functionality to better serve
                                users seeking information on health programs, initiatives, and updates.
                                Optimized site performance, achieving a 30% faster load time using perf
                            </li>
                            <li>
                                Optimized site performance, achieving a 30% faster load time using performance monitoring tools like Lighthouse
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="relative  flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 bg-gradient-to-r from-emerald-300 to-sky-400 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <svg className="text-gray-800" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                            <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
                        </svg>
                    </div>
                    
                    <div className="w-[calc(100%-4rem)]  md:w-[calc(50%-2.5rem)] bg-gray-800 p-4  rounded hover:bg-gradient-to-r from-emerald-300/15 to-sky-400/15 hover:shadow-lg transition-all duration-500 ease-in-out shadow">
                        <div className="flex flex-col md:flex-row items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-white">Karrot Labs (Intern)</div>
                            <time className="font-caveat font-medium text-amber-500">July 2019 - Dec 2019</time>
                        </div>
                        <ul className="list-disc pl-4 text-white/70 text-base flex flex-col gap-2">
                            <li>Gained practical experience in frontend development by contributing to multiple web projects</li>
                            <li> Implemented responsive designs and collaborated on building interactive features using HTML, CSS, JavaScript, and React.js.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}



