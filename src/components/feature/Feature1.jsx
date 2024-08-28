import React from 'react'
import './feature1.css'

const Feature1 = ({title, text}) => {
  return (
    // <div className="gpt_features-container-feature">
    //   <div className="gpt_features-container-feature-title">
        
    //   </div>
    //   <div className="gpt_features-container-feature-text">
        
    //   </div>
    // </div>

    <div className='gpt_feature1'>
      
       
        <div className='x'>
            <div></div>
              <h1> {title} </h1>
            </div>
      
     
         <div className='y'>
         <p> {text} </p>
         </div>
        
        
      </div>
    
  )
}

export default Feature1