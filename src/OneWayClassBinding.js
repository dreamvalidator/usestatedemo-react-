import React from "react";

export default class OneWayClassBinding extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            title: 'Product-Details',
            Name:'Samsung-Tv',
            Price:40000,
            Stock:false,
            Cities: ['Hyd', 'Delhi', 'Banglore'],
            Rating: {rate:4.5,count: 1200} 
        }
    
    }
    render(){
        return(
            <div className="container-fluid ">
<div className="row">
    <h2>{this.state.title}</h2>
    <div>
        <dt>Name</dt>
        <dd>{this.state.Name}</dd>
        <dt>Price</dt>
        <dd>{this.state.Price}</dd>
        <dt>Stock</dt>
        <dd>{(this.state.Stock==true)?"Available":"Out Of Stock"}</dd>
        <dt>Cities</dt>
        <dd>
            <ol>
                {this.state.Cities.map(city=>
                    <li key={city}>{city}</li>
                )}
            </ol>
        </dd>
        <dt>Rating</dt>
        <dd>
            <span className="bi bi-star-fill text-success" /> {this.state.Rating.rate} [{this.state.Rating.count}]
        </dd>
    </div>

</div>
            </div>
        )
    }
}