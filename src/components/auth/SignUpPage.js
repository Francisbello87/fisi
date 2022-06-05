import React, { useState } from "react";
import FormInput from "../FormInput";
import Icons from "../Icons";
import "../../css/auth.css";
import "../../css/Button.css";
import { Link } from "react-router-dom";

function SignUpPage() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    company: "",
    position: "",
    sector: "",
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
      name: "lname",
      type: "text",
      placeholder: "Last name",
      errorMessage: "Last name should be at least 3 characters long",
      label: "Last name",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "E-mail",
      errorMessage: "Enter valid e-mail address",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "company",
      type: "text",
      placeholder: "Company",
      errorMessage: "Input field can't be empty",
      label: "Company",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: 5,
      name: "position",
      type: "text",
      placeholder: "Position",
      errorMessage: "Input field can't be empty",
      label: "Position",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: 6,
      name: "sector",
      type: "text",
      placeholder: "Sector",
      errorMessage: "Input field can't be empty",
      label: "Sector",
      pattern: "^[A-Za-z]{3,16}$",
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
            <h2> Sign Up </h2>
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
              Already a member?
              <Link to="/signinpage" className="sign-up">
                Login
              </Link>
              instead
            </p>
            <button className="btn">Sign up</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpPage;
