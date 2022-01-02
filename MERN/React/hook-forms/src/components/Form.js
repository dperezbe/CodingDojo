import React from "react";

const Form = (props) => {
  const { inputs, setInputs } = props;
  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="firstName">
          First Name:
          <input type="text" name="firstName" onChange={onChange} />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="lastName">
          Last Name:
          <input type="text" name="lastName" onChange={onChange} />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email">
          Email:
          <input type="text" name="email" onChange={onChange} />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="firstName">
          Password:
          <input type="text" name="password" onChange={onChange} />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">
          Confirm Password:
          <input type="text" name="confirmPassword" onChange={onChange} />
        </label>
      </div>
    </form>
  );
};

export default Form;
