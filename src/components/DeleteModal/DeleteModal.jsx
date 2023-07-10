import './DeleteModal.css'

export const DeleteModal = (props) => {

    const cancelHandler = () => {
        props.onCancel()
    }

    const confirmHandler = () => {
        props.onConfirm(props.id)
    }

    return (
        <div className='modal'>
            <p>You are delete {props.title}</p>
            <p>Are you sure?</p>
            <div className='modalBtns'>
                <button className='Btn' onClick={cancelHandler}>Cancel</button>
                <button className='Btn' onClick={confirmHandler}>Confirm</button>
            </div>
        </div>
    )
}
