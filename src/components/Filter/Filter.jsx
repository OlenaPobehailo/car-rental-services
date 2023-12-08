import brandData from 'assets/data/makes.json';
import CustomSelect from 'components/UI/Select/CustomSelect';

const Filter = () => {
  console.log(brandData);

  const handleSelect = selectedOption => {
    console.log('Selected option:', selectedOption);
  };

  return (
    <div>
      <CustomSelect options={brandData.brands} onSelect={handleSelect} />
      {/* <BrandLabel htmlFor="brandSelect">Car brand</BrandLabel>

      <BrandSelect id="brandSelect">
        <StyledOption value="">Enter the text</StyledOption>
        {brandData.brands.map((brand, index) => (
          <StyledOption key={index} value={brand}>
            {brand}
          </StyledOption>
        ))}
      </BrandSelect> */}
    </div>
  );
};

export default Filter;
