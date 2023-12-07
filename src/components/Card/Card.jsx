import { useState } from 'react';
import Button from 'components/UI/Button';
import { images } from 'assets/images';
import { getCity, getCountry } from 'utils/splitAddress';
import { isPremium } from 'utils/isPremium';
import { Description, Image, Item, Model, StyledCard, StyledList } from './Card.styled';
import Modal from '../UI/Modal/Modal';
import Details from '../Details/Details';

const Card = (item) => {
  
  const {img,
  model,
  make,
  year,
  address,
  rentalCompany,
  accessories,
  type,
  mileage,
  rentalPrice,} = item;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const city = getCity(address);
  const country = getCountry(address);
  const premium = isPremium(accessories);
  const formattedMileage = mileage.toLocaleString('en-US');

  const pathToImage = img || images.placeholder;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledCard>
      <Image src={pathToImage} alt="" />

      <Description>
        <span>
          {`${make} `} <Model>{model}</Model>
          {`, ${year}`}
        </span>
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
        <Item>{formattedMileage}</Item>
        <Item>{accessories[0]}</Item>
      </StyledList>

      <Button onClick={openModal}>Learn more</Button>

      {isModalOpen && <Modal close={closeModal}>
        <Details {...item}/>
        </Modal>}
    </StyledCard>
  );
};

export default Card;
