import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'components/Card';
import { getAllCars } from '../redux/cars/operations';
import { selectError, selectIsLoading } from '../redux/cars/selectors';
import { StyledCommonWrapper } from 'styles/Common.styled';
import { StyledList } from './CatalogPage.styled';
import { LoadMoreButton } from 'components/UI/Button/Button.styled';
import Filter from 'components/Filter';

const CatalogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cars, setCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const perPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getAllCars(currentPage));
        const newCars = response.payload || [];
        setCars(prevCars => [...prevCars, ...newCars]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    if (!isLoading) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const filteredCars = selectedBrand ? cars.filter(car => car.make === selectedBrand) : cars;

  const allElementsLoaded = filteredCars.length % perPage !== 0;

  return (
    <StyledCommonWrapper>
      {isLoading && <h2>Loading...</h2>}
      {error && <p>Error: {error}</p>}

      <Filter onBrandSelect={setSelectedBrand}/>

      {filteredCars.length > 0 && (
        <>
          <StyledList>
            {filteredCars.map(item => (
              <Card key={item.id} {...item} />
            ))}
          </StyledList>

          {!allElementsLoaded && (
            <LoadMoreButton onClick={handleLoadMore} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Load More'}
            </LoadMoreButton>
          )}
        </>
      )}
    </StyledCommonWrapper>
  );
};

export default CatalogPage;
