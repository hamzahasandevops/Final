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
    background: "#fff",
    outline: "none",
    border: "0",
    width: "20%",
    padding: "15px",
    textTransform: "capitalize",
  };

  return (
    <div className="container mt-1 d-none d-sm-none d-lg-block d-xl-block">
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
              Health Center
            </button>
            <ul
              className={`dropdown-menu ${openIndex === 1 ? "show" : ""}`}
              style={{ marginLeft: "60px" }}
            >
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
              Stomach Care
            </button>
            <ul
              className={`dropdown-menu ${openIndex === 2 ? "show" : ""}`}
              style={{ marginLeft: "60px" }}
            >
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
              Vitamins & Nutrition
            </button>
            <ul
              className={`dropdown-menu ${openIndex === 3 ? "show" : ""}`}
              style={{ marginLeft: "60px" }}
            >
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
              Feminine Care
            </button>
            <ul
              className={`dropdown-menu ${openIndex === 4 ? "show" : ""}`}
              style={{ marginLeft: "60px" }}
            >
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
              Healthy Snacks
            </button>
            <ul
              className={`dropdown-menu ${openIndex === 5 ? "show" : ""}`}
              style={{ marginLeft: "60px" }}
            >
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
              Nutritional
            </button>
            <ul
              className={`dropdown-menu ${openIndex === 6 ? "show" : ""}`}
              style={{ marginLeft: "60px" }}
            >
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
      <div className="row d-flex justify-content-center">
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-3">
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter(7)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="btn btn-success dropdown-toggle w-100"
              type="button"
              style={select}
            >
              Healthy Snacks
            </button>
            <ul
              className={`dropdown-menu ${openIndex === 7 ? "show" : ""}`}
              style={{ marginLeft: "60px" }}
            >
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
            onMouseEnter={() => handleMouseEnter(8)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="btn btn-success dropdown-toggle w-100"
              type="button"
              style={select}
            >
              Healthy Snacks
            </button>
            <ul
              className={`dropdown-menu ${openIndex === 8 ? "show" : ""}`}
              style={{ marginLeft: "60px" }}
            >
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
            onMouseEnter={() => handleMouseEnter(9)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="btn btn-success dropdown-toggle w-100"
              type="button"
              style={select}
            >
              Healthy Snacks
            </button>
            <ul
              className={`dropdown-menu ${openIndex === 9 ? "show" : ""}`}
              style={{ marginLeft: "60px" }}
            >
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
