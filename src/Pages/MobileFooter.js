import React from "react";
import "../Styles/MobileFooter.css";
import { Link } from "react-router-dom";
export default function MobileFooter() {
  return (
    <div className="icon-bar">
      <Link className="active" to="/">
        <i className="fa fa-home text-success"></i>
        Home
      </Link>
      <Link to="/mobilesearch">
        <i className="fa fa-search text-success"></i>
        Search
      </Link>
      <Link to="mobilecategory">
        <i className="fas fa-th-list text-success"></i>
        Category
      </Link>
      <Link to="#">
        <i className="fa fa-globe text-success"></i>Others
      </Link>
      <Link to="#">
        <i className="fa fa-trash text-success"></i>Account
      </Link>
    </div>
  );
}
