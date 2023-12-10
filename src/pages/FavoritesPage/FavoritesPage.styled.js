import styled from "styled-components";
import theme from "styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const Title = styled.h2`
  font-size: 36px;
  color: #ff5733;
  margin-bottom: 20px;

  color: ${theme.colors.accent.primary};
`;
