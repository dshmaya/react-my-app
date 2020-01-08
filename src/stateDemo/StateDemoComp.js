import React, {Component} from 'react';


class StateDemoComp extends Component
{
  constructor(props)
  {
    super(props)

    this.state = { name : "Avi" , age : 23 , phones : [], counter : 0 }
  }

  changeName1 = () =>
  {
    this.setState((currentState) =>
    {
      return {name : "Dana" , counter : currentState.counter + 1}
    } ,  () =>     console.log(this.state.name)   )
  }

  changeName2 = async () =>
  {
    debugger;
    await this.setState({name : "Dana"})
    console.log(this.state.name);
  }

  getName = (e) =>
  {
    this.setState({ name :  e.target.value });
    
  }

  render()
  {
    return(
      <div>
        Name :<input type="text" onChange={this.getName} /><br/>
        <input type="button" value="Change Name 1" onClick={this.changeName1} /><br/>
        <input type="button" value="Change Name 2" onClick={this.changeName2} /><br/>

         Name : {this.state.name} <br/>
         Age : {this.state.age} <br/>
      </div>
    )
  }


}


export default StateDemoComp;
