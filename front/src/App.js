import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css'
import Home from "./Pages/Home";
import News from "./Pages/News";
import About from "./Pages/About";


class App extends Component{
  render() {
    const history = this.props;
    return (
        <div className="App">
          <Switch>
              <Route history={history} path='/home' component={Home} />
              <Route history={history} path='/news' component={News} />
              <Route history={history} path='/about' component={About} />
              <Redirect from="/" to='/home' />
          </Switch>
        </div>
    );
  }


}

export default App;
