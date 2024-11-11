"use client";

import { useState } from "react";
import { SortButton } from "./SortButton";
import { AddMovieForm } from "./AddMovieForm";

const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men find redemption.",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    synopsis: "Batman fights the menace known as the Joker.",
  },
  {
    title: "Interstellar",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space.",
  },
];

export default function MovieList() {
  const [currentMovies, setCurrentMovies] = useState(movies);

  const handleReverseMovies = () => {
    let newMovies = [...currentMovies];
    newMovies.reverse();
    setCurrentMovies(newMovies);
  };

  const handleSortByTitle = () => {
    let newMovies = [...currentMovies];
    newMovies.sort((a, b) => a.title.localeCompare(b.title));
    setCurrentMovies(newMovies);
  };

  const handleSortbyYear = () => {
    let newMovies = [...currentMovies];
    newMovies.sort((a, b) => a.year - b.year);
    setCurrentMovies(newMovies);
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    // Creates key-value pair object with form input names/values
    const data = new FormData(e.target);
    onAddMovie(Object.fromEntries(data));
  };

  return (
    <>
      <div className="flex justify-between list-none space-x-5">
        {currentMovies.map((movie, index) => (
          <li key={index}>
            {movie.title} {movie.synopsis} {movie.year}
          </li>
        ))}
      </div>
      <div>
        <button
          className="px-2 py-3 bg-purple-900 rounded-lg"
          onClick={handleReverseMovies}
        >
          Reverse List
        </button>
        {/* <SortButton
          styles="bg-pink-500"
          click={handleSortByTitle}
          text="Sort by Title"
        />
        <SortButton
          styles="bg-purple-500 "
          click={handleSortbyYear}
          text="Sort by Year"
        /> */}
        <button
          onClick={handleSortByTitle}
          className="px-2 py-3 bg-pink-500 rounded-lg"
        >
          Sort by Title
        </button>
        <button
          onClick={handleSortbyYear}
          className="px-2 py-3 bg-purple-500 rounded-lg"
        >
          Sort by Year
        </button>
      </div>
      <AddMovieForm onAddMovie={handleAddMovie} />;
    </>
  );
}
