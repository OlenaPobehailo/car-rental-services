import BrandFilter from 'components/FilterGroup/BrandFilter/BrandFilter';
import React from 'react';
import { StyledFilterGroup } from './FilterGroup.styled';
import PriceFilter from './PriceFilter';

const FilterGroup = ({ setSelectedBrand, setSelectedPrice }) => {
  return (
    <StyledFilterGroup>
      <BrandFilter onBrandSelect={setSelectedBrand} title={'Car brand'} />

      <PriceFilter title={'Price/ 1 hour'} onPriceSelect={setSelectedPrice} />
    </StyledFilterGroup>
  );
};

export default FilterGroup;
