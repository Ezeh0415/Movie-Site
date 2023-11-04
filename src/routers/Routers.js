import React from 'react'
import "./router.css"
import MovieHeader from '../componets/movies/MovieHeader'
import SideNav from '../componets/sideNav/SideNav'
import BannerSwiper from '../componets/movies/BannerSwiper'
import Movie from '../componets/movies/Movie'

const Routers = () => {
  return (
    <div>
      <div className="--flex box">
        <div className="main">
           <MovieHeader />
           <BannerSwiper />
           <Movie />
        </div>
        <div className='side'>
            <SideNav />
        </div>
      </div>
    </div>
  )
}

export default Routers
