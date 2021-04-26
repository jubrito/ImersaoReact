import styled from 'styled-components';

const FooterBox = styled.footer`
  position: absolute;
  bottom:-1px;
  margin-top: 20px;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  z-index: 10;
  p,a,a:hover {
    color: ${({ theme }) => theme.colors.black};
  }
  // Surface Duo
  @media screen and (max-width: 540px) {
    font-size: 12px;
    padding: 0 5px;
  }
`;

export default FooterBox;
