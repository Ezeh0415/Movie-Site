import React from 'react'
import MoviesList from './MoviesList'

const Movie = () => {
  return (
    <div>
        <div className='--flex-between'>
           <i><b>Most Popular</b></i>
           <a href="#"> View All</a>
        </div>
        <div>
            <MoviesList />
        </div>
    </div>
  )
}

export default Movie
