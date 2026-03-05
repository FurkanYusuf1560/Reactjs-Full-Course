import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import './style.css'

const initialState = true;

function ProductList({name, city, listOfProducts}) {
   
  const [flag, setFlag] = useState(initialState)
  const [count, setCount] = useState(0);  
  const [changeStyle, setChangeStyle] = useState(false);

  const handleToggleText = () => {
    setFlag(!flag)
  }

  function handleIncreaseCount(){
    setCount(count+5)
  }

  function handleDecreaseCount(){
    setCount(count-5)
  }

  useEffect(()=>{
    setFlag(!flag)
    
    return ()=>{
      console.log("component unmounted");
      
    }
  }, [])

  useEffect(()=>{
    if(count === 10) setChangeStyle(true)
  }, [count])

  return (
    <div>
      <h3 className="title">ECommerce Project</h3>
      <button onClick={handleToggleText}>Toogle Text </button>
      {/* <ProductItem/> */}

       {
          flag ? <h4>{name} and {city}</h4> : <h1>hello</h1>
       }

       <div>
        <button style={{backgroundColor : changeStyle ? 'black' : 'red', color : changeStyle ? 'white' : 'blue'}} onClick={handleIncreaseCount}>Increase Count</button> 
        <button onClick={handleDecreaseCount}>Decrease Count</button> 

        <p>Count is {count}</p>
       </div>
      
      <ul>
        {listOfProducts.map((item, index) => (
          <ProductItem singlProductItem={item} key={index}/>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
