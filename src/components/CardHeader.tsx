import StarIcon from '@/assets/icons/star.svg'
import { twMerge } from 'tailwind-merge';

export const CardHeader = ({title, description, className} : {
    title: string;
    description: string;
    className?: string;
}) => {
    return (
        <div className={twMerge("flex flex-col p-6",className)}>
            <div className="inline-flex gap-2 items-center">
              <StarIcon className='size-9 text-emerald-300' />
              <h3 className="text-3xl font-serif">{title}</h3>
            </div>
            <p className="text-sm text-white/60 mt-2">{description}</p>
          </div>
    )
}