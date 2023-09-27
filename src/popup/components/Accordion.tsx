import React, {createContext, useContext, useState} from "react";
import {ChevronUp, ChevronDown, HelpCircle} from "lucide-react";

export default function Accordion({data}) {
    return(
        <div className="flex-1 px-3 mt-2">
            {data.map((el, i) => (
                <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
            ))}
        </div>
    )
}

function AccordionItem({num, title, text}) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen((isOpen) => !isOpen);
    }

    return(
        <div className="items-center my-1
             font-medium rounded-md cursor-pointer transition-colors group
             hover:bg-red-50 text-gray-600 border border-slate-100" onClick={handleToggle}>
            <div className="flex items-center justify-between py-2 px-3" >
                <div className="flex items-center">
                    <HelpCircle size={20}/>
                    <h3 className="overflow-hidden transition-all
                        w-24 ml-3 text-lg
                    ">{title}</h3>
                </div>
                {
                    isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />
                }
            </div>
            <div className="flex justify-center mt-1 bg-white px-3">
                {
                    isOpen &&
                    <p className="text-sm">{text}</p>
                }
            </div>
        </div>
    )
}

// <div
//     className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
//     <div className="relative mb-3">
//         <h6 className="mb-0">
//             <button
//                 className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
//                 data-collapse-target="collapse-1"
//             >
//                 <span>{title}</span>
//                 <i className="fa fa-plus absolute right-0 pt-1 text-xs group-open:opacity-0"></i>
//                 <i className="fa fa-minus absolute right-0 pt-1 text-xs opacity-0 group-open:opacity-100"></i>
//             </button>
//         </h6>
//         {
//             isOpen &&
//             <div
//                 data-collapse="collapse-1"
//                 className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
//             >
//                 <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
//                     {text}
//                 </div>
//             </div>
//         }
//
//     </div>
// </div>