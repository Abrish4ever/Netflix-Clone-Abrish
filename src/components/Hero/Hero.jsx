import { Bookmark, Play } from 'lucide-react'
import HeroBg from '../../assets/images/herobg2.jpg'
import { useEffect, useState } from 'react';
import { data, Link } from 'react-router';

const Hero = () => {
    const[movie, setMovie]= useState(null)

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmQxNThiNzA3MGJlMTdhNTBiY2FhYjgwNWY4NGFjMSIsIm5iZiI6MTc1NzE2MzcxOC43MzksInN1YiI6IjY4YmMzMGM2MjM4MmEwMzMwYjliZmU3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N20diGC0g7bz9tLoNKSi3rtMWObSjKyajksqbevZ0LI",
      },
    };

    useEffect(()=>{
        const getNowPlaying= async() =>{
          try {
            const res = await fetch(
              "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", options
            );
            const data = await res.json();
            if (data.results && data.results.length > 0) {
              const randomIndex = Math.floor(
                Math.random() * data.results.length
              );
              setMovie(data.results[randomIndex]);
            }
          } catch (error) {
            console.log(error);
          }
        } 
        getNowPlaying();
      }, [])
    //   console.log(movie)
    if(!movie) {
        return <p>Loading...</p>
    }
    
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
  return (
    <div className="text-white relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="Bg-img"
        className="w-full rounded-2xl h-[480px] object-center object-cover"
      />
      <div className="absolute bottom-10 mb-16 left-4 md:left-10">
        <h1 className="text-5xl font-extrabold pb-1 text-white">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="w-[45rem] leading-none py-4 text-base max-w-[360px] h-20 text-white">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="flex space-x-2 md:space-x-4 absolute bottom-3 left-4 md:bottom-8 md:left-10 font:medium">
        <button className="flex justify-center item-center bg-white  hover:bg-gray-200 text-[#e50914] py-3 px-4 rounded-full cursor-pointer text-sm md:text-base">
          <Bookmark className="mr-2 w-4 h-5 md:w-5 md:h-5" /> Save for later
        </button>
        <Link to={`/movie/${movie.id}`}>
          <button className="flex justify-center item-center bg-[#e50914] text-white py-3 px-4 rounded-full cursor-pointer text-sm md:text-base">
            <Play className="mr-2 w-5 h-6 md:w-5 md:h-5" />
            Watch 
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero