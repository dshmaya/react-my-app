import React, {Component} from 'react';



class TaskComp extends Component
{
  constructor(props)
  {
    super(props)
  }

  

  render()
  {
    return(
     <div>
       title  : {this.props.task.title} completed:{this.props.task.completed.toString()}
     </div>
    )
  }


}

export default TaskComp;
