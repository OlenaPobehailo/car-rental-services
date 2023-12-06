const { default: styled } = require("styled-components");

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 36px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 16px;
  line-height: 1.5;
`;

