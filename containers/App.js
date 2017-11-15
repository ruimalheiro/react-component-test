import React, { Component } from 'react';
import Questions from './Questions';

export default class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    /*
      questionA [ optionA (left), optionB (right), correctOption ]
      questionB ...
      questionC ...
    */
    let title = 'Ideal conditions for the bacteria growth';
    let questionA = ['Cold', 'Warm', 'Warm'];
    let questionB = ['No water', 'Water', 'Water'];
    let questionC = ['No food', 'Food', 'Food'];

    return (
      <Questions
        title={title}
        questionA={questionA}
        questionB={questionB}
        questionC={questionC}
      />
    );
  }
}
