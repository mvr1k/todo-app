import './TodoHeader.css'


const TodoHeader = (props) => {
    return (
        <div className='todo-header'>
            <H1>{props.heading}</H1>
        </div>
    )
}