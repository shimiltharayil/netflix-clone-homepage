import axios from '../../axios';
import {useEffect,useState} from 'react';
import { API_KEY, imageUrl} from '../../Constants/const';
import React from 'react';
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState([])
  useEffect(() => {
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results);
    
    setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
   })
  
   
  }, [])

  return (
    <div style={{backgroundImage:`url(${movie ?imageUrl+movie.backdrop_path :""})`}}
     className='banner'>
             {console.log(movie.object+"hi")}
        <div className="content">
            <h1 className="title">{movie ? movie.title || movie.name: ""}</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner