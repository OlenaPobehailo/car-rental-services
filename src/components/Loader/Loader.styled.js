import styled from "styled-components";
import theme from "styles/theme";

const { colors } = theme;
const { accent } = colors;
const { primary } = accent;

console.log("primary", primary);

export const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
