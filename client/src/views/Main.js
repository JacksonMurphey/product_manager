import CreateProduct from "../components/CreateProduct";
import AllProducts from "../components/AllProducts";
import { useState } from "react";

const Main = (props) => {

    const [product, setProduct] = useState([])

    const removeProduct = productID => {
        setProduct(product.filter(prod => prod._id != productID))
    }

    return (
        <div>
            <header>
                <h1 style={{ fontSize: "50px", marginLeft: "450px", marginRight: "450px" }}>Product Manager</h1>
            </header>
            <CreateProduct product={product} setProduct={setProduct} />
            <AllProducts product={product} setProduct={setProduct} removeProduct={removeProduct} />
        </div>
    )
}
export default Main;