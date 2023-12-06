import Button from 'components/UI/Button';
import { Description, Image, Item, StyledCard, StyledList } from './Card.styled';
import { images } from 'assets/images';

const Card = ({ model, make, year }) => {
  return (
    <StyledCard>
      <Image src={images.placeholder} alt="" />

      <Description>
        <span>{`${make} ${model}, ${year}`}</span>
        <span>$40</span>
      </Description>

      <StyledList>
        <Item>Kiev</Item>
        <Item>Ukraine</Item>
        <Item>Luxury Car Rentals</Item>
        <Item>Premium</Item>
      </StyledList>
      <StyledList>
        <Item>Suv</Item>
        <Item>Enclave</Item>
        <Item>9582</Item>
        <Item>Power liftgate</Item>
      </StyledList>

      <Button>Learn more</Button>
    </StyledCard>
  );
};

export default Card;
