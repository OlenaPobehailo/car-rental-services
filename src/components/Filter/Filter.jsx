import brandData from 'assets/data/makes.json';
import CustomSelect from 'components/UI/Select/CustomSelect';

const Filter = ({ onBrandSelect }) => {
  const handleSelect = selectedOption => {
    // console.log('Selected option:', selectedOption);
    onBrandSelect(selectedOption);
  };

  return (
    <div>
      <CustomSelect options={brandData.brands} onSelect={handleSelect} />
    </div>
  );
};

export default Filter;
