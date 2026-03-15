import AddNewBlog from "./blog-app/add-new-blog";
import BlogList from "./blog-app/blog-list";
// import CounterButton from "./counter-example/counter-button";
// import CounterValue from "./counter-example/counter-value";


export default function App(){
  return (
    <div>
      <h1>Blog List App</h1>

      <AddNewBlog/>
      <BlogList/>


      {/* <CounterButton/>
      <CounterValue/> */}


    </div>
  )
}
