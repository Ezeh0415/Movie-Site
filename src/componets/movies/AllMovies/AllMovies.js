import React, { useContext, useState } from 'react'
import "./allMovie.css";
import { contextProp } from '../../../useContext/useContext';
import { GiFallingStar } from 'react-icons/gi'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const AllMovies = () => {
  const{ data } = useContext(contextProp)

 // // pagnation function start
   
  const [CurrentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = CurrentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const datas = data.slice(firstIndex,lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const number = [...Array(npage + 1).keys()].slice(1)

// function section 

function prevPage() {
if(CurrentPage !== 1) {
  setCurrentPage(CurrentPage - 1)
}
}

function changeCpage(id) {
   setCurrentPage( id )
}


function nextPage() {
 if(CurrentPage !== npage) {
     setCurrentPage(CurrentPage + 1)
   }
}

// // pagnation function end

  return (
    <div>
      <div className="all-movie">
          <div className='allMovies-grid'>
            {datas.map((movies) => {
                const {medium_cover_image,title,rating,genres} = movies
                const [t1,t2,t3] = genres
                return (
                    <div key={movies.id}>
                        <div className='movie-lists'>
                            <img src={medium_cover_image} alt="" />
                            <div className='movie-name'>
                                    <i><b>{title}</b></i>
                                    <i><GiFallingStar />{rating}</i>
                            </div>
                            <div className='rating'>
                                <em>{t1}</em>
                                <em>{t2}</em>
                                {/* <em>{t3}</em> */}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <nav>
                <ul>
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={prevPage}><FaArrowAltCircleLeft /></a>
                    </li>
                       
                         {
                                number.map((n,i) => (
                                        <li className={ ` page item ${CurrentPage === n ? 'active' : '' } `} key={i}>
                                            <a href="#" className="page-link" onClick={() => changeCpage (n)}  >{n}</a>
                                        </li>
                                    ))
                            }  
                    
                   
                    <li className="page-item" >
                         <a href="#" className="page-link" onClick={nextPage}><FaArrowAltCircleRight /></a>
                    </li>
                   
                </ul>
        </nav>
      </div>
    </div>
  )
}

export default AllMovies
