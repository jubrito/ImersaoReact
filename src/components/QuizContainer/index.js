import React from 'react';
import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding-top: 15px;
  margin: auto 10%;
  /* @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  } */
  @media screen and (max-width: 1215px) {
    max-width: 320px;
    margin: auto 10%;
    p, h2 {
    font-size: 14px;
    }
  }
  // Ipad Pro
  @media screen and (max-width: 1024px) {
    margin: auto 7%;
    transform: translateY(80%);
  }
  // Ipad
  @media screen and (max-width: 768px) {
    margin: 0 auto;
    max-width: 620px;
    transform: translateY(10%);
  }
  // Surface Duo
  @media screen and (max-width: 540px) {
    max-width: 450px;
    transform: translateY(6%);
  }
  // Iphone Plus
  @media screen and (max-width: 415px) {
    /* transform: translateX(0) translateY(-60%) !important; */
    max-width: 85%;
  }
  // Iphone
  @media screen and (max-width: 376px) {
    /* transform: translateX(0) translateY(-90%) !important; */
    transform: translateY(0%);
  }
  // Moto G4 / Galaxy S5
  @media screen and (max-width: 361px) {
    /* transform: translateX(0) translateY(-85%) !important; */
  }
  // Iphone SE
  @media screen and (max-width: 321px) {
    /* margin: auto -1%; */
    /* transform: translateX(10%) translateY(-75%) !important; */
  }
  z-index: 10;
`;

export default QuizContainer;
