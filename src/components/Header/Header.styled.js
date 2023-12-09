import styled from 'styled-components';

export const StyledHeader = styled.ul`
  margin-bottom: 35px;
  background-color: #e0ecff;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

export const StyledNavLink = styled.li`
  padding: 20px 10px;
  margin: 0 10px;

  font-size: 24px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
  
`;
