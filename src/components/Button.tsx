import React from 'react';

interface Props {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    variant?: 'primary' | 'danger';
    grow?: boolean;
}

const Button = ({ children, disabled, onClick, variant='primary', grow=false }:Props) => 
    <button 
        disabled={disabled} 
        onClick={onClick} 
        className={`
            flex justify-center items-center gap-3
            rounded-[10px] px-[21px] py-3
            outline outline-1
            ${grow ? 'w-full' : 'w-fit'}
            ${variant == 'primary' ? 'bg-avertroBlue text-white' : 'bg-transparent text-danger outline-danger'}
        `} 
        >
        
        {children}
    </button>;

export default Button;