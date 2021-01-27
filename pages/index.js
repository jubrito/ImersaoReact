import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Head from 'next/head'; // Componente que permite colocarmos informações no head da página
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';

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
  const router = useRouter();
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log(gender);
  }, [gender])
  
  useEffect(() => {
    console.log(age);
  }, [age])
  
  function submitForm(event){
    event.preventDefault(); // impede o recarregamento da página que viola o SPA
    /*  # QUERY PARAM: Parâmetros que vem na própria rota opcionais para filtros, paginação, passar informações pra outra rota
      Insomnia: http://localhost:3000/users?search=ar (Buscando users que contenham "ar")   
      http://localhost:3000/quiz?name=Juliana (Passando a informação do nome para a rota Quiz) */
    router.push(`/quiz?name=${name}&age=${age}&gender=${gender}`); 
  }

  function handleRadioChange(changeEvent) {
    setGender(changeEvent.target.value);
  }

  function handleAgeChange(changeEvent) {
    setAge(changeEvent.target.value);
  }

  function handleNameChange(changeEvent) {
    setName(changeEvent.target.value);
  }
  return (
    // Ao invés de fazer assim abaixo, criamos o componente com o style do background
    // <div style={{ backgroundImage: `url (${db.bg})` }}>
    <QuizBackground backgroundImage={db.backgroundImage}>
      <Head>
        <title>Quiz - Experiência do Usuário</title>
        <meta property="og:title" content="Quiz - Experiência do Usuário" key="title" />
        <meta property="og:image" content={db.backgroundImage} />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quiz - Experiência do Usuário</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => submitForm(event)}>
              <div className="mainInformations">
                <div className="mainInformations__item">
                  <p>What's your name?</p>
                  <input placeholder="Ex: Juliana Witzke de Brito" id="name" onChange={(event) => handleNameChange(event)}/>
                </div>
              </div>
              <div className="mainInformations">
                <div className="mainInformations__item">
                  <p>Please select your gender:</p>
                  <label htmlFor="male" className="inputRadio">
                    <input type="radio" id="male" name="gender" value="male" onChange={(event) => handleRadioChange(event)}/>
                    Male
                  </label>
                  <label htmlFor="female" className="inputRadio">
                    <input type="radio" id="female" name="gender" value="female" onChange={(event) => handleRadioChange(event)}/>
                    Female
                  </label>
                  <label htmlFor="other" className="inputRadio">
                    <input type="radio" id="other" name="gender" value="other" onChange={(event) => handleRadioChange(event)}/>
                    Other
                  </label>
                </div>
              </div>
              <div className="mainInformations">
                <div className="mainInformations__item">
                  <p>How old are you?</p>
                  <select id="age" onChange={(event) => handleAgeChange(event)}>
                    <option value="1">Under 18</option>
                    <option value="2">18-25</option>
                    <option value="3">26-30</option>
                    <option value="4">31-50</option>
                    <option value="5">51-70</option>
                    <option value="6">70 and over</option>
                  </select>
                </div>
              </div>
              <button type="submit" disabled={gender.length == 0 || age == 0 }>Participate</button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
