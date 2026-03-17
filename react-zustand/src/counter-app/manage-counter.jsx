import  { useActions } from "../store/use-counter";

export default function ManageCounter() {
  
  const {handleIncrementCount, handleDecreaseCount} = useActions()

 

  return (
    <div>
     <button
      style={{
        marginBottom: "20px",
        background: "black",
        color: "white",
        fontSize: "18px",
        fontWeight: "bolder",
      }}
      onClick={handleIncrementCount}
    >
      Handle Counter Value
    </button>   

     <button
      style={{
        marginBottom: "20px",
        background: "black",
        color: "white",
        fontSize: "18px",
        fontWeight: "bolder",
      }}
      onClick={handleDecreaseCount}
    >
      Handle Decrease Value
    </button> 
    </div>
    
  );
}
