
interface TabHeaderProps {
    title: string;
    active: boolean;
    onClick():void;
    idx:number;
}

const TabHeader = ({title, active, onClick, idx}:TabHeaderProps) => {
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

export default TabHeader;