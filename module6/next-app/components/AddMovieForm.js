"user client";

import { useState } from "react";

export function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [synopsis, setSynopsis] = useState("");
  // ++ add support for the synopsis field as well, here and below
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     onAddMovie({ title, year, synopsis });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    //     const movieData = {
    //       title: formData.get("title"),
    //       year: formData.get("year"),
    //       synopsis: "Some data about the movie",
    //     };
    //   };

    const movieData = Object.fromEntries(formData);
    onAddMovie(movieData);
  };

  return (
    <div className="AddMovieForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Movie Title:
          <input
            className="text-black"
            name="title"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
            defaultValue=""
          />
        </label>
        <label>
          Year Released:
          <input
            className="text-black"
            name="year"
            type="number"
            // value={year}
            // onChange={(e) => setYear(e.target.value)}
            defaultValue=""
          />
        </label>
        <label>
          Synopsis:
          <input
            className="text-black"
            name="synopsis"
            type="synopsis"
            // value={synopsis}
            // onChange={(e) => setSynopsis(e.target.value)}
            defaultValue=""
          />
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  );
}
// add this in MoviesList component
const handleAddMovie = (newMovie) => {
  newMovie.id = currentMovies.length + 1; // unreliable but succinct
  setCurrentMovies([...currentMovies, newMovie]);
};
<AddMovieForm onAddMovie={handleAddMovie} />;
