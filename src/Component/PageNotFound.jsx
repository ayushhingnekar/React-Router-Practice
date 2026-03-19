import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div className='PageNotFound'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59SG8hEoNW5aFYaJL0Y4VaAqNbzvEoSkBfA&s' alt='Page-Not-Found' />
            <Link to='/'>Go back to Home</Link>
        </div>
    )
}

export default PageNotFound