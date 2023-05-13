import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { setContact } from '../redux/slices/ContactSlice';
import { useNavigate } from 'react-router-dom';
const ModalCreateForm = ({ show, closeModal }) => {
    const navigate= useNavigate();
    const [inputData, setInputData]= useState({
      category:"",
      title:"",
      price:"",
      description:"",
      image:null,
      rate:"",
      count:"",
      
    })

    const { category, title, price, description,  rate, count, image}= inputData;
    

   const dispatch= useDispatch();
    const handleInput=(e)=>{
       const {name, value}= e.target;
       
       setInputData((preVal)=>{
           return{
            ...preVal,
            [name]:value
           }
       })
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
      
        reader.onload = (event) => {
          setInputData({
            ...inputData,
            image: event.target.result,
          });
        };
      
        reader.readAsDataURL(file);
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
      
        const updatedData = {
          ...inputData,
          image: image,
        };
      
        dispatch(setContact(updatedData));
        navigate('/about')
        
        
      };
      
    return (
        <>

            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create-Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        

                        <Form.Group className="mb-3" controlId="formBasicCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" name='category' onChange={handleInput} placeholder="Category" value={category} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name='title' onChange={handleInput} placeholder="Title" value={title} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" name="price" onChange={handleInput} value={price} placeholder="Price" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name='description' onChange={handleInput} value={description} placeholder="Description" required />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicRate">
                            <Form.Label>Rate</Form.Label>
                            <Form.Control type="text" name='rate' onChange={handleInput} value={rate}  placeholder="Rate" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCount">
                            <Form.Label>Count</Form.Label>
                            <Form.Control type="text" name='count' onChange={handleInput} value={count} placeholder="Count" required />
                        </Form.Group>


                        
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" accept="image/*" name='image' onChange={handleImageChange}  placeholder="Enter file" required />
                            <Form.Text className="text-muted">
                                {/* We'll never share your email with anyone else. */}
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Add Data
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateForm;