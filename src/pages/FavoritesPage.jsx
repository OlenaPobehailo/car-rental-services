import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/favorites/selectors';

import { StyledCommonWrapper } from 'styles/Common.styled';
import Card from 'components/Card';
import { StyledList } from './CatalogPage.styled';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  console.log(favorites);

  return (
    <StyledCommonWrapper>
      <p>FavoritesPage</p>
      <StyledList>
        {favorites.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </StyledList>
    </StyledCommonWrapper>
  );
};

export default FavoritesPage;