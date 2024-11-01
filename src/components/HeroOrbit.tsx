import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge';

export const HeroOrbit = (
    {
        children, 
        size, 
        rotation, 
        orbitDuration, 
        shouldOrbit = false,
        shouldSpin = false,
        spinDuration
    } 
    : PropsWithChildren<{
        size: number;
        rotation: number;
        orbitDuration?:string; 
        shouldOrbit?:boolean;
        shouldSpin?:boolean;
        spinDuration?:string;
    }>) => {
    return <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className={twMerge(shouldOrbit === true && 'animate-spin [animation-duration:30s]')}>
        <div className="flex items-start justify-start" style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`
        }}>
                <div className={twMerge(shouldSpin === true && 'animate-spin')} style={{
                    animationDuration: spinDuration
                }}>
                    <div className="inline-flex" style={{
                        transform: `rotate(${rotation * -1})`
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
}