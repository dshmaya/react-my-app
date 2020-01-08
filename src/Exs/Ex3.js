import React, {Component} from 'react';

import './Ex3.css'

class Ex3Comp extends Component
{
  constructor(props)
  {
    super(props)

    this.state = { moreThan5 : false,
                    isRed : false,
                    isGreen : false,
                    isBlue : false,
                  users : [
                    {'name' : 'Dana', 'age' : 23, 'city' : 'TLV'},
                    {'name' : 'Ron', 'age' : 32, 'city' : 'Haifa'},
                    {'name' : 'Gil', 'age' : 18, 'city' : 'Herzelya'}
                  ]}
  }


  getText = (e) =>
  {
    if(e.target.value.length > 5)
    {
      this.setState({moreThan5 : true})
    }
    else
    {
      this.setState({moreThan5 : false})

    }
  }

  setRed = (e) =>
  {
    this.setState({isRed : e.target.checked})
  }

  setGreen = (e) =>
  {
    this.setState({isGreen : e.target.checked})
  }

  setBlue = (e) =>
  {
    this.setState({isBlue : e.target.checked})
  }
  
  render()
  {

    var className;
    if(this.state.moreThan5 == true)
    {
      className = "redText";
    }
    else
    {
      className = "blueText";

    }

    var red;
    if(this.state.isRed)
    {
      red = <li>Red</li>
    }
    var green;
    if(this.state.isGreen)
    {
      green = <li>GReen</li>
    }
    var blue;
    if(this.state.isBlue)
    {
      blue = <li>Blue</li>
    }

    var users = this.state.users.map((item,index) =>
    {
      return <tr key={index}>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.city}</td>
      </tr>
    });

    var users2 = this.state.users.map((item,index) =>
    {
      return <li key={index}>
          {item.name}
          <ul>
            <li>{item.age}</li>
            <li>{item.city}</li>
          </ul>
      </li>
    });

    return(
      <div>

        <ul>
        {users2}
        </ul>

        <table border="1">
          {users}
        </table>

        <input className={className} type="text" onChange={this.getText} />
        <br/>

        Red<input type="checkbox" onChange={this.setRed} /><br/>
        Green<input type="checkbox" onChange={this.setGreen} /><br/>
        Blue<input type="checkbox" onChange={this.setBlue} /><br/>
        <ul>
        {red}
        {green}
        {blue}
        </ul>
      </div>
    )
  }


}


export default Ex3Comp;
