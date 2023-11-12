import React, {useContext} from 'react'
import { GiFallingStar } from 'react-icons/gi'
import { contextProp } from '../../useContext/useContext'
import { Link } from 'react-router-dom'
import "./movie.css"

const MoviesList = () => {
    const {data} = useContext(contextProp)

    const datas = data.slice(0,4)
  
  return (
    <div className='flex-section movie-list'>
        {datas.map((movies) => {
             const {id,large_cover_image,title,rating,genres} = movies
             const [t1,t2,t3] = genres
            return (
                <div key={id}>
                    <Link to={`/allMovie/${id}`}>
                        <div className='movie-lists'>
                            <img className="home-image" src={large_cover_image} alt={title} />
                            <div className='movie-name'>
                                    <i><b>{title}</b></i>
                                    <i><GiFallingStar />{rating}</i>
                            </div>
                            <div className='rating'>
                                <p> {t1},{t2},{t3} </p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })}
    </div>
  )
}

export default MoviesList
