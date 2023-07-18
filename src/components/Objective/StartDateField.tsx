import { Objective } from "../../types";
import DateInputField from "../Form/DateInputField";

interface Props {
    form:Objective;
    handleChange: (key: keyof Objective, value: Objective[keyof Objective]) => void;
}

const StartDateField = ({form, handleChange}: Props) => {

    const dateString = form.startDate.toISOString().split('T')[0];

    return (
        <DateInputField 
            label='Start Date' 
            value={dateString} 
            name='StartDate' 
            onChange={({target: {value: startDate}}) => { 
                
                const newStartDate = new Date(startDate);
                
                handleChange('startDate', newStartDate);
                
                // If the new start date is greater than the end date, 
                // set the end date to 7 days from the start date
                if (newStartDate > form.endDate) {
                    const weekFromStart = new Date();
                    weekFromStart.setDate(newStartDate.getDate()+7);
                    handleChange('endDate', weekFromStart);
                }
            }}

            min={dateString}
        />
    )
}


export default StartDateField;