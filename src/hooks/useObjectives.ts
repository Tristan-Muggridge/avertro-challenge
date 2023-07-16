import { useState, useEffect } from 'react';
import LocalStorage from '../LocalStorage';
import { Objective } from '@/types';

const ls = LocalStorage.getInstance();

const useObjectives = () => {

    const [objectives, setObjectives] = useState<Objective[]>([]);

    useEffect(() => {
        const objectives = ls.get<Objective>("objectives");
        console.debug(objectives)
    }, [])

    return {objectives, setObjectives}
}

export default useObjectives;