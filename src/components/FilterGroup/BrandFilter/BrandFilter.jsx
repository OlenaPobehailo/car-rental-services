import brandData from 'assets/data/makes.json';
import CustomSelect from 'components/UI/Select/CustomSelect';
import { Title } from '../FilterGroup.styled';
import { FilterWrapper } from './BrandFilter.styled';

const BrandFilter = ({ onBrandSelect, title }) => {
  const handleSelect = selectedOption => {
    onBrandSelect(selectedOption);
  };

  return (
    <FilterWrapper>
      <Title>{title}</Title>
      <CustomSelect
        title={'Enter the text'}
        options={brandData.brands}
        onSelect={handleSelect}
        maxHeight="274px"
      />
    </FilterWrapper>
  );
};

export default BrandFilter;
