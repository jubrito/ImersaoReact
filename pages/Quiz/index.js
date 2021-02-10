import React, { useState, useEffect } from 'react';
import db from '../../db.json';
import Widget from '../../src/components/Widget';
import AlternativesForm from '../../src/components/AlternativesForm';
import QuizBackground from '../../src/components/QuizBackground';
import QuizLogo from '../../src/components/QuizLogo';
import QuizContainer from '../../src/components/QuizContainer';
import GitHubCorner from '../../src/components/GitHubCorner';
import Input from '../../src/components/Input';
import Button from '../../src/components/Button';
import BackLinkArrow from '../../src/components/BackLinkArrow';

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
  return (
    <Widget>
      <Widget.Header>
        Tela de Resultado:
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {/* {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
          }, 0)} */}
          {results.filter((x) => x).length}
          {' '}
          perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${index}`}>
              #
              {index + 1}
              {' '}
              Resultado:
              {result === true
                ? 'Acertou'
                : 'Errou'}
            </li>
          ))}
        </ul>
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
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

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
              addResult(isCorrect);
              onSubmit(); // dispara o onsubmit do form (o método handleQuizPageSubmit)
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 1 * 1000);
          }}
        >
          {/* semelhante as alternativas */}
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <Input
                  // style={{ display: 'none '}}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => {
                    setSelectedAlternative(alternativeIndex);
                  }}
                  type="radio"
                />
                {alternative}
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
export default function QuizPage() {
  // console.log(db.questions)
  const [screenState, setScreenState] = useState(screenStates.QUIZ); // estado inicial
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const [results, setResults] = useState([]);

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
    <QuizBackground backgroundImage={db.backgroundImage}>
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
