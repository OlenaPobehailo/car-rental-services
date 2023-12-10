import { images } from "assets/images";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectFavorites } from "../../redux/favorites/selectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/slice";
import { isPremium } from "utils/isPremium";
import { getCity, getCountry } from "utils/splitAddress";
import {
  ButtonFavorite,
  Description,
  Image,
  ImageWrapper,
  Item,
  Model,
  StyledCard,
  StyledHeartIcon,
  StyledList,
  ErrorImage,
} from "./Card.styled";
import Button from "components/UI/Button";
import Modal from "components/UI/Modal";
import Details from "components/Details";

const Card = (item) => {
  const {
    id,
    img,
    model,
    make,
    year,
    address,
    rentalCompany,
    accessories,
    type,
    mileage,
    rentalPrice,
  } = item;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const dispatch = useDispatch();

  const city = getCity(address);
  const country = getCountry(address);
  const premium = isPremium(accessories);
  const formattedMileage = mileage.toLocaleString("en-US");

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((item) => item.id === id);

  const pathToImage = img || images.placeholder;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ ...item }));
    } else {
      dispatch(addToFavorites({ ...item }));
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <StyledCard>
      <ImageWrapper>
        {imageError ? (
          <ErrorImage>Error loading image</ErrorImage>
        ) : (
          <Image
            src={pathToImage}
            alt={`${make} } ${model}`}
            onError={handleImageError}
          />
        )}
      </ImageWrapper>

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
        <Item>{premium ? "Premium" : null}</Item>
      </StyledList>
      <StyledList>
        <Item>{type}</Item>
        <Item>{make}</Item>
        <Item>{formattedMileage}</Item>
        <Item>{accessories[0]}</Item>
      </StyledList>

      <Button onClick={openModal}>Learn more</Button>

      <ButtonFavorite onClick={toggleFavorite}>
        <StyledHeartIcon isFavorite={isFavorite} />
      </ButtonFavorite>

      {isModalOpen && (
        <Modal close={closeModal}>
          <Details {...item} />
        </Modal>
      )}
    </StyledCard>
  );
};

Card.propTypes = {
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
  rentalPrice: PropTypes.string,
};

export default Card;
