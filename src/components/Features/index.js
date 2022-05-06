import React from 'react'
import './features.css'
import { data } from './feature-data'
const Feature = () => {
  return (
    <div className='row features my-5'>
    <h1 className='my-4'>Features</h1>
    {data.map((item)=>{
        return(
            <div key={item.title} className="card col-md-4 mx-3 card-style my-3 feature" data-aos="zoom-out"  data-aos-duration="1000">
            <img src={item.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h2 className="card-title text-center">{item.title}</h2>
                    <h6 className="card-text text-center">{item.description}</h6>
                </div>
            </div>
        )
    })}
    </div>    
  )
}

export default Feature