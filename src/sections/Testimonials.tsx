import anubhavAvatars from '@/assets/images/anubhav.jpeg'
import harshitaAvatars from '@/assets/images/harshita.webp'
import carterAvatars from '@/assets/images/Carter.jpeg'
import { SectionHeader } from "@/components/SectionHeader";
import emilyAvatars from '@/assets/images/Emily.jpeg';
import dainelAvatars from '@/assets/images/dainel.jpeg'
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from 'react';

const testimonials = [
  {
    name: "Harshita Sharma",
    position: "",
    text: "Amit was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: carterAvatars,
  },
  {
    name: "Anubhav Goyal",
    position: "",
    text: "Working with Amit was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: anubhavAvatars,
  },
  {
    name: "Daniel White",
    position: "",
    text: "Amit's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: dainelAvatars,
  },
  {
    name: "Emily Carter",
    position: "",
    text: "Amit is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: emilyAvatars,
  },
  {
    name: "Michael Brown",
    position: "",
    text: "Amit's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: harshitaAvatars,
  },
];

export const TestimonialsSection = () => {
  return <div className="py-16 lg:py-24">
    <div className="container">
      <SectionHeader 
        title="TESTIMONIAL OF FEW FOLKS"
        eyebrow="Word On The Street About Me"
        description="Few words from people who collaborated with me."
      />
      <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
        <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
          {[...Array(2)].fill(0).map((_, index) => {
            return(
              <Fragment key={index}>
                {testimonials.map((testimonial) => {
                  return(
                    <Card key={testimonial.name} className="max-w-xs p-8 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300">
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 flex-shrink-0 inline-flex rounded-full items-center justify-center">
                          <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full rounded-full" />
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-white/40">{testimonial.position}</div>
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                    </Card>
                  )
                })}
              </Fragment>
            )
          })}
          
        </div>
      </div>
    </div>
  </div>;
};
