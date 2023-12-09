import React, { useState } from 'react';
import { FlexWrapper, InputFrom, InputTo, InputWrapper } from './MileageFilter.styled';
import { Title } from '../FilterGroup.styled';

const MileageFilter = ({ onMileageRanceChange }) => {
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const handleMinMileageChange = e => {
    setMinMileage(e.target.value);
    onMileageRanceChange({ minMileage: e.target.value, maxMileage });
  };

  const handleMaxMileageChange = e => {
    setMaxMileage(e.target.value);
    onMileageRanceChange({ minMileage, maxMileage: e.target.value });
  };

  return (
    <>
      <Title>Сar mileage / km</Title>
      <FlexWrapper>
        <InputWrapper>
          <label htmlFor="minMileage">From</label>
          <InputFrom
            type="number"
            id="minMileage"
            value={minMileage}
            onChange={handleMinMileageChange}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="maxMileage">To</label>
          <InputTo
            type="number"
            id="maxMileage"
            value={maxMileage}
            onChange={handleMaxMileageChange}
          />
        </InputWrapper>
      </FlexWrapper>
    </>
  );
};

export default MileageFilter;
