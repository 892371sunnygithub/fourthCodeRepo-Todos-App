import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../common/Loader'
import { STATUSES } from '../redux/slices/ProductSlice'

const ListView = ({query}) => {
    const {status, data}= useSelector((state)=> state.slice1);
    
    if(status===STATUSES.LOADING){
        return <div className='loader_view'><Loader /> </div>
    }
    
  return (
    <>
       {
        data.filter(user=>user.title.toLowerCase().includes(query)).map((curElm)=>{
          const{id, title, price,category, description, image, rating}= curElm;
          
         return <div className="row">
            <div className="col-12">
              <div className="list_data">
                <div className="list_img">
                <figure>
                    <img src={image} alt="product_image" className='img-fluid img_ratio' />
                    <figcaption className=''><span>*{rating.rate} </span> <span>*{rating.count} </span> </figcaption>
                    </figure>
                    
                </div>
                <div className="price">
                  <h6>${price} </h6>
                </div>
                <div className="category text-uppercase"><h4>{category} </h4> </div>
                <h4>{title} </h4>
                
                <div className="description">
                  <p>{description} </p>
                </div>
                
              </div>
            </div>
          </div>
        })
       }
    </>
  )
}

export default ListView