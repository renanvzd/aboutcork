import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 15% 85%;
  height: 5rem;
  background-color: ${({ theme }) => theme.background};
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

  .barMenu {
    display: none;
  }

  > nav {

      ul {
        display: flex;
        gap: 2rem;
        justify-content: center;
      }
  }

  @media(max-width: 900px) {
    display: flex;
    justify-content: space-between;

    > nav {


      .barMenu {
        display: flex;
        width: 50px;
        margin-right: 35px;
      }

        .menubar {

          ul {
            display: none;
          }
    }
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
