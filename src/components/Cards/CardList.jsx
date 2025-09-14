import CardImg from "../../assets/images/cardimg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const CardList = ({ title, category}) => {
  const [data, setData] = useState([]);

//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmQxNThiNzA3MGJlMTdhNTBiY2FhYjgwNWY4NGFjMSIsIm5iZiI6MTc1NzE2MzcxOC43MzksInN1YiI6IjY4YmMzMGM2MjM4MmEwMzMwYjliZmU3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N20diGC0g7bz9tLoNKSi3rtMWObSjKyajksqbevZ0LI",
//     },
//   };

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?api_key=3bd158b7070be17a50bcaab805f84ac1&language=en-US&page=1`
        );
        const movieData = await res.json();
        setData(movieData.results);
      } catch (error) {
        console.log(error)
      }
    };
    getMovie();
  }, []);

  return (
    <div className="text-white md:px-4">
      <h2 className="pt-10 pb-5 text-lg font-medium">{title}</h2>
      <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
        {data.map((item, index) => (
          <SwiperSlide key={index} className="max-w-72">
            <Link to={`/movie/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt=""
                className="h-44 w-full object-cover object-center"
              />
              <p className="text-center pt-2">{item.original_title}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardList;
