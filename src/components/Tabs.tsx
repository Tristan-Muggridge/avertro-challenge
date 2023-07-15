import React, { useState } from "react";
import { Tab, TabGroup } from "@/types";

interface Props {
    tabGroup: TabGroup;
}

const TabHeader = ({title, active, onClick}:{title: string, active: boolean, onClick():void}) => {
    return (
        <div 
            onClick={onClick} 
            className={`text-avertroBlue cursor-pointer font-bold text-xl px-8 py-3 rounded-t-[10px] ${active ? 'bg-white' : 'bg-grey'} transition-colors duration-200`}>
            {title}
        </div>
    )
}

const Tabs = ( {tabGroup}:Props ) => {

    const [active, setActive] = useState(0);

    return (
        <div>
            <div className="flex">
                {
                    tabGroup.tabs.map(({heading}, idx) => <TabHeader title={heading} active={idx === active} onClick={() => setActive(idx)}/>)
                }
            </div>
            <div className="flex flex-col w-full p-2 bg-white">
                { tabGroup.tabs[active].content }
            </div>
        </div>
    )
}

export default Tabs;
