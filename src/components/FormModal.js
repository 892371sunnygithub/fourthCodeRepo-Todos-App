import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from 'react-redux';
import {setTable  } from '../redux/slices/ContactSlice';

const FormModal=({hide, show})=> {
 const [formData, setFormData]= useState({
  id:new Date().getTime().toString(),
  name:'',
  email:"",
  location:"",
  role:"",
  phone:"",
  category:"",

 }) 

 const {form} = useSelector((state) => state.slice2);


 const  dispatch= useDispatch();
 const handleInput=(e)=>{
    const {name, value}= e.target;
    setFormData({...formData, [name]:value})
 }
  const handleSubmit=(e)=>{
    e.preventDefault();
   dispatch(setTable(formData));
   hide();
    // console.log('formdata', formData)
  }

  return (
    <>
      
      <Modal show={show} onHide={hide} size="lg">
        <Modal.Header>
          <Modal.Title>Add-Data</Modal.Title>
          <Button onClick={hide}>Close</Button>

        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className='fw-bold'>Name</Form.Label>
        <Form.Control type="text" name='name' value={formData.name} onChange={handleInput} placeholder="Enter Name" autoComplete='off' required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fw-bold'>Email</Form.Label>
        <Form.Control type="email" name='email' value={formData.email} onChange={handleInput} placeholder="Enter Email" autoComplete='off' required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLocation">
        <Form.Label className='fw-bold'>Location</Form.Label>
        <Form.Control type="text" name='location' value={formData.location} onChange={handleInput} placeholder="Enter location" autoComplete='off' required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicRole">
        <Form.Label className='fw-bold'>Role</Form.Label>
        <Form.Control type="text" name='role' value={formData.role} onChange={handleInput} placeholder="Enter role" autoComplete='off' required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label className='fw-bold'>Phone</Form.Label>
        <Form.Control type="number" name='phone' value={formData.phone} onChange={handleInput} placeholder="Enter phone" autoComplete='off' required />
        
      </Form.Group>

      <Form.Select aria-label="Default select example" name='category' onChange={handleInput} value={formData.category}>
      <option>Open this select Category</option>
      {form.map((curElm)=><option value={curElm.category}>{curElm.category}</option> )}
      
    </Form.Select>
     
      <Button variant="primary" type="submit" className='mt-2'>
        Submit
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormModal;