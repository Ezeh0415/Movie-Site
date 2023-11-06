import React, {useContext} from 'react'
import "./movie.css"
import { contextProp } from '../../useContext/useContext'
import {GiCubeforce} from "react-icons/gi"
import {FaMoon, FaSun} from "react-icons/fa"
import {
  Link
} from "react-router-dom";

const MovieHeader = () => {

const {TOGGLE1,TOGGLE2,iconSwitch} = useContext(contextProp)

  return (
    <div>
       <div className="--flex-evenly movie-header">
        <div className='head-icon'><GiCubeforce size={30}/></div>
        <ul className="--flex">
            <li><Link to="/">All</Link></li>
            <li><Link to="/allMovie">Movies</Link></li>
            <li>Series</li>
        </ul>
          
        <div>
           {iconSwitch ? (
             <div onClick={TOGGLE2}><FaSun /></div>
             ) : (
             <div onClick={TOGGLE1}><FaMoon /></div>
           )}
        </div>
       </div>
       <hr />
    </div>
  )
}

export default MovieHeader
