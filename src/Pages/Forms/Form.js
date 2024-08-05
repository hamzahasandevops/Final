import React, { useState } from "react";
import axios from "axios";
import Back from "../../Assets/doctor-book-appointment.png";
import { Navigate } from "react-router-dom";

export default function Form() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/users", values)
      .then((res) => {
        console.log("ho gva be", res.data);
        setTimeout(() => {
          Navigate("/");
        }, 2000);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div
      style={{
        display: "flex",
        height: "600px",
        width: "1170px",
        margin: "auto",
        marginTop: "120px",
        backgroundColor: "skyblue",

        borderRadius: "8px",
        overflow: "hidden", // Ensure rounded corners clip background image properly
      }}
    >
      <div
        style={{
          flex: "1",
          background: `url(${Back})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Login
        </h1>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            padding: "50px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name here"
                name="name"
                value={values.name}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email here"
                name="email"
                value={values.email}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <input
              type="submit"
              className="btn btn-primary"
              value="Submit"
              style={buttonStyle}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

// Styles
const inputStyle = {
  width: "100%",
  padding: "12px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
};

const buttonStyle = {
  display: "inline-block",
  padding: "12px 24px",
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
