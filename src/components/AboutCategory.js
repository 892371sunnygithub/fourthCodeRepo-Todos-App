import React, { useState } from 'react'
import {ImPlus} from 'react-icons/im'
import CategoryModal from './CategoryModal'
import  {useDispatch, useSelector} from 'react-redux'
import  {GrEmoji} from 'react-icons/gr'
import { setCategoryData, dymanicCategory } from '../redux/slices/ContactSlice'
const AboutCategory = () => {
    const [categoryModal, setCategoryModal]= useState(false)
    const {form} = useSelector((state) => state.slice2);
    const dispatch= useDispatch();
    const closeModal=()=>{
        setCategoryModal(false);
    }

    const listHandler=(data)=>{
      dispatch(dymanicCategory(data.category));
      dispatch(setCategoryData(data.category))
    }

  return (
    <div className='height_100'>
    <div className="d-flex justify-content-around pt-2">
      <span className='fw-bold'>Category</span>
      <span className='pointer category_span_plus_button' onClick={()=>setCategoryModal(true)}><ImPlus /> </span>
        
      </div>
      {categoryModal && <CategoryModal show={categoryModal} hide={closeModal} />}
       <hr className='text-white' />

       <div className="category-data">
         {
          form.map((curElm, index)=>{
            return(
              <>
              <div className="" key={index}>
               <span> </span>
               <p className='category_para' onClick={()=>listHandler(curElm)} ><GrEmoji/> <span className='ms-3'> {curElm.category} </span> </p>
              </div>
                
              </>
            )
          })
         }
       </div>
    </div>
  )
}

export default AboutCategory