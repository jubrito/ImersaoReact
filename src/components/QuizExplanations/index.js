import React from 'react';
import styled from 'styled-components';
import db from '../../../db.json';

const QuizExplanations = styled.div`
  /* background-image: ${({ imgs }) => imgs.sea};  */
  /* background-image: url('./sea.jpg');  */
  /* background-size: contain; */
  /* background-repeat: no-repeat; */
  /* background-color: ${({ theme }) => theme.colors.sand}; */
  width: 540px;
  height: -webkit-fill-available;
  padding: 0 25px 0px 25px;
  line-height: 1.3;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  position: absolute;
  top: 50%;
  /* transform: translateY(-50%); */
  border: 0;
  left: 100%;
  z-index: 10;
  background-color: rgb(254, 254, 254, 0.3);
  box-shadow: -13px -3px 12px rgb(20 0 0 / 30%);
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 10px 20px 0px 20px;
  width: 700px;
  transform:translateX(15%) translateY(-50%) translateZ(0px);

  @media screen and (max-width: 1400px) {
    width: 590px;
  } 
  @media screen and (max-width: 1215px) {
    width: 500px;
    p, h2 {
    font-size: 15px;
    }
  } 
  // Ipad Pro
  @media screen and (max-width: 1024px) {
    background-color: rgb(254,254,254,0.7);
    transform:translateX(14%) translateY(-100%) translateZ(0px);
  }
  // Ipad
  @media screen and (max-width: 768px) {
    background-color: rgb(254,254,254,0.5);
    transform: translateX(-100%) translateY(65%) translateZ(0px);
    /* bottom: -105%; */
    /* left: 0; */
    /* top: unset; */
    width: 100%;
    box-shadow: 0px -5px 12px rgb(20 0 0 / 30%);
    /* height: -webkit-fill-available; */
  }
  // Surface Duo
  @media screen and (max-width: 540px) {
    /* transform: translateX(-95%) translateY(30%) translateZ(0px) !important; */
    min-height: 670px;
    /* background-size: cover; */
    /* background-size: 100%; */
    /* height: 100vh; */
    position: relative;
    p, h2 {
      font-size: 13px;
    }
  }
  // Iphone Plus
  @media screen and (max-width: 415px) {
    /* transform: translateX(-122%) translateY(23%) translateZ(0px) !important; */
    box-shadow: 0px 0px 12px rgb(20 0 0 / 30%);
    height: max-content;
  }
  // Iphone
  @media screen and (max-width: 376px) {
  }
  // Moto G4 / Galaxy S5
  @media screen and (max-width: 361px) {
    min-height: 600px;
  }
  // Galaxy Fold
  @media screen and (max-width: 280px) {
    min-height: 640px;
  }
  /* @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  } */
  
  
  
`;

export default QuizExplanations;
