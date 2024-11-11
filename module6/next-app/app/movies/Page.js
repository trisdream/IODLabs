import MovieList from "@/components/MovieList";

function Movie({ title, year, synopsis }) {
  return (
    <li className="list-none">
      <h3>{title}</h3> <span>({year})</span>
      <div>{synopsis}</div>
    </li>
  );
}

export default function MovieLists() {
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

  return (
    <>
      <h1 className="text-4xl font-bold">Movie List</h1>
      <div className="flex justify-between">
        <MovieList />
        {/* {movies.map((movie, index) => (
          <Movie
            key={index}
            title={movie.title}
            year={movie.year}
            synopsis={movie.synopsis}
          />
        ))} */}
      </div>
    </>
  );
}
