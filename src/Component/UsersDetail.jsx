import { Link, useParams } from 'react-router-dom'

function UsersDetail() {
    const paramsData = useParams()                              // Used for passing data
    const paramsAge = useParams()
    
    return (
        <div>
            <h1>Users Detail Page</h1> <br />
            <h2>User id is: {paramsData.id}</h2> <br />
            <h2>User Age is: {paramsAge.age}</h2> <br />
            <Link to='/users-list'>Go back to Users List</Link>
        </div>
    )
}

export default UsersDetail