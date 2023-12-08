import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader, StyledNav, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledNavLink>
          <NavLink to="/">Home</NavLink>
        </StyledNavLink>
        <StyledNavLink>
          <NavLink to="catalog">Catalog</NavLink>
        </StyledNavLink>
        <StyledNavLink>
          <NavLink to="favorites">Favorites</NavLink>
        </StyledNavLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
