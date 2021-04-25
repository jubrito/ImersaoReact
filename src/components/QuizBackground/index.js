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
  width: 100%;
  background-size: contain;
  background-position: left;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.white};
  background-repeat: no-repeat;
  /* padding-bottom: 50px; */
  min-height: 100vh;
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
    background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
