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
  height: 4.54rem;
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


  > nav {
    .barMenu {
      display: none;
    }

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

      .navMenu {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            position: fixed;
            top: 0;
            right: 40%;
            transition: 1000ms;
            z-index: 1;
          }

      .navMenuActive {
         right: 0%;
         transition: transform 0.3s ease-in;
       }

          .listItems {
            display: flex;
            ul {
              justify-content: normal;
              padding-top: 2.5rem;
              flex-direction: column;
              align-items: center;
              position: absolute;
              top: 8.3vh;
              right: 0%;
              width: 40%;
              height: 50rem;
              background-color: ${({ theme }) => theme.backgroundLight};
              transform: translateX(100%);
              transition: transform 0.3s ease-in ease-out;
              opacity: 0.85 ;

              li {
              display: flex;
              padding: 0;
              margin: 0;

              a {
                text-align: center;
                display: inline-block;
                position: relative;
                padding: 0rem 1rem;

                line-height: 5rem;

                font-size: 1.2rem;
                transition: color 0.2s;
              }
            }
          }
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
