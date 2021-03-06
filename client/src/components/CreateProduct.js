import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = (props) => {

    //Adding Props-State, passed from Main.js
    const { product, setProduct } = props;

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState('')

    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', { title, price, description })
            .then(res => {
                console.log(res)
                console.log(res.data)

                //Updating my Lifted-State product Array to include the newly created object from my form. 
                // setProduct([...product, res.data])
                // another way to write it below:
                setProduct((prevState) => (
                    [...prevState, res.data]
                ))

                //navigate('/') - would go here if we plan to leave this page on submission, Since we currently are not redirecting, Ill reset state.
                setDescription('')
                setPrice('')
                setTitle('')
                setErrors('')
            })
            .catch(err => {
                console.log(err.response.data.error.errors)
                setErrors(err.response.data.error.errors)
            })
    }

    return (
        <div>
            <form onSubmit={submitHandler} >
                <div>
                    <label >Product Name: </label>
                    {
                        !errors.title
                            ? <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                            : <>
                                <input type="text" value={title} onChange={e => setTitle(e.target.value)} style={{ border: "1px solid red" }} />
                                <p style={{ color: "red" }}>{errors.title.message}</p>
                            </>
                    }
                </div>
                <div>
                    <label >Product Price: </label>
                    {
                        !errors.price
                            ? <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
                            : <>
                                <input type="text" value={price} onChange={e => setPrice(e.target.value)} style={{ border: "1px solid red" }} />
                                <p style={{ color: "red" }}>{errors.price.message}</p>
                            </>
                    }
                </div>
                <div>
                    <label >Product Description: </label>
                    {
                        !errors.description
                            ? <textarea cols='20' rows='5' type="text" value={description} onChange={e => setDescription(e.target.value)} />
                            : <>
                                <textarea cols='20' rows='5' type="text" value={description} onChange={e => setDescription(e.target.value)} style={{ border: "1px solid red" }} />
                                <p style={{ color: "red" }}>{errors.description.message}</p>
                            </>
                    }
                </div>
                <button type="submit">Create Product</button>
            </form>
        </div>
    )
}
export default CreateProduct;