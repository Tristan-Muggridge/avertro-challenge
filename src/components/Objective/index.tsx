import { FormEvent, useEffect, useState } from 'react';
import { Objective as IObjective } from '@/types';

import Modal from '../Modal';

import TextInputField from '../Form/TextInputField';
import Button from '../../UI/Button';

import DateSelections from './DateSelections';
import KeyMeasures from './KeyMeasures';
import ActionButtons from './ActionButtons';

interface Props {
    objective: IObjective;
    index: number;
    onUpdate(objective: IObjective):void;
    onDelete(objective: IObjective):void;
}

const Objective = ({objective, index, onUpdate, onDelete}:Props) => {

    const [form, setForm] = useState<IObjective>({...objective});
    const [showModal, setShowModal] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        validate(form) 
            ? onUpdate(form) 
            : alert('Invalid form');
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
        setShowModal(false);
        onDelete(form);
    }

    // Run validation of fields onchange of form
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
            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-10 place-content-between'>
                
                {/* Objective */}
                <TextInputField 
                    label={`Objective ${++index}`} 
                    value={form.name} 
                    name='Objective1' 
                    required={true}
                    onChange={({target: {value: name}}) => handleChange('name', name)} />

                <DateSelections {...{form, handleChange}}/>

                <KeyMeasures {...{form, handleChange}}/>

                {/* Actions */}
                <ActionButtons {...{onClickDelete: () => setShowModal(true), formValid}}/>
            </form>
        </div>
    </>
    )
}


export default Objective;