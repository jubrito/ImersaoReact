import styled from 'styled-components';

// const BackgroundImage = styled.div`
//   background-color: #161a40;
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: initial;
//   background-position: right;
//   background-repeat: no-repeat;
//   height: 100vh; // ajusta ao tamanho da tela
// `

const QuizBackground = styled.div`
// "bg": "https://images.unsplash.com/photo-1589519160732-57fc498494f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  transition: 0.3s;
  width: 100%;
  background-size: contain;
  background-position: left;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.white};
  background-repeat: no-repeat;
  /* padding-bottom: 50px; */
  min-height: 110vh;
  position: relative;
  flex: 1;
  @media screen and (max-width: 1082px) {
  background-size: cover;
  }
  // Ipad Pro
  @media screen and (max-width: 1024px) {
    background-position: top;
  }
  // Ipad
  @media screen and (max-width: 768px) {
    background-image: url(${({ backgroundImageResponsive }) => backgroundImageResponsive});
  }
  // Iphone
  @media screen and (max-width: 376px) {
    min-height: 160vh;
  }
`;

export default QuizBackground;
