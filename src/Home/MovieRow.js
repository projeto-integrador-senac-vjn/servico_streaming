import React, { useEffect, useState } from 'react'
import Requests from './Requests'
import axios from 'axios'
import NavBar from './NavBar'

function Home() {
    require("./FeaturedMovie.css")
    

    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    let firstDate = new Date(movie?.release_date);
    
    let description = movie?.overview;
    if(description?.length > 200){
        description = description.substring(0, 200)+ '...'
    }

    useEffect(()=>{
        axios.get(Requests.requestPopular).then((response)=>{
            setMovies(response.data.results)
        })
    }, [])
    console.log(movie)


  return (
    <>
        <NavBar/>
       <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{movie?.title}</div>
                    <div className="featured--info">
                        <div className="featured--points">{movie?.vote_average} de relevância</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                    </div>
                    <div className="featured--description">{description}</div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home