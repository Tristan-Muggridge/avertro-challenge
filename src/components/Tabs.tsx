import { useState } from "react";
import { TabGroup } from "@/types";

interface Props {
    tabGroup: TabGroup;
}

const TabHeader = ({title, active, onClick, idx}:{title: string, active: boolean, onClick():void, idx:number}) => {
    return (
        <div 
            onClick={onClick} 
            className={`
                text-avertroBlue cursor-pointer font-bold 
                md:text-xl text-center md:text-left 
                px-8 py-3
                ${ active ? 'bg-white' : 'bg-grey'} transition-colors duration-200
                ${ idx == 0 ? 'rounded-t-[10px]' : '' } `}>
            {title}
        </div>
    )
}

const Tabs = ( {tabGroup}:Props ) => {

    const [active, setActive] = useState(1);

    return (
        <div className="w-full">
            <div className="flex w-full flex-col md:flex-row">
                {
                    tabGroup.tabs.map(({heading}, idx) => <TabHeader key={`${idx}-${heading}`} title={heading} active={idx === active} idx={idx} onClick={() => setActive(idx)}/>)
                }
            </div>
            <div className="flex flex-col w-full p-4 bg-white md:rounded-lg sm:rounded-t-none rounded-tl-none">
                { tabGroup.tabs[active].content }
            </div>
        </div>
    )
}

export default Tabs;
