import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

//TEMP: I have comments out my errors state. Having a little trouble getting it working.

const UpdateProduct = (props) => {

    const { id } = props

    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    // const [errors, setErrors] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => {
                console.log(err.response.data.error.errors)
            })
    }, [])

    const updateHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, { title, price, description })
            .then(res => {
                console.log(res)
                navigate('/home')
            })
            .catch(err => {
                console.log(err.response.data.error.errors)
                // setErrors(err.response.data.error.errors)
            })
    }

    return (
        <div>
            <form onSubmit={updateHandler} >
                <div>
                    <label >Product Name: </label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    {/* <>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} style={{ border: "1px solid red" }} />
                        <p style={{ color: "red" }}>{errors.title.message}</p>
                    </> */}

                </div>
                <div>
                    <label >Product Price: </label>
                    <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
                    {/* <>
                                <input type="text" value={price} onChange={e => setPrice(e.target.value)} style={{ border: "1px solid red" }} />
                                <p style={{ color: "red" }}>{errors.price.message}</p>
                            </> */}

                </div>
                <div>
                    <label >Product Description: </label>
                    <textarea cols='20' rows='5' type="text" value={description} onChange={e => setDescription(e.target.value)} />
                    {/* <>
                                <textarea cols='20' rows='5' type="text" value={description} onChange={e => setDescription(e.target.value)} style={{ border: "1px solid red" }} />
                                <p style={{ color: "red" }}>{errors.description.message}</p>
                            </> */}

                </div>
                <button type="submit">Update Product</button>
            </form>
        </div>
    )
}
export default UpdateProduct;