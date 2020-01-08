import React, {Component} from 'react';
import ChildComp from './ChildComp';
import StateDemoComp from './stateDemo/StateDemoComp';
//import ParentComp from './CompsCommunication/ParentComp';
import DynamicRenderComp from './DynamicRenderDemo/DynamicRenderComp';
import ParentComp from './DynamicRenderDemo/ParentComp';

import Ex2 from './Exs/Ex2';
import Ex3Comp from './Exs/Ex3';



import './App.css';
import PersonListComp from "./DynamicRenderDemo/PersonListComp";


class App extends Component
{
  constructor(props)
  {
    super(props)
  }

  render()
  {
    return(
     <div>
        <PersonListComp />
      </div>
    )
  }


}


export default App;
