import React, {useContext} from 'react'
import { GiFallingStar } from 'react-icons/gi'
import { contextProp } from '../../useContext/useContext'
import { Link } from 'react-router-dom'

const MoviesList = () => {
    const {data} = useContext(contextProp)

    const datas = data.slice(0,4)
    // const [f1] = datas
    // const {medium_cover_image,title,rating,genres} = f1
    // const [t1,t2,t3] = genres
    // console.log(t1);
  return (
    <div className='--flex-between'>
        {datas.map((movies) => {
             const {id,medium_cover_image,title,rating,genres} = movies
             const [t1,t2,t3] = genres
            return (
                <div key={id}>
                    <Link to={`/allMovie/${id}`}>
                        <div className='movie-lists'>
                            <img src={medium_cover_image} alt="" />
                            <div className='movie-name'>
                                    <i><b>{title}</b></i>
                                    <i><GiFallingStar />{rating}</i>
                            </div>
                            <div className='rating'>
                                <em>{t1}</em>
                                <em>{t2}</em>
                                <em>{t3}</em>
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
