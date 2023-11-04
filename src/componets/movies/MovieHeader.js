import React, {useContext, useEffect, useState} from 'react'
import "./movie.css"
import { contextProp } from '../../useContext/useContext'
import {GiCubeforce} from "react-icons/gi"
import {FaMoon, FaSun} from "react-icons/fa"
import useLocalStorage from 'use-local-storage';

const MovieHeader = () => {

const {TOGGLE1,TOGGLE2,iconSwitch} = useContext(contextProp)

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
           {iconSwitch ? (
             <div onClick={TOGGLE2}><FaSun /></div>
             ) : (
             <div onClick={TOGGLE1}><FaMoon /></div>
           )}
        </div>
       </div>
    </div>
  )
}

export default MovieHeader
