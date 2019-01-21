import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './../Buttons/Button';

const CardWrapper = styled.div`
  min-height: 250px;
  min-width: 150px;
  border: 1px solid white;
  flex-basis: 33%;
  margin: .5em;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const MainTitle = styled.h2`
  color: white;
  font-size: 2em;
`
const Question = styled.h5`
  color: grey;
  font-size: 1em;
`
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

class Card extends Component {
  handleClick = (event) => {
    const number = event.target.closest('.card').getAttribute('data-number');
    const response = {
      id: this.props.id,
      number,
      question: this.props.question,
      answer: event.target.value
    }
    this.props.handleResponses(response)
  }
  render() {
    return (
      <CardWrapper className='card card-default' data-number={this.props.number}>
        <MainTitle>{this.props.title}</MainTitle>
        <Question>{this.props.question}</Question>
        <ButtonWrapper>
          <Button text="Yes" value="Yes" class="next-btn" handleClick={this.handleClick} />
          <Button text="No" value="No" class="next-btn" handleClick={this.handleClick} />
        </ButtonWrapper>
      </CardWrapper>
    )
  }

}

export default Card;
