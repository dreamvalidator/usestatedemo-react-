import { useState } from "react";

export default function UseStateDemo() {

    const [products,setProducts] = useState(["TV","Mobile","Laptop"]);

    return(
        <div className="container">
            <h1>Products detail</h1>
            <ol>
                {
                    products.map(product=>{
                  return      <li key={product}>{product}</li>
                    })
                }
            </ol>
        </div>

    )
}