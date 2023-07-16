import { useState, useEffect } from 'react';
import LocalStorage from '../util/LocalStorage';
import { Objective } from '@/types';

const ls = LocalStorage.getInstance();

const useObjectives = () => {

    const [objectives, setObjectives] = useState<Objective[]>([]);

    useEffect(() => {
        const objectives = ls.get<Objective>("objectives");
    }, [])

    useEffect( () => {
        ls.set("objectives", objectives);
    }, [objectives])

    return {objectives, setObjectives}
}

export default useObjectives;