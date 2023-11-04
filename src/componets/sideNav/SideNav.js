import React from 'react'
import "./sideNav.css"
import {GrUser} from "react-icons/gr"
import SearchOutput from './SearchOutput'

const SideNav = () => {
  return (
    <div>
       <div className='--flex-end user'>
           <h3>USER  <GrUser /></h3>
       </div>
       <div className='input-section'>
          <input type="text" name='search' placeholder='search movie' />
       </div>
       <SearchOutput />
    </div>
  )
}

export default SideNav
