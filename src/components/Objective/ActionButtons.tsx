import Button from "../../UI/Button"

const ActionButtons = ({onClickDelete, formValid}:{onClickDelete():void, formValid:boolean}) => {
    return (

        <div className='flex justify-end gap-2 md:gap-8 md:col-span-2 flex-col md:flex-row flex-wrap md:flex'>
                    <div className='flex-1 md:grow-0'>
                        <Button variant='danger' onClick={onClickDelete} grow={true}>
                            Delete
                        </Button>
                    </div>

                    <div className='flex-1 md:grow-0'>
                        <Button type="submit" grow={true} disabled={!formValid}>
                            Update
                        </Button>
                    </div>
                </div>
    )
}

export default ActionButtons;