import PropTypes from "prop-types";
import { Title } from "../FilterGroup.styled";
import CustomSelect from "components/UI/Select/CustomSelect";
import { priceData } from "assets/data/priceData";

const PriceFilter = ({ title, onPriceSelect }) => {
  // console.log(priceData);

  const handlePriceSelect = (selectedOption) => {
    // console.log(selectedOption);
    onPriceSelect(selectedOption);
  };

  return (
    <div>
      <Title>{title}</Title>
      <CustomSelect
        title={"To $"}
        options={priceData}
        onSelect={handlePriceSelect}
      />
    </div>
  );
};

PriceFilter.propTypes = {
  title: PropTypes.string.isRequired,
  onPriceSelect: PropTypes.func.isRequired,
};

export default PriceFilter;