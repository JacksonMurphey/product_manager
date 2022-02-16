import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllProducts = (props) => {

    // Below line was removed and updated since I lifted state
    // const [productList, setProductList] = useState([])
    const { product, setProduct } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res)
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <hr />
            <h1 style={{ textDecoration: 'underline' }}>All Products</h1>
            {
                product.map((product, index) => (
                    <ul key={index}>

                        <Link to={`/products/${product._id}`}>
                            <li>{product.title}</li>
                        </Link>
                        {/* <li>Price: $ {product.price}</li>
                        <li>Description: {product.description}</li>
                        <hr /> */}
                    </ul>
                ))
            }
        </div>
    )
}
export default AllProducts;