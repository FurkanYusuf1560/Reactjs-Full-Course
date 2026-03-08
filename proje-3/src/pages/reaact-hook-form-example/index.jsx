import { useForm } from "react-hook-form";

export default function ReactHookFormExample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  function onSubmitForm(formData){
    reset()
  }

  return (
    <div>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmitForm)}> 
        <div>
          <label>Email</label>
          <input {...register('email', {
            required: true
          })} type="email" name="email" />
          {
            errors.email && errors.email.type === 'required' ? 
            <p style={{color : 'red', fontWeight : 'bolder', margin: '20px'}}>Email is required</p> : null 

          }
        </div>
        <div>
          <label>Password</label>
          <input {...register('password', {
            required: true,
            minLength: 8
          })} type="password" name="password" />
          {
            errors.password && errors.password.type === 'required' ?
                        <p style={{color : 'red', fontWeight : 'bolder', margin: '20px'}}>Password is required</p> : null 
          }
          {
            errors.password && errors.password.type === 'minLength' ? 
                <p style={{color : 'red', fontWeight : 'bolder', margin: '20px'}}>Password should be at least 8 characters</p> : null 
          }
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
