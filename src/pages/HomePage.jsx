import { StyledCommonWrapper } from "styles/Common.styled";
import {
  Description,
  FeatureItem,
  FeaturesList,
  StyledHomePage,
  Subtitle,
  Title,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <StyledHomePage>
      <StyledCommonWrapper>
        <Title>Welcome to Car Rental Services</Title>

        <Subtitle>
          Kyiv, Lviv, Dnipro, Odesa, Kharkiv, Vinnytsia, Zaporizhzhia
        </Subtitle>
        <Description>
          Discover the joy of hassle-free car rental services in Ukraine with
          Car Rental Services. We strive to make your travel experience seamless
          and enjoyable by offering a diverse range of vehicles to suit your
          needs.
        </Description>

        <FeaturesList>
          <FeatureItem>Wide selection of high-quality vehicles</FeatureItem>
          <FeatureItem>Flexible rental options for every occasion</FeatureItem>
          <FeatureItem>Transparent pricing with no hidden fees</FeatureItem>
        </FeaturesList>

        <Description>
          Whether you're planning a family trip, a business meeting, or a
          weekend getaway, Car Rental Services has the perfect vehicle for you.
          Explore our catalog and find the ideal car that fits your style and
          requirements. Additionally, you can conveniently add your favorite
          vehicles to your list of favorites, making it easier to revisit and
          compare your preferred options.
        </Description>
      </StyledCommonWrapper>
    </StyledHomePage>
  );
};

export default HomePage;
