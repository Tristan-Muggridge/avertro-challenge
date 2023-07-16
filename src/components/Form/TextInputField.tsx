import { InputFieldProps } from "./InputField";

const TextInputField = ({label, value, onChange, name, children, require}:InputFieldProps) => {
    return (
        <div className='flex flex-col flex-1'>
            
            <div className='flex justify-between flex-wrap'>
                {label && <label htmlFor="name" className='text-avertroBlue font-inter font-bold text-xl'>{label}</label>}
                {children}
            </div>
            
            <input type="text" {...{value, onChange, name, require}} className='outline outline-2 outline-grey rounded-md p-4 mt-2' />
        </div>
    )
}

export default TextInputField;