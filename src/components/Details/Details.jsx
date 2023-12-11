import PropTypes from "prop-types";
import { images } from "assets/images";
import { ErrorImage, Item, Model } from "components/Card/Card.styled";
import { getCity, getCountry } from "utils/splitAddress";
import splitRentalConditions, { getAge } from "utils/handleRentalConditions";
import {
  Conditions,
  ConditionsItem,
  ImageWrapper,
  Subtitle,
  Description,
  StyledList,
  Title,
  Image,
  AccentedText,
} from "./Details.styled";
import { RentalButton } from "components/UI/Button/Button.styled";
import { useState } from "react";

const Details = (item) => {
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
    description,
  } = item;
  const [imageError, setImageError] = useState(false);

  const city = getCity(address);
  const country = getCountry(address);
  const formattedMileage = mileage.toLocaleString("en-US");
  const rentalConditionsArray = splitRentalConditions(rentalConditions);
  const pathToImage = img || images.placeholder;
  const age = getAge(rentalConditions);
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div>
      <ImageWrapper>
        {imageError ? (
          <ErrorImage>Error loading image from server</ErrorImage>
        ) : (
          <Image src={pathToImage} alt={model} onError={handleImageError} />
        )}
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
        <ConditionsItem>
          Minimum age : <AccentedText>{age}</AccentedText>
        </ConditionsItem>
        <ConditionsItem>{rentalConditionsArray[1]}</ConditionsItem>
      </Conditions>
      <Conditions>
        <ConditionsItem>{rentalConditionsArray[2]}</ConditionsItem>
        <ConditionsItem>
          Mileage: <AccentedText>{formattedMileage}</AccentedText>
        </ConditionsItem>
        <ConditionsItem>
          Price: <AccentedText>{rentalPrice}</AccentedText>
        </ConditionsItem>
      </Conditions>
      <RentalButton href="tel:+380730000000">Rental car</RentalButton>
    </div>
  );
};

Details.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    model: PropTypes.string,
    make: PropTypes.string,
    year: PropTypes.number,
    address: PropTypes.string,
    rentalCompany: PropTypes.string,
    accessories: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
    mileage: PropTypes.number,
    rentalPrice: PropTypes.number,
  }),
};

export default Details;
