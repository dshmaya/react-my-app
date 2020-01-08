import React, {Component} from 'react';


class StateDemoComp extends Component
{
  constructor(props)
  {
    super(props)

    this.state = { total : 0, current : 0  , txt1 : '' , txt2 : ''}
  }


  getNum = (e) =>
  {
    this.setState({ current :  parseInt(e.target.value) });
    
  }

  getText1 = (e) =>
  {
    this.setState({ txt1 :  e.target.value });
    
  }

  getText2 = (e) =>
  {
    this.setState({ txt2 :  e.target.value });
    
  }

  add = () =>
  {
      this.setState((currentState) =>
      {
        return { total : currentState.total + currentState.current }
      })
  }

  swap = () =>
  {
    var temp = this.state.txt2;
    this.setState((currentState) =>
    {
      return {txt2 : currentState.txt1 , txt1 : temp}
    })
  }

  render()
  {
    return(
      <div>
          <input type="button" value="Swap" onClick={this.swap} /><br/>

          <input type="text" onChange={this.getText1} /><br/>
          <input type="text" onChange={this.getText2} /><br/>

    <div>{this.state.txt1}</div>
    <div>{this.state.txt2}</div>
        <br/>
        Number :<input type="text" onChange={this.getNum} /><br/>
        <input type="button" value="Add" onClick={this.add} /><br/>
        Total : {this.state.total}
      </div>
    )
  }


}


export default StateDemoComp;
