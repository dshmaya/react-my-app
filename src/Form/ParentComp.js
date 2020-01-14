import React, {Component} from 'react';
import FormComp from "./FormComp";


class ParentComp extends Component {
    constructor(props) {
        super(props);

        this.state = {dataFromChild: []}
    }

    getData = (data) =>
    {
        let list = this.state.dataFromChild
        list.push(data)
        this.setState({dataFromChild : list})
    }


    render() {
        var list = this.state.dataFromChild.map((item,index)=>
        {
            return <li key={index}>{item.name} , {item.age}</li>
        })
        return (
            <div>
                <ul>{list}</ul>
                <FormComp callbackToParent={this.getData}/>
            </div>
        )
    }


}


export default ParentComp;
