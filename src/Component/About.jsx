import { Link, Outlet } from 'react-router-dom'

function About() {
    return(
        <div className='about-links'>
            <h1>This is About Page</h1> <br />
            <Link to='' ><h3>Service</h3></Link> <br />
            <Link to='personal_service'><h3>Go to Personal Service</h3></Link> <br />
            <Link to='professional_service'><h3>Go to Professional Service</h3></Link> <br /> <br />
            <Outlet />
        </div>
    )
}

export default About