import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'layout';
import { Cast, Home, MovieDetails, Movies, Reviews } from 'pages';
import { ROUTES } from 'utils/routes';

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.MOVIES} element={<Movies />} />
        <Route path={ROUTES.MOVIE_DETAIL} element={<MovieDetails />}>
          <Route path={ROUTES.CAST} element={<Cast />} />
          <Route path={ROUTES.REVIEWS} element={<Reviews />} />
        </Route>

        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Route>
    </Routes>
  );
};
