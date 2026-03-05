
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import ContextButtonComponent from './components/context-consept/button';
import ContextTextComponent from './components/context-consept/text';
import FuctionalComponents from './components/functional-components'
import ProductList from './components/products'
import UseReducerExample from './components/use-reducer-example';
import Users from './components/users';

const dummyProductData = ["Product-1", "Product-2", "Product-3"];

function  App() {

  return (
   <div>
    <h1>Reactjs Concepts </h1>
    {/* <ClassBasedComponent/> */}
    {/* <FuctionalComponents/> */}

    {/* <ProductList listOfProducts={dummyProductData} name="furkan" city="ankara" /> */}
    {/* <Users/> */}

    {/* <ContextButtonComponent/>
    <ContextTextComponent/> */}

      <UseReducerExample/>
   </div>
  )
}

export default App
