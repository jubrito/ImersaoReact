import React, {useState, useEffect} from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
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
  )
}

function QuestionWidget({question, questionIndex, totalQuestions, onSubmit}) {
  const questionId = `question__${questionIndex}`
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {/* Não usa o $ antes do {} pois é sintaxe do React, se fosse sintaxe do js seria ${} */}
          {`Pergunta ${questionIndex + 1} de ${totalQuestions} `} 
        </h3>
      </Widget.Header>
      <img alt="Descrição" style={{
        width: '100%',
        height: '150px',
        objectFit: 'cover'
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

        <form onSubmit={(event) => {
          event.preventDefault(); // não atualiza a página 
          onSubmit();
        }}>
          {/* semelhante as alternativas*/}
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <Input
                  // style={{ display: 'none '}}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  />
                {alternative}
              </Widget.Topic>
            );
          })} 

          {/*  Console.log() no react na tela 
            <pre>
              {JSON.stringify(question, null, 4)}
            </pre>
          */}
          <Button type="submit">
            Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  )
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
}
export default function QuizPage() {
  // console.log(db.questions)
  const [screenState, setScreenState] = useState(screenStates.LOADING); // estado inicial 
  const totalQuestions = db.questions.length;
  const questionIndex = 0;
  const [currentQuestion, setCurrentQuestion] = useState(questionIndex);
  const question = db.questions[questionIndex]


  // nasce === didMount (componente é montado)
  // callbackfunction
  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 1 * 1000);
  }, [])

  function handleQuizSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex+1);
    } else {
      setScreenState(screenState.RESULT)
    }
  }

  return (
    // Ao invés de fazer assim abaixo, criamos o componente com o style do background
    // <div style={{ backgroundImage: `url (${db.bg})` }}>
    <QuizBackground backgroundImage={db.backgroundImage}>
      <QuizContainer>
        <QuizLogo />
        {/* Se for loading renderiza o LoadingWidget */}
        {screenStates.LOADING && <LoadingWidget/>} 
        {screenStates.QUIZ && (
          <QuestionWidget 
            question={question} 
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleQuizSubmit}
          />
        )} 
        {screenStates.RESULT && <div>Você acertou X questões</div>} 
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
