import React, {Component} from 'react';




class ChildComp extends Component
{
  constructor(props)
  {
    super(props)
  }

  sendData = () =>
  {
    this.props.callbackToParent("Hello From Child !")
  }

  render()
  {
    return(
     <div>
        <h3>Child Start</h3>
        Name : {this.props.firstName}<br/>
        <input type="button" value="Send Data" onClick={this.sendData} />
        <h3>Child End</h3>
      </div>
    )
  }


}


export default ChildComp;
