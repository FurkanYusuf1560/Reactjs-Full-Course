import {useDispatch} from 'react-redux'
import { handleIncreaseCountAction } from '../store/slices/counter';

export default function CounterButton() {
  
    const dispatch = useDispatch()

    function handleClick(){
        dispatch(handleIncreaseCountAction({
            id : 1,
            name: "furkan",
        }))
    }

    return (
    <button
    onClick={handleClick}
      style={{ backgroundColor: "black", color: "white", fontWeight: "bold" }}
    >
      Increase Count
    </button>
  );
}
