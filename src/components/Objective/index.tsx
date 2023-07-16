import { Objective as IObjective } from '@/types';
import { ChangeEvent, FormEvent, createRef, useState } from 'react';
import {BiPlus} from 'react-icons/bi';
import Button from '../Button';
import { AiFillCalendar } from 'react-icons/ai'
import MinusIcon from '../../UI/MinusIcon';
import generateUUID from "../../util/GenerateUUID";
import Modal from '../Modal';

interface TextInputProps {
    label?:string; 
    value: string; 
    name: string;
    onChange(e: ChangeEvent<HTMLInputElement>):void; 
    children?:React.ReactNode;
}
const TextInput = ({label, value, onChange, name, children}:TextInputProps) => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between flex-wrap'>
                {label && <label htmlFor="name" className='text-avertroBlue font-inter font-bold text-xl'>{label}</label>}
                {children}
            </div>
            <input type="text" {...{value, onChange, name}} className='outline outline-2 outline-grey rounded-md p-4 mt-2'/>
        </div>
    )
}

interface DateInputProps {
    min: string;
}
const DateInput = ({label, value, onChange, name, min}: TextInputProps & DateInputProps) => {
    
    const dateRef = createRef<HTMLInputElement>();

    return (
        <div className='flex flex-col grow'>
            <label htmlFor="name" className='text-avertroBlue font-inter font-bold text-xl'>{label}</label>
            <div onClick={() => dateRef.current?.focus()} 
                 {...{value, onChange, name, min}} 
                 className='relative outline outline-2 outline-grey rounded-md p-4 mt-2 flex gap-2 items-center' >
                    <AiFillCalendar className='text-avertroBlue text-2xl'/>
                    <input ref={dateRef} type="date" {...{value, onChange, name, min}} className='outline outline-transparent'/>
            </div>
        </div>
    )
}

interface Props {
    objective: IObjective;
    index: number;
    onUpdate(objective: IObjective):void;
    onDelete(objective: IObjective):void;
}
const Objective = ({objective, index, onUpdate, onDelete}:Props) => {
    const [form, setForm] = useState<IObjective>(objective);
    const [showModal, setShowModal] = useState(true);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }
    const handleChange = <T extends keyof typeof form>(key: T, value: typeof form[T]) => {
        setForm( form => { return {...form, [key]: value} } )
    }
    const handleUpdate = () => {
        //perform validation
        onUpdate(form);
    }
    const handleDelete = () => {
        // show confirmation modal
        setShowModal(false);
        onDelete(form);
    }

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
                
                <TextInput label={`Objective ${++index}`} value={form.name} name='Objective1' onChange={(e) => handleChange('name', e.target.value)} />

                <div className='flex gap-6 md:flex-nowrap flex-wrap'>
                    <DateInput 
                        label='Start Date' 
                        value={form.startDate.toISOString().split('T')[0]} 
                        name='StartDate' 
                        onChange={(e) => { handleChange('startDate', new Date(e.target.value)) }} 
                        min={new Date().toISOString().split('T')[0]} />

                    <DateInput 
                        label='End Date' 
                        value={form.endDate.toISOString().split('T')[0]} 
                        name='EndDate' 
                        onChange={(e) => { handleChange('endDate', new Date(e.target.value)) }} 
                        min={form.startDate.toISOString().split('T')[0]} />
                </div>

                <div className='flex flex-col'>
                <TextInput 
                    label='Key Measures' 
                    value={form.keyMeasures[0].name} 
                    name='KeyMeasures1' 
                    onChange={(e) => handleChange('keyMeasures', [{ id: form.keyMeasures[0].id, name: e.target.value}, ...form.keyMeasures.slice(1)])} >
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
                </TextInput>
                
                {
                    form.keyMeasures.slice(1).map( ({id, name}, index) => 
                        <div className='flex items-center gap-4 grow relative'>
                            <div className='grow'>
                                <TextInput
                                    key={id}
                                    value={name} 
                                    name={`KeyMeasures${index+1}`} 
                                    onChange={ e => {
                                        const updatedMeasures = [...form.keyMeasures];
                                        updatedMeasures[index+1] = {id, name: e.target.value};
                                        handleChange('keyMeasures', updatedMeasures);
                                    }} />
                            </div>

                            <button 
                                type='button' 
                                className='bg-danger text-white rounded-full w-5 h-5 absolute -right-7' 
                                onClick={() => handleChange('keyMeasures', [...form.keyMeasures.filter(km => km.id !== id)])}> 
                                <MinusIcon /> 
                            </button>
                        </div>
                    )
                }
                </div>

                <div className='flex justify-end gap-2 md:gap-8 md:col-span-2 flex-wrap md:fle'>
                    <Button variant='danger' onClick={() => setShowModal(true)}>
                        Delete
                    </Button>

                    <Button onClick={handleUpdate}>
                        Update
                    </Button>
                </div>

            </form>
        </div>
    </>
    )
}


export default Objective;