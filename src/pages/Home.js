import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/ProductSlice';
import GridView from '../components/GridView';
import ListView from '../components/ListView';

const Home = () => {
  const [view, setView]= useState(true);
  const [query, setQuery]= useState("");
  const dispatch= useDispatch();
  useEffect(()=>{
   dispatch(fetchProducts())
  }, [])
  return (
    <>
      <section>
        <div className="search_section d-flex justify-content-between align-items-center bg-dark p-4 text-light">
          <input type="search" className='form_control' onChange={(e)=>setQuery(e.target.value)}  />
          <div className="button_group">
            <button className='btn btn-primary btn-sm me-2' onClick={()=>setView(true)}>Grid</button>
            <button className='btn btn-secondary btn-sm' onClick={()=>setView(false)} >List</button>
          </div>
        </div>
        <div className="product_section pt-4 pb-5 ps-2">
         { view ?<GridView query={query}/> :<ListView query={query}  /> }
        </div>
      </section>
    </>
  )
}

export default Home


