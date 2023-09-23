import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Home } from 'pages/Home/Home';
import { MovieCard } from 'pages/MovieCard/MovieCard';
import { Movies } from 'pages/Movies/Movies';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieCard />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
