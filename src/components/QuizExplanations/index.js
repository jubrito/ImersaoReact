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
  transform: translateY(-50%);
  border: 0;
  right: -430px;
  z-index: 10;
  background-color: rgb(254, 254, 254, 0.3);
  box-shadow: -13px -3px 12px rgb(20 0 0 / 30%);
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 10px 20px 0px 20px;
  width: 700px;

  @media screen and (max-width: 1400px) {
  width: 540px;
    transform: translateX(30%) translateY(-50%) translateZ(0px) !important;
  } 
  @media screen and (max-width: 1215px) {
    width: 500px;
    p, h2 {
    font-size: 15px;
    }
  } 
  // Ipad Pro
  @media screen and (max-width: 1024px) {
    background-color: rgb(254,254,254,0.5);
  }
  // Ipad
  @media screen and (max-width: 768px) {
    transform: translateX(-69%) translateY(0) translateZ(0px) !important;
    bottom: -105%;
    top: unset;
    width: 100%;
    box-shadow: 0px -5px 12px rgb(20 0 0 / 30%);
    height: -webkit-fill-available;
  }
  // Surface Duo
  @media screen and (max-width: 540px) {
    transform: translateX(-95%) translateY(30%) translateZ(0px) !important;
    min-height: 670px;
    p, h2 {
      font-size: 13px;
    }
  }
  // Iphone Plus
  @media screen and (max-width: 415px) {
    transform: translateX(-122%) translateY(23%) translateZ(0px) !important;
    box-shadow: 0px 0px 12px rgb(20 0 0 / 30%);
    height: max-content;
  }
  // Iphone
  @media screen and (max-width: 376px) {
    transform: translateX(-135%) translateY(29%) translateZ(0px) !important;
  }
  // Moto G4 / Galaxy S5
  @media screen and (max-width: 361px) {
    transform: translateX(-140%) translateY(27%) translateZ(0px) !important;
  }
  // Iphone SE
  @media screen and (max-width: 321px) {
    transform: translateX(-158%) translateY(25%) translateZ(0px) !important;
  }
  /* @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  } */
  
  
  
`;

export default QuizExplanations;
