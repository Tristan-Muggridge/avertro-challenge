import { Objective as IObjective } from '@/types';
import { FormEvent, useEffect, useState } from 'react';
import {BiPlus} from 'react-icons/bi';
import Button from '../Button';
import MinusIcon from '../../UI/MinusIcon';
import generateUUID from "../../util/GenerateUUID";
import Modal from '../Modal';

import TextInputField from '../Form/TextInputField';
import DateInputField from '../Form/DateInputField';

interface Props {
    objective: IObjective;
    index: number;
    onUpdate(objective: IObjective):void;
    onDelete(objective: IObjective):void;
}
const Objective = ({objective, index, onUpdate, onDelete}:Props) => {
    const [form, setForm] = useState<IObjective>(objective);
    const [showModal, setShowModal] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        validate(form) ? onUpdate(form) : alert('Invalid form');
    }
    
    const validate = (form: IObjective) => {
        let isValid = true;

        if (form.name.trim() === '') isValid = false;
        if (form.keyMeasures[0].name.trim() === '') isValid = false;
        if (form.startDate > form.endDate) isValid = false;

        return isValid;
    }

    const handleChange = <T extends keyof typeof form>(key: T, value: typeof form[T]) => {
        setForm( form => { return {...form, [key]: value} } )
    }
    
    const handleDelete = () => {
        // show confirmation modal
        setShowModal(false);
        onDelete(form);
    }

    useEffect(() => {
        const validation = validate(form)
        setFormValid(validation);
    }, [form])

    return (
    <>
        {/* Deletion Confirmation Modal */}
        { showModal && 
            <Modal {...{setShowModal}}>
                <div className='flex flex-col gap-8'>
                    <h2> Are you sure you want to delete this objective? </h2>
                    <div className='flex justify-around gap-8'>
                        <Button onClick={handleDelete} variant='danger'> Delete </Button>
                        <Button onClick={() => setShowModal(false)}>Close</Button>
                    </div>
                </div>
            </Modal>
        }

        <div className='outline-2 outline-grey outline p-4 rounded-[10px]'>
            <form onSubmit={handleSubmit} className=' grid grid-cols-1 md:grid-cols-2 gap-10 place-content-between'>
                
                <TextInputField label={`Objective ${++index}`} value={form.name} name='Objective1' onChange={({target: {value: name}}) => handleChange('name', name)} />

                <div className='flex gap-6 lg:flex-nowrap flex-wrap'>
                    <DateInputField 
                        label='Start Date' 
                        value={form.startDate.toISOString().split('T')[0]} 
                        name='StartDate' 
                        onChange={({target: {value: startDate}}) => { handleChange('startDate', new Date(startDate)) }} 
                        min={new Date().toISOString().split('T')[0]} 
                        rules={[
                            {
                                message: "Start date must be before end date", validate: (value) => new Date(value) < form.endDate
                            }
                        ]}
                        />

                    <DateInputField 
                        label='End Date' 
                        value={form.endDate.toISOString().split('T')[0]} 
                        name='EndDate' 
                        onChange={({target: {value: endDate}}) => { handleChange('endDate', new Date(endDate)) }} 
                        min={form.startDate.toISOString().split('T')[0]} />
                </div>

                <div className='flex flex-col'>
                    <TextInputField 
                        label='Key Measures' 
                        value={form.keyMeasures[0].name} 
                        name='KeyMeasures1'
                        require={true}
                        onChange={({target: {value: name}}) => handleChange('keyMeasures', [{ id: form.keyMeasures[0].id, name}, ...form.keyMeasures.slice(1)])} >
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
                
                {
                    form.keyMeasures.slice(1).map( ({id, name}, index) => 
                        <div className='flex items-center gap-4 grow relative' key={id}>
                            <div className='grow'>
                                <TextInputField
                                    value={name} 
                                    name={`KeyMeasures${index+1}`} 
                                    onChange={ ({target: {value: name}}) => {
                                        const updatedMeasures = [...form.keyMeasures];
                                        updatedMeasures[index+1] = {id, name};
                                        handleChange('keyMeasures', updatedMeasures);
                                    }} />
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

                <div className='flex justify-end gap-2 md:gap-8 md:col-span-2 flex-col md:flex-row flex-wrap md:flex'>
                    <div className='flex-1 md:grow-0'>
                        <Button variant='danger' onClick={() => setShowModal(true)} grow={true}>
                            Delete
                        </Button>
                    </div>
                    <div className='flex-1 md:grow-0'>
                        <Button type="submit" grow={true} disabled={!formValid}>
                            Update
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    </>
    )
}


export default Objective;