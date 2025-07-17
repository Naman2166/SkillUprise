import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Videos from './pages/Videos'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/auth/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignUp from './pages/auth/SignUp'
import Features from './pages/Features'
import EthicalHackingInternship from './pages/EthicalHackingInternship'
import Internship from './pages/Internship'



const App = () => {

  const location = useLocation()       //to get current route 

  return (
    <div className='mx-0 sm:mx-[0%]'>              
    
    <div className='mb-14 sm:mb-14 md:mb-14 lg:mb-14 xl:mb-[6.6rem]'>
    {location.pathname !== '/login' && location.pathname !== '/signup' && <Navbar />  }              {/* on login page Navbar will not visible) */}   
    </div>
    
    
    <Routes>
       <Route path='/' element={<Home />} />                        {/* on "/" route , Home component will appear */}       
       <Route path='/courses' element={<Courses />} />  
       <Route path='/videos' element={<Videos />} /> 
       <Route path='/resources' element={<Resources />} />
       <Route path='/about' element={<About />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/login' element={<Login />} />
       <Route path='/signup' element={<SignUp />} />
       <Route path='/features' element={<Features />} />
       <Route path='/ethical-hacking-internship' element={<EthicalHackingInternship />} />
       <Route path='/internship' element={<Internship />} />
    </Routes>

     {location.pathname !== '/login' && location.pathname !== '/signup' && <Footer />  }              {/* on login page footer will not visible) */}   
    
     
    </div>
  )
}

export default App