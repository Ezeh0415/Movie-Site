import React, { useContext } from 'react'
import "./sideNav.css"
import {GrUser} from "react-icons/gr"
import SearchOutput from './SearchOutput'
import { contextProp } from '../../useContext/useContext'
import { MdOutlineSearch } from "react-icons/md"

const SideNav = () => {
  const { query,results,handleSearch,onSearch,data } = useContext(contextProp)
  
  return (
    <div>
       
          <div>
            <div className='--flex-end user'>
                <h3>USER  <GrUser /></h3>
            </div>
            <div className='input-section --flex-evenly'>
                <input 
                  type="text" 
                  name='search' 
                  placeholder='search movie' 
                  value={query}
                  onChange={onSearch}
                />
                <div onClick={handleSearch}><MdOutlineSearch size={25}/></div>
            </div>
            <SearchOutput results={results}/>
          </div>
        
    </div>
  )
}

export default SideNav
