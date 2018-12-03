import React, { Component } from 'react';
import UserTemplate from './userTemplate';
export class User extends Component {
  state = {
    name: 'Priya',
    lastname: 'Patra',
    age: 25,
    hobbies: ['run', 'jump'],
    spanish: false,
    message() {
      console.log('fucn');
    },
    car: { brand: 'Ford', color: 'black' },
    mother: 'Lila',
    color: 'red'
  };
  changeColor() {
    // this.setState({
    //   color: 'blue'
    // });
    this.refs.myColor.style.color = 'blue';
  }
  render() {
    const style = {
      color: this.state.color
    };

    return (
      <div>
        <h4 style={style} ref="myColor">
          {this.state.mother}
        </h4>
        <div onClick={() => this.changeColor()}>Change Color</div>
        <UserTemplate {...this.state} />
      </div>
    );
  }
}

export default User;