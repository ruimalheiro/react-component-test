import React, { Component } from 'react';

export default class Toggle extends Component {
  constructor(props) {
    super();

    this.state = {
      wrapperClass: 'wrapper',
      buttonClass: null,
      optionA: props.optionA || 'optionA',
      optionB: props.optionB || 'optionB'
    };
  }

  handleClick(e) {
    e.preventDefault();

    const { buttonClass, optionA, optionB } = this.state;

    let selected;
    if (buttonClass) {
      selected = optionA;
      this.setState({ buttonClass: null });
    } else {
      selected = optionB;
      this.setState({ buttonClass: 'move' });
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
      optionB
    } = this.state;

    return (
      <div className={mainDivClass}>
        <div className={wrapperClass}>
          <button
            id="button"
            className={buttonClass}
            onClick={this.handleClick.bind(this)}
          />
          <div className="optionAText">{optionA}</div>
          <div className="optionBText">{optionB}</div>
        </div>
      </div>
    );
  }
}
