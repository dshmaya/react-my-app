import React, {Component} from 'react';
import ChildComp from './ChildComp'



class ParentComp extends Component
{
  constructor(props)
  {
    super(props)
    this.state = { names : ['Avi','Gil','Dana']}
  }

  

  render()
  {

    var namesComps = this.state.names.map((item,index) =>
    {
      return <ChildComp username={item} key={index} />
    })

    return(
     <div>
        <h1>Parent Start</h1>

        {namesComps}

        <h1>Parent End</h1>
      </div>
    )
  }


}


export default ParentComp;
