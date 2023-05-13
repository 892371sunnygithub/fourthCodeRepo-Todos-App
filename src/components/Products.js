import React from 'react'

const Products = ({curElm}) => {
    const{id, title, price,category, description, image, rating}= curElm;
     const {rate, count}=rating
  return (
    <>
     <div className="col-md-4" key={id}>
        <div className="card mt-2 card_style text-center p-3">
            <div className="img">
              <figure>
              <img src={image} alt="product_image" className='img-fluid img_ratio' />
              <figcaption><span>{rate} </span> <span>{count} </span> </figcaption>
              </figure>
            </div>
            
            <h4>{category} </h4>
            <h3>{title} </h3>
            <h2>{price} </h2>
        </div>
     </div>
    </>
  )
}

export default Products