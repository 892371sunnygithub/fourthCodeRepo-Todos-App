import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux';
import { setContact } from '../redux/slices/ContactSlice';

const CategoryModal=({hide, show})=> {
 const [formData, setFormData]= useState({
  id:new Date().getTime().toString(),  
  category:'',
 }) 

 const  dispatch= useDispatch();
 const handleInput=(e)=>{
    const {name, value}= e.target;
    setFormData({...formData, [name]:value})
 }
  const handleSubmit=(e)=>{
    e.preventDefault();
   dispatch(setContact(formData))
   hide();
    // console.log('formdata', formData)
  }

  return (
    <>
      
      <Modal show={show} onHide={hide} size="lg">
        <Modal.Header>
          <Modal.Title>Add-Category</Modal.Title>
          <Button onClick={hide}>Close</Button>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicCategory">
        <Form.Label className='fw-bold'>Category</Form.Label>
        <Form.Control type="text" name='category' value={formData.category} onChange={handleInput} placeholder="Enter category" autoComplete='off' />
        
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Add-Category
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

export default CategoryModal;