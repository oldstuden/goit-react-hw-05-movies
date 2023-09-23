import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';

import { getTrendMovies } from 'servicesApi/api';
import { Title } from './Home.styled';
import { Loader } from 'components/Loader/Loader';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      try {
        setMovies(await getTrendMovies());
      } catch (error) {
        navigate('/', { replace: true });
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [navigate]);

  return (
    <main>
      <Title>Trending today</Title>
      {loading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
}
