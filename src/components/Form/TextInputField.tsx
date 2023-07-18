import { InputFieldProps } from "./InputField";

const TextInputField = ({label, value, onChange, name, children, required}:InputFieldProps) => {
    return (
        <div className='flex flex-col flex-1'>
            
            <div className='flex justify-between flex-wrap'>
                {label && <label htmlFor={name} className='text-avertroBlue font-inter font-bold text-xl'>{label}</label>}
                {children}
            </div>
            
            <input type="text" {...{value, onChange, name, required}} required={false} className='outline outline-2 outline-grey rounded-md p-4 mt-2' />
            {required && value.trim().length == 0 && <p className='text-danger'>This field is required</p>}
        </div>
    )
}

export default TextInputField;