import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

  > div {
    display: flex;
    align-items: center;
    padding-left: 1rem;


    img {
      width: 45px;
    }

    h1 {
      position: relative;
      color: ${({ theme }) => theme.primary};
      align-items: center;
      text-align: center;
      padding-left: 1rem;
      font-size: 2.5rem;
    }
  }


  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
    props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${props =>
    props.isActive
      ? lighten(0.2, props.theme.primary)
      : lighten(0.2, props.theme.textHighlight)};
    }
  }
`;
