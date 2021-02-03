/* eslint-disable linebreak-style */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';
// Todas as urls externas do projeto (external em db.json) carregaremos

// getServersideProps roda no servidor, monta no html c os dados que você retorna na chave props
export default function QuizDaGaleraPage({ externalDB }) {
  return (
    <div>
      <ThemeProvider theme={externalDB.theme}>
        <QuizScreen 
          externalQuestions={ externalDB.questions } 
          externalBg={ externalDB.bg } 
        />
      </ThemeProvider>
      {/* Dados do quiz
        <pre style={{color: 'black'}}>
            {JSON.stringify(props, null, 4)}
        </pre> */}
    </div>
  );
}

/* Pegar aplicações React gerando arquivos estáticos (React não faz essa pré-renderização)
O Next por padrão pré-renderiza todas as páginas, ao invés do js fazer do lado do cliente,
o next gera os htmls com o mínimo de js necessário para o React acontecer
Com esse código sempre que receber uma chamada direto nessa url via servidor a página vai
carregar um código que vai rodar do lado do back-end, a nível de servidor.

Next faz o mapeamento, pré-renderiza td oq precisamos, e manda do servidor (cdn, serviço da vercel)
disponibilizando pro cliente de forma performática  */

// getServerSide e outras funções como ela rodam no servidor, provendo conteúdos
// pro projeto sem fazer requests no cliente
export async function getServerSideProps(context) {
  // console.log('Infos que o Next fornece para nós (context.query)', context.query);
  // Chamada para pegar dados do servidor externo
  // Promisses (promessas) podem dar certo ou dar errado
  const [projectName, gitHubUser] = context.query.id.split('___');

  try{
    const externalDB = await fetch(`https://${projectName}.${gitHubUser}.vercel.app/api/db`)
      .then((serverResponse) => {
        // O fetch retorna o .then() quando o primeiro bit que chegou do servidor chegar no browser
        // Por isso queremos tratar apenas quando o servidor retornar ok (200)
        if (serverResponse.ok) {
          return serverResponse.json();
        }
        throw new Error('Error during re quest');
      })
      .then((objectServerResponse) => objectServerResponse)
      // .catch((err) => {
      //   console.log('Erro na requisição (ou no fetch ou no then)', err);
      // });
    // console.log('externalDB', externalDB);
    return {
      props: {
        externalDB,
      }, // will be passed to the page component as props
    };
  } catch(err) {
    throw new Error(err);
    // context.res.redirect...;
  }
}
