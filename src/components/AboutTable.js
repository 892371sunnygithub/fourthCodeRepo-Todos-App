import React, { useEffect, useState } from 'react'
import FormModal from './FormModal'
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryIndexData } from '../redux/slices/ContactSlice';
const AboutTable = () => {
  const [formModal, setFormModal]= useState(false);
  const {tableData, catData, form, testingData, indexData} = useSelector((state) => state.slice2);
  
  const [flag2, setFlag2]= useState(true);
  const [flag, setFlag]= useState(true);
  const dispatch= useDispatch();
  const closeModal=()=>{
    setFormModal(false)
  }
  

  
  
  const staticCategory= form[0]?.category;
  
  useEffect(()=>{
  dispatch(setCategoryIndexData())
  if(catData==""){
   setFlag2(true);
  } else{
    setFlag2(false);
  }


  if(testingData==""){
    setFlag(true)
  } else{
    setFlag(false)
  }
  }, [catData, staticCategory, tableData, testingData, ])

  return (
   <>
    <div className="create_form text-end bg-secondary d-flex justify-content-between">
      <h3 className='text-uppercase'>{flag2 ? staticCategory: catData } </h3>
      <button className="btn btn-primary" onClick={()=> setFormModal(true)}>  Crete-New</button>
    </div>
    { formModal &&
    <FormModal show={formModal} hide={closeModal} />}
    <div className="data">
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Role</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {
          flag ?
            
            indexData?.map((curElm)=>{
              return(
                <>
                  <tr key={curElm.id}>
                    <td>{curElm.name}</td>
                    <td>{curElm.email}</td>
                    <td>{curElm.location}</td>
                    <td>{curElm.role}</td>
                    <td>{curElm.phone}</td>
                  </tr>
                </>
              )
            }):   testingData?.map((curElm)=>{
              return(
                <>
                  <tr key={curElm.id}>
                    <td>{curElm.name}</td>
                    <td>{curElm.email}</td>
                    <td>{curElm.location}</td>
                    <td>{curElm.role}</td>
                    <td>{curElm.phone}</td>
                  </tr>
                </>
              )
            })
          

          }
        </tbody>
      </table>
    </div>
   </>
  )
}

export default AboutTable