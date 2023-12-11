import styled from "styled-components";
import { images } from "../../assets/images/index";

export const StyledHomePage = styled.div`
  position: relative;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.8),
    rgba(224, 236, 255, 0.8)
  );

  &::after {
    content: "";
    background: url(${images.car});
    background-size: 50%;
    background-position: 100% 75%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 24px;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 16px;
  line-height: 1.5;
`;

export const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 50px;
`;

export const FeatureItem = styled.li`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 18px;
  margin-bottom: 10px;
`;
