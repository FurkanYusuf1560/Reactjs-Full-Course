import { useState } from "react";

export default function FormComponent() {

    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')

    const [formData, setFormData] = useState({
        name : '',
        email : ''
    })

    function handleInputChange(event){
        console.log(event);
        const {value} = event.target;
        // setNameValue(event.target.value)
        setNameValue(value)
    }

    function handleSubmit(event){
        event.preventDefault(); 
        console.log(nameValue,emailValue);
        
    }

    function handleOnChange(event){
        console.log(event.target.name);
        
        const {name, value} = event.target

        setFormData({
            ...formData,
            [name] : value 
        })
    }

    function handleEmailChange(event){
        const {value} = event.target;
        setEmailValue(value)
    }



  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
        value={formData.name}
        name="name"
        id="name"
        placeholder="Enter your Name"
        onChange={handleOnChange}
      />
      <input
      value={formData.email}
      type="email"
      name="email"
      id="email"
      placeholder="Enter Your Email"
      onChange={handleOnChange}  
      />
      <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}
