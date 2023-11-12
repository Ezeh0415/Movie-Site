import React, {useContext} from 'react'
import "./movie.css"
import { contextProp } from '../../useContext/useContext'
import {GiCubeforce,GiHamburgerMenu} from "react-icons/gi"
import {FaMoon, FaSun} from "react-icons/fa"
import { MdPlaylistRemove } from "react-icons/md"
import {
  Link
} from "react-router-dom";

const MovieHeader = () => {

const {TOGGLE1,TOGGLE2,iconSwitch,NAVHANDLE,dispatch,isNavOpen} = useContext(contextProp)
  return (
    <div>
       <div className="--flex-evenly movie-header">
        <div className='head-icon'><GiCubeforce /></div>
        <ul className="--flex">
            <li><Link to="/">All</Link></li>
            <li><Link to="/allMovie" className="second-nav-link">Movies</Link></li>
            <li><Link to="/soon">Series</Link></li>
        </ul>
          
        <div>
           {iconSwitch ? (
             <div onClick={TOGGLE2} className='head-icon' ><FaSun /></div>
             ) : (
             <div onClick={TOGGLE1} className='head-icon' ><FaMoon /></div>
           )}
        </div>
        <div className="mobileNavIcon">
          {isNavOpen ? (
                <div className='head-icon' onClick={() => dispatch(NAVHANDLE())} > <MdPlaylistRemove /> </div>
          ) : (
            <div  className='head-icon' onClick={() => dispatch(NAVHANDLE())} > <GiHamburgerMenu />  </div>
          )}
        </div>
       </div>
       <hr />
    </div>
  )
}

export default MovieHeader
