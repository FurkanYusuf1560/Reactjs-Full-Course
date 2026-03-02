import ProductItem from "./components/product-item";
import './style.css'


function ProductList({name, city, listOfProducts}) {
   
  const flag = false;

  // function renderTextBlock(getFlag){

  //   return getFlag ? <h4>My name is {name} i am from {city}</h4>   : <h2>Hello world</h2> 

  // }

  let renderTextBlock = null

  if(flag){
    renderTextBlock = <h4>My name is {name} i am from {city}</h4> 
  } else{
    renderTextBlock = <h2>Hello world</h2>  
  }

  return (
    <div>
      <h3 className="title">ECommerce Project</h3>
      {/* <ProductItem/> */}

       {renderTextBlock} 
      
      <ul>
        {listOfProducts.map((item, index) => (
          <ProductItem singlProductItem={item} key={index}/>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
