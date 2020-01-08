import React, {Component} from 'react';
import './ChildComp.css';


class ChildComp extends Component
{
  constructor(props)
  {
    super(props)
  }

  sayHello = () =>
  {
    alert('Hello');
  }

  getText = (e) =>
  {
    console.log( e.target.value);
  }

  getCheck = (e) =>
  {
    console.log( e.target.checked);
  }

  render()
  {
    return(
      <div className="myDiv">
          Hello  {this.props.firstName} {this.props.lastName}  <br/>
          <input type="button" value="Click me" onClick={this.sayHello} /><br/>
          <input type="text" onChange={this.getText} /><br/>
          <input type="checkbox" onChange={this.getCheck} /><br/>
      </div>
    )
  }


}


export default ChildComp;
