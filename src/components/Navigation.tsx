const avertroLink = process.env.REACT_APP_AVERTRO_LINK;

const Navigation = () => 
    <nav className="h-[72px] flex justify-center align-middle bg-white drop-shadow-sm">
        <a href={avertroLink} className='h-[44px] w-[185.12px] m-auto'> 
            <img src={'./avertro-logo.png'} alt="Avertro logo"/> 
        </a>
    </nav>

export default Navigation;