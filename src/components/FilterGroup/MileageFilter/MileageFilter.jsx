import { useState } from "react";
import PropTypes from "prop-types";
import {
  FlexWrapper,
  InputFrom,
  InputTo,
  InputWrapper,
} from "./MileageFilter.styled";
import { Title } from "../FilterGroup.styled";

const MileageFilter = ({ onMileageRanceChange }) => {
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const handleMinMileageChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setMinMileage(value);
    onMileageRanceChange({ minMileage: value, maxMileage });
  };

  const handleMaxMileageChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setMaxMileage(value);
    onMileageRanceChange({ minMileage, maxMileage: value });
  };

  return (
    <div>
      <Title>Сar mileage / km</Title>
      <FlexWrapper>
        <InputWrapper>
          <label htmlFor="minMileage">From</label>
          <InputFrom
            type="text"
            id="minMileage"
            value={
              minMileage !== ""
                ? parseInt(minMileage).toLocaleString("en-US")
                : ""
            }
            onChange={handleMinMileageChange}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="maxMileage">To</label>
          <InputTo
            type="text"
            id="maxMileage"
            value={
              maxMileage !== ""
                ? parseInt(maxMileage).toLocaleString("en-US")
                : ""
            }
            onChange={handleMaxMileageChange}
          />
        </InputWrapper>
      </FlexWrapper>
    </div>
  );
};

MileageFilter.propTypes = {
  onMileageRangeChange: PropTypes.func,
};

export default MileageFilter;
