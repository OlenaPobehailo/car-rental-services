import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "styles/theme";

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const NotFoundTitle = styled.h1`
  font-size: 36px;
  color: #ff5733;
  margin-bottom: 20px;

  color: ${theme.colors.accent.primary};
`;

export const NotFoundMessage = styled.p`
  font-size: 18px;
  color: ${theme.colors.accent.secondary};
  margin-bottom: 40px;
`;

export const StyledLink = styled(Link)`
  color: ${theme.colors.accent.secondary};

  font-size: 36px;
  font-weight: 900;

  &:hover {
    color: ${theme.colors.accent.primary};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;
