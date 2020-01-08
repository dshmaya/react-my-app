import React, {Component} from 'react';
import ChildComp from './ChildComp'
import PersonComp from "./PersonComp";



class PersonListComp extends Component
{
  constructor(props)
  {
    super(props)
    this.state = { persons : [{name:'Avi',tasks:[{title: 'task a',completed:true},{title: 'task b',completed:true},{title: 'task c',completed:true}]},
        {name:'Gil',tasks:[{title: 'task a1',completed:false},{title: 'task b1',completed:true},{title: 'task c1',completed:true}]},
        {name:'Dana',tasks:[{title: 'task a2',completed:true},{title: 'task b2',completed:true},{title: 'task c2',completed:true}]}]}
  }

  

  render()
  {

    var personComps = this.state.persons.map((item,index) =>
    {
      return <PersonComp person={item} key={index} />
    })

    return(
     <div>
        <br/>
        {personComps}
      </div>
    )
  }


}


export default PersonListComp;
