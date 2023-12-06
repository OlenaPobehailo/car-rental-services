import styled from 'styled-components';

export const StyledCommonWrapper = styled.div`
  min-width: 320px;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }

  outline: 1px solid salmon;   //!  TO DELETE
`;
