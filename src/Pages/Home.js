import React from "react";
import HomeNavBar from "../Components/HomeNavBar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <React.Fragment>
      <HomeNavBar />
      <section class="bg-center bg-no-repeat bg-[url('/Users/balitok/Desktop/ReactProjects/movie-browser/public/peakpx.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Check out the latest Movies and Top Rated Tv Shows
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            A movie browser app that allows users to browse through a collection
            of movies and filter them by various categories such as genre,
            release year, and rating. Users can also search for movies by title
            or actor. The app will display a list of movies that match the
            selected filters, and users can click on a movie to view its
            details, such as synopsis, cast, and crew.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              to="/movies"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
