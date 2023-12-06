import React from 'react';
import { StyledCommonWrapper } from 'styles/Common.styled';
import { Description, Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <StyledCommonWrapper>
      <Title>Welcome to Car Rental Services</Title>
      <Description>
        Discover the joy of hassle-free car rental services in Ukraine with Car Rental Services. We
        strive to make your travel experience seamless and enjoyable by offering a diverse range of
        vehicles to suit your needs.
      </Description>
    </StyledCommonWrapper>
  );
};

export default HomePage;
