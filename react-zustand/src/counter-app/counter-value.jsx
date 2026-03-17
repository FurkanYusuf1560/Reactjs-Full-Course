import useCounter from "../store/use-counter"

export default function CounterValue(){

    const count = useCounter((state)=>state.count);

    
    

    return <div>
        Counter value is {count}
    </div>
}