import React from 'react'
import "./movie.css"
import {GiCubeforce} from "react-icons/gi"
import {FaMoon} from "react-icons/fa"

const MovieHeader = () => {
  return (
    <div>
       <div className="--flex-evenly movie-header">
        <div><GiCubeforce size={30}/></div>
        <ul className="--flex">
            <li>All</li>
            <li>Movies</li>
            <li>Series</li>
        </ul>
        <div>
           <div><FaMoon /></div>
        </div>
       </div>
    </div>
  )
}

export default MovieHeader
