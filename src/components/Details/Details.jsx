import { images } from 'assets/images';
import { Item, Model } from 'components/Card/Card.styled';
import React from 'react';
import { getCity, getCountry } from 'utils/splitAddress';
import splitRentalConditions from 'utils/splitRentalConditions';
import { Conditions, ConditionsItem, ImageWrapper, Subtitle, Description, StyledList, Title, Image } from './Details.styled';
import { RentalButton } from 'components/UI/Button/Button.styled';

const Details = item => {
  console.log(item);
  const {
    img,
    model,
    make,
    type,
    year,
    address,
    accessories,
    functionalities,
    mileage,
    rentalConditions,
    rentalPrice,
    id,
    fuelConsumption,
    engineSize,
    description

  } = item;

  const city = getCity(address);
  const country = getCountry(address);
  const formattedMileage = mileage.toLocaleString('en-US');
  const rentalConditionsArray = splitRentalConditions(rentalConditions);
  const pathToImage = img || images.placeholder;

  return (
    <div>
      <ImageWrapper>
        <Image src={pathToImage} alt={model} />
      </ImageWrapper>

      <Title>
        {`${make} `} <Model>{model}</Model>
        {`, ${year}`}
      </Title>

      <StyledList>
        <Item>{city}</Item>
        <Item>{country}</Item>
        <Item>Id: {id}</Item>
        <Item>Year: {year}</Item>
        <Item>Type: {type}</Item>
      </StyledList>

      <StyledList>
        <Item>Fuel Consumption: {fuelConsumption}</Item>
        <Item>Engine Size: {engineSize}</Item>
      </StyledList>

      <Description>{description}</Description>

      <Subtitle>Accessories and functionalities:</Subtitle>
      <StyledList>
        <Item>{accessories[0]}</Item>
        <Item>{accessories[1]}</Item>
        <Item>{accessories[2]}</Item>
      </StyledList>
      <StyledList>
        <Item>{functionalities[0]}</Item>
        <Item>{functionalities[1]}</Item>
        <Item>{functionalities[2]}</Item>
      </StyledList>


      <Subtitle>Rental Conditions: </Subtitle>
      <Conditions>
        <ConditionsItem>{rentalConditionsArray[0]}</ConditionsItem>
        <ConditionsItem>{rentalConditionsArray[1]}</ConditionsItem>
        <ConditionsItem>{rentalConditionsArray[2]}</ConditionsItem>
        <ConditionsItem>Mileage: {formattedMileage}</ConditionsItem>
        <ConditionsItem>Price: {rentalPrice}</ConditionsItem>
      </Conditions>
      <RentalButton href="tel:+380730000000">Rental car</RentalButton>
    </div>
  );
};

export default Details;