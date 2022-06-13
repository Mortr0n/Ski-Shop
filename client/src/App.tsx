import axios from "axios";
import { useEffect, useState } from "react";
import './product';


function App() {
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    //TODO: Lookie at prevState which takes in the Previous state of hook.
    setProducts(prevState => [...prevState, {name: `Product ${prevState.length + 1}`, price: prevState.length * 100 / 34  } ])
  }

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((res) => {
        console.log("Products Get", res.data)
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("Products Get Error")
      })
  }, [])


  return (
    <div className="App">
      <h1>Re-Store</h1>
      <ul>
      {
        products.map((product, index) => {
          return(
            <li key={index}>{product.name}:  ${product.price.toFixed(2)}</li>
          )
        })
      }
      </ul>
      <button onClick={addProduct}>Add A Product</button>
    </div>
  );
}

export default App;
