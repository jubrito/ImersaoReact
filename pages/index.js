import React, { useState } from 'react';
// import styled from 'styled-components';
import Head from 'next/head'; // Componente que permite colocarmos informações no head da página
import { useRouter } from 'next/router';
// Configurado via objetos js, animações na montagem do componente
// motion é uma abstração pras tags do html que iremos animar
import { motion } from 'framer-motion';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Link from '../src/components/Link';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import parse from "html-react-parser";

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

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  function submitForm(event) {
    event.preventDefault(); // impede o recarregamento da página que viola o SPA
    /*  # QUERY PARAM: Parâmetros que vem na própria rota opcionais para filtros, paginação,
      passar informações pra outra rota
      Insomnia: http://localhost:3000/users?search=ar (Buscando users que contenham "ar")
      http://localhost:3000/quiz?name=Juliana (Passando a informação do nome para a rota Quiz) */
    router.push(`/quiz?name=${name}`);
  }

  return (
    // Ao invés de fazer assim abaixo, criamos o componente com o style do background
    // <div style={{ backgroundImage: `url (${db.bg})` }}>
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
        <meta property="og:title" content={db.title} key="title" />
        <meta property="og:image" content={db.backgroundImage} />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          // delay quanto tempo espera pra começar e duração em s
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            // o elemento terá estados de animação
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{parse(db.description)}</p>
            <form onSubmit={(changeEvent) => submitForm(changeEvent)}>
              <Input
                name="nomeDoUsuario"
                onChange={(changeEvent) => setName(changeEvent.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Clique aqui para jogar ${name} :)`}
              </Button>
            </form>
          </Widget.Content>

        </Widget>
        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            // o elemento terá estados de animação
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          {/* <Widget.Content>
            <h1>Quizes da Galera</h1>

            <ul>
              {db.external.map((externalQuizLink) => {
                const [projectName, gitHubUser] = externalQuizLink
                  .replace(/\//g, '')
                  .replace(/https?:/, '')
                  .replace('.vercel.app', '')
                  .split('.');
                return (
                  <li key={externalQuizLink}>
                    <Widget.Topic
                      as={Link} // Renderiza como componente link (para garantir SPA)
                      href={`/quiz/${projectName}___${gitHubUser}`}
                    >
                      {`${gitHubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content> */}
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            // o elemento terá estados de animação
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jubrito/uxuiquiz"/>
    </QuizBackground>
  );
}
