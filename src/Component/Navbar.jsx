import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar-links'>
        <Link to='/'>Home</Link>                            {/* A link for navigate from 1 page to other page */}
        <Link to='/user/login'>Login</Link>
        <NavLink to='/users-list'>Users List</NavLink>      {/* NavLink: indicates 'active' status when the page is open */}
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Navbar