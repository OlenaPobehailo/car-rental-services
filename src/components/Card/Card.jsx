import Button from 'components/UI/Button';
import { Description, Image, Item, StyledCard, StyledList } from './Card.styled';
import { images } from 'assets/images';
import { getCity, getCountry } from 'utils/splitAddress';
import { isPremium } from 'utils/isPremium';

const Card = ({ model, make, year, address, rentalCompany, accessories, type, mileage, rentalPrice
}) => {
  const city = getCity(address);
  const country = getCountry(address);
  const premium = isPremium(accessories);

  return (
    <StyledCard>
      <Image src={images.placeholder} alt="" />

      <Description>
        <span>{`${make} ${model}, ${year}`}</span>
        <span>{`${rentalPrice}`}</span>
      </Description>

      <StyledList>
        <Item>{city}</Item>
        <Item>{country}</Item>
        <Item>{rentalCompany}</Item>
        <Item>{premium ? 'Premium' : null}</Item>
      </StyledList>
      <StyledList>
        <Item>{type}</Item>
        <Item>{make}</Item>
        <Item>{mileage}</Item>
        <Item>{accessories[0]}</Item>
      </StyledList>

      <Button>Learn more</Button>
    </StyledCard>
  );
};

export default Card;
