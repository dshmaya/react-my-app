import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import './App.css';



export  class App extends Component {
  render() {
    return (
      <div>
     
   <h1>Welcome to our SPA !</h1>
     
      <nav>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>



    </div>
    )
  }
}


export default App;
