import React, { Component } from 'react';
import ReactDom from 'react-dom';
import JSON from './db.json';
//Components
import Header from './components/header';
import NewsList from './components/news_list';
class App extends Component {
  state = {
    news: JSON
  };
  render() {
    return (
      <div>
        <Header />
        <NewsList news={this.state.news}>Hello dudes</NewsList>
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('#root'));
