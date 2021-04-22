import React from 'react';
import styled from 'styled-components';

const QuizExplanations = styled.div`
   width: 430px;
    height: auto;
    display: inline-block;
    padding: 15px 15px 15px 20px;
    background-color: rgba(0,0,0,0.6);
    position: relative;
    color: white;
    top: 0;
    transform: translateY(-50%);
    border-radius: 0 8px 8px 0;
    border: 0;
    right: -430px;
    z-index: 20;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizExplanations;
