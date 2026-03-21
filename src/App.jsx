import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import './App.css'
import Service from './Component/Service'
import Navbar from './Component/Navbar'
import PersonalService from './Component/PersonalService'
import ProfessionalService from './Component/ProfessionalService'
import PageNotFound from './Component/PageNotFound'
import Login from './Component/Login'
import UsersList from './Component/UsersList'
import UsersDetail from './Component/UsersDetail'

function App() {

  return (
    <div style={{backgroundColor:'black', minHeight: "100vh", color:'white'}}>
      <Navbar />

      <Routes>                                                                {/* Responsible for rendering the appropriate component */}

        <Route path='/' element={<Home />}  />                                {/* Each route component defines path & component to render */}

        <Route path='user/login' element={<Login />} />

        <Route path='/about' element={<About />} >
          <Route index element={<Service />} />
          <Route path='personal_service' element={<PersonalService />} />
          <Route path='professional_service' element={<ProfessionalService />} />
        </Route>

        <Route path='/contact' element={<Contact />} />
        <Route path='/users-list' element={<UsersList />} />
        <Route path='/users-list/:id/:age?' element={<UsersDetail />} />         {/* ':' used for Dynamic Routing */}

        <Route path='/*' element={<PageNotFound />} />

      </Routes>

    </div>
  )
}

export default App