import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from '../Link';
import Button from '../Button';

const StyledLinkButton = styled(Link)`
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color:#646464;
    cursor: not-allowed;
  }
  transition: .3s;
`;

const SVG = styled.svg`
  vertical-align: middle;
`;

export default function LinkButton({ href, text }) {
  return (
    <StyledLinkButton href={href} style={{ width: '24px'}}>
      <Button width="90%">{text}</Button>
    </StyledLinkButton>
  );
}

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
};