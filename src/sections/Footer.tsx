import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

export const Footer = () => {

  const footerLinks = [
    {
      title: 'Github',
      href: 'https://github.com/amityadav06'
    },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/amit-yadav2020/'
    },
    {
      title: 'Instagram',
      href: '#'
    },
    {
      title: 'Twitter',
      href: 'https://x.com/Amityad77328759'
    },
  ]

  return (
    <footer className='relative overflow-x-clip '>
      <div className='absolute h-[400px] w-[1600px] -z-10 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30'></div>
      <div className='container'>
        <div className='border-t md:flex-row md:justify-between border-white/15 py-6 text-sm gap-8 flex flex-col items-center'>
        <div className='text-white/40'>&copy; 2024. All rights reserved.</div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {
              footerLinks.map((item) => {
                return (
                  <a className='inline-flex items-center gap-1.5' target='_blank' key={item.title} href={item.href}>
                      <span className='font-semibold'>{item.title}</span>
                      <ArrowUpRightIcon className='size-4' />
                  </a>
                )
              })
            }
          </nav>
        </div>
      </div>
    </footer>
  )
};
