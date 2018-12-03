import React, { Component } from 'react';

import '../css/App.css';
import { CSSTransition } from 'react-transition-group';
class Fade extends Component {
  state = {
    show: false
  };
  showDiv = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div>
        <CSSTransition in={this.state.show} timeout={2000} classNames="square">
          <div className={`square ${this.state.show}`}>Hello</div>
        </CSSTransition>
        <div className="showDiv" onClick={this.showDiv}>
          Show or Hide
        </div>
      </div>
    );
  }
}

export default Fade;
