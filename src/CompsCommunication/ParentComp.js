import React, {Component} from 'react';
import ChildComp from './ChildComp'



class ParentComp extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {dataFromChild : ''}
  }

  getData = (data) =>
  {
    this.setState({dataFromChild : data})
  }

  render()
  {
    return(
     <div>
        <h1>Parent Start</h1>
        {this.state.dataFromChild}
<br/>
        <ChildComp callbackToParent={this.getData}    firstName="Avi" />

        <h1>Parent End</h1>
      </div>
    )
  }


}


export default ParentComp;
