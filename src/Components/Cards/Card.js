import './Card.css'

Card = (prop) => {
    return <div className='card'>
        {prop.children}
    </div>
}