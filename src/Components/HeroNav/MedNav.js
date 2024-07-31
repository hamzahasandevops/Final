import React, { useState } from "react";
import "../../Styles/MedNav.css";

export default function MedNav() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleMouseEnter = (index) => setOpenIndex(index);
  const handleMouseLeave = () => setOpenIndex(null);

  const select = {
    fontSize: "20px",
    fontWeight: 500,
    color: "#000",
    height: "54px",
    background: "#f1f4f6",
    outline: "none",
    border: "0",
    width: "20%",
    padding: "15px",
    textTransform: "capitalize",
  };

  return (
    <div className="container mt-1">
      <div className="row">
        {/* Dropdown 1 */}
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-3">
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="btn btn-light dropdown-toggle w-100"
              type="button"
              style={select}
            >
              Category 1
            </button>
            <ul className={`dropdown-menu ${openIndex === 1 ? "show" : ""}`}>
              <li>
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here 1
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Dropdown 2 */}
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-3">
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="btn btn-secondary dropdown-toggle w-100"
              type="button"
              style={select}
            >
              Category 2
            </button>
            <ul className={`dropdown-menu ${openIndex === 2 ? "show" : ""}`}>
              <li>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here 2
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Dropdown 3 */}
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-3">
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="btn btn-success dropdown-toggle w-100"
              type="button"
              style={select}
            >
              Category 3
            </button>
            <ul className={`dropdown-menu ${openIndex === 3 ? "show" : ""}`}>
              <li>
                <a className="dropdown-item" href="#">
                  Action 3
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action 3
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here 3
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Dropdown 4 */}
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-3">
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="btn btn-info dropdown-toggle w-100"
              type="button"
              style={select}
            >
              Category 4
            </button>
            <ul className={`dropdown-menu ${openIndex === 4 ? "show" : ""}`}>
              <li>
                <a className="dropdown-item" href="#">
                  Action 4
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action 4
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here 4
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-3">
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="btn btn-success dropdown-toggle w-100"
              type="button"
              style={select}
            >
              Category 5
            </button>
            <ul className={`dropdown-menu ${openIndex === 5 ? "show" : ""}`}>
              <li>
                <a className="dropdown-item" href="#">
                  Action 3
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action 3
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-3">
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="btn btn-success dropdown-toggle w-100"
              type="button"
              style={select}
            >
              Category 6
            </button>
            <ul className={`dropdown-menu ${openIndex === 6 ? "show" : ""}`}>
              <li>
                <a className="dropdown-item" href="#">
                  Action 3
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action 3
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
