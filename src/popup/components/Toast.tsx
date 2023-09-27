import React, {createContext} from 'react';

interface INotification {
    isOpen: false,
    title: '',
}

export const Notification = createContext<INotification>({
    isOpen: false,
    title: '',
});

export default function Toast({color, darkerColor, icon, title, info}) {
    return(
        <div className="w-screen h-screen absolute bg-transparent">
            <div className="absolute top-5 right-5 left-0 sm:left-auto w-full grid
            justify-center px-4 sm:absolute">
                <div className="space-y-2 left-0 sm:left-auto w-full grid justify-center
                sm:justify-end px-4 absolute sm:right-0">
                    <div className="min-h-[16] w-80 px-4 py-2 bg-white rounded-md shadow-lg border border-gray-200 sm:right-0">
                        <div className={`flex space-x-2 ${color}`}>
                            {icon}
                            <span className="ml-4">{title}</span>
                        </div>
                        <div className={`${darkerColor}  max-w-xs`}>{info}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}