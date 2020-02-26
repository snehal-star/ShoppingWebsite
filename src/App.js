import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './assets/css/stylesheet.css';
import './App.css'
import Registration from './components/Registration'
import SignIn from './components/signIn'

//Router 
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Registration} />
        <Route path="/signIn" component={SignIn}/>
      </Router>
    </div>
  );
}

export default App;
