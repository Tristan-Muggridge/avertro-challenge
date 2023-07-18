import { useState } from "react";

import TabHeader from "./TabHeader";

import { TabGroup } from "@/types";

interface Props {
    tabGroup: TabGroup;
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
