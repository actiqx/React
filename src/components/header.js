import React, { Component } from 'react';
import '../components/css/styles.css';

class Header extends Component {
  state = {
    keyword: 'Hello'
  };

  inputChangeHandle = event => {
    this.setState({
      keyword: event.target.value
    });
  };
  render() {
    return (
      <header>
        <div className="logo">Logo</div>
        <input type="text" onChange={this.inputChangeHandle} />
      </header>
    );
  }
}
export default Header;
