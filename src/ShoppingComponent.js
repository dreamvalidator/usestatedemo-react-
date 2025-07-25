import { useState, useEffect, use } from "react";
export default function ShoppingComponent() {

    const [catagories, setCatagories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCount, setItemCount] = useState(0);

    function GetCartIetemsCount() {
        setItemCount(cartItems.length);
    }

    function loadCatagories() {
        fetch("https://fakestoreapi.com/products/categories")
            .then(response => response.json())
            .then(data => {
                data.unshift("All");
                setCatagories(data);
            })
    }
    function loadProducts(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => { setProducts(data) })
    }
    useEffect(() => {

        loadCatagories();
        loadProducts("https://fakestoreapi.com/products");
    }, [cartItems.length]
    )

    function handleCatagoriesChagne(e) {
        if (e.target.value == 'All') {
            loadProducts("https://fakestoreapi.com/products");
        }
        else {
            loadProducts("https://fakestoreapi.com/products/category/" + e.target.value);
        }
    }

    function handleAddToCart(e) {
        fetch("https://fakestoreapi.com/products/" + e.target.id)
            .then(response => response.json())
            .then(data => {
                //  setCartItems(prev => [...prev, data]);
                //   setItemCount(cartItems.length + 1);
                cartItems.push(data);
                GetCartIetemsCount();
            })
    }

    function handleRemoveItem(e) {
        const idToRemove = parseInt(e.target.id);
        const updatedCart = cartItems.filter(item => item.id !== idToRemove);
        setCartItems(updatedCart);
        setItemCount(updatedCart.length);
    }



    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">Shopping Kart
                <h1><span className="bi bi-cart"></span>Shopping Home</h1>
            </header>
            <section className="row">
                <nav className="col-3">
                    <div>
                        <label>Select a Catagory</label>
                        <div>
                            <select onChange={handleCatagoriesChagne} className="form-select">
                                {catagories.map(catagory => {
                                    return <option key={catagory}>{catagory}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col -6 d-flex flex-wrap overflow-auto" style={{ height: '600px' }}>
                    {products.map(product => {
                        return (
                            <div key={product.id} className="card m-2 w-25 " style={{ width: '200px' }}>
                                <img src={product.image} className="card-img-top" height="150" alt={product.title} />
                                <div className="card-header" style={{ hight: '150px' }}>
                                    <p>{product.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd><span className="bi bi-star-fill text-success"></span>
                                            {product.rating.rate}
                                            <span>{product.rating.count}</span>
                                        </dd>

                                    </dl>

                                </div>
                                <div className="card-footer">
                                    <button id={product.id} className="btn btn-danger w-50" onClick={handleAddToCart}>
                                        <span className="bi bi-cart-4">Add to cart</span>
                                    </button>


                                </div>

                            </div>
                        )
                    })}
                </main>
                <aside className="col-4">
                    <button className="btn btn-danger w-100" >
                        <span className="bi bi-cart-6"></span> Cart Items [{itemsCount}]
                    </button>

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item =>
                                <tr key={item.id}>
                                    <td>
                                        {item.title}
                                    </td>
                                    <td>{item.price}</td>
                                    <td>
                                        <img src={item.image} height="50" width="50" /> </td>
                                    <td>
                                        <button id={item.id} className="btn btn-danger" onClick={handleRemoveItem} >
                                            <span className="bi bi-trash">Remove</span>
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </aside>
            </section>
        </div>

    )
}