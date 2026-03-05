import { useContext } from "react"
import { GlobalContext } from "../../context"


export default function ContextButtonComponent(){

    const {handleChangeThemeOnButtonClick} = useContext(GlobalContext)

    return <button onClick={handleChangeThemeOnButtonClick} >Change Theme</button>
} 