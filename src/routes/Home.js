import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const {data: { movies }} = await (
      await fetch('https://yts.mx/api/v2/list_movies.json')
    ).json();

    setMovies(movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? <h1>Loading</h1> : (
          <div>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
              )
            )}
          </div>
        )
      }      
    </div>
  )
}

export default Home;


// 65108 
// 'https://yts.mx/assets/images/movies/james_acaster_hecklers_welcome_2024/large-cover.jpg' 
// 'James Acaster: Hecklers Welcome' 
// '' 
// undefined