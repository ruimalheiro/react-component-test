import React, { Component } from 'react';
import Toggle from './Toggle';

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
      title: 'Ideal conditions for the bacterial growth',
      questionA: ['Cold', 'Warm', 'Warm'],
      questionASelected: 'Cold',
      questionB: ['No water', 'Water', 'Water'],
      questionBSelected: 'No water',
      questionC: ['No food', 'Food', 'Food'],
      questionCSelected: 'No food'
    };
  }

  handleQuestionASelect(value) {
    this.setState({
      questionASelected: value
    });
  }

  handleQuestionBSelect(value) {
    this.setState({
      questionBSelected: value
    });
  }

  handleQuestionCSelect(value) {
    this.setState({
      questionCSelected: value
    });
  }

  render() {
    const {
      title,
      questionA,
      questionASelected,
      questionB,
      questionBSelected,
      questionC,
      questionCSelected
    } = this.state;

    let correct =
      questionA[2] === questionASelected &&
      questionB[2] === questionBSelected &&
      questionC[2] === questionCSelected;

    let mainDivClass = 'mainDivIncorrect';
    let resultText = 'The answer is incorrect';
    if (correct) {
      mainDivClass = 'mainDivCorrect';
      resultText = 'The answer is correct';
    }

    return (
      <div className={mainDivClass}>
        <div className="titleText">{title}</div>
        <Toggle
          optionA={questionA[0]}
          optionB={questionA[1]}
          onClick={this.handleQuestionASelect.bind(this)}
        />
        <Toggle
          optionA={questionB[0]}
          optionB={questionB[1]}
          onClick={this.handleQuestionBSelect.bind(this)}
        />
        <Toggle
          optionA={questionC[0]}
          optionB={questionC[1]}
          onClick={this.handleQuestionCSelect.bind(this)}
        />
        <div className="resultText">{resultText}</div>
      </div>
    );
  }
}
