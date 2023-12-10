import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  &.with-top-margin {
    margin-top: 50px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

    gap: 29px;

    margin-bottom: 100px;
  }
`;

export const HiddenTitle = styled.h1`
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
