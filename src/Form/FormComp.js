import React, {Component} from 'react';
import utils from "../services/UserUtils";


class FormComp extends Component {
    constructor(props) {
        super(props)
        this.state = {name: 'aa', age: 'aa', id: -1, isValidId: true}
    }

    submitData = (e) => {

        e.preventDefault();
        console.log(this.state);
        this.props.callbackToParent(this.state)

    }


    getName = (e) => {
        this.setState({name: e.target.value});
    }
    getAge = (e) => {
        this.setState({age: e.target.value});
    }
    getId = (e) => {
        this.setState({id: e.target.value});
    }

    getUser = () => {

        if (this.state.id >= 0) {

            this.setState({isValidId: true});
            utils.getUsers("https://jsonplaceholder.typicode.com/users/" + this.state.id).then(resp => {
                this.setState({name: resp.data.name});
            }).catch(resp=>{
                this.setState({isValidId: false});
            })

        } else {
            this.setState({isValidId: false});

        }
    }

    render() {
        var errorMsg;
        if (this.state.isValidId == false) {
            errorMsg = <div>The form is invalid !</div>
        } else {
            errorMsg = <div></div>;
        }

        return (
            <div>
                user ID : <input type="text" onChange={this.getId} name="id"/><input type="button" value="Get"
                                                                                     onClick={this.getUser}/><br/>
                {errorMsg}
                <form onSubmit={this.submitData}>
                    Name : <input type="text" onChange={this.getName} name="name" value={this.state.name}/><br/>
                    age : <input type="text" onChange={this.getAge} name="age" value={this.state.age}/><br/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }


}


export default FormComp;