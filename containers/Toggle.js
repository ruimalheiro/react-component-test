import React, { Component } from 'react';

export default class Toggle extends Component {
  constructor(props) {
    super();

    this.state = {
      wrapperClass: 'wrapper',
      buttonClass: null,
      optionA: props.optionA || 'optionA',
      optionAClass: 'selectedOptionText',
      optionB: props.optionB || 'optionB',
      optionBClass: 'unselectedOptionText'
    };
  }

  handleClick(e) {
    e.preventDefault();

    const {
      buttonClass,
      optionA,
      optionAClass,
      optionB,
      optionBClass
    } = this.state;

    let selected;
    if (buttonClass) {
      selected = optionA;
      this.setState({
        buttonClass: null,
        optionAClass: 'selectedOptionText',
        optionBClass: 'unselectedOptionText'
      });
    } else {
      selected = optionB;
      this.setState({
        buttonClass: 'move',
        optionAClass: 'unselectedOptionText',
        optionBClass: 'selectedOptionText'
      });
    }

    if (this.props.onClick) {
      this.props.onClick(selected);
    }
  }

  render() {
    const {
      mainDivClass,
      wrapperClass,
      buttonClass,
      optionA,
      optionAClass,
      optionB,
      optionBClass
    } = this.state;

    return (
      <div className={mainDivClass}>
        <div className={wrapperClass}>
          <button
            id="button"
            className={buttonClass}
            onClick={this.handleClick.bind(this)}
          />
          <div className="optionATextDiv">
            <p className={optionAClass}>{optionA}</p>
          </div>
          <div className="optionBTextDiv">
            <p className={optionBClass}>{optionB}</p>
          </div>
        </div>
      </div>
    );
  }
}
