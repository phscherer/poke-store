import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: black;
  border: 2px solid black;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const ButtonComponent = (props) => {
  return (
    <Button>{props.text}</Button>
  );
}

ButtonComponent.propTypes = {
  text: PropTypes.string,
};

export default ButtonComponent;
