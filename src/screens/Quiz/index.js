// Render das telas (da rota Quiz)
import React, { useState, useEffect } from 'react';
// import db from '../../../db.json';
import Widget from '../../components/Widget';
import AlternativesForm from '../../components/AlternativesForm';
import QuizBackground from '../../components/QuizBackground';
import QuizLogo from '../../components/QuizLogo';
import QuizContainer from '../../components/QuizContainer';
import GitHubCorner from '../../components/GitHubCorner';
import Input from '../../components/Input';
import Button from '../../components/Button';
import BackLinkArrow from '../../components/BackLinkArrow';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        Carregando...
      </Widget.Content>
    </Widget>
  );
}
function ResultWidget({ results }) {
  const [resultsCategories, setResultsCategories] = useState({
    horrible: 0, bad: 0, regular: 0, good: 0, excelent: 0,
  });

  const [horribleTotal, setHorribleTotal] = useState(0);
  const [badTotal, setBadTotal] = useState(0);
  const [regularTotal, setRegularTotal] = useState(0);
  const [goodTotal, setGoodTotal] = useState(0);
  const [excelentTotal, setExcelentTotal] = useState(0);

  useEffect(() => {
    results.map((result) => {
      console.log('result');
      console.log(result);
      // eslint-disable-next-line default-case
      switch (result) {
        case '1':
          setHorribleTotal(horribleTotal + 1);
          break;
        case '2':
          setBadTotal(badTotal + 1);
          break;
        case '3':
          setRegularTotal(regularTotal + 1);
          break;
        case '4':
          setGoodTotal(goodTotal + 1);
          break;
        case '5':
          setExcelentTotal(excelentTotal + 1);
          break;
          // console.log('error');
      }
    });
  }, []);

  useEffect(() => {
    setResultsCategories({
      horrible: horribleTotal,
      bad: badTotal,
      regular: regularTotal,
      good: goodTotal,
      excelent: excelentTotal,
    });
  }, [horribleTotal, badTotal, regularTotal, goodTotal, excelentTotal]);

  function showTotalPoints() {
    return `/${results.length * 5}`;
  }

  return (
    <Widget>
      <Widget.Header>
        Resultados:
      </Widget.Header>

      <Widget.Content>
        <p>Obrigada por participar!</p>
        {' '}
        {/* Começa do 0 e adiciona um cada vez que encontrar um resultado ruim (result == 0) */}
        {
          results.reduce((sumResults, currentResult) => {
            switch (currentResult) {
              case '1':
                return sumResults + 1;
              case '2':
                return sumResults + 2;
              case '3':
                return sumResults + 3;
              case '4':
                return sumResults + 4;
              case '5':
                return sumResults + 5;
              default:
            }
            return sumResults;
          }, 0)
}
        {/* começamos a contar no 0 */}
        {
          showTotalPoints()
        }
        <p>Respostas por categoria:</p>
        {`Horrível: ${resultsCategories.horrible}`}
        <br />
        {`Ruim: ${resultsCategories.bad}`}
        <br />
        {`Regular: ${resultsCategories.regular}`}
        <br />
        {`Bom: ${resultsCategories.good}`}
        <br />
        {`Excelente: ${resultsCategories.excelent}`}
        <br />
        {/* Resultado que precisará ser levado pra tela de quem contratou  */}
        <ul>
          {results.map((result, index) => (
            <li key={`result__${index}`}>
              #
              {index + 1}
              Resultado:
              {result}
            </li>
          ))}
        </ul>
        <p />
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
  points,
}) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false); // do formulário
  // se o usuário selecionou uma alternativa, coloca como true pra poder habilitar o botão
  const hasAlternativeSelected = selectedAlternative !== undefined;
  const questionId = `question__${questionIndex}`;

  const [totalPoints, setTotalPoints] = useState(0);
  const [currentPoints, setCurrentPoints] = useState(0);

  function handleQuizPageSubmit() {
    // ponto da questão selecionada mas ponto da última questão
    // const sum = Number(totalPoints) + Number(currentPoints);
    // setTotalPoints(sum);
    // setCurrentPoints(points);
    // console.log("currentPoints "+ currentPoints);
    // console.log("totalPoints "+ totalPoints);
  }
  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {/* Não usa o $ antes do {} pois é sintaxe do React, se fosse sintaxe do js seria ${} */}
          {`Pergunta ${questionIndex + 1} de ${totalQuestions} `}
        </h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(event) => {
            event.preventDefault(); // não atualiza a página
            setIsQuestionSubmited(true); // respondeu a pergunta
            setTimeout(() => {
              addResult(currentPoints);
              onSubmit(); // dispara o onsubmit do form (o método handleQuizPageSubmit)
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 1 * 1000);
          }}
        >
          {/* semelhante as alternativas */}
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            // a cor irá mudar apenas no selecionado
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && currentPoints}
              >
                <Input
                  // style={{ display: 'none '}}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => {
                    setCurrentPoints(alternative.points);
                    setSelectedAlternative(alternativeIndex);
                  }}
                  points={alternative.points}
                  type="radio"
                />
                {alternative.content}
                {/* {alternative.points} */}
              </Widget.Topic>
            );
          })}

          {/* Console.log() no react na tela
            <pre>
              {JSON.stringify(question, null, 4)}
            </pre> */}

          <Button type="submit" onSubmit={() => handleQuizPageSubmit()} disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {/* <p>{`${selectedAlternative}`}</p> */}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage({ externalQuestions, externalBg }) {
  // console.log(db.questions)
  const [screenState, setScreenState] = useState(screenStates.QUIZ); // estado inicial
  const totalQuestions = externalQuestions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const [results, setResults] = useState([]);
  const bg = externalBg;

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  // nasce === didMount (componente é montado)
  // callbackfunction
  useEffect(() => {
    setTimeout(() => {
      // setScreenState(screenStates.QUIZ)
    }, 1 * 1000);
  }, []);

  function handleQuizSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    // Ao invés de fazer assim abaixo, criamos o componente com o style do background
    // <div style={{ backgroundImage: `url (${db.bg})` }}>
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />
        {/* Se for loading renderiza o LoadingWidget */}
        {screenState == screenStates.LOADING && <LoadingWidget />}
        {screenState == screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleQuizSubmit}
            addResult={addResult}
          />
        )}
        {screenState == screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
