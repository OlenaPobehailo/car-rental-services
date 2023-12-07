import { images } from 'assets/images';
import { Item, Model, StyledList } from 'components/Card/Card.styled';
import React from 'react';
import { isPremium } from 'utils/isPremium';
import { getCity, getCountry } from 'utils/splitAddress';
import splitRentalConditions from 'utils/splitRentalConditions';
import { Conditions, ConditionsItem } from './Details.styled';
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
    rentalCompany,
    rentalConditions,
    rentalPrice,
  } = item;

  const city = getCity(address);
  const country = getCountry(address);
  const premium = isPremium(accessories);
  const formattedMileage = mileage.toLocaleString('en-US');
  const rentalConditionsArray = splitRentalConditions(rentalConditions);
  const pathToImage = img || images.placeholder;

  return (
    <div>
      <figure>
        <img src={pathToImage} alt={model} />
        <figcaption>
          {`${make} `} <Model>${model}</Model>
          {`, ${year}`}
        </figcaption>
      </figure>
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

      <p>Accessories and functionalities:</p>
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

      <p>Rental Conditions: </p>
      <Conditions>
        <ConditionsItem>{rentalConditionsArray[0]}</ConditionsItem>
        <ConditionsItem>{rentalConditionsArray[1]}</ConditionsItem>
        <ConditionsItem>{rentalConditionsArray[2]}</ConditionsItem>
        <ConditionsItem>Mileage: {mileage}</ConditionsItem>
        <ConditionsItem>Price: {rentalPrice}</ConditionsItem>
      </Conditions>

      <RentalButton href="tel:+380730000000">Rental car</RentalButton>
    </div>
  );
};

export default Details;
