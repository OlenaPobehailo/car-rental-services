import styled from 'styled-components';

export const StyledCard = styled.li`
  flex-basis: calc(100% - 30px);

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 30px) / 2);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 90px) / 4);
  }

  outline: 1px solid green;
`;

export const Image = styled.img`
  width: 401px;
  margin-bottom: 14px;
`;

export const Description = styled.p`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;

  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  &:last-of-type {
    margin-bottom: 28px;
  }
`;

export const Item = styled.li`
  padding: 0;

  &:not(:first-child) {
    padding-left: 6px;
  }

  &:not(:last-child) {
    padding-right: 6px;
  }

  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;
  line-height: 1.5;

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
`;
