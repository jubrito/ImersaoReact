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
