import { useEffect, useState } from "react"
import classes from './styles.module.css'
import TodoItem from './components/todo-item'
import TodoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material";

function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([])
  const [errorMsg, SetErrorMsg] = useState(null)
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchListOfTodos() {
    try {
      setLoading(true)
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();

      if(result?.todos && result?.todos?.length >0){
        setTodoList(result?.todos)
        setLoading(false)
        SetErrorMsg('')
      } else {
        setTodoList([])
        setLoading(false)
        SetErrorMsg('')
      }

    } catch (e) {
      console.log(e);
      SetErrorMsg("some error occured")
    }
  }

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId){
    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`)
      const details = apiResponse.json();
      
      if(details){
        setTodoDetails(details)
        setOpenDialog(true)
      } else {
        setTodoDetails(null)
        setOpenDialog(false)
      }
      
    } catch (error) {
      console.log(e);      
    }
    
  }

  useEffect(()=>{
    fetchListOfTodos()
  }, [])

  if(loading) return <Skeleton variant="rectagular" width={650} height={650} />

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Simple Todo app using Material UI</h1>
      <div className={classes.todoListWrapper}>
        {
          todoList && todoList.length > 0 ? 
          todoList.map(todoItem=> <TodoItem
            fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
            todo={todoItem}/>) : null 
        }
      </div>
      <TodoDetails
      setOpenDialog={setOpenDialog}
      openDialog={openDialog}
      todoDetails={todoDetails}
      setTodoDetails={setTodoDetails}
      />
    </div>
  )
}

export default App
