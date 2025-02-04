import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 2.4rem 3.2rem;
  background-color: var(--color-background);
  box-shadow: var(--shadow-md);
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    font-size: 2.4rem;
  }
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    opacity: 0.6;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Nav>
        <StyledNavLink to="blog">Blog</StyledNavLink>

        <StyledNavLink to="panel">CMS edycji bloga</StyledNavLink>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
