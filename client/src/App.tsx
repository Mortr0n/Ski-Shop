import { useEffect, useState } from "react";

const productsArray = [
  {
  name: 'Product1',
  price: 100.00,},
  {
  name: 'Product2',
  price: 120.00,},
  {
  name: 'Product3',
  price: 300.00,},

];


function App() {
  const [products, setProducts] = useState(productsArray);

  const addProduct = () => {
    setProducts([...products, {name: "Product4", price: 34} ])
  }


  return (
    <div className="App">
      <h1>Re-Store</h1>
      <ul>
      {
        products.map((product, index) => {
          return(
            <li key={index}>{product.name}:  ${product.price}</li>
          )
        })
      }
      </ul>
      <button onClick={addProduct}>Add A Product</button>
    </div>
  );
}

export default App;
