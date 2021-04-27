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
    pading: 5px;
  }
  // Ipad
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
