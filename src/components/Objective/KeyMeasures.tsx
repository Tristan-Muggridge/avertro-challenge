import MinusIcon from "../../UI/MinusIcon";
import { ObjectiveFieldProps } from "@/types";
import generateUUID from "../../util/GenerateUUID";
import { BiPlus } from "react-icons/bi";
import TextInputField from "../Form/TextInputField";
import { ChangeEvent } from "react";


const KeyMeasures = ({form, handleChange}: ObjectiveFieldProps) => {

    const handleFirstKeyMeasureChange = ({target: {value: name}}: ChangeEvent<HTMLInputElement>) => {
        const updatedMeasures = [{ id: form.keyMeasures[0].id, name}, ...form.keyMeasures.slice(1)]
        handleChange('keyMeasures', updatedMeasures);
    }

    const handleAdditionalKeyMeasureChange = ({target: {value: name}}: ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedMeasures = [...form.keyMeasures];
        const oldMeasure = updatedMeasures[index+1];
        updatedMeasures[index+1] = {...oldMeasure, name};
        handleChange('keyMeasures', updatedMeasures);
    }

    return (
        // First Key Measure
        <div className='flex flex-col'>
            <TextInputField 
                label='Key Measures' 
                value={form.keyMeasures[0].name} 
                name='KeyMeasures1'
                required={true}
                onChange={handleFirstKeyMeasureChange} >
                
                {
                    form.keyMeasures.length < 3 &&
                    <button
                        type='button'
                        onClick={() => handleChange('keyMeasures', [...form.keyMeasures, {id: generateUUID(), name: ''}])}
                        className='text-avertroBlue flex gap-2 items-center font-medium font-inter text-sm flex-wrap justify-center' >
                        
                        Add additional key measure
                        <BiPlus className='bg-avertroBlue text-white rounded-full w-5 h-5'/>
                    </button>
                }
                
            </TextInputField>
        
            {/* Additional Key Measures */}
            { 
                form.keyMeasures.slice(1).map( ({id, name}, index) => 
                    <div className='flex items-center gap-4 md:relative' key={id}>
                        <div className='grow'>
                            <TextInputField
                                value={name} 
                                name={`KeyMeasures${index+1}`} 
                                onChange={ e => handleAdditionalKeyMeasureChange(e, index) }/>
                        </div>

                        <button 
                            type='button' 
                            className='bg-danger text-white rounded-full w-5 h-5 md:absolute -right-7' 
                            onClick={() => handleChange('keyMeasures', [...form.keyMeasures.filter(km => km.id !== id)])}> 
                            <MinusIcon /> 
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default KeyMeasures