import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../redux/cars/operations';
import { selectCars, selectError, selectIsLoading } from '../redux/cars/selectors';

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
    <div>
      <h1>CatalogPage</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <p>Error: {error}</p>}

      {cars && (
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {cars.map(item => (
            <li key={item.id} style={{ border: '1px solid grey' }}>
              <p>{item.model}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CatalogPage;
