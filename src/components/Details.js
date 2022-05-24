import React, { useState } from "react";
import FormInput from "./FormInput";
import Icons from "./Icons";
import "../css/Details.css";
import NextButton from "../buttons/NextButton";

function Details() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    company: "",
    position: "",
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
      errorMessage: "Enter Valid position in the company",
      label: "Position",
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
            <h2> Food Industry Sustainability Index</h2>
            <p>Please fill the form below</p>
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
            <a href="/">Continue from last saved ? </a>
            <NextButton />
          </div>
        </form>
      </div>
    </>
  );
}

export default Details;
