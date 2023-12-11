import styled from 'styled-components';

export const Conditions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  line-height: 105px;
`;

export const ConditionsItem = styled.li`
  padding: 7px 14px;
  margin-bottom: 15px;
  border-radius: 35px;

  background: #f9f9f9;
  color: #363535;
  font-size: 12px;
  line-height: 1.5;
`;

export const ImageWrapper = styled.div`
  width: 461px;
  height: 248px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  border-radius: 14px;

`;

export const Title = styled.p`
  margin-bottom: 8px;

  color: #121417;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  &:last-of-type {
    margin-bottom: 14px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 8px;
  margin-top: 24px;

  color: #121417;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const Description = styled.p`
  margin-top: 14px;

  color: #121417;

  font-size: 14px;
  line-height: 1.43;
`;
