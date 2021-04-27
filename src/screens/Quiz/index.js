import React, { useState, useEffect, useRef } from 'react';
// import db from '../../../db.json';
// Render das telas (da rota Quiz)
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import Widget from '../../components/Widget';
import AlternativesForm from '../../components/AlternativesForm';
import QuizBackground from '../../components/QuizBackground';
import QuizLogo from '../../components/QuizLogo';
import QuizContainer from '../../components/QuizContainer';
import QuizExplanations from '../../components/QuizExplanations';
import GitHubCorner from '../../components/GitHubCorner';
import Input from '../../components/Input';
import Button from '../../components/Button';
import BackLinkArrow from '../../components/BackLinkArrow';
import animationData from './animations/loading-recycle.json';
import animationData2 from './animations/small-waves.json';
import animationData3 from './animations/mild-waves.json';
import parse from "html-react-parser";
import LinkButton from '../../components/LinkButton';
import Subtitle from '../../components/Subtitle';
import Footer from '../../components/Footer';
import SeaWidget from '../../components/SeaWidget';
import {BreakpointProvider} from '../../components/BreakpointProvider';
import {useBreakpoint} from '../../components/BreakpointProvider'

function LoadingWidget() {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  // Se tiver um botão por exemplo pra fazer a animação ocorrer teria que ser assim
  // useEffect(() => {
  //   setAnimationState({
  //     ...animationState,
  //     isStopped: !animationState.isStopped, // o contrário do que tiver
  //   })
  // }, []);

  const defaultOptions = {
    loop: true, // false não roda em loop infinito
    autoplay: true, // false não carrega a animação quando recarrega
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Widget>
      <Widget.Header>
        <h1>Carregando...</h1>
      </Widget.Header>
      <Widget.Content>
        <Lottie
          options={defaultOptions}
          height="auto"
          width="100%"
        />
      </Widget.Content>

    </Widget>
  );
}
function RecyclingBinWidget() {
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false,
    direction: 1,
  });

  const defaultOptions = {
    loop: true, // false não roda em loop infinito
    autoplay: true, // false não carrega a animação quando recarrega
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  
  return (
    <Lottie
      options={defaultOptions}
      direction={animationState.direction}
      height="240px"
      width="180px"
      style={{
        position: 'absolute',
        bottom: 22,
        right: 0,
        zIndex: 9,
      }}
    />
  );
}
function ResultWidget({ results, totalQuestions, externalTextResults }) {
  const points = results.filter((x) => x).length;
  const [textResult, setTextResult] = useState("");
  
  useEffect(()=> {
    if (points < 4) {
     setTextResult(externalTextResults.bad);
    } else if (points >= 5 ||points < 10) {
      setTextResult(externalTextResults.regular);
    } else {
      setTextResult(externalTextResults.good);
    }
  }, [externalTextResults]);
  return (
    <Widget
      as={motion.section}
      // delay quanto tempo espera pra começar e duração em s
      transition={{ delay: 0, duration: 0.5 }}
      variants={{
        // o elemento terá estados de animação
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '-100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        <h1>Resultado</h1>
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
          {points+"/"+totalQuestions}
          {' '}
          perguntas
        </p>
        <p>{parse(textResult)}</p>
        {/* <ul>
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
        </ul> */}
        <LinkButton href="/" text="Refazer o teste"/>
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
  handleExplanation,
  hasAlreadyConfirmed
}) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false); // do formulário
  // se o usuário selecionou uma alternativa, coloca como true pra poder habilitar o botão
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  const questionId = `question__${questionIndex}`;
  var [hasAlreadyConfirmedDelay, setHasAlreadyConfirmedDelay] = useState(false);
  const [checked, setChecked] = useState(false);

  // delay de alguns segundos para o botão de próxima pergunta ser ativado
  useEffect(()=> {
    if (hasAlreadyConfirmed) {
      setTimeout(()=> {
          setHasAlreadyConfirmedDelay(true);
        }, 1000)
    } else {
      setHasAlreadyConfirmedDelay(false);
    }
  }, [hasAlreadyConfirmed])

  const [translateShow, setTranslateShow] = useState({ x: '', y:''})  
  const [translateHide, setTranslateHide] = useState({ x: '', y:''})  
  const breakpoints = useBreakpoint();
  useEffect(() => {
    var large_screen, medium_screen, ipad_pro_screen, ipad_screen, surface_duo_screen, iphone_plus_screen, iphone_screen, motog4_screen, iphonese_screen;
    const matchingList2 = Object.keys(breakpoints).map(media => {
      var breakpoint_media = breakpoints[media];
      switch (media) {
        case 'iphonese_screen':
          iphonese_screen = breakpoint_media;
          // console.log(iphonese_screen)
        break;
        case 'motog4_screen':
          motog4_screen = breakpoint_media;
        break;
        case 'iphone_screen':
          iphone_screen = breakpoint_media;
        break;
        case 'iphone_plus_screen':
          iphone_plus_screen = breakpoint_media;
        break;
        case 'surface_duo_screen':
          surface_duo_screen = breakpoint_media;
        break;
        case 'ipad_screen':
          ipad_screen = breakpoint_media;
        break;
        case 'ipad_pro_screen':
          ipad_pro_screen = breakpoint_media;
        break;
        case 'medium_screen':
          medium_screen = breakpoint_media;
        break;
        case 'large_screen':
          large_screen = breakpoint_media;
        break;
      }
    })
  }, []);
  useEffect(() => {
      // console.log(matchingList)
    console.log(window.innerWidth)
    if (window.innerWidth >= 322 && window.innerWidth < 361) {
      setTranslateShow({x: '0%', y: '8%', z: '0px'});
      setTranslateHide({x: '0%', y: '8%', z: '0px'});
      console.log("motog4_screen")

    } else if (window.innerWidth >= 361 && window.innerWidth < 376) {
      setTranslateShow({x: '0%', y: '12%', z: '0px'});
      setTranslateHide({x: '0%', y: '12%', z: '0px'});
      console.log("iphone_screen")

    } else if (window.innerWidth >= 376 && window.innerWidth < 769) {
      setTranslateShow({x: '0%', y: '0%', z: '0px'});
      setTranslateHide({x: '0%', y: '0%', z: '0px'});
      console.log("ipad_screen")

    } else if (window.innerWidth >= 769 && window.innerWidth < 1025) {
      setTranslateShow({x: '0%', y: '-50%', z: '0px'});
      setTranslateHide({x: '0%', y: '-50%', z: '0px'});
      console.log("ipad_pro_screen")

    } else if (window.innerWidth >=1025  && window.innerWidth <1215){
      // setTranslateShow({x: '27%', y: '-50%', z: '0px'});
      // setTranslateHide({x: '26%', y: '-50%', z: '0px'});
      // console.log("medium_screen")
    
    } else if (window.innerWidth >= 1215 && window.innerWidth < 1400){
      // setTranslateShow({x: '14%', y: '-50%'});
      // setTranslateHide({x: '10%', y: '-50%'});
      // console.log("large_screen")
    } else {
      setTranslateShow({x: '0', y: '0'});
      setTranslateHide({x: '0', y: '-100%'});
      console.log("default")
    }
  }, [window.innerWidth])
    
  return (
    <Widget
      as={motion.section}
      // delay quanto tempo espera pra começar e duração em s
      transition={{ delay: 0, duration: 0.5 }}
      variants={{
        // o elemento terá estados de animação
        show: { opacity: 1, x: translateShow.x, y: translateShow.y, IDBIndex: 30 },
        hidden: { opacity: 0, x: translateHide.x, y: translateHide.y, IDBIndex: -1 },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h1>
          {/* Não usa o $ antes do {} pois é sintaxe do React, se fosse sintaxe do js seria ${} */}
          {`Pergunta ${questionIndex + 1} de ${totalQuestions} `}
        </h1>
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
        <h1>
          {question.title}
        </h1>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(event) => {
            event.preventDefault(); // não atualiza a página
            setIsQuestionSubmited(true); // respondeu a pergunta
            setChecked(false);
            if(hasAlreadyConfirmed){
              setTimeout(() => {
                addResult(isCorrect);
                onSubmit(); // dispara o onsubmit do form (o método handleQuizPageSubmit)
                setIsQuestionSubmited(false);
                setSelectedAlternative(undefined);
              }, 3 * 1000);
            }
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
                data-status={hasAlreadyConfirmed && alternativeStatus}
              >
                <Input
                  // style={{ display: 'none '}}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => {
                    setSelectedAlternative(alternativeIndex);
                  }}
                  type="radio"
                  checked={isSelected}
                  // se já clicou em confirmar (hasAlreadyConfirmed=true), o botão deve ser desabilitado
                  disabled={hasAlreadyConfirmed}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* Console.log() no react na tela
            <pre>
              {JSON.stringify(question, null, 4)}
            </pre> */}
            {/* <div className="mt-15">
              <Button type="button" onClick={() => handleExplanation()} disabled={!hasAlternativeSelected || hasAlreadyConfirmed}>
                Confirmar
              </Button>
              <Button type="submit" onSubmit={() => handleQuizPageSubmit()} disabled={!hasAlreadyConfirmed}>
                Próxima Pergunta
              </Button>
            </div> */}
          {
            hasAlreadyConfirmed ? 
            <Button type="submit" onSubmit={() => handleQuizPageSubmit()} disabled={!hasAlreadyConfirmedDelay}>
              Próximo
            </Button>
            : 
            <Button type="button" onClick={() => handleExplanation()} disabled={!hasAlternativeSelected || hasAlreadyConfirmed}>
              Confirmar
            </Button>
          }
          {/* <p>{`${selectedAlternative}`}</p> */}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}
function QuestionExplanation({
  explanations,
  source,
  answer,
  animate,
  data_screen,
  myRef
}) {

  const [translateShow, setTranslateShow] = useState({ x: '', y:''})  
  const [translateHide, setTranslateHide] = useState({ x: '', y:''})  
  const breakpoints = useBreakpoint();
  useEffect(() => {
    var large_screen, medium_screen, ipad_pro_screen, ipad_screen, surface_duo_screen, iphone_plus_screen, iphone_screen, motog4_screen, iphonese_screen;
    const matchingList2 = Object.keys(breakpoints).map(media => {
      var breakpoint_media = breakpoints[media];
      switch (media) {
        case 'iphonese_screen':
          iphonese_screen = breakpoint_media;
          // console.log(iphonese_screen)
        break;
        case 'motog4_screen':
          motog4_screen = breakpoint_media;
        break;
        case 'iphone_screen':
          iphone_screen = breakpoint_media;
        break;
        case 'iphone_plus_screen':
          iphone_plus_screen = breakpoint_media;
        break;
        case 'surface_duo_screen':
          surface_duo_screen = breakpoint_media;
        break;
        case 'ipad_screen':
          ipad_screen = breakpoint_media;
        break;
        case 'ipad_pro_screen':
          ipad_pro_screen = breakpoint_media;
        break;
        case 'medium_screen':
          medium_screen = breakpoint_media;
        break;
        case 'large_screen':
          large_screen = breakpoint_media;
        break;
      }
    })
  }, []);
  useEffect(() => {
      // console.log(matchingList)
    console.log(window.innerWidth)
    
    if (window.innerWidth < 322) {
      setTranslateShow({x: '-100%', y: '0%', z: '0px'});
      setTranslateHide({x: '-100%', y: '0%', z: '0px'});
      console.log("iphonese_screen")

    } else if (window.innerWidth >= 322 && window.innerWidth < 361) {
      setTranslateShow({x: '-100%', y: '8%', z: '0px'});
      setTranslateHide({x: '-100%', y: '8%', z: '0px'});
      console.log("motog4_screen")

    } else if (window.innerWidth >= 361 && window.innerWidth < 376) {
      setTranslateShow({x: '-100%', y: '12%', z: '0px'});
      setTranslateHide({x: '-100%', y: '12%', z: '0px'});
      console.log("iphone_screen")

    } else if (window.innerWidth >= 376 && window.innerWidth < 415) {
      setTranslateShow({x: '-100%', y: '1%', z: '0px'});
      setTranslateHide({x: '-100%', y: '1%', z: '0px'});
      console.log("iphone_plus_screen")

    } else if (window.innerWidth >= 415 && window.innerWidth < 541) {
      setTranslateShow({x: '-100%', y: '0%', z: '0px'});
      setTranslateHide({x: '-100%', y: '0%', z: '0px'});
      console.log("surface_duo_screen")

    } else if (window.innerWidth >= 541 && window.innerWidth < 769) {
      setTranslateShow({x: '-100%', y: '56%', z: '0px'});
      setTranslateHide({x: '-100%', y: '56%', z: '0px'});
      console.log("ipad_screen")

    } else if (window.innerWidth >= 769 && window.innerWidth < 1025) {
      setTranslateShow({x: '14%', y: '-100%', z: '0px'});
      setTranslateHide({x: '14%', y: '-100%', z: '0px'});
      console.log("ipad_pro_screen")

    } else if (window.innerWidth >=1025  && window.innerWidth <1215){
      setTranslateShow({x: '27%', y: '-50%', z: '0px'});
      setTranslateHide({x: '27%', y: '-50%', z: '0px'});
      console.log("medium_screen")
    
    } else if (window.innerWidth >= 1215 && window.innerWidth < 1400){
      setTranslateShow({x: '14%', y: '-50%'});
      setTranslateHide({x: '14%', y: '-50%'});
      console.log("large_screen")
    } else {
      setTranslateShow({x: '15%', y: '-50%'});
      setTranslateHide({x: '15%', y: '-50%'});
      console.log("default")
    }
  }, [window.innerWidth]);
  return (
    <>
        <QuizExplanations
        as={motion.section}
        // delay quanto tempo espera pra começar e duração em s
        transition={{ delay: 0, duration: 0.5 }}
        variants={{
          // o elemento terá estados de animação
          show: { opacity: 1, x: translateShow.x , y: translateShow.y, z:'0' },
          hidden: { opacity: 0, x: translateHide.x, y:translateHide.y, z:'100%' },
        }}
        initial="hidden"
        animate={animate}
        >
        <div ref={myRef}>
          <Subtitle><strong>Resposta correta:</strong> {answer}</Subtitle>
          {explanations.map((explanation) => {
           return <p>{parse(explanation)}</p>
          })}
          <p className="source">Fonte: 
          {source.map((src) => {
           return <a href={src.url} target="_blank">{src.title}</a>
          })}
          </p>
        </div>
        </QuizExplanations>
        </>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage({
  externalQuestions, externalBg, externalBgMobile, externalTextResults, projectName, gitHubUser,
}) {
  // console.log(db.questions)
  const [screenState, setScreenState] = useState(screenStates.LOADING); // estado inicial
  const totalQuestions = externalQuestions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const explanations = question.explanation;
  const source = question.source;
  const answer = question.alternatives[question.answer];
  const [results, setResults] = useState([]);
  const bg = externalBg;
  const bg_mobile = externalBgMobile !== undefined ? externalBgMobile : externalBg;
  const [action, setAction] = useState("hide");
  const [hasAlreadyConfirmed, setHasAlreadyConfirmed] = useState(false);
  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  const queries = {
    large_screen: '(max-width: 1403px)',
    medium_screen: '(max-width: 1216px)',
    ipad_pro_screen: '(max-width: 1025px)',
    ipad_screen: '(max-width: 769px)',
    surface_duo_screen: '(max-width: 541px)',
    iphone_plus_screen: '(max-width: 416px)',
    iphone_screen: '(max-width: 376px)',
    motog4_screen: '(max-width: 361px)',
    iphonese_screen: '(max-width: 321px)'
  }
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  
  // nasce === didMount (componente é montado)
  // callbackfunction
  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 3 * 1000);
  }, []);

  // Muda o estado de ação para "show", exibindo as explicações da pergunta
  useEffect(() => {
    if (hasAlreadyConfirmed){
      setAction("show");
      executeScroll;
    }
  }, [hasAlreadyConfirmed]);

  function handleQuizSubmit() {
    setAction("hide");
    setHasAlreadyConfirmed(false);
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }
  // chamada quando o usuário clica no botão "confirmar"
  function handleExplanation() {
    setHasAlreadyConfirmed(true);
    
  }

  return (
    // Ao invés de fazer assim abaixo, criamos o componente com o style do background
    // <div style={{ backgroundImage: `url (${db.bg})` }}>
    <>
    <BreakpointProvider queries={queries}>
    <QuizBackground backgroundImage={bg} backgroundImageResponsive={bg_mobile}>
      <QuizContainer>
        <QuizLogo />
        {/* Se for loading renderiza o LoadingWidget */}
        {screenState == screenStates.LOADING && <LoadingWidget />}
        {screenState == screenStates.QUIZ && (
          <>
          <div className="relative">
            <QuestionWidget
              question={question}
              questionIndex={questionIndex}
              totalQuestions={totalQuestions}
              onSubmit={handleQuizSubmit}
              handleExplanation={handleExplanation}
              addResult={addResult}
              hasAlreadyConfirmed={hasAlreadyConfirmed}
            />
              <QuestionExplanation
                explanations={explanations}
                source={source}
                animate={action}
                answer={answer}>
              </QuestionExplanation>
          </div>
          </>
        )}
        {screenState == screenStates.RESULT && <ResultWidget results={results} totalQuestions={totalQuestions} externalTextResults={externalTextResults}/>}
      </QuizContainer>
      {/* <GitHubCorner projectUrl={`https://github.com/${gitHubUser}/${projectName}`} /> */}
      <GitHubCorner projectUrl="https://github.com/jubrito/uxuiquiz"/>
      {/* <RecyclingBinWidget/> */}
    </QuizBackground>
    {/* <Footer><p>Adaptação do desafio proposto pela Alura na Imersão React feita por Juliana Witzke de Brito</p></Footer> */}
      <Footer><SeaWidget width="100%" height="79px" bottom="28px"/><p>Adaptação do desafio proposto pela Alura na Imersão React feita por Juliana Witzke de Brito</p></Footer>
    </BreakpointProvider>
    </>
  );
}
