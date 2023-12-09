import { StyledHeader, StyledNav, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
