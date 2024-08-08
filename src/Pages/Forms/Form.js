import React, { useState } from "react";
import axios from "axios";
import Back from "../../Assets/doctor-book-appointment.png";
import { Link } from "react-router-dom";

export default function Form() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/users", values)
      .then((res) => {
        console.log("Data posted successfully:", res.data);
        // Handle redirection or any other action after successful submission
        setTimeout(() => {
          window.location.replace("/"); // Example: Redirect to homepage
        }, 2000); // Delay for 2 seconds
      })
      .catch((err) => {
        console.error("Error posting data:", err);
      });
  };

  return (
    <div className="container-fluid p-0">
      {/* Content for small devices */}
      <div className="d-md-none">
        <div
          style={{
            backgroundImage: `url(${Back})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="container">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <h1 className="text-center mb-4">Login</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control py-4 px-5"
                      placeholder="Enter your name here"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control py-4 px-5"
                      placeholder="Enter your email here"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control py-4 px-5"
                      placeholder="Enter Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block py-3"
                      style={{ fontSize: "18px", fontWeight: "bold" }}
                    >
                      Submit
                    </button>
                    <Link to="/signup">
                      <button
                        type="button"
                        className="btn btn-secondary btn-block py-3"
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        Sign Up
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content for large devices */}
      <div className="container p-3 d-none d-lg-block">
        <div className="row">
          {/* Image column for large devices */}
          <div className="col-lg-4">
            <div
              style={{
                backgroundImage: `url(${Back})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "50vh",
              }}
            />
          </div>
          {/* Form column for large devices */}
          <div className="col-lg-8">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <h1 className="text-center mb-4">Login</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control py-4 px-5"
                      placeholder="Enter your name here"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control py-4 px-5"
                      placeholder="Enter your email here"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control py-4 px-5"
                      placeholder="Enter Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block py-3"
                      style={{ fontSize: "18px", fontWeight: "bold" }}
                    >
                      Submit
                    </button>
                    <Link to="/signup">
                      <button
                        type="button"
                        className="btn btn-secondary btn-block py-3"
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        Sign Up
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
