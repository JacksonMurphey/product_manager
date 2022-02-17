import Main from './views/Main';
import OneProduct from './components/OneProduct';
import UpdateProduct from './components/UpdateProduct';
import { Router } from '@reach/router';
import { useState } from 'react';
import './App.css';



function App() {

  // Lifting state from Main to App
  // const [product, setProduct] = useState([])

  // const removeProduct = productID => {
  //   setProduct(product.filter(prod => prod._id != productID))
  // }

  //Oddly, adding 'default' to my Main view, allows for that content to be viewed at localhost:3000 and localhost:3000/home. If I remove the default, then it automatically routes me to localhost:3000/home to start. This may be because I have no other routes setup. 

  return (
    <div className="App">

      <Router>
        <Main path='/home' default />
        <OneProduct path='/products/:id' />
        <UpdateProduct path='/products/update/:id' />
      </Router>

    </div>
  );
}

export default App;
