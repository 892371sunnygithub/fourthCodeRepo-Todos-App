import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../common/Loader'
import { STATUSES } from '../redux/slices/ProductSlice'
import Products from './Products'
import ModalCreateForm from './ModalCreateForm'
const GridView = ({query}) => {
    const {status, data}= useSelector((state)=> state.slice1);
    const [modal, setModal] = useState(false);
    if(status===STATUSES.LOADING){
        return <div className='loader_view'><Loader /> </div>
    }
     
    const handleModal=()=>{
       setModal(true);   
    }

    const closeModal=()=>{
        setModal(false);
    }
  return (
    <>
    <div className="button_create text-end me-3"><button className='btn btn-primary' onClick={handleModal} >Add New</button> </div>
   { modal && <ModalCreateForm show={modal} closeModal={closeModal} /> }
        <div className="row">
            {
                data.filter(user=>user.title.toLowerCase().includes(query)).map((curElm)=>{
                    return <Products curElm={curElm} />
                })
            }
        </div>
    </>
  )
}

export default GridView