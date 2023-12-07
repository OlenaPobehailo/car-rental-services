import styled from 'styled-components';
import theme from 'styles/theme';

console.log(theme);
const { colors } = theme;

export const ButtonStyled = styled.button`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;

  border-radius: 12px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  color: ${({ theme: { color } }) => colors.background.primary};
  background-color: ${({ theme: { accent } }) => colors.accent.primary};
  border: none;

  &:hover {
    background-color: ${({ theme: { accent } }) => colors.accent.secondary};
  }
`;

export const LoadMoreButton = styled(ButtonStyled)`
  display: inline-block;
  margin-right: auto;
  margin-left: auto;

  background-color: transparent;
  color: ${({ theme: { accent } }) => colors.accent.primary};

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;

  &:hover {
    background-color: transparent;
    color: ${({ theme: { accent } }) => colors.accent.secondary};
  }
`;

export const RentalButton = styled.a`
  display: inline-block;
  width: inherit;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;





  padding-top: 12px;
  padding-bottom: 12px;

  border-radius: 12px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  color: ${({ theme: { color } }) => colors.background.primary};
  background-color: ${({ theme: { accent } }) => colors.accent.primary};
  border: none;

  &:hover {
    background-color: ${({ theme: { accent } }) => colors.accent.secondary};
  }
`;
