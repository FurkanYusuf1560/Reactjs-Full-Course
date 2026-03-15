import { useDispatch, useSelector } from "react-redux";
import { handleAddTodo, handleInputChange } from "../store/slices/blogSlice";

export default function AddNewBlog() {
  const {blog} = useSelector((state) => state);
  const dispatch = useDispatch() 
   
 

    function onChangeInput(event){
        dispatch(handleInputChange({
            [event.target.name] : event.target.value
        }))
    }

    function handleTodoSubmit(event){
        event.preventDefault();
        dispatch(handleAddTodo())
       
    }



  return (
    <div>
      <form onSubmit={handleTodoSubmit}>
        <div>
          <label>Enter Blog Title: </label>
          <input
            type="text"
            name="title"
            placeholder="Enter Blog Title"
            id="title"
            onChange={onChangeInput}
            value={blog?.formData?.title}
          />
        </div>
        <div>
          <label>Enter Blog Description: </label>
          <input
            type="text"
            name="description"
            placeholder="Enter Blog Description"
            id="description"
            onChange={onChangeInput}
            value={blog?.formData?.description}
          />
        </div>
        <button type="submit">Add new Blog</button>
      </form>
    </div>
  );
}
