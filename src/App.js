import React, { Component } from "react";
import Main from './components/Main/Main';
import './App.scss';
import { Router} from 'react-router-dom';
import history from './components/History/History';


class App extends Component {
  

  render() {
    return(
      <Router history={history}>
        <div>
          <Main />
        </div>
      </Router>
    )
    
  }
}

export default App;
