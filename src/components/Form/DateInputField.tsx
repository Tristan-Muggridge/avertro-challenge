import { createRef } from "react";
import { AiFillCalendar } from "react-icons/ai";
import { InputFieldProps } from "./InputField";

interface DateInputProps {
    min: string;
}

const DateInputField = ({label, value, onChange, name, min, require, children}: InputFieldProps & DateInputProps) => {
    
    const dateRef = createRef<HTMLInputElement>();

    return (
        <div className='flex flex-col flex-1'>
            
            <div className='flex justify-between flex-wrap'>
                {label && <label htmlFor="name" className='text-avertroBlue font-inter font-bold text-xl'>{label}</label>}
                {children}
            </div>

            <div onClick={() => dateRef.current?.focus()} 
                 {...{value, onChange, name, min}} 
                 className='relative outline outline-2 outline-grey rounded-md py-4 px-2 mt-2 flex gap-2 items-center justify-center' >
                    <AiFillCalendar className='text-avertroBlue text-2xl'/>
                    <input ref={dateRef} type="date" {...{value, onChange, name, min, require}} className='outline outline-transparent'/>
            </div>
        </div>
    )
}

export default DateInputField;