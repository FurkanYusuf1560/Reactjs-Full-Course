
import RecipeList from './pages/recipes'
import CommentsList from './pages/comments'
import {Routes, Route, useNavigate, Link} from 'react-router-dom'
import RecipeDetailsPage from './pages/recipe-details'
import NotFoundPage from './pages/not-found'
import Layout from './components/layout'
import ReactHookFormExample from './pages/reaact-hook-form-example'
import Hooks from './pages/hooks'


function App() {

  const navigate = useNavigate()

  return (
    <div>
      {/* <h1>React Routing, Custom Hooks and More </h1>
      <div>
        <Link to={'/home/recipe-list'}>Alternative way of navigating to Recipe List page</Link>
        <Link to={'/home/comments-list'}>Alternative way of navigating to Comments List page</Link>
      </div>
      <button onClick={()=> navigate('/home/recipe-list')} style={{backgroundColor : 'black', color : 'white', borderRadius : '30px'}}>Navigate to Recipe List page</button>
      <button onClick={()=> navigate('/home/comments-list')} style={{backgroundColor : 'black', color : 'white', borderRadius : '30px'}}>Navigate to Comments List page</button>
       */}
      <Routes>
        <Route path='/home' element={<Layout/>}>
          {/* <Route path='recipe-list' element={<RecipeList/>}/>
          <Route path='comments-list' element={<CommentsList/>}/>
          <Route path='recipe-list/:id' element={<RecipeDetailsPage/>}/> 
          <Route path='react-hook-form' element={<ReactHookFormExample/>}/> */}
          <Route path='hooks' element={<Hooks/>}/>

        </Route>

        
        <Route path='*' element={<NotFoundPage/>}/>
        
      </Routes>
      
      
    </div>
  )
}

export default App
