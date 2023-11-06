import React from 'react'
import "./Error.css"
import error from "../../Images/Screenshot_20231106_204609_Opera Mini.jpg"

const Error = () => {
  return (
    <div className='error-section'>
       <img src={error} alt="" />
       <h1>please if your mobile internet is off please on and refresh thanks</h1>
    </div>
  )
}

export default Error
