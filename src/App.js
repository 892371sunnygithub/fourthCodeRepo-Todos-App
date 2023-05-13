import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from './auth/Login';
import Layout from './layout/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Signup from './auth/Signup';
import './styles/global.scss'
import {useSelector} from 'react-redux'
import Google from './pages/Google';
const App = () => {
  const {routes} = useSelector((state)=> state.slice1);
  
  return (
     <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login  />} />
          <Route path='/signup' element={<Signup />} />
         {/* { routes && <Route path='/dashboard' element={<Layout> <Home/> </Layout>} /> } 
         { routes && <Route path='/about' element={<Layout> <About/> </Layout>} />} 
         {routes &&  <Route path='/todo' element={<Layout> <Todo /> </Layout>} /> }  */}
        
        <Route path='/dashboard' element={<Layout> <Home/> </Layout>} />  
        <Route path='/about' element={<Layout> <About/> </Layout>} />
        <Route path='/todo' element={<Layout> <Todo /> </Layout>} />  
        <Route path='/google' element={<Layout> <Google /> </Layout>} />
         
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
     </>
  )
}

export default App