import React, { Component, PureComponent } from 'react';

export default class lifecycle extends PureComponent {
  // 1 get default  props

  // 2 set default state
  state = {
    title: 'Life Cycles'
  };

  //   // 3 before render
  //   componentWillMount() {
  //     console.log('3 before render :componentWillMount');
  //     // trying to change the color before it got loaded
  //     //document.querySelector('h3').style.color = 'red';
  //   }

  //   componentWillUpdate() {
  //     console.log(' After Update: componentWillUpdate');
  //   }

  //   componentDidUpdate() {
  //     console.log(' Before Update : componentDidUpdate');
  //   }
  //   // if dont want to change any state then we can use it conditionally
  //   //shouldComponentUpdate always will return a boolean value
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log('shouldComponentUpdate');

  //     if (nextState.title === this.state.title) {
  //       return false;
  //     }

  //     return true;
  //   }
  //   //Depricated
  //   componentWillReceiveProps() {
  //     console.log('Before Receive Props :componentWillReceiveProps');
  //   }

  //   componentWillUnmount() {
  //     console.log('componentWillUnmount');
  //   }

  // 4 render jxs

  render() {
    console.log('4 render jxs');
    return (
      <div>
        <h3> {this.state.title}</h3>
        <div
          onClick={() => {
            this.setState({
              title: 'Something Else'
            });
          }}
        >
          Some thing{' '}
        </div>
      </div>
    );
  }

  //   // 5 after jsx
  //   componentDidMount() {
  //     console.log('5 after jsx :componentDidMount');
  //   }
}
