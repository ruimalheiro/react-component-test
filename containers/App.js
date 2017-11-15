import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
      mainDivClass: 'mainDivIncorrect',
      wrapperClass: 'wrapper',
      div1Class: 'text1',
      div2Class: 'text2',
      buttonClass: null
    };
  }

  test(e) {
    e.preventDefault();

    if (this.state.buttonClass) {
      this.setState({ buttonClass: null });
    } else {
      this.setState({ buttonClass: 'move' });
    }
  }

  render() {
    return (
      <div className={this.state.mainDivClass}>
        <div className={this.state.wrapperClass}>
          <button
            id="button"
            className={this.state.buttonClass}
            onClick={this.test.bind(this)}
          />
          <div className={this.state.div1Class}>text1</div>
          <div className={this.state.div2Class}>text2</div>
        </div>
      </div>
    );
  }
}
