import React, {useContext} from 'react'
import "./router.css"
import MovieHeader from '../componets/movies/MovieHeader'
import HomeRouter from './HomeRouter'
import SideNav from '../componets/sideNav/SideNav'
import { contextProp } from '../useContext/useContext'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AllMovies from '../componets/movies/AllMovies/AllMovies'
import Error from '../componets/Error/Error'
import MovieDetails from '../componets/movies/movieDetails/MovieDetails'

const Routers = () => {
  const { darkMood,data,isPending,error } = useContext(contextProp)
  return (
    <div  className="back-ground" data-theme={darkMood}>
          <BrowserRouter>
             {isPending ? (
               <p>loading ....</p>
             ) : error ? (
                <Error />
             ) : (
                    <div className="--flex box">
                      <div className="main">
                        <MovieHeader />
                      
                          <div>
                              {data && (
                                <Routes>
                                  {/* home page router */}
                                  <Route path="/" element={ <HomeRouter /> } />
                                  {/* all movies section */}
                                  <Route path="/allMovie" element={ <AllMovies /> } />
                                  <Route path="/allMovie/:id" element={ <MovieDetails /> } />
                                </Routes>
                              )}
                          </div>
          
                      </div>
                      {data && (
                          <div className='side'>
                              <SideNav />
                          </div>
                      )}
                    </div>
             )}
          </BrowserRouter>
    </div>
    
  )
}

export default Routers
