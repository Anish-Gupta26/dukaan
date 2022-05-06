import React from 'react'
import {data} from './slogan-data'
import './body.css'
const Body = () => {
  return (
    <div className="main-body">
        <h1>Free Slogan Generator</h1>
        <h4>Simply enter a term that describes your business or service, and get upto 1000 slogans for free!</h4>
        <br/><br/>
        <h4>Word for your slogan</h4>
        <div className="input-group mb-3 w-25 input-group-sm text-center">
        <input type="text search-box" placeholder="Enter a word" className="form-control"/>
        </div>
        <button type="button" className="btn btn-lg generate-button">Generate Slogans</button>
        <hr className='my-3'/>
        <div className="search-result-title">
            <h3>We have generated 1,023 slogans for "cozy"</h3>
            <button type="button" className="btn btn-outline-info download-button">Download all</button>
        </div>
        <div className="row search-result">
            {data.map((item)=>{
                return(
                    <>
                    <div className="search-result-card col-sm-6 card mt-3 mp-2">{item}</div>
                    </>
                )
            })}
        </div>

    </div>
  )
}

export default Body