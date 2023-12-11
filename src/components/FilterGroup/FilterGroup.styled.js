import styled from "styled-components";

export const StyledFilterGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const Title = styled.p`
  color: #8a8a89;

  font-size: 10px;
  font-weight: 400;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
  }
`;
