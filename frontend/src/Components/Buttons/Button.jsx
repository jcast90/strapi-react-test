import React, { Component } from 'react';
import styled from 'styled-components';

const BasicButton = styled.button`
    background-color: red;
    border-radius: 25px;
    border: 1px solid white;
    flex-basis: 45%;
    margin: .5em;
    height: 50px;
    color: white;
    cursor: pointer;
    :hover {
      background-color: transparent;
      color: red;
    }
  `

class Button extends Component {
  render() {
    return (
      <BasicButton className={this.props.class} value={this.props.value} onClick={this.props.handleClick}>
        {this.props.text}
      </BasicButton>
    )
  }

}

export default Button;