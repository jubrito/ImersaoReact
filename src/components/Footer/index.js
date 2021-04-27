import styled from 'styled-components';

const FooterBox = styled.footer`
  position: absolute;
  bottom:-16vh;
  margin-top: 20px;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  /* border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius}; */
  text-align: center;
  z-index: 10;
  p,a,a:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  p {
    margin: 5px;
    padding: 5px;
    font-size: 10px;
  }
  div {
    left: 0px;
    // Ipad Pro
    @media screen and (min-width: 769px) and (max-width: 1024px) {
      height: 350px !important;
    }
    // Ipad
    @media screen and (min-width: 521px) and (max-width: 768px) {
      height: 50px !important;
      bottom: 30px !important;
    }
    // Surface Duo
    @media screen and (min-width: 411px) and (max-width: 520px) {
      bottom: 28px !important;
      height: 120px !important;
    }
    /* // Iphone X
    @media screen and (min-width: 376px) and (max-width: 410px) {
      bottom: 42px !important;
      height: 360px !important;
    } */
    // Motog4
    @media screen and (min-width: 376px) and (max-width: 410px) {
      bottom: 42px !important;
      height: 170px !important;
    }
    // Iphone
    @media screen and (min-width: 361px) and (max-width: 375px) {
      bottom: 42px !important;
      height: 200px !important;
    }
    // Iphone SE
    @media screen and (min-width: 280px) and (max-width: 320px) {
      bottom: 42px !important;
      height: 100px !important;
    }
    // Galaxy fold & motog4
    @media screen and (min-width: 280px) and (max-width: 319px) {
      bottom: 42px !important;
      height: 140px !important;
    }
  }
  // Ipad Pro
  @media screen and (max-width: 1024px) {
    bottom: -10vh;
  }
  // Surface Duo
  @media screen and (max-width: 540px) {
    font-size: 12px;
    padding: 0 5px;
    bottom: -100%;
  }
  // Iphone
  @media screen and (max-width: 376px) {
    bottom: -102%;
  }
  // Iphone SE
  @media screen and (max-width: 376px) {
    bottom: -112%;
  }
`;

export default FooterBox;
