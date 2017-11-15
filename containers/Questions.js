import React, { Component } from 'react';
import Toggle from './Toggle';

export default class Questions extends Component {
  constructor(props) {
    super();

    this.state = {
      title: props.title || '',
      questionA: props.questionA || ['A', 'B', 'A'],
      questionASelected: (props.questionA && props.questionA[0]) || 'A',
      questionB: props.questionB || ['A', 'B', 'A'],
      questionBSelected: (props.questionB && props.questionB[0]) || 'B',
      questionC: props.questionC || ['A', 'B', 'A'],
      questionCSelected: (props.questionC && props.questionC[0]) || 'C'
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
    let resultTextClass = 'The-answer-is-incorr';

    if (correct) {
      mainDivClass = 'mainDivCorrect';
      resultText = 'The answer is correct';
      resultTextClass = 'The-answer-is-correc';
    }

    return (
      <div className={mainDivClass}>
        <h3 className="titleText">{title}</h3>
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
        <div className={resultTextClass}>{resultText}</div>
      </div>
    );
  }
}
