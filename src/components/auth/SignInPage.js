import React, { useState } from "react";
import FormInput from "../FormInput";
import Icons from "../Icons";
import "../../css/auth.css";
import "../../css/Button.css";

import { Link } from "react-router-dom";

function SignInPage() {
  const [user, setUser] = useState({
    fname: "",
    email: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fname",
      type: "text",
      placeholder: "First name",
      errorMessage: "First name should be at least 3 characters long",
      label: "First name",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },

    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "E-mail",
      errorMessage: "Enter valid e-mail address",
      label: "Email",
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);

  return (
    <>
      <Icons />
      <div className="container form-container">
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="formTitle">
            <h2> Login to continue </h2>
          </div>

          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={user[input.name]}
              onChange={onChange}
            />
          ))}
          <div className="form-cta">
            <p>
              Not a member?
              <Link to="/signuppage" className="sign-up">
                SignUp
              </Link>
            </p>
            <button className="btn">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignInPage;
