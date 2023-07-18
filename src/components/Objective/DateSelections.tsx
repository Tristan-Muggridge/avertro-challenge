import { ObjectiveFieldProps } from "@/types";
import DateInputField from "../Form/DateInputField";

const DateSelections = ({form, handleChange}:ObjectiveFieldProps) => {
    return (
        <div className='flex gap-6 lg:flex-nowrap flex-wrap'>
            <DateInputField 
                label='Start Date' 
                value={form.startDate.toISOString().split('T')[0]} 
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

                // Prevent date selection before today 
                min={new Date().toISOString().split('T')[0]}
            />

            <DateInputField 
                label='End Date' 
                value={form.endDate.toISOString().split('T')[0]} 
                name='EndDate' 
                onChange={({target: {value: endDate}}) => { handleChange('endDate', new Date(endDate)) }} 
                
                // Prevent date selection before the start date
                min={form.startDate.toISOString().split('T')[0]} />
        </div>
    )
}

export default DateSelections;