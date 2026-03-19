import { Link } from 'react-router-dom';

function UsersList() {
    const userData1 = { name:'Sam', id:1, age:23 };

    const userData2 = { name:'Joe', id:2, age:21 };

    const userData3 = { name:'Peter', id:3, age:25 };

    const userData4 = { name:'Mark', id:4, age:20 };

    return (
        <div className='Users-list'>
            <h1 style={{marginBottom:'20px'}}>Users List are given below:</h1>
            
            <ul>
                <li style={{listStyle:'none'}}>
                    <h2>User List with ID</h2>
                    <Link to={'/users-list/'+ userData1.id} >{userData1.name}</Link> <br />
                    <Link to={'/users-list/'+ userData2.id} >{userData2.name}</Link> <br />
                    <Link to={'/users-list/'+ userData3.id} >{userData3.name}</Link> <br />
                    <Link to={'/users-list/'+ userData4.id} >{userData4.name}</Link> <br /> <br />

                    <h2>User List with Age</h2>
                    <Link to={'/users-list/'+ userData1.id + '/' + userData1.age} >{userData1.name}</Link> <br />
                    <Link to={'/users-list/'+ userData2.id + '/' + userData1.age} >{userData2.name}</Link> <br />
                    <Link to={'/users-list/'+ userData3.id + '/' + userData1.age} >{userData3.name}</Link> <br />
                    <Link to={'/users-list/'+ userData4.id + '/' + userData1.age} >{userData4.name}</Link> <br />
                </li>
            </ul>


        </div>
    )
}

export default UsersList