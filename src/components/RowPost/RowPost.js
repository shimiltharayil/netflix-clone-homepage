import React,{useState,useEffect} from 'react'
import "./RowPost.css";
import axios from "../../axios";
import {imageUrl} from "../../Constants/const";
import YouTube from 'react-youtube';
import { API_KEY } from '../../Constants/const';



function RowPost(props) {
  const [moives, setMoives] = useState([])
  const  [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMoives(response.data.results)
    })
  
    
    
  },[])
 const opts = {
      height: '390',
      width: '100%',
      playerVars: {
      
        autoplay: 1,
      },
    }; 
    const  handleClick = (id )=>{
                console.log(id);
                axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US1`).then(response=>{
                     if(response.data.results!==0){
                      setUrlId(response.data.results[0])
                     }else{
                      console.log(12);
                     }
                })
    }
  return (
    <div className='row_post'>
        <h2>{props.title}</h2>
        <div className="poster">
        {moives.map((obj)=>
           <img onClick={()=>{handleClick(obj.id)}} className={props.isSmall? 'small_posters ':'poster_image'}  alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
        )}
        </div>
       { urlId && <YouTube videoId={urlId.key} opts={opts}  />}
  
    </div>
  )
}

export default RowPost;

 

   
