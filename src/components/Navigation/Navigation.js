import { NavLink } from 'react-router-dom';
import { StyledNavigation } from './Navigation.styled';

export const Navigation = () => {
  return (
    <StyledNavigation>
      <NavLink
        to="/"
        className={(link) => (link.isActive ? 'activeLink' : 'link')}
      >
        Main
      </NavLink>
      <NavLink
        to="/authors"
        className={(link) => (link.isActive ? 'activeLink' : 'link')}
      >
        Authors
      </NavLink>
      <NavLink
        to="/books"
        className={(link) => (link.isActive ? 'activeLink' : 'link')}
      >
        Books
      </NavLink>
    </StyledNavigation>
  );
};
