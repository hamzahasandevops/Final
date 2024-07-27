import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export default function SignUp() {
  const Navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  //validation
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  //   const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [successMessage, setSuccessMessage] = useState("");
  const [file, setFile] = useState(null); // State for file

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (value.trim() === "") {
          setErrors((prevErrors) => ({
            ...prevErrors,
            name: "Name is required",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Invalid email address",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
        }
        break;

      case "password":
        if (value.length < 6) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            password: "Password must be at least 6 characters long",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
        }
        break;

      case "mobile":
        const mobileRegex = /^[0-9]{10}$/; // Adjust regex for your mobile format
        if (!mobileRegex.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            mobile: "Mobile number must be 10 digits",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, mobile: "" }));
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === "file") {
      setFile(files[0]); // Handle file input
    } else {
      setValues({ ...values, [name]: String(value) }); // Ensure value is a string
      validateField(name, value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate all fields
    validateField("name", values.name);
    validateField("email", values.email);
    validateField("password", values.password);
    validateField("mobile", values.mobile);

    // Check if there are any validation errors
    if (Object.values(errors).some((error) => error !== "")) {
      console.log("Validation errors:", errors);
      return;
    }

    // Create FormData object
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("mobile", values.mobile);
    if (file) {
      formData.append("file", file); // Append the file
    }

    axios
      .post("http://localhost:8000/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      })
      .then((res) => setSuccessMessage("Form submission successfull"))
      .catch((err) => {
        setErrorMessage(
          "An error occurred while submitting the form. Please try again."
        );
      });
    setFile(null); // Clear the file
    setErrorMessage("");
  };

  console.log(values);

  // Inline styles
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
    outline: "none",
    boxShadow: "0 0 0 0.2rem rgba(38, 143, 255, 0.25)",
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  };

  const errorMessageStyle = {
    color: "red",
    fontSize: "16px",
    marginTop: "20px",
    textAlign: "center",
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
    <div style={containerStyle}>
      <h1 style={headingStyle}>Sign Up</h1>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <input
              type="text"
              className="form-control container "
              placeholder="Enter your  name here"
              style={{
                ...formControlStyle,
                ...(errors.name ? formControlFocusStyle : {}),
              }}
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>

          <div style={formGroupStyle}>
            <input
              type="email"
              className="form-control container "
              style={{
                ...formControlStyle,
                ...(errors.email ? formControlFocusStyle : {}),
              }}
              placeholder="Enter your email here"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div style={formGroupStyle}>
            {" "}
            <input
              type="password"
              className="form-control container "
              placeholder="Enter Password"
              name="password"
              style={{
                ...formControlStyle,
                ...(errors.password ? formControlFocusStyle : {}),
              }}
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <div style={formGroupStyle}>
            {" "}
            <input
              type="number"
              className="form-control container "
              onChange={handleChange}
              style={{
                ...formControlStyle,
                ...(errors.password ? formControlFocusStyle : {}),
              }}
              placeholder="Enter your Phone number"
              value={values.mobile}
              name="mobile"
            />
            {errors.mobile && <div className="error">{errors.mobile}</div>}
          </div>
          <div style={formGroupStyle}>
            <input
              type="file"
              style={formControlStyle}
              name="images"
              onChange={handleChange}
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary "
            value="submit"
            style={buttonStyle}
          />
        </form>

        {/* Display the error message */}
        {errorMessage && <div style={errorMessageStyle}>{errorMessage}</div>}
        {successMessage && (
          <div style={successMessageStyle}>{successMessage}</div>
        )}
      </div>
    </div>
  );
}
