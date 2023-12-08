import styled from 'styled-components';

export const StyledList = styled.ul`
margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

    gap: 29px;

    margin-bottom: 100px;


  }
`;
