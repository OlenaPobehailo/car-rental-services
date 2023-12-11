import PropTypes from "prop-types";
import CustomSelect from "components/UI/Select/CustomSelect";
import brandData from "assets/data/makes.json";
import { Title } from "../FilterGroup.styled";
import { FilterWrapper } from "./BrandFilter.styled";

const BrandFilter = ({ onBrandSelect, title }) => {
  const handleSelect = (selectedOption) => {
    onBrandSelect(selectedOption);
  };

  return (
    <FilterWrapper>
      <Title>{title}</Title>
      <CustomSelect
        title={"Enter the text"}
        options={brandData.brands}
        onSelect={handleSelect}
        maxHeight="274px"
        isPriceFilter={false}
      />
    </FilterWrapper>
  );
};

BrandFilter.propTypes = {
  onBrandSelect: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default BrandFilter;
