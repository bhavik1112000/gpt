import React from 'react'
import './feature.css'

const Feature = ({title, text}) => {
  return (
    <div className="gpt_features-container-feature">
      <div className="gpt_features-container-feature-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="gpt_features-container-feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature