import React, {Component} from 'react';
import './DynamicRender.css'

class DynamicRenderComp extends Component
{
  constructor(props)
  {
    super(props)

    this.state = { isExist : false,
                   isRed : false ,
                    isVisible : true,
                    colors : ['Red','Green','Blue'] ,
                    persons : [{name : 'Avi', age : 23},
                               {name : 'Dana', age : 35}]  }

  }

  changeColor = () =>
  {
    this.setState(current =>
      {
        return {isRed : !current.isRed};
      })
  }

  showHide = () =>
  {
    this.setState(current =>
      {
        return {isVisible : !current.isVisible};
      })
  }

  createDestroy = () =>
  {
    this.setState(current =>
      {
        return {isExist : !current.isExist};
      })
  }

  addColor = () =>
  {
    var colorsArr = this.state.colors;
    colorsArr.push("Yellow")
    this.setState({colors : colorsArr})
  }
      
  render()
  {
     var persons = this.state.persons.map((item,index) =>
     {
     return <li key={index}>{item.name} , {item.age}</li>
     })

     var headers = this.state.colors.map((item,index) =>
     {
      return <h2 key={index}>{item}</h2>
     })


    var className;
    if(this.state.isRed)
    {
      className = "redStyle";
    }
    else
    {
      className = "blueStyle";
    }

    var visibleClass;
    if(this.state.isVisible)
    {
      visibleClass = "visibleStyle";
    }
    else
    {
      visibleClass = "hiddenStyle";
    }

    var divObj;
    if(this.state.isExist)
    {
      divObj = <div>Hello from div</div>
    }


    return(
      <div>
<input type="button" value="Add Color" onClick={this.addColor} /><br/>

<ul>
{persons}
</ul>

{headers}


<input type="button" value="Create/Destroy" onClick={this.createDestroy} /><br/>
{divObj}

<br/>

        <input type="button" value="Show/Hide" onClick={this.showHide} /><br/>

        <h2 className={visibleClass}>Good morning</h2>

        <input type="button" value="Change Color" onClick={this.changeColor} /><br/>
          <h2 className={className}>Hello World</h2>
      </div>
    )
  }


}


export default DynamicRenderComp;
