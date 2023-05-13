import React from 'react'
import {NavLink} from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai'
import {FcAbout, FcTodoList} from 'react-icons/fc';
const Sidebar = () => {
  return (
    <>
      <ul className='p-0'>
        <li className='list_style'><NavLink className='nav-link '  to={'/'}>Home</NavLink> <span><AiOutlineHome/> </span> </li>
        <li className='list_style'><NavLink className='nav-link' to={'/about'}>About</NavLink> <span><FcAbout/> </span> </li>
        <li className='list_style'><NavLink className='nav-link' to={'/todo'}>Todo</NavLink> <span><FcTodoList/> </span> </li>
      </ul>
    </>
  )
}

export default Sidebar
