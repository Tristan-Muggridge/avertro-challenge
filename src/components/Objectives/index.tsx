import generateUUID from "../..//util/GenerateUUID";
import PlusIcon from "../../UI/PlusIcon";
import useObjectives from "../../hooks/useObjectives";
import Button from "../Button";
import Objective from "../Objective";

const mock = {
    id: generateUUID(),
    name: 'Reduce Risk',
    keyMeasures: [
        {
            id: generateUUID(),
            name: 'First Key Measure',
        }
    ],
    startDate: new Date(),
    endDate: new Date(),
    createdDate: new Date(),
    updatedDate: new Date(),
}

const Objectives = () => {
    const { objectives, setObjectives } = useObjectives();
    
    const createObjective = () => {
        setObjectives([...objectives, mock])
    }
    
    return (
        <div className="flex flex-col gap-8 px-2">
            {
                objectives.map((objective, index) => <Objective {...{objective, key: objective.id, index}} />)
            }

            {
                objectives.length < 3 &&
                <div className="self-end">
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