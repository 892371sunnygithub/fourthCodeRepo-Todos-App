import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiFillEye} from 'react-icons/ai'
import {FaEyeSlash} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { setRoute } from '../redux/slices/ProductSlice';
const Login = () => {
  const dispatch= useDispatch();
   const [email, setEmail]= useState('');
   const [password, setPassword]= useState('')
   const [show, setShow]= useState(true);
   const navigate= useNavigate();

    // const username=localStorage.getItem('email')? localStorage.getItem('email'):'admin@admin.com';
    // const userPassword= localStorage.getItem('password')?localStorage.getItem('password'):'admin';
 
  const handleSubmit= (e)=>{

     e.preventDefault();

     if(!email || !password){
      toast.error('Please fill Data');
     }

     const local= localStorage.getItem('lists');
      if(local && local.length){
        const userData= JSON.parse(local)
        const mapDataEmail= userData.map((curElm)=>{
          // return curElm.email;
          if(curElm.email===email && curElm.password===password){
            dispatch(setRoute());
            navigate('/dashboard');
          } 
          
          
        });
         

       
      }
  }   
       
    
     
  

  const hideShow=()=>{
    setShow(!show);
  }
  return (
    <>
        <div className="login_wrapper  container-fluid">
            <div className="w-50">
            <div className="row ">
              <div className="col-12 login_data">
                 <h1 className='text-center'>Login-Form</h1> 
                 <div className="form_container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' id='email' placeholder='Enter Your Email' className='form-control' autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <div className='parent_hideshow_style'>
                            <input type={show? "password": "text"} name='password' id='password' placeholder='Enter Your password' className='form-control' autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)} /> { password &&<span className='span_hide_style' onClick={hideShow}> {show ?<AiFillEye/>:<FaEyeSlash/>} </span> }
                            </div>
                        </div>
                        <button className='btn btn-dark mt-3 d-inline-block w-100' type='submit'>Signin</button>
                        
                    </form>
                    <div className="form_footer mt-3">
                        <span>Don't Have an account ?</span>
                        <NavLink to={'/signup'} className='nav-link'>Signup </NavLink>

                    </div>
                 </div>
              </div>
            </div>
            </div>
            <ToastContainer />
        </div>
    </>
  )
}

export default Login