import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Option,
  OptionsContainer,
  SelectButton,
  SelectTitle,
  StyledSelect,
} from "./CustomSelect.styled";
import { ChevronIcon } from "assets/images";

const CustomSelect = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectRef = useRef(null);

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <StyledSelect ref={selectRef} title={title}>
      <SelectTitle>
        <span>{selectedOption || title}</span>
        <SelectButton>
          <ChevronIcon onClick={toggleOptions} />
        </SelectButton>
      </SelectTitle>
      {isOpen && (
        <OptionsContainer>
          <Option key="all" onClick={() => handleOptionClick(null)}>
            All
          </Option>

          {options.map((option) => (
            <Option key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </StyledSelect>
  );
};

CustomSelect.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CustomSelect;
