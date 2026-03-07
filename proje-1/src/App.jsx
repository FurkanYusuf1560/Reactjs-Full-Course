
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import ContextButtonComponent from './components/context-consept/button';
import ContextTextComponent from './components/context-consept/text';
import FormComponent from './components/form';
import FuctionalComponents from './components/functional-components'
import LoginComponent from './components/login';
import ProductList from './components/products'
import RegisterComponent from './components/register';
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

      {/* <UseReducerExample/> */}

      {/* <FormComponent/> */}

      <div style={{display : 'flex' , gap : '20px'}}>
        <LoginComponent/>
        <RegisterComponent/>
      </div>

   </div>
  )
}

export default App
