import ProductItem from "./components/product-item";



function ProductList({name, city, listOfProducts}) {
   
  return (
    <div>
      <h3>ECommerce Project</h3>
      {/* <ProductItem/> */}
      <h4>My name is {name} i am from {city}</h4>
      <ul>
        {listOfProducts.map((item, index) => (
          <ProductItem singlProductItem={item} key={index}/>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
