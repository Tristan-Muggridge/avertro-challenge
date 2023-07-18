import { useState } from "react";
import TabHeader from "./TabHeader";
import { TabGroup } from "@/types";

interface Props {
    tabGroup: TabGroup;
}

const Tabs = ({ tabGroup:{ tabs } }:Props) => {

    const [active, setActive] = useState(1);

    return (
        <div className="w-full">
            <ul className="flex w-full flex-col md:flex-row">
                {
                    tabs.map( ({heading}, idx) => 
                        <li id={`tab-${idx}`} key={`tab-${idx}`}>
                            <TabHeader 
                                key={`${idx}-${heading}`} 
                                title={heading} 
                                active={idx === active} 
                                idx={idx} 
                                onClick={() => setActive(idx)} /> 
                        </li>
                    )
                }
            </ul>
            <div className="flex flex-col w-full p-4 bg-white md:rounded-lg sm:rounded-t-none rounded-tl-none">
                { tabs[active].content }
            </div>
        </div>
    )
}

export default Tabs;
