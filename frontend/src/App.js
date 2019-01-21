import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Card from './Components/Cards/Card';

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;

`
const Navigation = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;

`;
const ListItem = styled.li`
  height:100px;
  width: 100px;
  border-radius: 50%;
  border: 1px solid red;
  color: red;
  background-color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
class App extends Component {
  state = {
    cards: [],
    responses: [],
    lastCard: false
  }

  componentDidMount = () => {
    fetch('http://localhost:1337/cards')
      .then(data => data.json())
      .then(data => {
        data.map(card => {
          this.setState({
            cards: [...this.state.cards, card]
          })
        })
      })
  }

  handleResponses = response => {
    const cardLength = this.state.cards.length

    this.setState({
      responses: [...this.state.responses, response]
    })

    // Checks if last card in order to submit responses
    if (cardLength === response.number) {
      console.log(this.state.responses)
    }


  }
  renderNavItems = () => {
    return this.state.cards.map((card, index) => {
      return <ListItem number={index++}> {index++} </ListItem>
    })
  }

  renderCards = () => {
    return this.state.cards.map((card, index) => {
      return <Card
        title={card.title}
        question={card.question}
        image={card.image}
        number={index++}
        key={card.id}
        id={card.id}
        handleResponses={this.handleResponses} />
    })
  }

  render() {
    return (
      <div className="App">
        <MainWrapper className="App-header">
          {this.renderCards()}
        </MainWrapper>
        <Navigation>
          {this.renderNavItems()}
        </Navigation>
      </div>
    );
  }
}

export default App;
