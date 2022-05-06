import React from 'react'
import {data} from './product-details'
import './products.css'

const Product = () => {
  return (
    <div className='row products'>
        <h1 className='my-4'>Try Our Other Free Products!</h1>
        {data.map((item)=>{
            return(
                <div key={item.title} className="card col-md-4 mx-3 card-style my-3">
                <img src={item.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <h6 className="card-text">{item.description}</h6>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Product