import { styled } from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;

  justify-content: space-around;
  align-items: center;

  .link {
    display: inline-block;
    text-decoration: none;
    color: #2a363b;
    padding: 12px;
    font-weight: 500;
    font-size: 18px;
  }

  .activeLink {
    display: inline-block;
    padding: 12px;

    font-weight: 500;
    font-size: 18px;
    composes: link;
    text-decoration: none;
    color: #2196f3;
  }
`;
