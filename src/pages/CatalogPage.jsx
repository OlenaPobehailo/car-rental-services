import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'components/Card';
import { getAllCars } from '../redux/cars/operations';
import { selectCars, selectError, selectIsLoading } from '../redux/cars/selectors';
import { StyledCommonWrapper } from 'styles/Common.styled';
import { StyledList } from './CatalogPage.styled';

const CatalogPage = () => {
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  console.log(cars);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <StyledCommonWrapper>
      {isLoading && <h2>Loading...</h2>}
      {error && <p>Error: {error}</p>}
      {cars && (
        <StyledList>
          {cars.map(item => (
            <Card key={item.id} {...item} />
          ))}
        </StyledList>
      )}
    </StyledCommonWrapper>
  );
};

export default CatalogPage;
