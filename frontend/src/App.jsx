import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Error from './pages/Error'
import { Contact } from './pages/Contact'
import { Login } from './pages/Login'
import { Service } from './pages/Service'
import { Register } from './pages/Register'
import { Logout } from './pages/Logout'
import { Adminlayout } from './Component/Layouts/Adminlayout'
import { AdminUsers } from './pages/Admin-users'
import { AdminContact } from './pages/Admin-contact'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/*" element={<Error />} />
          <Route path="/admin" element={<Adminlayout />}>
          <Route path="users" element={<AdminUsers />} />
          <Route path="contact" element={<AdminContact />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  )
}
export default App;