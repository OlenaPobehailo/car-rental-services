import { StyledHeader, StyledLinkList, StyledNavLink } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLinkList>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </li>
      </StyledLinkList>
    </StyledHeader>
  );
};

export default Header;
