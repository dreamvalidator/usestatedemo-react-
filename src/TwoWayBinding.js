import { useState } from "react";

export default function TwoWayBinding(){
    const [product,setProduct] = useState({Name :'',Price :0, City:'', Stock: false});
   
    function handleName(e){
        setProduct({
            Name:e.target.value,
             Price:product.Price, 
             City:product.City, 
             Stock:product.Stock})}
    

    function handlePrice(e){
        setProduct({
            Name:product.Name,
            Price:e.target.value,
            Cit:product.City,
            Stock:product.Stock
    })}
    

    function handleCity(e){
        setProduct({
            Name: product.Name,
            Price:product.Price,
            City:e.target.value,
            Stock:product.Stock 
    })
        }
        function handleStock(e){
            setProduct({
                Name:product.Name,
                Price:product.Price,
                City:product.City,
                Stock:e.target.checked
        })
        }

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h2>Register Product</h2>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" onChange={handleName} className="form-control" /></dd>
                    <dt>Price</dt>
                    <dd><input type="text" onChange={handlePrice} className="form-control"></input></dd>
                    <dt>City</dt>
                    <dd><select onChange={handleCity} className="form-select">
                        <option>Hyd</option>
                        <option>del</option>
                        </select></dd>
                        <dt>Stock</dt>
                        <dd><input type="checkbox" onChange={handleStock} className="form-check-input"></input>Available</dd>
                </dl>
                </div>
                <div className="col-9">
                    <h2>Your Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{product.Name}</dd>
                        <dt>Price</dt>
                        <dd>{product.Price}</dd>
                        <dt>City</dt>
                        <dd>{product.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(product.Stock)?"Available":"Out of Stock"}</dd>
                    </dl>
                </div>
            </div>

        </div>
    )
}
