import React, { useEffect, useState } from 'react';
import axios from '../../axios'
import Youtube from 'react-youtube';
import  { API_KEY,imageUrl } from '../../constants/constants'

import './Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState()
    const [videoId, setVideoId] = useState('')


    useEffect(() => {
       axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) =>{
        const results = response.data.results;
        const randomIndex = Math.floor(Math.random() * results.length);
        setMovie(results[randomIndex])
       })
    }, [])
    
    const opts = {
        height: '448',
        width: '100%',
        
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          origin: 'http://localhost:3000',
        },
    };

    const handleVideo = (id) =>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
            if(response.data.results.length !== 0){
                setVideoId(response.data.results[0])
                
            }else{
                console.log('Array empty')
            }
        })
    }

    return (
        <>
          {videoId ? (
            <div style={{marginTop: '40px'}}>
                <Youtube opts={opts} videoId={videoId.key} />
            </div>
          ) : (
           
            <div className='banner' style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})` }}>
              <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='banner-button'>
                  <button className='button' onClick={() => handleVideo(movie.id)}>Play</button>
                  <button className='button'>My List</button>
                </div>
                <h4 className='description'>{movie ? movie.overview : ""}</h4>
              </div>
              <div className="fade_bottom"></div>
            </div>
        
           
          )}
         
        </>
      );
    };

export default Banner;