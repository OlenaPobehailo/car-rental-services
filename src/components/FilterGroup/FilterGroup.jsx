import BrandFilter from 'components/FilterGroup/BrandFilter/BrandFilter';
import { StyledFilterGroup } from './FilterGroup.styled';
import PriceFilter from './PriceFilter';
import MileageFilter from './MileageFilter';

const FilterGroup = ({ setSelectedBrand, setSelectedPrice, setMileageRange }) => {

  const handleRangeChange = range => {
    setMileageRange(range);
  };
  return (
    <StyledFilterGroup>
      <BrandFilter onBrandSelect={setSelectedBrand} title={'Car brand'} />

      <PriceFilter title={'Price/ 1 hour'} onPriceSelect={setSelectedPrice} />

      <MileageFilter onMileageRanceChange={handleRangeChange} />
    </StyledFilterGroup>
  );
};

export default FilterGroup;
