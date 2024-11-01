import { TechIcon } from "@/components/TechIcon";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export const ToolboxItems = ({items, className, itemsWrapperClassName} : {
    items: {
        title: string;
        iconType: React.ElementType
    }[],
    className?: string;
    itemsWrapperClassName?: string;
}) => {
    return (
        <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
            <div className={twMerge("flex flex-none gap-6 pr-6 py-0.5", itemsWrapperClassName)}>
              {[...Array(2)].fill(0).map((_, index) => {
                return (
                  <Fragment key={index}>
                    {
                      items.map((item) => {
                        return (
                          <div 
                            key={item.title} 
                            className="inline-flex outline outline-2 outline-white/10 rounded-lg items-center gap-4 py-2 px-3">
                            <TechIcon  component={item.iconType} />
                            <span className="font-semibold">{item.title}</span>
                          </div>
                        )
                      })
                    }
                  </Fragment>
                )
              })}
          </div>
        </div>
    )
}