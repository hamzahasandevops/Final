import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Back from "../../Assets/doctor-book-appointment.png";

export default function SignUp() {
  const Navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [file, setFile] = useState(null);

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
        const mobileRegex = /^[0-9]{10}$/;
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
      setFile(files[0]);
    } else {
      setValues({ ...values, [name]: value });
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
      formData.append("file", file);
    }

    axios
      .post("http://localhost:8000/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setSuccessMessage("Form submission successful");
        setTimeout(() => {
          Navigate("/"); // Redirect after 2 seconds
        }, 2000);
      })
      .catch((err) => {
        setErrorMessage("An error occurred. Please try again.");
      });

    setFile(null); // Clear the file state
    setErrorMessage(""); // Clear error message
  };

  // Inline styles
  const containerStyle = {
    maxWidth: "1100px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "skyblue",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    position: "relative",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    marginTop: "120px",
  };

  const formGroupStyle = {
    marginBottom: "20px",
  };

  const formControlStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    transition: "box-shadow 0.3s ease-in-out",
    fontFamily: "inherit",
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
    transition: "background-color 0.3s ease-in-out",
    fontFamily: "inherit",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <div style={containerStyle} className="d-flex justify-content-around">
      <div>
        <img src={Back} />
      </div>

      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Sign Up</h1>
        <div style={formGroupStyle}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            style={{
              ...formControlStyle,
              ...(errors.name
                ? { boxShadow: "0 0 0 0.2rem rgba(220, 53, 69, 0.25)" }
                : {}),
            }}
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <div style={errorStyle}>{errors.name}</div>}
        </div>

        <div style={formGroupStyle}>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            style={{
              ...formControlStyle,
              ...(errors.email
                ? { boxShadow: "0 0 0 0.2rem rgba(220, 53, 69, 0.25)" }
                : {}),
            }}
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <div style={errorStyle}>{errors.email}</div>}
        </div>

        <div style={formGroupStyle}>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            style={{
              ...formControlStyle,
              ...(errors.password
                ? { boxShadow: "0 0 0 0.2rem rgba(220, 53, 69, 0.25)" }
                : {}),
            }}
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <div style={errorStyle}>{errors.password}</div>}
        </div>

        <div style={formGroupStyle}>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter your mobile number"
            style={{
              ...formControlStyle,
              ...(errors.mobile
                ? { boxShadow: "0 0 0 0.2rem rgba(220, 53, 69, 0.25)" }
                : {}),
            }}
            name="mobile"
            value={values.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <div style={errorStyle}>{errors.mobile}</div>}
        </div>

        <div style={formGroupStyle}>
          <input
            type="file"
            className="form-control"
            name="file"
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          className="btn btn-primary"
          value="Submit"
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
        />
      </form>

      {/* Display error and success messages */}
      {errorMessage && <div style={errorMessageStyle}>{errorMessage}</div>}
      {successMessage && (
        <div style={successMessageStyle}>{successMessage}</div>
      )}
    </div>
  );
}
