import React, {Component} from 'react';
import TaskComp from "./TaskComp";



class PersonComp extends Component
{
  constructor(props)
  {
    super(props)
  }

  

  render()
  {

    var tasksComp = this.props.person.tasks.map((item,index) =>
    {
      return <TaskComp task={item} key={index} />
    })

    return(
     <div>
       Name : {this.props.person.name}
        {tasksComp}
      </div>
    )
  }


}


export default PersonComp;
