import React from 'react';
import ReactDOM from 'react-dom';
import {
  MemoryRouter,
  HashRouter,
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';

// Components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/postitem';
import lifecycle from './components/lifecycle';
import Conditional from './components/conditional';
import user from './components/user';
const App = () => {
  return (
    // <HashRouter>
    // <MemoryRouter>
    <BrowserRouter>
      <div>
        <header>
          {/* Link doesnot have styling 
          <Link to="/">Home</Link>
          <br />
          <Link to="/posts">Posts</Link>
          <br />
          <Link
            to={{
              pathname: '/profile',
              hash: '#profile',
              search: '?profile=true'
            }}
          >
            Profile
          </Link>
          <br />
          */}
          <NavLink to="/">Home</NavLink>
          <br />
          <NavLink to="/life">LifeCycle</NavLink>
          <br />
          <NavLink to="/cond">Conditional</NavLink>
          <br />
          <NavLink to="/user">User</NavLink>
          <br />
          <NavLink
            to="/posts"
            activeStyle={{ color: 'red' }}
            activeClassName="selected"
          >
            Posts
          </NavLink>
          <br />
          <NavLink
            to={{
              pathname: '/profile',
              hash: '#profile',
              search: '?profile=true'
            }}
          >
            Profile
          </NavLink>
          <br />
          <hr />
        </header>
        {/* we can use exact for render exact route match
        <Route path="/" exact component={Home} /> */}
        <Switch>
          {/* <Redirect from="/profile" to="/" /> */}
          <Route path="/profile" component={Profile} />
          <Route path="/posts/:id/:username" component={PostItem} />
          <Route path="/posts" component={Posts} />
          <Route path="/life" component={lifecycle} />
          <Route path="/cond" component={Conditional} />
          <Route path="/user" component={user} />
          <Route path="/" exact component={Home} />
          <Route render={() => <h3>Oop 404</h3>} />
        </Switch>
      </div>
    </BrowserRouter> // </MemoryRouter>
    // </HashRouter>
    // </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
