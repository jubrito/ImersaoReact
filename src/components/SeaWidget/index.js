import React, {useState} from 'react';
import animationData2 from '../../screens/Quiz/animations/small-waves.json';
import Lottie from 'react-lottie';


export default function SeaWidget({ width, height, bottom, ...props }) {
    const [animationState, setAnimationState] = useState({
        isStopped: false, isPaused: false,
        direction: 1,
      });
    
      // Se tiver um botão por exemplo pra fazer a animação ocorrer teria que ser assim
      // useEffect(() => {
      //   setAnimationState({
      //     ...animationState,
      //     isStopped: !animationState.isStopped, // o contrário do que tiver
      //   })
      // }, []);
      // const reverseAnimation = -1;
      // const normalAnimation = 1;
      // useEffect(() => {
      //   setAnimationState({
      //     ...animationState,
      //     isStopped: false,
      //     direction: animationState.direction === normalAnimation 
      //     ? reverseAnimation 
      //     : normalAnimation,
      //   })
      // }, []);
    
      const defaultOptions = {
        loop: true, // false não roda em loop infinito
        autoplay: true, // false não carrega a animação quando recarrega
        animationData: animationData2,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
    return (
        <Lottie
          options={defaultOptions}
          direction={animationState.direction}
          height={height}
          width={width}
          style={{
            position: 'absolute',
            bottom: bottom,
            zIndex: 9
          }}
        />
      );
  }