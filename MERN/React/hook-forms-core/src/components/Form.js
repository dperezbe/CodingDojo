import React, { useState } from "react";

const Form = (props) => {
  const { inputs, setInputs } = props;
  const { firstName,  lastName, email,password, confirmPassword} = inputs;
  const [error,setError] = useState({
    error_firstName: '',
    error_lastName: '',
    error_email: '',
    error_minpassword: '',
  });

  const {error_firstName,error_lastName,error_email,error_minpassword } = error;

  const onChange = (e) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });

    switch(e.target.name){
      case 'firstName':
        {
          if(e.target.value.length <2){
            setError({...error,error_firstName: "FirstName debe tener más de 2 caracteres"});
          }
          else{
            setError({...error,error_firstName: ""});
          }
          break;
        }
      case 'lastName':
        {
          if(e.target.value.length <2){
            setError({...error,error_lastName: "LastName debe tener más de 2 caracteres"});
          }
          else{
            setError({...error,error_lastName: ""});
          }
          break;
        }
        case 'email':
          {
            if(e.target.value.length <5){
              setError({...error,error_email: "Email debe tener más de 5 caracteres"});
            }
            else{
              setError({...error,error_email: ""});
            }
            break;
          }       
          case 'password':
            {
              if(e.target.value.length <8){
                setError({...error,error_minpassword: "Password debe tener más de 8 caracteres"});
              }
              else{
                setError({...error,error_minpassword: ""});
              }
              break;
            }  
          case 'confirmPassword':
            {
                if(e.target.value.length <8){
                  setError({...error,error_minpassword: "Password debe tener más de 8 caracteres"});
                }
                else{
                  setError({...error,error_minpassword: ""});
                }
                break;
            }       
           
    }
  };
  
  


  return (
    <form>
      <div className="form-group-alert">
        <div className="form-group">
        <label htmlFor="firstName" >
          First Name:
        </label>
        <input type="text" name="firstName" onChange={onChange} />          
        </div>
      {error_firstName &&  <p>{error_firstName}</p>  }
      </div>

      <div className="form-group-alert">
        <div className="form-group">
        <label htmlFor="lastName" >
          Last Name:
        </label>
        <input type="text" name="lastName" onChange={onChange} />
        </div>
        {error_lastName === '' ? null : <p>{error_lastName}</p>  }
      </div>

      <div className="form-group-alert">
        <div className="form-group">
        <label htmlFor="email" >
          Email:
        </label>
        <input type="text" name="email" onChange={onChange} />
        </div>
        {error_email === '' ? null : <p>{error_email}</p>  }
        </div>

      
      <div className="form-group-alert">
        <div className="form-group">
        <label htmlFor="password" >
          Password:
        </label>
        <input type="password" name="password" onChange={onChange} />
        </div>
      </div>

      <div className="form-group-alert">
        <div className="form-group">
        <label htmlFor="confirmPassword" >
          Confirm Password:
        </label>
        <input type="password" name="confirmPassword" onChange={onChange} />
        </div>

        {error_minpassword === '' ? null : <p>{error_minpassword}</p>  }
          {password === confirmPassword ? null: <p>Las contraseñas deben de ser iguales</p> }
      </div>
      
    </form>
  );
};

export default Form;
