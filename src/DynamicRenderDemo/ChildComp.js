import React, {Component} from 'react';



class ChildComp extends Component
{
  constructor(props)
  {
    super(props)
  }

  

  render()
  {
    return(
     <div>
        <h2>Name Component - Child Start</h2>
       
       Name  : {this.props.username}
        <h2>Name Component - Child End</h2>
      </div>
    )
  }


}


export default ChildComp;
