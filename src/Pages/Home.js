import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";

export default function Home() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=f62fed0e20cdf04bce2f1423a643bbea&language=en-US&page=1"
      );
      setTopMovies(response.data.results);
    };
    fetchMovies();
  });

  return (
    <React.Fragment>
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-3">
          Movies
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {topMovies.map((movie) => (
            <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={movie.id}
            >
              <div>
                <img
                  className="rounded-t-lg w-full"
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt=""
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <h5 className="m-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {movie.title}
                  </h5>
                  <p className="flex justify-between items-center">
                    {movie.vote_average}{" "}
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400 inline ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Rating star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </p>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                  {movie.overview}
                </p>
                <p className="font-bold tracking-tight text-gray-900 dark:text-white">
                  Release Date:{" "}
                  <span className="ml-2">{movie.release_date}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
