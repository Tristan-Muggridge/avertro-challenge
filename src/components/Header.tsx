interface Props {
    content: string;
}

const Header = ({content}:Props) => 
    <h3 className="text-avertroBlue text-lg font-nunito"> {content} </h3>

export default Header;
