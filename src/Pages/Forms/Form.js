import React, { useState } from "react";
import "../../Styles/From.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
export default function Form() {
  const [values, setValues] = useState({
    name: "dfg",
    email: "dfgdfg",
    password: "dfgdg",
  });
  const Navigate = useNavigate();
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:8000/users",
      data: values,
    })
      .then((res) => console.log("ho gva be"))
      .catch((err) => {
        throw err;
      });

    setTimeout(() => {
      Navigate("/");
    }, 2000);
  };

  console.log(values);
  const containerStyle = {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  };

  const formGroupStyle = {
    marginBottom: "15px",
  };

  const formControlStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  };

  const formControlFocusStyle = {
    borderColor: "#007bff",
    outline: "none",
    boxShadow: "0 0 0 0.2rem rgba(38, 143, 255, 0.25)",
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  };

  const successMessageStyle = {
    color: "green",
    fontSize: "16px",
    marginTop: "20px",
    textAlign: "center",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    textAlign: "center",
    textDecoration: "none",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };
  return (
    <div className="border border-3 container d-flex flex-column align-items-center justify-content-center p-5">
      <div className="">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control container "
            placeholder="Enter your  name here"
            name="name"
            onChange={handleChange}
          />

          <input
            type="email"
            className="form-control container "
            placeholder="Enter your email here"
            name="email"
            onChange={handleChange}
          />

          <input
            type="password"
            className="form-control container "
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
          />

          <input
            type="submit"
            className="btn btn-primary "
            value="submit"
            style={{}}
          />
        </form>
      </div>
    </div>
  );
}
