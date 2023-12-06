import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

    gap: 29px;
  }
`;
