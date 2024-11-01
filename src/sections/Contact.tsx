import ArrowUpRightDown from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'

export const ContactSection = () => {
  return <div className='py-16 pt-12 lg:py-24 lg:pt-20'>
    <div className="container">
      <div className='bg-gradient-to-r relative md:text-left overflow-hidden z-0 from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center'>
        <div className='absolute inset-0 opacity-5 -z-10' style={{
          backgroundImage: `url(${grainImage.src})`
        }}></div>
        <div className="flex flex-col gap-8 md:gap-16 items-center md:flex-row">
          <div>
            <h2 className='font-serif text-2xl md:text-3xl'>Let's create something amazing together</h2>
            <p className='text-sm mt-2 md:text-base'>
              Ready to bring your next project to life? Let's connect and 
              I can help you achieve your goals.
            </p>
            <p className='text-sm mt-2 md:text-bas font-semibold'>
              Email: amityadav06071998@gmail.com
            </p>
          </div>
          <div>
            <button className='text-white border border-gray-900 bg-gray-900 h-12 px-6 inline-flex gap-2 w-max items-center rounded-xl'>
              <span className='font-semibold'>Contact Me</span>
              <ArrowUpRightDown className='size-4' />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
};
