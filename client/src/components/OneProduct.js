import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const OneProduct = (props) => {

    const { id } = props;
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res)
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            <header>
                <h1 style={{ fontSize: "50px", marginLeft: "450px", marginRight: "450px" }}>{product.title}</h1>
                <Link to='/home'><button>Home</button></Link>
            </header>
            <div>
                <p>Price: ${product.price}</p>
                <p>Desription: {product.description}</p>
                <Link to={`/products/update/${id}`}><button>Update/Edit Product</button></Link>
            </div>
        </div>
    )
}
export default OneProduct;