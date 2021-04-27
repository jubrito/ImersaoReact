import React from 'react';
import styled from 'styled-components';

const Subtitle = styled.h2`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  width: fit-content;
  margin: 0 auto;
  padding: 5px 10px;
  font-size: 17px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export default  Subtitle;