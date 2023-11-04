import React, {useContext} from 'react'
import { GiFallingStar } from 'react-icons/gi'
import { contextProp } from '../../useContext/useContext'

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
             const {medium_cover_image,title,rating,genres} = movies
             const [t1,t2,t3] = genres
            return (
                <div>
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
                </div>
            )
        })}
    </div>
  )
}

export default MoviesList
