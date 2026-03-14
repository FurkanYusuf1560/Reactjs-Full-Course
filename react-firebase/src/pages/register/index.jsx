import { useContext } from "react";
import CommonForm from "../../components/common-form";
import { AuthContext } from "../../context";
import { registerFormControls } from "../../config";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const { registerFormData, setRegisterFormData, registerWithFirebase} =
    useContext(AuthContext);

    const navigate = useNavigate()

  console.log(registerFormData);

  function handleRegisterFormSubmit(event) {
    event.preventDefault();

    registerWithFirebase()
      .then((result) => {
        if(result.user){
            updateProfile(result.user, {
                displayName : registerFormData.name
            }).then(()=>{
              console.log(auth.currentUser.displayName, 'auth.currentUser.displayName');
              
            })
           // navigate('/profile')
        }
      })
      .catch((error) => console.log(error));
  }
  
  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md  ">
      <div className="px-6 py-5">
        <h3>Welcome back</h3>
        <p>Registe page </p>
        <CommonForm
          formControls={registerFormControls}
          formData={registerFormData}
          setFormData={setRegisterFormData}
          onSubmit={handleRegisterFormSubmit}
          buttonText={"Save"}
        />
      </div>
    </div>
  );
}
