import styled from 'styled-components'
import db from "../db.json";
import Widget from "../src/components/Widget";
import Footer from "../src/components/Footer";
import QuizBackGround from "../src/components/QuizBackground";
import GitHubCorner from "../src/components/GitHubCorner";

// Sem o Styled-Components
// function Title(props) {
//   return (
//     // .children: podemos ter um ou mais elementos filhos carregando dentro da tag
//     <h1>{props.children}</h1>
//   )
// }
// Com o Styled-Components conseguimos criar uma variável passando o style de maneira dinâmica
// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
//   background-color: ${({ theme }) => {
//   return theme.colors.primary
// }};
// `


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    // Ao invés de fazer assim abaixo, criamos o componente com o style do background
    // <div style={{ backgroundImage: `url (${db.bg})` }}>
    <QuizBackGround backgroundImage={db.backgroundImage}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Experiência do Usuário</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner/>
    </QuizBackGround>
  )
}
