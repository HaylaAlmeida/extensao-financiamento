import React, {createContext, useContext, useState} from "react";
import {CarFront, ChevronFirst, ChevronLast,
    Landmark, User, PenSquare, ClipboardType,
    HelpCircle
} from "lucide-react";
import {Link} from "react-router-dom";

interface ISidebarContext {
    expanded: boolean,
    curId: null,
    handleCurrentOpen: (id) => void,

}

const SidebarContext = createContext<ISidebarContext>({
    expanded: true,
    curId: null,
    handleCurrentOpen: null
});
export default function Sidebar() {
    const [curId, setCurId] = useState(null);
    const [expanded, setExpanded] = useState(false);

    const handleCurrentOpen = function (id) {
        setCurId(id);
    }

    return(
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r border-gray-200 shadow-md">
                <SidebarContext.Provider value={{expanded, curId, handleCurrentOpen}}>
                    <ul className="flex-1 px-3 mt-2">
                        <SidebarItem icon={<Landmark size={20} />} text="Bancos" link="/bank"
                                     id={1} />
                        <SidebarItem icon={<CarFront size={20} />} text="Carros" link="/car"
                                     id={2} />
                        <SidebarItem icon={<User size={20} />} text="Clientes" link="/client"
                                     id={3} />
                        <SidebarItem icon={<ClipboardType size={20} />} text="Formulário" link="/form"
                              id={4}/>
                        <hr className="h-px my-2 bg-gray-200 border-0"/>
                        <SidebarItem icon={<HelpCircle size={20} />} text="Ajuda" link="/"
                                     id={5}/>
                    </ul>
                </SidebarContext.Provider>
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-sports-car-silhouette-simple-logo-png-image_3874452.jpg"
                         className={`overflow-hidden transition-all ${expanded ? "w-12" : "w-0"}`} alt="Logo com a silhueta de um carro"/>
                    <button onClick={() => setExpanded(curr => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        {
                            expanded ? <ChevronFirst /> : <ChevronLast />
                        }
                    </button>
                </div>
            </nav>
        </aside>
    )
}

export function SidebarItem({id, icon, text, link}) {
    const {expanded, curId, handleCurrentOpen} = useContext(SidebarContext);

    const isClicked = curId === id;

    function handleOnClick() {
        handleCurrentOpen(id);
    }

    return(
        <Link to={link} className="flex">
            <li className={`relative flex items-center py-2 px-3 my-1
             font-medium rounded-md cursor-pointer transition-colors group
             ${
                isClicked ? "bg-gradient-to-tr from-red-200 to-red-100 text-red-800"
                    : "hover:bg-red-50 text-gray-600"
    
            }`} onClick={handleOnClick}>

                    {icon}
                    <span className={`overflow-hidden transition-all 
                        ${expanded ? "w-24 ml-3" : "w-0"}
                    `}>
                        {text}
                    </span>
                {
                    !expanded && (
                        <div className={`
                        absolute left-full rounded-md px-2 py-1 ml-6
                        bg-red-100 text-red-800 text-sm invisible
                        opacity-20 -translate-x-3 transition-all
                        group-hover:visible group-hover:opacity-100
                        group-hover:translate-x-0
                        `}>
                            {text}
                        </div>
                    )
                }
            </li>
        </Link>
    )
}