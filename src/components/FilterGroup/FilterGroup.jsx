import PropTypes from "prop-types";

import BrandFilter from "components/FilterGroup/BrandFilter/BrandFilter";
import { StyledFilterGroup } from "./FilterGroup.styled";
import PriceFilter from "./PriceFilter";
import MileageFilter from "./MileageFilter";

const FilterGroup = ({
  setSelectedBrand,
  setSelectedPrice,
  setMileageRange,
}) => {
  const handleRangeChange = (range) => {
    setMileageRange(range);
  };
  return (
    <StyledFilterGroup>
      <BrandFilter onBrandSelect={setSelectedBrand} title={"Car brand"} />

      <PriceFilter title={"Price/ 1 hour"} onPriceSelect={setSelectedPrice} />

      <MileageFilter onMileageRanceChange={handleRangeChange} />
    </StyledFilterGroup>
  );
};

FilterGroup.propTypes = {
  setSelectedBrand: PropTypes.func.isRequired,
  setSelectedPrice: PropTypes.func.isRequired,
  setMileageRange: PropTypes.func.isRequired,
};

export default FilterGroup;
