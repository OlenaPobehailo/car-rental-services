import PropTypes from "prop-types";
import CustomSelect from "components/UI/Select/CustomSelect";
import { priceData } from "assets/data/priceData";
import { Title } from "../FilterGroup.styled";

const PriceFilter = ({ title, onPriceSelect }) => {
  const handlePriceSelect = (selectedOption) => {
    onPriceSelect(selectedOption);
  };

  return (
    <div>
      <Title>{title}</Title>
      <CustomSelect
        title={"To $"}
        options={priceData}
        onSelect={handlePriceSelect}
        isPriceFilter={true}
      />
    </div>
  );
};

PriceFilter.propTypes = {
  title: PropTypes.string.isRequired,
  onPriceSelect: PropTypes.func.isRequired,
};

export default PriceFilter;
