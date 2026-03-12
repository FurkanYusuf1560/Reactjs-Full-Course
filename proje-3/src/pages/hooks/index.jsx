import { useEffect, useRef } from "react"

export default function Hooks(){

    const countValue = useRef(0);
    const divElementRef = useRef();
    const inputRefElement = useRef()

    function handleClick(){
        countValue.current++
    }

    useEffect(()=>{

        const getDivReference = divElementRef.current
        inputRefElement.current.focus()

        getDivReference.style.color = "red"

        setTimeout(()=>{
            getDivReference.style.color = "green";

            setTimeout(()=>{
            getDivReference.style.color = "blue";
        }, 2000)

        }, 1000)

    }, [])

    return (
        <div>
            <h1>Use ref, use callback and use memo hook</h1>
            <button onClick={handleClick}>Click me</button>
            <div ref={divElementRef}>Some rondom text</div>
            <input name="name" placeholder="Enter Your name"  ref={inputRefElement}/>
        </div>
    )
}