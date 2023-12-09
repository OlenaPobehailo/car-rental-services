import brandData from 'assets/data/makes.json';
import CustomSelect from 'components/UI/Select/CustomSelect';
import { Title } from '../FilterGroup.styled';

const BrandFilter = ({ onBrandSelect, title }) => {
  const handleSelect = selectedOption => {
    // console.log('Selected option:', selectedOption);
    onBrandSelect(selectedOption);
  };

  return (
    <div>
      <Title>{title}</Title>
      <CustomSelect options={brandData.brands} onSelect={handleSelect} />
    </div>
  );
};

export default BrandFilter;
