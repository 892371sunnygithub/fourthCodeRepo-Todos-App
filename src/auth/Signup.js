import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast , ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiFillEye} from 'react-icons/ai'
import {FaEyeSlash} from 'react-icons/fa'
const getLocalItems=()=>{
    const list=localStorage.getItem('lists')
    if(list){
      return JSON.parse(localStorage.getItem('lists'))
    } else{
      return []
    }
  }
  
const Signup = () => {
    const navigate= useNavigate()
    const [signin, setSignin]=useState({
        name:"",
        email:"",
        password:"",
        phone:"",
        address:"",
    });

    const[data, setData]= useState(getLocalItems())
    const [show, setShow]= useState(true);
    const handleInput=(e)=>{
      const {name, value}= e.target;
      setSignin((preval)=>{
        return{
            ...preval,
            [name]:value
        }
      })
    }
   const {name, email, password,phone, address}= signin
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name, !email, !password, !phone, !address){
            toast.error('Please fill the data');
        } else if(!name){
          toast.error('Please fill the Name');
      }
        else if(!email){
           toast.error('Please fill the email')
        }

        else if(!password){
          toast.error('Please fill the Password')
        }

        else if(password.length<8){
           toast.error('Password must be required at-least 8 charecter')
        }

        else if(!phone){
           toast.error('Please fill the Phone Number')
        }

        else if(phone.length<10){
          toast.error('Phone Number must be required 10 charecters')
        }

        else if(!address){
           toast.error('Please fill the address field');
        } else{
            setData([...data, signin])
            toast.success('Registration successfull');
            setTimeout(()=>{
             navigate('/')
            }, [3000])
        }


    }

    useEffect(()=>{
        localStorage.setItem('lists', JSON.stringify(data))
      }, [data]);
    
      const hideShow=()=>{
        setShow(!show);
      }
  return (
    <>
        <div className="login_wrapper  container-fluid">
            <div className="w-50">
            <div className="row ">
              <div className="col-12 login_data">
                 <h1 className='text-center'>Registration-Form</h1> 
                 <div className="form_container">
                    <form onSubmit={handleSubmit}>
                        
                    <div className="form-group mb-3">
                            <label htmlFor="name">Name*</label>
                            <input type="name" name='name' id='name' placeholder='Enter Your name' className='form-control' autoComplete='off' value={name} onChange={handleInput} />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="email">Email*</label>
                            <input type="email" name='email' id='email' placeholder='Enter Your Email' className='form-control' autoComplete='off' value={email} onChange={handleInput} />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="password">Password*</label>
                            <div className='parent_hideshow_style'>
                            <input type={show? "password": "text"} name='password' id='password' placeholder='Enter Your password' className='form-control' autoComplete='off' value={password} onChange={handleInput} />  { password &&<span className='span_hide_style' onClick={hideShow}> {show ?<AiFillEye/>:<FaEyeSlash/>} </span> }
                            </div>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="phone">Phone Number*</label>
                            <input type="number" name='phone' id='phone' placeholder='Enter Your Phone' className='form-control' autoComplete='off' value={phone} onChange={handleInput} />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="address">Address*</label>
                            <input type="text" name='address' id='address' placeholder='Enter Your Address' className='form-control' autoComplete='off' value={address} onChange={handleInput} />
                        </div>

                        <button className='btn btn-success mt-3'>Signup</button>
                        
                    </form>
                    <div className="form_footer mt-3">
                        <span>Already have an account ?</span>
                        <NavLink to={'/'} className='nav-link'>Login </NavLink>

                    </div>
                 </div>
              </div>
            </div>
            </div>
            <ToastContainer/>
        </div>
    </>
  )
}

export default Signup