import Counter from "./components/counter"
import HelloWorld from "./components/helloWorld"


const App = () => {
  return (
    // npm install -D @babel/preset-env @babel/preset-react jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom @testing-library/user-event
    <div>
     <h1>React Unit Testing Crash Course </h1>
     <HelloWorld/>
     <Counter/>
    </div>
  )
}

export default App
