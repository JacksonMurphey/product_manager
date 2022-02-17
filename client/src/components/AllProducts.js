import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllProducts = (props) => {

    // Below line was removed and updated since I lifted state
    // const [productList, setProductList] = useState([])
    const { product, setProduct, removeProduct } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res)
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    // Delete Product function
    const deleteProduct = (productID) => {
        axios.delete(`http://localhost:8000/api/products/${productID}`)
            .then(res => removeProduct(productID))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <hr />
            <h1 style={{ textDecoration: 'underline' }}>All Products</h1>
            {
                product.map((product, index) => (
                    <div key={index} >
                        <div style={{ border: "1px solid blue", margin: "10px 300px", boxShadow: "1px 3px 3px", borderRadius: "10px" }}>

                            <Link to={`/products/${product._id}`}>
                                {product.title}
                            </Link>

                            {/* <li>Price: $ {product.price}</li>
                        <li>Description: {product.description}</li>
                        <hr /> */}

                            <Link to={`/products/update/${product._id}`}><button>Edit</button> </Link>
                            <button style={{ color: "white", backgroundColor: "red" }} onClick={e => { deleteProduct(product._id) }}>Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default AllProducts;