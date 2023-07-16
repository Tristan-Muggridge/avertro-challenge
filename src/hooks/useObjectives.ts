import { useState, useEffect } from 'react';
import LocalStorage from '../util/LocalStorage';
import { Objective } from '@/types';

const ls = LocalStorage.getInstance();

const useObjectives = () => {

    const [objectives, setObjectives] = useState<Objective[] | null >(null);

    useEffect(() => {
        let objectives = ls.get<Objective[]>("objectives");
        if (!objectives) objectives = [];

        objectives.forEach((objective) => { 
            objective.startDate = new Date(objective.startDate);
            objective.endDate = new Date(objective.endDate);
            objective.updatedDate = new Date(objective.updatedDate);
        });
        
        setObjectives(objectives);
    }, [])

    useEffect( () => {
        if (!objectives) return;
        ls.set("objectives", objectives);
    }, [objectives])

    return {objectives, setObjectives}
}

export default useObjectives;