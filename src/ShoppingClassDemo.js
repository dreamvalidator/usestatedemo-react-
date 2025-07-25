import React from "react";
export default class ShoppingClassDemo extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            categories: [],
            products: []
           

        }
    }

    getCategories(){
        fetch("https://fakestoreapi.com/products/categories")
        .then(response=>response.json())
        .then(data=>{
            data.unshift("All");
            this.setState({categories: data});
            
        })
    }

    getProducts(url){
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            this.setState({products: data});
        })
    }
    componentDidMount(){
        this.getCategories();
        this.getProducts("https://fakestoreapi.com/products");
    }

    handleCategoryChange(e){

        if(e.target.value === 'All'){
            this.getProducts("https://fakestoreapi.com/products");
        }
        else
      this.getProducts("https://fakestoreapi.com/products/category/"+e.target.value)

    }

        render(){
        return(
            <div className="container-fluid">
                <header className="bg-danger text-white text-center">
                    <span className="bi bi-cart">Shopping Cart</span>
                </header>
                <section className="row">
                    <nav className="col-3">
                        <h2>Select Category</h2>
                        <select className="form-select" onChange={this.handleCategoryChange.bind(this)} >
                            
                            {this.state.categories.map(
                                category=>
                                    <option key={category}>{category}</option>
                            )}
                        </select>
                    </nav>
                    <main className="col-9">
                        <div className="d-flex flex-wrap">
                            {this.state.products.map(
                                product=>
                                <div key={product} className="card m-2 p-2" style={{width: '300px'}}>
                                    <img src={product.image} className="card-img-top" style={{height: '150px'}} alt={product.title}  />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">${product.price}</p>
                                        <button className="btn btn-primary">Add to Cart</button>
                                    </div>      
                                </div>
                            )}
                        </div>
                    </main>
                </section>
            </div>
        )
    }
}