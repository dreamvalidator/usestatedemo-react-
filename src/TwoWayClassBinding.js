import React from "react";

export default class TwoWayClassBinding extends React.Component{
    constructor(){
        super();
        this.state ={
            Name:'',
            Price: 0,
            Stock:false,
            Cities: []
        }
    }
    handleName(e){
        this.setState({
            Name: e.target.value 
        })
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.handleName.bind(this)} />
                <br></br>
                <p>Hello ! {this.state.Name}</p>
                          </div>
        )
    }
}