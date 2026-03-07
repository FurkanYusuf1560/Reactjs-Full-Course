import { useState } from "react"
import CommonForm from "../common-form"
import { registerFormElements } from "../../config"

const initialRegisterFormData = {
    name : '',
    email : '',
    password : '',
}

export default function RegisterComponent(){

    const [registerFormData, setRegisterFormData] = useState(initialRegisterFormData)

    function handleRegisterOnSubmit(event){
        event.preventDefault();

        setRegisterFormData(initialRegisterFormData)
    }

    return (
        <div>
            Register Component

            <CommonForm
            formControls={registerFormElements}
            formData={registerFormData}
            setFormData={setRegisterFormData}
            buttonText={'Register'}
            onHandleSubmit={handleRegisterOnSubmit}
            />
        </div>
    )
}