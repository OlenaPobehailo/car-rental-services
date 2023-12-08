import { HeartIcon } from 'assets/images';
import styled from 'styled-components';

export const StyledCard = styled.li`
  position: relative;
  width: 274px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 14px;

  /* flex-basis: calc(100% - 30px); */

  @media screen and (min-width: 768px) {
    /* flex-basis: calc((100% - 30px) / 2); */
  }

  @media screen and (min-width: 1200px) {
    /* flex-basis: calc((100% - 90px) / 4); */
  }

  transition: scale 0.3s, box-shadow 0.3s;

  &:hover {
    scale: 1.05;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ImageWrapper = styled.div`
  height: 268px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(18, 20, 23, 0.5) 2.5%, rgba(18, 20, 23, 0) 41.07%),
    url(<path-to-image>), lightgray 50% / cover no-repeat;
/* 
    & ::before{
      content:"test"
    } */
`;

export const Image = styled.img`
  width: 100%;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;

  object-fit: cover;
`;


export const Description = styled.p`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Model = styled.span`
  color: #3470ff;
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
    padding-left: 5px;
  }

  &:not(:last-child) {
    padding-right: 5px;
  }

  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;
  line-height: 1.5;

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
`;

export const ButtonFavorite = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;
`;

export const StyledHeartIcon = styled(({ isFavorite, ...rest }) => <HeartIcon {...rest} />)`
  stroke: ${({ isFavorite }) => (isFavorite ? 'rgba(52, 112, 255, 1)' : 'rgba(255, 255, 255, 0.8)')};
  fill: ${({ isFavorite }) => (isFavorite ? 'rgba(52, 112, 255, 1)' : 'none')};
`;
