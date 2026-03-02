
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FuctionalComponents from './components/functional-components'
import ProductList from './components/products'

const dummyProductData = ["Product-1", "Product-2", "Product-3"];

function App() {

  return (
   <div>
    <h1>Reactjs Concepts </h1>
    {/* <ClassBasedComponent/>
    <FuctionalComponents/> */}

    <ProductList listOfProducts={dummyProductData} name="furkan" city="ankara" />
   </div>
  )
}

export default App
