import React from 'react'
import MoviesList from './MoviesList'
import {
 Link
} from "react-router-dom";

const Movie = () => {
  return (
    <div>
        <div className='--flex-between'>
           <i><b>Most Popular</b></i>
           <Link to="/allMovie"> View All</Link>
        </div>
        <div>
            <MoviesList />
        </div>
    </div>
  )
}

export default Movie
