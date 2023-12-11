import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";

import { StyledCommonWrapper } from "styles/Common.styled";
import Card from "components/Card";
import { HiddenTitle, StyledList } from "../CatalogPage/CatalogPage.styled";
import { Title, Wrapper } from "./FavoritesPage.styled";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <StyledCommonWrapper>
      <HiddenTitle>Rental Cars Catalog</HiddenTitle>
      <StyledList className="with-top-margin">
        {favorites.length > 0 ? (
          favorites.map((item) => <Card key={item.id} {...item} />)
        ) : (
          <Wrapper>
            <Title>There will be your favorite cars</Title>
          </Wrapper>
        )}
      </StyledList>
    </StyledCommonWrapper>
  );
};

export default FavoritesPage;
