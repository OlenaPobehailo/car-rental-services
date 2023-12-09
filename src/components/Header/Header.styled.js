import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.nav`
  margin-bottom: 35px;
  padding: 20px;

  background-color: #e0ecff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

`;

export const StyledLinkList = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 20px 10px;
  margin: 0 10px;

  font-size: 24px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    text-decoration: underline;
  }
`;
