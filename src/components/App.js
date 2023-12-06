import { Route, Routes } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';
import FavoritesPage from '../pages/FavoritesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
