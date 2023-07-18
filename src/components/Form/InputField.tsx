import { ChangeEvent } from "react";

export interface InputFieldProps {
    label?:string; 
    value: string; 
    name: string;
    onChange(e: ChangeEvent<HTMLInputElement>):void; 
    children?:React.ReactNode;
    require?:string;
    rules?:{message: string, validate: (value:string) => boolean, passed?:boolean}[];
}

const InputField = ({label, children}:InputFieldProps) => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between flex-wrap'>
                {label && <label htmlFor="name" className='text-avertroBlue font-inter font-bold text-xl'>{label}</label>}
                {children}
            </div>
        </div>
    )
}

export default InputField;