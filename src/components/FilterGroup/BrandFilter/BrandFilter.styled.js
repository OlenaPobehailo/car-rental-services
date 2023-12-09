import styled from 'styled-components';

export const BrandLabel = styled.label`
  display: block;
  margin-bottom: 8px;  // Add margin for spacing
`;

export const BrandSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  appearance: none;  // Remove default styling
  position: relative;

  &::after {
    content: '\25BC';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

export const StyledOption = styled.option`
  background-color: #fff;
  color: #333;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

