import React from 'react';

interface Props {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    variant?: 'primary' | 'danger';
    grow?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, disabled, onClick, variant='primary', grow=false, type="button" }:Props) => 
    <button 
        disabled={disabled} 
        onClick={onClick} 
        type={type}
        className={`
            flex justify-center items-center gap-3
            rounded-[10px] px-[21px] py-3
            outline outline-1
            transition-all duration-200
            ${grow ? 'w-full' : 'w-fit'}
            ${
                variant === 'primary' 
                    ? 'bg-avertroBlue text-white outline-avertroBlue hover:bg-avertroBlue/80' 
                    : 'bg-transparent text-danger outline-danger hover:bg-danger/10'
            }
            ${
                disabled ? 'cursor-not-allowed bg-neutral-500 outline-neutral-500 hover:bg-neutral-500/80' : 'cursor-pointer'
            }
        `} 
        >
        
        {children}
    </button>;

export default Button;