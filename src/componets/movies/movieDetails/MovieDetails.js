import React ,{useState,useEffect,useContext}from 'react'
import { useParams } from "react-router-dom"
import { contextProp } from '../../../useContext/useContext'
import "./MovieDetail.css"
import {FaBackward} from "react-icons/fa"
import {Link} from "react-router-dom"

const MovieDetails = () => {

    const{ data } = useContext(contextProp);

    const [title,setTitle] = useState("")
    const [year,setYear] = useState("")
    const [rating,setRating] = useState("")
    const [geners,setGeners] = useState("")
    const [image,setImage] = useState("")
    const [language,setLanguage] = useState("")
    const [description,setDescription] = useState("")
    const [date,setDate] = useState("")

    const { id } = useParams()

    useEffect(() => {
       const newMovie = data.find((datas) => datas.id === parseInt(id))
       setTitle(newMovie.title)
       setYear(newMovie.year)
       setRating(newMovie.rating)
       setImage(newMovie.large_cover_image)
       setLanguage(newMovie.language)
       setDescription(newMovie.torrents)
       setDate(newMovie.date_uploaded)
       setGeners(newMovie.genres)
    })

   


  return (
    <div className="movie-details">
        <div className="--flex fles"> 
            <div className="image-section">
            <img src={image} alt={title} />
            </div>
            <div className="text-section">
                <h3>Movie Name: {title}</h3>
                <h3>Movie Year: {year}</h3>
                <p><b>Rating:</b> {rating}</p>
                <p><b>Language:</b> {language}</p>
                <p><b>Date:</b> {date}</p>
                <p><b>Geners:</b> {geners}</p>
                <div className="btn ">
                       <Link to="/"> <p><FaBackward /> All</p> </Link>
                       <Link to="/allMovie"> <p><FaBackward /> Movies</p> </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails
