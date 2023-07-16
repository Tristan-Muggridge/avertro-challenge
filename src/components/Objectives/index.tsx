import PlusIcon from "../..//UI/PlusIcon";
import useObjectives from "../../hooks/useObjectives";
import Button from "../Button";
import Objective from "../Objective";

const mock = {
    id: 1,
    name: 'Reduce Risk',
    keyMeasures: [
        {
            id: 1,
            name: 'First Key Measure',
        }
    ],
    startDate: new Date(),
    endDate: new Date(),
    createdDate: new Date(),
    updatedDate: new Date(),
}

const Objectives = () => {
    const { objectives } = useObjectives();
    return (
        <div className="flex flex-col gap-8 px-2">
            {
                [mock, mock, ...objectives].map((objective, index) => <Objective {...{objective, key: objective.id, index}} />)
            }

            <div className="self-end">
                <Button>
                    <PlusIcon className="text-avertroBlue bg-white" />
                    Add Objective
                </Button>
            </div>
        </div>
    )
}
export default Objectives;