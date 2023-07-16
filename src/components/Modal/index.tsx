import React, { RefObject, useEffect } from 'react';

interface Props {
    children?: React.ReactNode;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({children, setShowModal}:Props) => {
    
    useEffect( () => {
        const handleKeyDown = (e:KeyboardEvent) => {
            if(e.key === 'Escape') {
                setShowModal(false);
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }) 

    return (
        <div className='fixed inset-0 flex justify-center items-center z-40 bg-avertroBlue/60 cursor-pointer' onClick={() => setShowModal(false)}>
            <div className='bg-white p-24 rounded-[10px]' onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;