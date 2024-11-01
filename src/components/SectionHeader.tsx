export const SectionHeader = ({title,eyebrow, description}:{
    title: string;
    eyebrow: string;
    description: string
}) => {
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                    {title}
                </p>
            </div>
            <h2 className="font-serif md:text-5xl text-3xl text-center mt-6">
                {eyebrow}
            </h2>
            <p className="text-center md:text-lg max-w-md mx-auto text-white/60 lg:text-xl mt-4">
                {description}
            </p>
            
        </>
    )
}