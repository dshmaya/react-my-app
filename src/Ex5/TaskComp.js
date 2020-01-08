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
     <div className="task">
       title  : {this.props.task.title} <br/> completed:{this.props.task.completed.toString()}
     </div>
    )
  }


}

export default TaskComp;
