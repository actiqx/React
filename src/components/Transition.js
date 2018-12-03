import React, { Component } from 'react';
import '../css/App.css';
import Transition from 'react-transition-group/Transition';
class TransitionComp extends Component {
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
        <Transition
          in={this.state.show}
          timeout={{ enter: 2000, exit: 2000 }}
          enter={true}
          exit={true}
          onEnter={node => {
            console.log('Enter');
          }}
          onExit={node => {
            console.log('Exited');
          }}
        >
          {state => <div className={`square square-${state}`}>{state}</div>}
        </Transition>

        <div className="showDiv" onClick={this.showDiv}>
          Show or Hide
        </div>
      </div>
    );
  }
}

export default TransitionComp;
