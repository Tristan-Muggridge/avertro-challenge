import { Objective as IObjective } from "@/types";
import generateUUID from "../..//util/GenerateUUID";
import PlusIcon from "../../UI/PlusIcon";
import useObjectives from "../../hooks/useObjectives";
import Button from "../Button";
import Objective from "../Objective";

const mockObjective = () => {
    return {
        id: generateUUID(),
        name: '',
        startDate: new Date(),
        endDate: new Date(),
        createdDate: new Date(),
        updatedDate: new Date(),

        keyMeasures: [
            {
                id: generateUUID(),
                name: '',
            }
        ]
    }
}

const Objectives = () => {
    const { objectives, setObjectives } = useObjectives();

    if (!objectives) return <div>Loading...</div>

    const createObjective = () => {
        setObjectives([...objectives, mockObjective()]);
    }
    
    const onUpdate = (objective: IObjective) => {
        objective.updatedDate = new Date();
        objective.keyMeasures = objective.keyMeasures.filter(km => km.name.trim() !== '');
        setObjectives(objectives.map(o => o.id === objective.id ? objective : o));
    }

    const onDelete = (objective: IObjective) => {
        setObjectives(objectives.filter(o => o.id !== objective.id));
    }

    return ( 
        <div className="flex flex-col gap-8 px-2 items-center">
            <div className="w-full gap-6 flex flex-col">
                {
                    objectives.map((objective, index) => <Objective {...{objective, key: objective.id, index, onUpdate, onDelete}} />)
                }
            </div>
            {
                objectives.length < 3 &&
                <div className="md:self-end">
                    <Button onClick={createObjective}>
                        <PlusIcon className="text-avertroBlue bg-white" />
                        Add Objective
                    </Button>
                </div>
            }
        </div>
    )
}
export default Objectives;